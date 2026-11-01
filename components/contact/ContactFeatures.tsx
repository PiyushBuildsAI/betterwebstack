import { contactFeatures } from "@/lib/data/contact";

export function ContactFeatures() {
  return (
    <div className="space-y-4 pt-2">
      {contactFeatures.map((feature, index) => (
        <div key={index} className="flex gap-3 sm:gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-marigold text-ink sm:h-11 sm:w-11">
            {feature.icon}
          </div>
          <p className="pt-1 text-[13px] font-medium leading-relaxed text-paper/70">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
