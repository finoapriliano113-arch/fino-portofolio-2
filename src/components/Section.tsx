import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32",
        className
      )}
    >
      {children}
    </section>
  );
}
