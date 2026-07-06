"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

// The class is applied before hydration by the inline script in layout.tsx;
// this component only reflects and toggles it.
export default function ThemeToggle() {
  const [light, setLight] = useState<boolean | null>(null);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !light;
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
    setLight(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="card flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 hover:text-accent"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={light ? "sun" : "moon"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {light ? <Sun size={15} /> : <Moon size={15} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
