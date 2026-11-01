"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, Loader2, TrendingUp } from "lucide-react";
import { SunBurst } from "@/components/brand/Botanical";
import { SectionHead } from "@/components/landing/ui";
import { submitLead } from "@/lib/lead-client";
import { isValidPhone } from "@/lib/validations/lead";

const inr = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(value));

function SliderRow({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label className="text-[12.5px] font-extrabold text-ink/75">{label}</label>
        <span className="rounded-full border border-ink/25 bg-cream px-2.5 py-1 font-mono text-[11.5px] tabular-nums text-ink">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label={label}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-ink/15 accent-ink [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-parchment [&::-webkit-slider-thumb]:bg-ink [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-parchment [&::-moz-range-thumb]:bg-ink"
      />
      <div className="mt-1 flex justify-between font-mono text-[9px] uppercase tracking-[0.1em] text-ink/35">
        <span>{min.toLocaleString("en-IN")}</span>
        <span>{max.toLocaleString("en-IN")}</span>
      </div>
    </div>
  );
}

export function Calculator() {
  const [visitors, setVisitors] = useState(2500);
  const [rate, setRate] = useState(2);
  const [value, setValue] = useState(5000);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const numbers = useMemo(() => {
    const currentLeads = (visitors * rate) / 100;
    const projectedLeads = currentLeads * 1.35;
    const extraLeads = projectedLeads - currentLeads;
    const extraRevenue = extraLeads * value;
    return {
      currentLeads,
      projectedLeads,
      extraLeads,
      extraRevenue,
      yearly: extraRevenue * 12,
    };
  }, [visitors, rate, value]);

  async function sendPlan(event: React.FormEvent) {
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
      source: "roi-calculator",
      goal: "Wants a detailed growth plan from the ROI calculator",
      meta: {
        monthlyVisitors: visitors,
        enquiryRate: rate,
        averageValue: value,
        projectedExtraRevenue: Math.round(numbers.extraRevenue),
      },
    });

    if (result.ok) {
      setStatus("done");
    } else {
      setStatus("idle");
      setError(result.message);
    }
  }

  return (
    <section id="roi" className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
          <SectionHead
            index="05"
            eyebrow="ROI calculator"
            title={
              <>
                What is a better site
                <br />
                actually worth?
              </>
            }
            description="Plug in your traffic and average customer value. This is the revenue sitting in the gap between your current site and one built to convert."
          />

          <div className="surface stamp overflow-hidden">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="space-y-6 p-6 sm:p-7">
                <SliderRow
                  label="Monthly visitors"
                  value={visitors}
                  display={visitors.toLocaleString("en-IN")}
                  min={200}
                  max={20000}
                  step={100}
                  onChange={setVisitors}
                />
                <SliderRow
                  label="Current enquiry rate"
                  value={rate}
                  display={`${rate.toFixed(1)}%`}
                  min={0.3}
                  max={8}
                  step={0.1}
                  onChange={setRate}
                />
                <SliderRow
                  label="Average value per customer"
                  value={value}
                  display={inr(value)}
                  min={500}
                  max={100000}
                  step={500}
                  onChange={setValue}
                />

                <div className="rounded-[24px] border border-ink/20 bg-cream/60 p-3.5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink/45">
                    Today, roughly
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-ink/65">
                    {numbers.currentLeads.toFixed(1)} enquiries a month ·{" "}
                    <span className="font-bold text-ink">
                      {inr(numbers.currentLeads * value)}
                    </span>{" "}
                    in revenue
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col justify-between overflow-hidden border-t border-ink/20 bg-marigold p-6 sm:p-7 md:border-l md:border-t-0">
                <SunBurst className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 text-ink/10" />
                <div className="relative">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/55">
                    Potential extra revenue
                  </p>
                  <p className="display mt-2 text-[38px] leading-none text-ink sm:text-[46px]">
                    {inr(numbers.extraRevenue)}
                  </p>
                  <p className="mt-1 text-[12px] font-extrabold uppercase tracking-[0.1em] text-ink/60">
                    per month
                  </p>

                  <div className="mt-5 flex items-center gap-2 rounded-[20px] border border-ink/25 bg-parchment/70 px-3 py-2.5">
                    <TrendingUp className="h-4 w-4 shrink-0 text-ink/70" />
                    <p className="text-[11.5px] leading-tight text-ink/70">
                      <span className="font-extrabold text-ink">
                        +{numbers.extraLeads.toFixed(1)} enquiries
                      </span>{" "}
                      a month at a 35% conversion lift
                    </p>
                  </div>

                  <p className="mt-3 text-[11px] font-medium leading-relaxed text-ink/60">
                    That is <span className="font-extrabold text-ink">{inr(numbers.yearly)}</span> a
                    year you are currently leaving on the table.
                  </p>
                </div>

                {status === "done" ? (
                  <div className="relative mt-5 flex items-start gap-2 rounded-[20px] bg-ink px-3.5 py-3 text-parchment">
                    <Check className="mt-0.5 h-4 w-4 text-marigold" />
                    <p className="text-[11.5px] font-medium leading-tight">
                      Sent. We will WhatsApp your tailored plan and the first three fixes.
                    </p>
                  </div>
                ) : open ? (
                  <form onSubmit={sendPlan} className="relative mt-5 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Your name"
                        aria-label="Your name"
                        className="field px-3 py-2 text-[12px]"
                      />
                      <input
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="WhatsApp no."
                        aria-label="WhatsApp number"
                        inputMode="tel"
                        className="field px-3 py-2 text-[12px]"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group flex w-full items-center justify-between rounded-full border border-ink bg-ink px-4 py-2.5 text-[12px] font-bold text-parchment transition hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="h-3.5 w-3.5 animate-spin" /> Sending…
                        </span>
                      ) : (
                        <span>Send me this plan</span>
                      )}
                      <ArrowRight className="h-3.5 w-3.5 text-marigold" />
                    </button>
                    {error && <p className="text-[10.5px] font-semibold text-ink">{error}</p>}
                  </form>
                ) : (
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="group relative mt-5 flex w-full items-center justify-between rounded-full border border-ink bg-ink px-4 py-3 text-[12px] font-bold text-parchment transition hover:-translate-y-0.5"
                  >
                    Get this as a detailed plan
                    <ArrowRight className="h-3.5 w-3.5 text-marigold transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            </div>

            <p className="border-t border-ink/15 bg-cream/50 px-6 py-3 text-[10.5px] font-medium leading-relaxed text-ink/45">
              Illustration only. Assumes a 35% lift in enquiry rate after the rebuild — below the
              average we see, and not a guarantee. Your offer, pricing and follow-up speed matter
              just as much as the website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
