import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { contactInfo } from "@/lib/data/contact";
import { socialMediaLinks } from "@/lib/data/socialmedialink";

export function ContactSocials() {
  return (
    <div className="mt-6 border-t border-paper/15 pt-6">
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-paper/40">
            {contactInfo.emailLabel}
          </p>
          <Link
            href={`mailto:${contactInfo.email}`}
            className="mt-2 flex w-fit items-center gap-2 text-[13.5px] font-bold text-paper transition hover:text-marigold"
          >
            <CiMail className="h-4 w-4" />
            {contactInfo.email}
          </Link>
        </div>

        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-paper/40">
            Follow us
          </p>
          <div className="mt-2.5 flex gap-2">
            {socialMediaLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/25 bg-paper/5 text-paper transition hover:-translate-y-0.5 hover:border-marigold hover:bg-marigold hover:text-ink"
                  aria-label={social.ariaLabel}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
