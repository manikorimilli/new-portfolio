"use client";

import { useEffect, useRef } from "react";

// Custom cursor: a small dot that tracks instantly plus a trailing ring
// that eases behind it and expands over interactive elements.
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (!fine || reduced) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    dot.style.opacity = "1";
    ring.style.opacity = "1";

    let x = 0,
      y = 0,
      rx = 0,
      ry = 0;
    let hovering = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target as HTMLElement;
      hovering = !!t.closest("a, button, [role='button'], input, textarea");
    };

    const loop = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      dot.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      const scale = hovering ? 1.8 : 1;
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px) scale(${scale})`;
      ring.style.borderColor = hovering
        ? "rgba(255,255,255,0.5)"
        : "rgba(255,255,255,0.25)";
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] h-1.5 w-1.5 rounded-full bg-white opacity-0"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 rounded-full border opacity-0 transition-[border-color] duration-300"
      />
    </>
  );
}
