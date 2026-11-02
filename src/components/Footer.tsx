import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { FOOTER, NAV_LINKS, PROFILE, SOCIALS } from "@/data/portfolio";
import { socialIcon } from "@/components/BrandIcons";

const ONLINE_LINKS = [
  ...SOCIALS.map((s) => ({ label: s.platform, url: s.url, icon: s.icon })),
  { label: "Email", url: FOOTER.emailUrl, icon: "mail" as const, value: FOOTER.emailAddress },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="grid overflow-hidden rounded-[2rem] border border-line bg-panel lg:grid-cols-[1.35fr_1fr]">
        {/* Left panel */}
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4">
            <img
              src={PROFILE.photo}
              alt="Fino Apriliano"
              className="h-12 w-12 rounded-full border border-line object-cover object-top"
            />
            <a
              href="#home"
              className="text-3xl font-extrabold tracking-tight text-cream transition-colors hover:text-accent"
            >
              {PROFILE.logo.split(".")[0]}
              <span className="text-accent">.</span>
            </a>
          </div>
          <p className="mt-7 text-xl font-extrabold tracking-tight text-cream">{PROFILE.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-mute">{FOOTER.description}</p>

          <nav className="mt-9 flex flex-wrap gap-x-7 gap-y-3" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-mute transition-colors duration-300 hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="mt-12 text-xs text-mute/70">
            © {year} {PROFILE.name}. All rights reserved.
          </p>
        </div>

        {/* Right panel */}
        <div className="border-t border-line bg-[#0c0c0c] p-8 md:p-12 lg:border-l lg:border-t-0">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-mute">
            {FOOTER.socialHeading}
          </h2>
          <ul className="mt-6">
            {ONLINE_LINKS.map((link) => {
              const Icon =
                link.icon === "mail" ? Mail : socialIcon(link.icon as "youtube" | "instagram" | "tiktok" | "behance");
              const isMail = link.icon === "mail";
              return (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    aria-label={`${link.label}${isMail ? `: ${FOOTER.emailAddress}` : " — opens in a new tab"}`}
                    className="group flex items-center justify-between gap-4 border-b border-line/60 py-3.5 last:border-b-0"
                  >
                    <span className="flex items-center gap-3.5">
                      <Icon className="h-[18px] w-[18px] text-mute transition-colors duration-300 group-hover:text-accent" aria-hidden="true" />
                      <span className="text-sm font-bold text-cream/90 transition-colors duration-300 group-hover:text-cream">
                        {link.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="flex items-center gap-2 text-sm text-mute">
          <span className="font-serif text-base italic text-accent">*</span>
          {PROFILE.signature}
        </p>
        <a
          href="#home"
          className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-xs font-bold text-mute transition-colors duration-300 hover:border-accent/60 hover:text-accent"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
