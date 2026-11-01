import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface VercelCardProps
  extends Omit<HTMLMotionProps<"div">, "whileHover" | "transition" | "children"> {
  children?: React.ReactNode;
  showIcons?: boolean;
  iconClassName?: string;
  animateOnHover?: boolean;
  glowEffect?: boolean;
  bordered?: boolean;
  contentClassName?: string;
}

function VercelCard({
  children,
  className,
  showIcons = true,
  iconClassName,
  animateOnHover = false,
  glowEffect = false,
  bordered = true,
  contentClassName,
  ...props
}: VercelCardProps) {
  return (
    <motion.div
      className={cn(
        "group/canvas-card relative flex h-full w-full flex-col overflow-hidden",
        bordered && "stamp rounded-[40px] border border-ink/25 bg-parchment",
        className
      )}
      whileHover={animateOnHover ? { y: -4 } : {}}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {showIcons && (
        <>
          <Icon className={cn("absolute -left-3 -top-3 h-6 w-6 text-ink/25", iconClassName)} />
          <Icon className={cn("absolute -bottom-3 -left-3 h-6 w-6 text-ink/25", iconClassName)} />
          <Icon className={cn("absolute -right-3 -top-3 h-6 w-6 text-ink/25", iconClassName)} />
          <Icon className={cn("absolute -bottom-3 -right-3 h-6 w-6 text-ink/25", iconClassName)} />
        </>
      )}

      {glowEffect && (
        <div className="pointer-events-none absolute inset-0 bg-marigold/20 opacity-0 transition-opacity duration-500 group-hover/canvas-card:opacity-100" />
      )}

      <div className={cn("relative flex h-full w-full flex-col p-6", contentClassName)}>
        {children}
      </div>
    </motion.div>
  );
}

function Icon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}

export { VercelCard };
