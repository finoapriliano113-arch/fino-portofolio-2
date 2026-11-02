import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { DISCIPLINES } from "@/data/portfolio";

export default function Disciplines() {
  return (
    <Section id="skills">
      <SectionHeading
        label="02 / What I Do"
        title={
          <>
            Three disciplines.{" "}
            <em className="font-serif font-medium italic text-accent">One creative perspective.</em>
          </>
        }
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {DISCIPLINES.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.12}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"
                />
                <span className="absolute bottom-4 left-5 font-serif text-2xl italic text-accent">
                  {d.index}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-extrabold tracking-tight text-cream">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{d.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {d.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-mute transition-colors duration-300 group-hover:border-accent/30 group-hover:text-cream/80"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
