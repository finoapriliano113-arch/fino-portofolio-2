import { Sparkles, Plus, Scan } from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ABOUT } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        label={ABOUT.label}
        title={
          <>
            {ABOUT.headingA}{" "}
            <em className="font-serif font-medium italic text-accent">{ABOUT.headingAccent}</em>
          </>
        }
      />

      <div className="mt-16 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left — text */}
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-cream/85 md:text-xl md:leading-relaxed">
              {ABOUT.intro}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <blockquote className="mt-8 rounded-r-3xl border-l-2 border-accent bg-card/70 p-6 md:p-8">
              <p className="font-serif text-lg italic leading-relaxed text-cream/90 md:text-xl">
                &ldquo;{ABOUT.statement}&rdquo;
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {ABOUT.facts.map((fact) => (
                <div key={fact.label} className="border-t border-line pt-4">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-mute">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold leading-relaxed text-cream">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-3xl border border-line bg-card/50 p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-mute">
                Experience
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {ABOUT.experience.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-cream/85">
                    <Plus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-start gap-2 border-t border-line pt-4 text-sm text-accent">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  <span className="font-bold">Achievement — </span>
                  {ABOUT.achievement}.
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right — portrait composition */}
        <Reveal delay={0.15} y={40} className="relative">
          <div className="relative">
            {/* sage glow behind */}
            <div
              aria-hidden="true"
              className="glow-accent pointer-events-none absolute left-1/2 top-1/2 h-[92%] w-[108%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-60"
            />

            <div className="relative rounded-[2rem] border border-line bg-card/60 p-3 backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-ink">
                <img
                  src={ABOUT.photo}
                  alt={ABOUT.photoAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-[center_16%]"
                />
                {/* editorial fade */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.28) 32%, transparent 62%)",
                  }}
                />

                <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-ink/55 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur-md">
                  <Scan className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  Fino Apriliano — Portrait
                </span>

                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-ink/55 p-4 backdrop-blur-xl">
                  <p className="text-sm font-extrabold tracking-tight text-cream">Fino Apriliano</p>
                  <p className="text-xs text-cream/70">Visual Creative · Graphic Design · Motion</p>
                  <p className="mt-3 text-[11px] leading-relaxed text-cream/60">{ABOUT.imageCaption}</p>
                </div>
              </div>
            </div>

            {/* workspace inset — overlaps bottom-left */}
            <div className="absolute -bottom-6 -left-2 hidden w-[54%] rounded-2xl border border-line bg-card p-2 shadow-2xl shadow-black/40 sm:block lg:-left-6 lg:w-[56%]">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={ABOUT.workspaceImage}
                  alt={ABOUT.workspaceAlt}
                  loading="lazy"
                  className="aspect-[16/11] w-full object-cover"
                />
              </div>
              <p className="px-2 pb-1 pt-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-mute">
                Creative workspace
              </p>
              <p className="px-2 pb-2 text-xs font-semibold leading-snug text-cream/80">
                Where ideas take shape — from sketch to screen.
              </p>
            </div>

            {/* floating accent chip */}
            <div className="animate-float-slow absolute -right-3 -top-3 rounded-2xl border border-line bg-card px-5 py-3 shadow-2xl shadow-black/50 md:-right-6">
              <p className="font-serif text-lg italic text-accent">visual creative</p>
            </div>
          </div>

          {/* mobile workspace card below */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-card sm:hidden">
            <img
              src={ABOUT.workspaceImage}
              alt={ABOUT.workspaceAlt}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-mute">
                Creative workspace
              </p>
              <p className="mt-1 text-sm leading-relaxed text-cream/80">{ABOUT.imageCaption}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
