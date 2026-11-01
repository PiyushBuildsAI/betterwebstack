'use client';

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const morphyButtonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border border-ink bg-ink text-[13px] font-bold text-paper transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-5 text-xs",
        lg: "h-12 px-8 text-[14px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface MorphyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof morphyButtonVariants> {
  asChild?: boolean;
  dotClassName?: string;
  animate?: "normal" | "reverse";
}

const MorphyButton = React.forwardRef<HTMLButtonElement, MorphyButtonProps>(
  (
    {
      className,
      size,
      asChild = false,
      children,
      dotClassName,
      animate = "normal",
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
    const Comp = asChild ? Slot : "button";

    const handleTouchStart = () => {
      setIsHovered(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsHovered(false), 1500);
    };

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);

    const active = animate === "reverse" ? !isHovered : isHovered;
    const userHasTextColor = className?.includes("text-");

    return (
      <Comp
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        className={cn(
          morphyButtonVariants({ size }),
          "transition-colors duration-700 ease-in-out",
          className
        )}
        {...props}
      >
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute left-3 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-marigold transition-transform duration-700 ease-in-out",
            size === "sm" && "h-2 w-2",
            size === "lg" && "left-4 h-3 w-3",
            active ? "scale-[80]" : "scale-100",
            dotClassName
          )}
        />
        <span
          className={cn(
            "relative z-10 font-bold transition-all duration-700 ease-in-out",
            active ? "translate-x-1.5" : "translate-x-0",
            !userHasTextColor && (active ? "text-ink" : "text-paper")
          )}
        >
          {children}
        </span>
      </Comp>
    );
  }
);

MorphyButton.displayName = "MorphyButton";

export { MorphyButton, morphyButtonVariants };
