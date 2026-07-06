"use client";

import { useEffect, useState } from "react";

// Typewriter loop: types a phrase, holds, deletes, moves to the next.
export default function RotatingText({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(phrases[index]);
      const id = setTimeout(
        () => setIndex((i) => (i + 1) % phrases.length),
        3000
      );
      return () => clearTimeout(id);
    }

    const current = phrases[index];
    let delay: number;

    if (!deleting) {
      if (text === current) {
        delay = 2200; // hold the full phrase
      } else {
        delay = 55;
      }
    } else {
      delay = 28;
    }

    const id = setTimeout(() => {
      if (!deleting) {
        if (text === current) setDeleting(true);
        else setText(current.slice(0, text.length + 1));
      } else {
        if (text === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
        } else {
          setText(current.slice(0, text.length - 1));
        }
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, phrases]);

  return (
    <span className="caret">
      {text}
      {/* Reserve height so the line doesn't collapse while empty */}
      {text === "" && "​"}
    </span>
  );
}
