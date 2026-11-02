import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ label, title, description, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={cn(centered && "text-center")}>
      <p
        className={cn(
          "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent",
          centered && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
        {label}
        {centered && <span className="h-px w-8 bg-accent/60" aria-hidden="true" />}
      </p>
      <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-cream md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 max-w-xl text-base leading-relaxed text-mute", centered && "mx-auto")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
