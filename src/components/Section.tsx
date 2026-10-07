import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

type SectionSize = "hero" | "default";

const sizeClassNames: Record<SectionSize, string> = {
  hero: "pt-24 pb-0 md:pt-28 lg:pt-[128px] lg:pb-0",
  default: "",
};

type SectionProps = HTMLAttributes<HTMLElement> & {
  size?: SectionSize;
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ size = "default", className = "", children, ...props }, ref) => {
    return (
      <section ref={ref} className={`container-wide ${sizeClassNames[size]} ${className}`.trim()} {...props}>
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
