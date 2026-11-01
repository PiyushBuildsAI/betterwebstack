"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2, MessageCircle } from "lucide-react";
import { Cactus, Sparkle, SunBurst } from "@/components/brand/Botanical";
import { submitLead } from "@/lib/lead-client";
import { isValidPhone } from "@/lib/validations/lead";
import { BUDGETS, BUSINESS_TYPES, SITE, TIMELINES } from "@/lib/site";
import { cn } from "@/lib/utils";

const NEEDS = [
  "A new business website",
  "An online store",
  "A landing page for ads",
  "AI chat + automation",
  "A redesign of my current site",
];

const STEPS = [
  { key: "need", question: "What do you need built?", hint: "Pick the closest one — we will refine it on the call." },
  { key: "business", question: "What kind of business?", hint: "This changes the structure and the proof we show." },
  { key: "budget", question: "What is your budget range?", hint: "A straight answer gets you a straight recommendation." },
  { key: "timeline", question: "When do you want to launch?", hint: "We take on a limited number of builds each month." },
  { key: "contact", question: "Where should we send the plan?", hint: "One message from a human. No drip emails." },
] as const;

export function Planner() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const current = STEPS[step];
  const progress = ((step + (status === "done" ? 1 : 0)) / STEPS.length) * 100;

  function choose(value: string) {
    setAnswers((prev) => ({ ...prev, [current.key]: value }));
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1);
    }
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    if (name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!isValidPhone(phone)) {
      setError("Enter a valid phone number.");
      return;
    }

    setStatus("loading");
    const result = await submitLead({
      name: name.trim(),
      phone: phone.trim(),
      email: "",
      website: website.trim(),
      businessType: answers.business ?? "",
      budget: answers.budget ?? "",
      timeline: answers.timeline ?? "",
      goal: answers.need ?? "",
      message: "",
      source: "project-planner",
      meta: { ...answers },
    });

    if (result.ok) {
      setStatus("done");
    } else {
      setStatus("idle");
      setError(result.message);
    }
  }

  const options =
    current.key === "need"
      ? NEEDS
      : current.key === "business"
        ? BUSINESS_TYPES
        : current.key === "budget"
          ? BUDGETS
          : TIMELINES;

  return (
    <section id="planner" className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="stamp overflow-hidden rounded-[40px] border border-ink bg-parchment">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            {/* Editorial panel */}
            <div className="relative overflow-hidden bg-ink p-7 text-paper sm:p-9">
              <div className="pointer-events-none absolute inset-0 forest-lines opacity-70" />
              <div className="pointer-events-none absolute -bottom-14 -right-16 h-[330px] w-[230px] text-paper/[0.1]">
                <Cactus />
              </div>
              <SunBurst className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 text-marigold/20" />
              <Sparkle className="pointer-events-none absolute right-10 top-10 h-3.5 w-3.5 text-marigold/60" />

              <div className="relative">
                <span className="eyebrow text-marigold">06 — Project planner</span>
                <h2 className="display mt-5 max-w-[14ch] text-[36px] uppercase leading-[0.92] text-paper sm:text-[44px]">
                  Let&apos;s find the right solution for you.
                </h2>
                <p className="mt-4 max-w-[32ch] text-[13px] font-medium leading-relaxed text-paper/65">
                  Four questions. No sales pressure. You get a clear recommendation, a page plan and
                  a fixed quote range.
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-paper/20 pt-5">
                  {[
                    "A page-by-page plan for your business",
                    "Fixed quote range, not a vague estimate",
                    "The first three things we would fix",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[12px] font-medium text-paper/75"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-marigold text-ink">
                        <Check className="h-2.5 w-2.5" strokeWidth={4} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3 rounded-[20px] border border-paper/20 bg-paper/[0.06] p-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-marigold text-ink">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <p className="text-[11px] font-medium leading-snug text-paper/70">
                    Prefer to talk?{" "}
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-paper underline decoration-paper/35 underline-offset-2"
                    >
                      WhatsApp us
                    </a>{" "}
                    — usually a 2-hour reply.
                  </p>
                </div>
              </div>
            </div>

            {/* Quiz */}
            <div className="relative flex min-h-[520px] flex-col p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full border border-ink/20 bg-parchment">
                  <div
                    className="h-full rounded-full bg-marigold transition-all duration-500"
                    style={{ width: `${Math.max(progress, 6)}%` }}
                  />
                </div>
                <span className="font-mono text-[9.5px] tracking-[0.12em] text-ink/45">
                  {String(Math.min(step + 1, STEPS.length)).padStart(2, "0")} /{" "}
                  {String(STEPS.length).padStart(2, "0")}
                </span>
              </div>

              {status === "done" ? (
                <div className="flex flex-1 flex-col items-start justify-center py-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink bg-marigold text-ink">
                    <Check className="h-5 w-5" strokeWidth={3} />
                  </span>
                  <h3 className="mt-5 max-w-[16ch] text-[30px] font-semibold uppercase leading-[0.98] tracking-[-0.01em]">
                    That is everything, {name.split(" ")[0]}.
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-[13.5px] font-medium leading-relaxed text-ink/60">
                    We will put together a page plan and a fixed quote range for{" "}
                    <span className="font-bold text-ink">{answers.need?.toLowerCase()}</span> and
                    send it to {phone} on WhatsApp within one working day.
                  </p>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ink mt-6"
                  >
                    <MessageCircle className="h-4 w-4 text-marigold" /> Talk sooner on WhatsApp
                  </a>
                </div>
              ) : (
                <>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={current.key}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="flex-1"
                    >
                      <p className="mt-7 font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/40">
                        Step {step + 1}
                      </p>
                      <h3 className="mt-2 text-[26px] font-semibold uppercase leading-[1] tracking-[-0.01em] sm:text-[32px]">
                        {current.question}
                      </h3>
                      <p className="mt-2 text-[12.5px] font-medium text-ink/55">{current.hint}</p>

                      {current.key === "contact" ? (
                        <form onSubmit={submit} className="mt-6 space-y-3">
                          <div className="grid gap-3 sm:grid-cols-2">
                            <div>
                              <label
                                htmlFor="planner-name"
                                className="mb-1.5 block text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink/60"
                              >
                                Your name
                              </label>
                              <input
                                id="planner-name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                className="field"
                                placeholder="Rohit Sharma"
                                autoComplete="name"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="planner-phone"
                                className="mb-1.5 block text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink/60"
                              >
                                WhatsApp number
                              </label>
                              <input
                                id="planner-phone"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                                className="field"
                                placeholder="+91 98765 43210"
                                inputMode="tel"
                                autoComplete="tel"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="planner-website"
                              className="mb-1.5 block text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink/60"
                            >
                              Current website{" "}
                              <span className="normal-case tracking-normal text-ink/40">
                                (optional)
                              </span>
                            </label>
                            <input
                              id="planner-website"
                              value={website}
                              onChange={(event) => setWebsite(event.target.value)}
                              className="field"
                              placeholder="yourbusiness.com"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={status === "loading"}
                            className="group flex w-full items-center justify-between rounded-full border border-ink bg-ink px-5 py-3.5 text-[13px] font-bold text-parchment transition hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
                          >
                            {status === "loading" ? (
                              <span className="flex items-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                              </span>
                            ) : (
                              "Send me my plan"
                            )}
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-marigold text-ink">
                              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                            </span>
                          </button>
                          {error && (
                            <p role="alert" className="text-[11px] font-semibold text-ink">
                              {error}
                            </p>
                          )}
                          <p className="text-[10.5px] text-ink/45">
                            We will only use this to reply about your project.
                          </p>
                        </form>
                      ) : (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {options.map((option) => {
                            const selected = answers[current.key] === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => choose(option)}
                                className={cn(
                                  "flex w-full items-center gap-2 rounded-full border px-4 py-2.5 text-left text-[12.5px] font-semibold transition-all duration-200 sm:w-auto",
                                  selected
                                    ? "border-ink bg-ink text-parchment"
                                    : "border-ink/25 bg-cream/50 text-ink/70 hover:-translate-y-0.5 hover:border-ink/50 hover:bg-cream hover:text-ink"
                                )}
                              >
                                <span
                                  className={cn(
                                    "flex h-3.5 w-3.5 items-center justify-center rounded-full border",
                                    selected
                                      ? "border-marigold bg-marigold text-ink"
                                      : "border-ink/30"
                                  )}
                                >
                                  {selected && <Check className="h-2 w-2" strokeWidth={4} />}
                                </span>
                                {option}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      <div className="mt-6 rounded-[24px] border border-ink/20 bg-cream/45 p-3.5">
                        <p className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-ink/40">
                          Your plan so far
                        </p>
                        <div className="mt-2 grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
                          {STEPS.slice(0, 4).map((item) => (
                            <div
                              key={item.key}
                              className="flex items-baseline justify-between gap-2 border-b border-ink/10 pb-1 last:border-0"
                            >
                              <span className="shrink-0 text-[10.5px] font-semibold text-ink/45">
                                {item.key === "need"
                                  ? "Build"
                                  : item.key === "business"
                                    ? "Business"
                                    : item.key === "budget"
                                      ? "Budget"
                                      : "Launch"}
                              </span>
                              <span
                                className={cn(
                                  "truncate text-right text-[10.5px]",
                                  answers[item.key]
                                    ? "font-bold text-ink"
                                    : "text-ink/25"
                                )}
                              >
                                {answers[item.key] ?? "—"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-auto flex items-center justify-between border-t border-ink/15 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep((s) => Math.max(0, s - 1))}
                      disabled={step === 0}
                      className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-ink/50 transition hover:text-ink disabled:opacity-30"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" /> Back
                    </button>
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink/35">
                      Takes about 40 seconds
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
