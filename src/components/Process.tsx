import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { PROCESS } from "@/data/portfolio";

export default function Process() {
  return (
    <Section id="process">
      <SectionHeading
        label={PROCESS.label}
        title={
          <>
            {PROCESS.headingA}{" "}
            <em className="font-serif font-medium italic text-accent">{PROCESS.headingAccent}</em>
          </>
        }
      />

      <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
        {PROCESS.steps.map((step, i) => (
          <Reveal key={step.index} delay={i * 0.12}>
            <li className="relative border-l border-line pl-8 md:border-l-0 md:border-t md:pl-0 md:pt-10">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/15 md:-top-[5px] md:left-0"
              />
              <span className="font-serif text-2xl italic text-accent">{step.index}</span>
              <h3 className="mt-3 text-lg font-extrabold uppercase tracking-[0.15em] text-cream">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{step.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
