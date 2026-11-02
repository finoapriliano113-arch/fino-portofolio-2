import { ArrowUpRight } from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { SOCIALS, SOCIALS_SECTION } from "@/data/portfolio";
import { socialIcon } from "@/components/BrandIcons";

export default function Socials() {
  return (
    <Section id="socials">
      <SectionHeading
        label={SOCIALS_SECTION.label}
        title={
          <>
            {SOCIALS_SECTION.headingA}{" "}
            <em className="font-serif font-medium italic text-accent">
              {SOCIALS_SECTION.headingAccent}
            </em>
          </>
        }
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SOCIALS.map((social, i) => {
          const Icon = socialIcon(social.icon);
          return (
            <Reveal key={social.platform} delay={i * 0.1}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Fino Apriliano on ${social.platform} — opens in a new tab`}
                className="group flex h-full flex-col rounded-[1.75rem] border border-line bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line text-cream transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-8 text-xl font-extrabold tracking-tight text-cream">
                  {social.platform}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{social.purpose}</p>
                <span className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Open profile
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
