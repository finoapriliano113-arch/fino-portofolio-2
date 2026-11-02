import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import { ArrowDown, ArrowRight, Asterisk, Sparkles } from "lucide-react";
import { HERO, PROFILE } from "@/data/portfolio";

const EASE: Easing = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const PARTICLES = [
  { left: "12%", top: "24%", delay: "0s", size: 4 },
  { left: "78%", top: "20%", delay: "1.2s", size: 3 },
  { left: "88%", top: "58%", delay: "2.1s", size: 5 },
  { left: "30%", top: "72%", delay: "0.6s", size: 3 },
  { left: "58%", top: "14%", delay: "1.7s", size: 2 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-24"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="glow-accent pointer-events-none absolute -top-48 right-[-12%] h-[36rem] w-[36rem] rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="glow-neutral pointer-events-none absolute bottom-[-25%] left-[-12%] h-[30rem] w-[30rem] rounded-full blur-3xl"
      />
      {/* Minimal particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute rounded-full bg-accent/50"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            opacity: 0.5,
          }}
        />
      ))}

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left — typography */}
          <motion.div variants={container} initial="hidden" animate="show" className="min-w-0">
            <motion.p
              variants={item}
              className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.4em] text-accent md:text-xs"
            >
              <span className="h-px w-10 bg-accent/60" aria-hidden="true" />
              {HERO.label}
            </motion.p>

            <h1 className="mt-8 text-[clamp(3rem,9vw,6.2rem)] leading-[0.96] font-extrabold tracking-[-0.03em] text-cream lg:text-[clamp(3.2rem,6vw,5.8rem)]">
              <motion.span variants={item} className="block">
                {HERO.line1}
              </motion.span>
              <motion.span variants={item} className="block">
                {HERO.line2Prefix}{" "}
                <em className="font-serif font-medium tracking-normal text-accent italic">
                  {HERO.line2Accent}
                </em>
              </motion.span>
            </h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg"
            >
              {HERO.description}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={HERO.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-bold text-ink transition-colors duration-300 hover:bg-accent"
              >
                {HERO.primaryCta.label}
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href={HERO.secondaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-bold text-cream/90 transition-colors duration-300 hover:border-accent/60 hover:text-accent"
              >
                {HERO.secondaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-10 flex items-center gap-2 text-sm text-mute"
            >
              <Asterisk className="h-4 w-4 text-accent" aria-hidden="true" />
              {HERO.signature}
            </motion.p>
          </motion.div>

          {/* Right — portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:ml-auto"
          >
            {/* soft sage glow behind portrait */}
            <div
              aria-hidden="true"
              className="glow-accent pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-60"
            />

            <div className="relative rounded-[2.5rem] border border-line bg-card/30 p-3 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[2rem] bg-ink">
                {/* Portrait image */}
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.photoAlt}
                  width={840}
                  height={1050}
                  className="aspect-[4/5] w-full object-cover object-[center_18%]"
                  loading="eager"
                  decoding="async"
                />
                {/* subtle vignette + bottom editorial fade */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.35) 28%, transparent 58%),
                                 radial-gradient(ellipse at 50% 0%, rgba(8,8,8,0.25), transparent 60%)`,
                  }}
                />

                {/* Top status pill */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-ink/55 px-3.5 py-2 backdrop-blur-md">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-cream">
                    Available for collaboration
                  </span>
                </div>

                {/* Year / discipline tag */}
                <div className="absolute right-4 top-4 hidden rounded-full border border-white/15 bg-ink/55 px-3 py-1.5 backdrop-blur-md sm:flex">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-cream/90">
                    INDEPENDENT · 2025
                  </span>
                </div>

                {/* Bottom identity bar */}
                <div className="absolute inset-x-4 bottom-4 rounded-[1.3rem] border border-white/10 bg-ink/55 p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={PROFILE.photo}
                      alt=""
                      aria-hidden="true"
                      className="h-11 w-11 rounded-full border border-white/15 object-cover object-top"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-extrabold tracking-tight text-cream">
                        {PROFILE.name}
                      </p>
                      <p className="truncate text-xs leading-none text-cream/70">
                        Visual Creative · DKV
                      </p>
                    </div>
                    <span className="hidden h-8 w-8 items-center justify-center rounded-full bg-accent text-ink sm:flex">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Graphic Design", "Motion", "Video Editing"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-cream/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating editorial chips — desktop only */}
            <div
              aria-hidden="true"
              className="animate-float-slow absolute -right-6 -top-4 hidden rounded-2xl border border-line bg-card px-5 py-3 shadow-2xl shadow-black/50 lg:flex"
            >
              <p className="font-serif text-base italic text-accent">visual stories</p>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-6 hidden items-center gap-2 rounded-full border border-line bg-card px-4 py-2.5 shadow-xl shadow-black/30 lg:flex"
              style={{ animation: "float-slow 7s ease-in-out infinite 1.2s" }}
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-mute">
                Jakarta — Indonesia
              </span>
            </div>

            {/* Mobile caption */}
            <p className="mx-auto mt-5 max-w-[320px] text-center text-xs leading-relaxed text-mute lg:hidden">
              {PROFILE.name} — {PROFILE.title.split(" | ")[0]} · Based in Indonesia, crafting visuals for the now.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute inset-x-0 bottom-7 mx-auto hidden w-full max-w-6xl items-end justify-between px-6 md:px-10 lg:flex"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mute">
          {HERO.meta.join("  ·  ")}
        </p>
        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-mute">
          Scroll
          <span className="block h-10 w-px overflow-hidden bg-line" aria-hidden="true">
            <span className="animate-scroll-line block h-full w-full bg-accent" />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
