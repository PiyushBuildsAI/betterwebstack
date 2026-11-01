import type { LeadValues } from "@/lib/validations/lead";

export type LeadPayload = Omit<LeadValues, "company"> & { company?: string };

export type LeadResult =
  | { ok: true }
  | { ok: false; message: string };

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  try {
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return { ok: true };
    }

    const data = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    return {
      ok: false,
      message:
        data?.message ??
        "We could not send that just now. Please WhatsApp us instead — it is faster.",
    };
  } catch {
    return {
      ok: false,
      message:
        "You look offline. Please check your connection or WhatsApp us directly.",
    };
  }
}
