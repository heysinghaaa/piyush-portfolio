import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  index?: string;
  label?: string;
  containerClassName?: string;
};

export function Section({
  children,
  className,
  containerClassName,
  index,
  label,
  ...props
}: SectionProps) {
  return (
    <section className={cn("scroll-mt-[90px]", className)} {...props}>
      <Container className={cn("section", containerClassName)}>
        {label && (
          <div className="section-label" data-reveal="slide">
            {index && <span>{index}</span>} {label}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
