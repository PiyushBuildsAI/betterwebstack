"use client";

import { useId, useState } from "react";
import { ArrowRight, Check, Loader2, Lock, MessageCircle } from "lucide-react";
import { BUSINESS_TYPES, BUDGETS, SITE } from "@/lib/site";
import { submitLead } from "@/lib/lead-client";
import { isValidPhone } from "@/lib/validations/lead";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<"name" | "phone" | "email", string>>;

export type LeadFormProps = {
  source: string;
  variant?: "compact" | "full";
  submitLabel?: string;
  meta?: Record<string, string | number | boolean>;
  className?: string;
  hideHeading?: boolean;
};

const CHEVRON =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2310380b' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")";

export function LeadForm({
  source,
  variant = "compact",
  submitLabel,
  meta,
  className,
  hideHeading = false,
}: LeadFormProps) {
  const uid = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const isFull = variant === "full";

  function validate() {
    const next: FieldErrors = {};
    if (name.trim().length < 2) next.name = "Please tell us your name.";
    if (!isValidPhone(phone)) next.phone = "Enter a 10-digit mobile number.";
    if (isFull && email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      next.email = "That email does not look right.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    if (!validate()) return;

    setStatus("loading");
    const result = await submitLead({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      website: website.trim(),
      businessType,
      budget,
      timeline: "",
      goal: "",
      message: message.trim(),
      source,
      company,
      meta,
    });

    if (result.ok) {
      setStatus("done");
      return;
    }

    setStatus("idle");
    setFormError(result.message);
  }

  if (status === "done") {
    return (
      <div
        className={cn(
          "stamp flex flex-col items-start gap-4 rounded-[32px] border border-ink bg-sage p-6 sm:p-7",
          className
        )}
        role="status"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-lime">
          <Check className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <div>
          <p className="font-display text-[30px] font-semibold leading-[0.95] tracking-[-0.03em]">
            Got it, {name.split(" ")[0]}.
          </p>
          <p className="mt-2 text-sm font-medium leading-relaxed text-ink/70">
            We will check your details and send the audit to {phone} within one working day. If
            something is urgent, WhatsApp us directly.
          </p>
        </div>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-4 py-2.5 text-xs font-bold text-paper transition hover:bg-[#1b4d14]"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Open WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("w-full", className)} noValidate>
      {!hideHeading && (
        <div className="mb-5">
          <span className="pill pill-marigold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
            </span>
            Free website audit
          </span>
          <p className="mt-4 font-display text-[30px] font-semibold leading-[0.92] tracking-[-0.03em] sm:text-[34px]">
            See what is costing you enquiries.
          </p>
          <p className="mt-2 max-w-[34ch] text-[12.5px] font-medium leading-relaxed text-ink/65">
            A 5-point teardown of your current site, sent on WhatsApp in one working day.
          </p>
        </div>
      )}

      <div className="space-y-3.5">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label
              htmlFor={`${uid}-name`}
              className="mb-1.5 block text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink/60"
            >
              Your name
            </label>
            <input
              id={`${uid}-name`}
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Rohit Sharma"
              autoComplete="name"
              className={cn("field", errors.name && "border-ink focus:border-ink bg-marigold/20")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${uid}-name-error` : undefined}
            />
            {errors.name && (
              <p id={`${uid}-name-error`} className="mt-1 text-[11px] font-semibold text-ink">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${uid}-phone`}
              className="mb-1.5 block text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink/60"
            >
              WhatsApp number
            </label>
            <input
              id={`${uid}-phone`}
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              inputMode="tel"
              autoComplete="tel"
              className={cn("field", errors.phone && "border-ink focus:border-ink bg-marigold/20")}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${uid}-phone-error` : undefined}
            />
            {errors.phone && (
              <p id={`${uid}-phone-error`} className="mt-1 text-[11px] font-semibold text-ink">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {isFull && (
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor={`${uid}-email`}
                className="mb-1.5 block text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink/60"
              >
                Email <span className="normal-case tracking-normal text-ink/40">(optional)</span>
              </label>
              <input
                id={`${uid}-email`}
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@business.com"
                autoComplete="email"
                className={cn("field", errors.email && "border-ink focus:border-ink bg-marigold/20")}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <p className="mt-1 text-[11px] font-semibold text-ink">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor={`${uid}-website`}
                className="mb-1.5 block text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink/60"
              >
                Current website{" "}
                <span className="normal-case tracking-normal text-ink/40">(optional)</span>
              </label>
              <input
                id={`${uid}-website`}
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="yourbusiness.com"
                className="field"
              />
            </div>
          </div>
        )}

        <div className={cn("grid gap-3", isFull && "sm:grid-cols-2")}>
          <div>
            <label
              htmlFor={`${uid}-type`}
              className="mb-1.5 block text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink/60"
            >
              Your business
            </label>
            <select
              id={`${uid}-type`}
              name="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className={cn(
                "field appearance-none bg-[length:14px] bg-[right_16px_center] bg-no-repeat pr-10",
                !businessType && "text-ink/45"
              )}
              style={{ backgroundImage: CHEVRON }}
            >
              <option value="">Select one</option>
              {BUSINESS_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {isFull ? (
            <div>
              <label
                htmlFor={`${uid}-budget`}
                className="mb-1.5 block text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink/60"
              >
                Budget range
              </label>
              <select
                id={`${uid}-budget`}
                name="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className={cn(
                  "field appearance-none bg-[length:14px] bg-[right_16px_center] bg-no-repeat pr-10",
                  !budget && "text-ink/45"
                )}
                style={{ backgroundImage: CHEVRON }}
              >
                <option value="">Select a range</option>
                {BUDGETS.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div>
              <label
                htmlFor={`${uid}-website-compact`}
                className="mb-1.5 block text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink/60"
              >
                Website <span className="normal-case tracking-normal text-ink/40">(optional)</span>
              </label>
              <input
                id={`${uid}-website-compact`}
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="yourbusiness.com"
                className="field"
              />
            </div>
          )}
        </div>

        {isFull && (
          <div>
            <label
              htmlFor={`${uid}-message`}
              className="mb-1.5 block text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink/60"
            >
              What are you trying to fix?{" "}
              <span className="normal-case tracking-normal text-ink/40">(optional)</span>
            </label>
            <textarea
              id={`${uid}-message`}
              name="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Our site brings traffic but no enquiries. We need bookings, not just visits."
              className="field resize-none"
            />
          </div>
        )}

        {/* Honeypot — hidden from people, tempting to bots */}
        <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor={`${uid}-company`}>Company</label>
          <input
            id={`${uid}-company`}
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex w-full items-center justify-between gap-3 rounded-full border border-ink bg-ink px-5 py-3.5 text-sm font-bold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1b4d14] disabled:translate-y-0 disabled:opacity-70"
        >
          <span className="flex items-center gap-2">
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              submitLabel ?? "Get my free audit"
            )}
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-marigold text-ink transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
        </button>

        <p className="flex items-start gap-1.5 text-[10.5px] font-medium leading-relaxed text-ink/55">
          <Lock className="mt-0.5 h-3 w-3 shrink-0" />
          No spam, no drip emails. One reply from a human, usually within 2 working hours.
        </p>

        {formError && (
          <p
            role="alert"
            className="rounded-[20px] border border-ink/30 bg-marigold/40 px-4 py-3 text-[11.5px] font-semibold leading-relaxed text-ink"
          >
            {formError}{" "}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2"
            >
              WhatsApp us
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
