import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface UnderlineButtonProps {
  href?: string;
  label?: string;
}

const UnderlineButton = ({ href = "/", label = "Back" }: UnderlineButtonProps) => {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-full border border-ink/35 bg-parchment/80 px-4 py-2 text-[12px] font-bold text-ink transition hover:-translate-y-0.5 hover:border-ink hover:bg-parchment"
    >
      <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
      {label}
    </Link>
  );
};

export default UnderlineButton;
