"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Magnetic from "./ui/Magnetic";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";

const info = [
  { icon: Mail, value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: MapPin, value: site.location, href: undefined },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // No backend needed: compose the message into a mailto draft.
  // Swap for a Resend-backed API route when a domain is wired up.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-6">
      <div className="panel p-6 md:p-12">
        <SectionHeading title="Let's Build Something Great Together" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal>
              <p className="text-sm leading-relaxed text-muted md:text-base">
                Have a project in mind or want to collaborate? Feel free to
                reach out — I&apos;m always open to discussing ambitious
                products.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-col gap-3">
              {info.map((c, i) => {
                const inner = (
                  <div className="card flex items-center gap-4 rounded-xl p-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-elev/[0.04]">
                      <c.icon size={15} className="text-accent" />
                    </span>
                    <span className="text-sm">{c.value}</span>
                  </div>
                );
                return (
                  <Reveal key={c.value} delay={i * 0.07}>
                    {c.href ? (
                      <a href={c.href} className="block">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-8 flex gap-3">
                {[
                  { icon: LinkedinIcon, href: site.linkedin, label: "LinkedIn" },
                  { icon: GithubIcon, href: site.github, label: "GitHub" },
                ].map((s) => (
                  <Magnetic key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="card flex h-11 w-11 items-center justify-center rounded-xl text-foreground/80 hover:text-accent"
                    >
                      <s.icon size={17} />
                    </a>
                  </Magnetic>
                ))}
                <Magnetic>
                  <a
                    href={site.resume}
                    download
                    className="card flex h-11 items-center rounded-xl px-4 text-sm text-foreground/80 hover:text-accent"
                  >
                    Resume
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="card flex flex-col gap-4 rounded-2xl p-6 md:p-8"
            >
              {(
                [
                  { key: "name", label: "Name", type: "text" },
                  { key: "email", label: "Email", type: "email" },
                ] as const
              ).map((field) => (
                <input
                  key={field.key}
                  type={field.type}
                  required
                  placeholder={field.label}
                  value={form[field.key]}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, [field.key]: e.target.value }))
                  }
                  className="w-full rounded-xl border border-elev/10 bg-elev/[0.03] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-accent/50"
                />
              ))}
              <textarea
                required
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                className="w-full resize-none rounded-xl border border-elev/10 bg-elev/[0.03] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-accent/50"
              />
              <Magnetic strength={0.25}>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="btn-grad group flex w-full items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-sm font-medium text-white"
                >
                  Send Message
                  <Send
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
