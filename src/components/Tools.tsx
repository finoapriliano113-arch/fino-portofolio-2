import { Orbit, PenTool, Scissors } from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { TOOLS } from "@/data/portfolio";
import type { Tool } from "@/data/portfolio";

const ICONS = {
  pen: PenTool,
  orbit: Orbit,
  scissors: Scissors,
} as const;

function ToolIcon({ tool }: { tool: Tool }) {
  const Icon = ICONS[tool.icon];
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-accent">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

export default function Tools() {
  return (
    <Section id="tools">
      <SectionHeading
        label={TOOLS.label}
        title={
          <>
            {TOOLS.headingA}{" "}
            <em className="font-serif font-medium italic text-accent">{TOOLS.headingAccent}</em>
          </>
        }
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {TOOLS.items.map((tool, i) => (
          <Reveal key={tool.name} delay={i * 0.12}>
            <article className="group h-full rounded-[1.75rem] border border-line bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40">
              <ToolIcon tool={tool} />
              <h3 className="mt-7 text-2xl font-extrabold tracking-tight text-cream">{tool.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{tool.purpose}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {tool.uses.map((use) => (
                  <li
                    key={use}
                    className="rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-mute transition-colors duration-300 group-hover:text-cream/80"
                  >
                    {use}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
