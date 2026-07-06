import { Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div className="mb-10 flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-accent to-accent-2 shadow-[0_0_12px_rgba(129,140,248,0.8)]" />
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        <Sparkles size={16} className="text-accent/70" />
        {eyebrow && (
          <span className="ml-auto hidden font-mono text-xs uppercase tracking-[0.25em] text-muted md:block">
            {eyebrow}
          </span>
        )}
      </div>
    </Reveal>
  );
}
