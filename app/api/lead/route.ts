import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { leadSchema } from "@/lib/validations/lead";

const WEBHOOK_URL = process.env.WEBHOOK_URL || "";

/**
 * Very small in-memory rate limiter. Good enough to stop casual form spam on a
 * single instance; pair it with the honeypot field for the real protection.
 */
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 6;

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Too many submissions. Please WhatsApp us instead." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  let lead;
  try {
    lead = leadSchema.parse(body);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the highlighted fields and try again.",
          issues: error.issues.map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Invalid submission." },
      { status: 400 }
    );
  }

  // Honeypot tripped — pretend success so bots do not retry.
  if (lead.company) {
    return NextResponse.json({ success: true });
  }

  if (!WEBHOOK_URL) {
    console.error("Lead form: WEBHOOK_URL is not configured.");
    return NextResponse.json(
      {
        success: false,
        message:
          "Our form inbox is not connected right now. Please WhatsApp or call us and we will pick it up straight away.",
      },
      { status: 503 }
    );
  }

  const fields: Record<string, unknown> = { ...lead };
  delete fields.company;

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "lead",
        submittedAt: new Date().toISOString(),
        ...fields,
      }),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission failed:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "We could not save that just now. Please WhatsApp us and we will reply within the hour.",
      },
      { status: 502 }
    );
  }
}
