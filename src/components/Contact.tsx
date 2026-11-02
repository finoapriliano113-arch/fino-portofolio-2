import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { CONTACT } from "@/data/portfolio";
import { InstagramIcon } from "@/components/BrandIcons";

const CARDS = [
  { label: CONTACT.whatsapp.label, value: CONTACT.whatsapp.number, href: CONTACT.whatsapp.url, Icon: Phone },
  { label: CONTACT.email.label, value: CONTACT.email.address, href: CONTACT.email.url, Icon: Mail },
  { label: CONTACT.instagram.label, value: CONTACT.instagram.handle, href: CONTACT.instagram.url, Icon: InstagramIcon },
] as const;

export default function Contact() {
  return (
    <Section id="contact" className="overflow-hidden py-28 md:py-40">
      {/* Dramatic ambient glow */}
      <div
        aria-hidden="true"
        className="glow-accent pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-3xl"
      />

      <div className="relative text-center">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.4em] text-accent">
            <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
            {CONTACT.label}
            <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 text-[clamp(2.6rem,7.5vw,6rem)] leading-[1.02] font-extrabold tracking-[-0.03em] text-cream">
            <span className="block">{CONTACT.headingA}</span>
            <em className="font-serif font-medium italic text-accent">{CONTACT.headingB}</em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-mute">
            {CONTACT.description}
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <a
            href={CONTACT.email.url}
            className="mt-9 inline-block text-lg font-bold text-cream underline decoration-line underline-offset-8 transition-colors duration-300 hover:text-accent hover:decoration-accent md:text-2xl"
          >
            {CONTACT.email.address}
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
            {CARDS.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={`${label} — ${value}`}
                className="group relative rounded-3xl border border-line bg-card/80 p-6 text-left backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50"
              >
                <ArrowUpRight
                  className="absolute right-5 top-5 h-4 w-4 text-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="mt-6 block text-sm font-extrabold text-cream">{label}</span>
                <span className="mt-1 block truncate text-xs text-mute">{value}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
