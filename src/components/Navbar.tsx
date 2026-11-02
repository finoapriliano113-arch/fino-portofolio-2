import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { active } = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-ink/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between px-6 md:px-10"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-cream transition-colors hover:text-accent"
            aria-label="Fino Apriliano — back to home"
          >
            <span className="hidden h-9 w-9 overflow-hidden rounded-full border border-line sm:block">
              <img
                src={PROFILE.photo}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover object-top"
              />
            </span>
            fino<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-semibold transition-colors duration-300",
                    isActive ? "text-cream" : "text-mute hover:text-cream"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-bold text-cream transition-all duration-300 hover:border-accent/60 hover:text-accent"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-cream md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-ink/95 px-8 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-[4.5rem] items-center justify-between">
              <span className="text-2xl font-extrabold tracking-tight">
                fino<span className="text-accent">.</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-cream"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group flex items-baseline gap-4 border-b border-line py-5 text-3xl font-extrabold tracking-tight transition-colors",
                    active === link.href.slice(1) ? "text-accent" : "text-cream hover:text-accent"
                  )}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <span className="font-serif text-sm italic text-mute">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-bold text-ink"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {PROFILE.name} — Let&apos;s Talk <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
            <p className="pb-8 text-xs tracking-wide text-mute">{PROFILE.signature}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
