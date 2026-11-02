import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Easing } from "framer-motion";
import { ArrowUpRight, Clapperboard, Play, X } from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { PROJECTS, PROJECT_FILTERS, WORKS } from "@/data/portfolio";
import type { Project, ProjectFilter } from "@/data/portfolio";
import { cn } from "@/utils/cn";

const EASE: Easing = [0.22, 1, 0.36, 1];

function matches(project: Project, filter: ProjectFilter) {
  return filter === "All" || project.categories.includes(filter);
}

export default function Works() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [modalPlaying, setModalPlaying] = useState(false);

  const visible = PROJECTS.filter((p) => matches(p, filter));

  const close = useCallback(() => {
    setSelected(null);
    setModalPlaying(false);
  }, []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  // reset playing when selected changes
  useEffect(() => {
    setModalPlaying(false);
  }, [selected?.id]);

  return (
    <Section id="works">
      <SectionHeading
        label={WORKS.label}
        title={
          <>
            {WORKS.headingA}{" "}
            <em className="font-serif font-medium italic text-accent">{WORKS.headingAccent}</em>
          </>
        }
        description={WORKS.description}
      />

      {/* Filters */}
      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {PROJECT_FILTERS.map((f) => {
            const isActive = filter === f;
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300",
                  isActive
                    ? "border-cream bg-cream text-ink"
                    : "border-line text-mute hover:border-cream/40 hover:text-cream"
                )}
              >
                {f}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
              transition={{ duration: 0.55, ease: EASE }}
              className={cn(project.featured && "md:col-span-2")}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelected(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(project);
                  }
                }}
                className={cn(
                  "group cursor-pointer overflow-hidden rounded-[1.75rem] border bg-card transition-all duration-500 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  project.featured
                    ? "border-accent/30 hover:border-accent/50 shadow-[0_0_0_1px_rgba(165,184,138,0.15),0_18px_40px_rgba(0,0,0,0.35)]"
                    : "border-line hover:border-accent/40"
                )}
                aria-label={`View project: ${project.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90"
                  />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    {project.featured && (
                      <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                        Featured • YouTube
                      </span>
                    )}
                    {project.categories.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-white/15 bg-ink/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cream backdrop-blur-md"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* play overlay for youtube */}
                  {project.youtubeId ? (
                    <span className="absolute left-1/2 top-1/2 flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream/95 text-ink shadow-xl shadow-black/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-accent">
                      <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
                    </span>
                  ) : (
                    <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}

                  {project.youtubeId && (
                    <span className="absolute bottom-3 right-3 rounded-full bg-ink/70 px-2.5 py-1 text-[11px] font-bold tracking-wide text-cream backdrop-blur-md">
                      ▶ Play
                    </span>
                  )}
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-extrabold tracking-tight text-cream md:text-2xl">
                      {project.title}
                    </h3>
                    {project.year && (
                      <span className="shrink-0 font-serif text-sm italic text-mute">
                        {project.year}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-mute">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-[11px] font-semibold text-mute"
                      >
                        {t}
                      </span>
                    ))}
                    <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold text-accent">
                      {project.youtubeId ? "Play Video" : "View Project"}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <Reveal delay={0.1}>
        <p className="mt-8 text-xs leading-relaxed text-mute/70">{WORKS.placeholderNote}</p>
      </Reveal>

      {/* Project detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Project details: ${selected.title}`}
          >
            <div
              className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
              onClick={close}
              aria-hidden="true"
            />
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 48, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[1.75rem] border border-line bg-card shadow-2xl shadow-black/60"
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close project details"
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink/70 text-cream backdrop-blur-md transition-colors hover:border-accent/60 hover:text-accent"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-video w-full overflow-hidden bg-black">
                {selected.youtubeId ? (
                  modalPlaying ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${selected.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                      title={selected.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="h-full w-full"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setModalPlaying(true)}
                      className="group relative h-full w-full"
                      aria-label={`Play video ${selected.title}`}
                    >
                      <img
                        src={selected.image}
                        alt={selected.imageAlt}
                        className="h-full w-full object-cover"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20"
                      />
                      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent">
                        <Play className="ml-0.5 h-7 w-7 fill-current" aria-hidden="true" />
                      </span>
                      <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold text-cream backdrop-blur-md">
                        Klik untuk play • YouTube
                      </span>
                    </button>
                  )
                ) : (
                  <>
                    <img
                      src={selected.image}
                      alt={selected.imageAlt}
                      className="h-full w-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"
                    />
                  </>
                )}
              </div>

              <div className="p-6 md:p-10">
                <div className="flex flex-wrap gap-2">
                  {selected.categories.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent"
                    >
                      {c}
                    </span>
                  ))}
                  {selected.youtubeId && (
                    <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                      Playable
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-cream md:text-4xl">
                  {selected.title}
                </h3>
                <p className="mt-4 leading-relaxed text-mute">{selected.description}</p>

                <dl className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-mute">
                      Platform
                    </dt>
                    <dd className="mt-2 flex items-center gap-2 text-sm font-semibold text-cream">
                      <Clapperboard className="h-4 w-4 text-accent" aria-hidden="true" />
                      {selected.platform}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-mute">
                      Tools
                    </dt>
                    <dd className="mt-2 text-sm font-semibold text-cream">
                      {selected.tools.join(", ")}
                    </dd>
                  </div>
                  {selected.year && (
                    <div>
                      <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-mute">
                        Year
                      </dt>
                      <dd className="mt-2 text-sm font-semibold text-cream">{selected.year}</dd>
                    </div>
                  )}
                </dl>

                <div className="mt-9 flex flex-wrap gap-3">
                  {selected.youtubeId && !modalPlaying && (
                    <button
                      type="button"
                      onClick={() => setModalPlaying(true)}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-cream"
                    >
                      <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                      Play di sini
                    </button>
                  )}
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-bold text-ink transition-colors duration-300 hover:bg-accent"
                  >
                    {selected.linkLabel}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
