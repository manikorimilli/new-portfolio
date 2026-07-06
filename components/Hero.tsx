"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Download, MousePointer2, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { heroStats } from "@/lib/data";
import Magnetic from "./ui/Magnetic";
import RotatingText from "./ui/RotatingText";

const ease = [0.22, 1, 0.36, 1] as const;

const roles = [
  "Software Development Engineer",
  "Freelancer",
  "Full Stack Developer",
];

// Icon slugs shown on the two orbital rings of the hero visual
const ORBIT_OUTER = ["react", "typescript", "nodedotjs", "postgresql", "docker"];
const ORBIT_INNER = ["nextdotjs", "tailwindcss", "mongodb"];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, ease, delay },
  };
}

function OrbitRing({
  slugs,
  size,
  ringClass,
  itemClass,
}: {
  slugs: string[];
  size: number;
  ringClass: string;
  itemClass: string;
}) {
  return (
    <div
      className={`absolute rounded-full border border-line ${ringClass}`}
      style={{ width: size, height: size }}
    >
      {slugs.map((slug, i) => {
        const angle = (i / slugs.length) * 360;
        return (
          <span
            key={slug}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translateX(${size / 2}px) rotate(${-angle}deg)`,
            }}
          >
            <span
              className={`glass flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl ${itemClass}`}
            >
              <span
                aria-hidden
                className="tech-ico h-4.5 w-4.5 text-accent"
                style={{ "--ico": `url(/icons/${slug}.svg)` } as React.CSSProperties}
              />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-28 md:pt-32">
      <div className="panel relative overflow-hidden px-6 py-16 md:px-14 md:py-20">
        {/* Inner ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(500px 300px at 80% 15%, rgba(139,92,246,0.12), transparent 65%), radial-gradient(400px 300px at 10% 90%, rgba(99,102,241,0.1), transparent 65%)",
          }}
        />
        {/* Faint blueprint grid behind the content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(700px 500px at 30% 30%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(700px 500px at 30% 30%, black, transparent 75%)",
          }}
        />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2">
                <span className="pulse-dot" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/80">
                  Available for opportunities
                </span>
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.25)}
              className="mt-8 text-5xl font-semibold tracking-tight md:text-7xl"
            >
              Hi, I&apos;m <span className="grad-text">{site.firstName}</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.4)}
              className="mt-4 min-h-[2.5rem] text-2xl font-medium tracking-tight text-foreground/90 md:text-3xl"
            >
              <RotatingText phrases={roles} />
            </motion.p>

            <motion.p
              {...fadeUp(0.55)}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              I build scalable, efficient and user-friendly web applications
              that solve real-world problems — currently crafting analytics
              products at <span className="text-foreground">DeeptaAI</span>.
            </motion.p>

            <motion.div
              {...fadeUp(0.7)}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <a
                  href="#projects"
                  className="btn-grad group flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white"
                >
                  View My Work
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={site.resume}
                  download
                  className="card flex items-center gap-2 rounded-full px-7 py-3.5 text-sm"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Orbital tech visual — replaces the traditional profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.5 }}
            aria-hidden
            className="relative mx-auto hidden h-[420px] w-[420px] items-center justify-center lg:flex"
          >
            {/* Core */}
            <div className="absolute flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 shadow-[0_0_80px_rgba(129,140,248,0.45)]">
              <Code2 size={44} strokeWidth={1.8} className="text-white" />
            </div>
            <div className="absolute h-40 w-40 rounded-full border border-accent/25" />

            {/* Rings rotate; chips counter-rotate to stay upright */}
            <div className="orbit-fast absolute flex items-center justify-center">
              <OrbitRing
                slugs={ORBIT_INNER}
                size={240}
                ringClass=""
                itemClass="orbit-fast-rev"
              />
            </div>
            <div className="orbit-slow absolute flex items-center justify-center">
              <OrbitRing
                slugs={ORBIT_OUTER}
                size={380}
                ringClass=""
                itemClass="orbit-slow-rev"
              />
            </div>

            {/* Floating accent chips */}
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -right-2 top-14 flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/80"
            >
              <Sparkles size={11} className="text-accent" /> AI-Powered
            </motion.span>
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -left-2 bottom-16 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/80"
            >
              1.5+ yrs shipping
            </motion.span>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.9)}
          className="relative mt-14 flex flex-col gap-6 md:flex-row md:items-center"
        >
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <MousePointer2 size={13} /> Scroll to explore
          </span>
          <div className="card flex flex-1 flex-wrap items-center justify-between gap-6 rounded-2xl px-6 py-5 md:px-8">
            {heroStats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-semibold tracking-tight md:text-3xl">
                  <span className="grad-text">{s.value}</span>
                </p>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
