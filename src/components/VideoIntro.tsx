import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { VIDEO_INTRO } from "@/data/portfolio";
import { YoutubeIcon } from "@/components/BrandIcons";

export default function VideoIntro() {
  const [playing, setPlaying] = useState(false);

  return (
    <Section id="video" className="overflow-hidden">
      {/* subtle sage glow behind the whole section */}
      <div
        aria-hidden="true"
        className="glow-accent pointer-events-none absolute left-1/2 top-[52%] h-[36rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] opacity-40"
      />

      <SectionHeading
        label={VIDEO_INTRO.label}
        align="center"
        title={
          <>
            {VIDEO_INTRO.headingA}{" "}
            <em className="font-serif font-medium italic text-accent">{VIDEO_INTRO.headingAccent}</em>
          </>
        }
        description={VIDEO_INTRO.description}
      />

      {/* tiny badge under heading */}
      <Reveal delay={0.08}>
        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            {VIDEO_INTRO.badge}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-10">
        <div className="relative mx-auto w-full max-w-4xl">
          {/* card wrapper with border and subtle inner shadow */}
          <div className="relative rounded-[2rem] border border-line bg-card/40 p-2 backdrop-blur-sm md:p-3 shadow-2xl shadow-black/40">
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] bg-black">
              {playing ? (
                <iframe
                  src={VIDEO_INTRO.embedUrl}
                  title={VIDEO_INTRO.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <>
                  {/* thumbnail */}
                  <img
                    src={VIDEO_INTRO.thumbnail}
                    alt={VIDEO_INTRO.thumbnailAlt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.src !== VIDEO_INTRO.thumbnailFallback) {
                        target.src = VIDEO_INTRO.thumbnailFallback;
                      }
                    }}
                  />
                  {/* cinematic gradients */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.22) 42%, rgba(8,8,8,0.45) 100%), radial-gradient(ellipse at center, transparent 58%, rgba(8,8,8,0.55) 100%)",
                    }}
                  />

                  {/* top bar */}
                  <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur-md">
                      <YoutubeIcon className="h-3.5 w-3.5 text-red-500" aria-hidden="true" />
                      {VIDEO_INTRO.badge}
                    </span>
                    <span className="hidden rounded-full border border-white/15 bg-ink/60 px-3.5 py-1.5 font-serif text-sm italic text-accent backdrop-blur-md sm:inline-flex">
                      {VIDEO_INTRO.duration}
                    </span>
                  </div>

                  {/* center play */}
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label={`Play ${VIDEO_INTRO.title} on YouTube`}
                    className="group absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4"
                  >
                    {/* pulse rings */}
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30 group-hover:border-accent/50 transition-colors"
                      style={{ animation: "pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite" }}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15 group-hover:border-accent/25 transition-colors"
                      style={{ animation: "pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite 0.4s" }}
                    />
                    <span className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full bg-cream text-ink shadow-[0_18px_40px_rgba(165,184,138,0.35)] transition-all duration-300 group-hover:scale-[1.06] group-hover:bg-accent group-active:scale-95">
                      <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
                    </span>
                    <span className="hidden rounded-full border border-white/15 bg-ink/60 px-4 py-1.5 text-xs font-bold tracking-wide text-cream backdrop-blur-md transition-colors group-hover:border-accent/40 group-hover:text-accent sm:block">
                      Putar Video
                    </span>
                  </button>

                  {/* bottom info */}
                  <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 sm:inset-x-5 sm:bottom-5">
                    <div className="min-w-0 rounded-2xl border border-white/10 bg-ink/55 px-4 py-3 backdrop-blur-xl sm:px-5 sm:py-4">
                      <p className="text-sm font-extrabold tracking-tight text-cream sm:text-lg">
                        {VIDEO_INTRO.title}
                      </p>
                      <p className="text-xs text-cream/70 sm:text-sm">{VIDEO_INTRO.author} • YouTube</p>
                    </div>
                    <a
                      href={VIDEO_INTRO.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-ink/55 text-cream backdrop-blur-md transition-colors hover:border-accent/60 hover:text-accent sm:flex"
                      aria-label="Open on YouTube in new tab"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* caption bar below video */}
            {!playing && (
              <div className="flex flex-col gap-3 px-2 pb-2 pt-4 sm:flex-row sm:items-center sm:justify-between sm:px-3">
                <p className="text-sm leading-relaxed text-mute sm:max-w-[58%]">
                  Klik <span className="font-bold text-cream">play</span> untuk menonton langsung tanpa
                  keluar dari website — pengalaman sinematik tetap terjaga.
                </p>
                <a
                  href={VIDEO_INTRO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-line bg-ink px-5 py-2.5 text-xs font-bold text-cream transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <YoutubeIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                  {VIDEO_INTRO.ctaLabel}
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                </a>
              </div>
            )}

            {playing && (
              <div className="flex items-center justify-between px-2 pb-2 pt-4 sm:px-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">
                  Sedang memutar • {VIDEO_INTRO.title}
                </p>
                <button
                  type="button"
                  onClick={() => setPlaying(false)}
                  className="rounded-full border border-line px-4 py-1.5 text-xs font-bold text-mute hover:text-cream hover:border-cream/30 transition-colors"
                >
                  Tutup Player
                </button>
              </div>
            )}
          </div>

          {/* tiny decorative bottom line */}
          <p className="mt-6 text-center text-xs tracking-wide text-mute/60">
            Disajikan dengan estetika{" "}
            <span className="font-serif italic text-accent">dark editorial</span> — sinematik, minimal, premium.
          </p>
        </div>
      </Reveal>

      <style>{`@keyframes pulse-ring { 0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.7; } 100% { transform: translate(-50%, -50%) scale(1.25); opacity: 0; } }`}</style>
    </Section>
  );
}
