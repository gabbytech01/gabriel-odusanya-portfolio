"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { label: "WORK", href: "/#work" },
  { label: "SERVICES", href: "/#services" },
  { label: "ABOUT", href: "/about" },
  { label: "WRITING", href: "/#writing" },
  { label: "CONTACT", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-line w-full" style={{ scaleX }} />
      <header className="sticky top-0 z-50 border-b border-stone-line bg-ivory/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-edit items-center justify-between px-5 py-4 sm:px-8">
          <a href="/#top" className="flex items-baseline gap-2.5">
            <span className="font-display text-lg font-bold tracking-tight">GABBYTECH.</span>
            <span className="hidden font-display text-[10px] uppercase tracking-widest2 text-ink-soft sm:inline">
              Application Security Engineer
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group relative font-display text-[12px] tracking-widest2 uppercase text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-rust transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="/#contact"
            className="hidden shrink-0 items-center gap-1.5 border-b border-ink pb-0.5 font-display text-[12px] tracking-widest2 uppercase text-ink transition-colors hover:border-rust hover:text-rust md:inline-flex"
          >
            Work with me <span aria-hidden="true">↗</span>
          </a>

          <button
            className="md:hidden font-display text-[12px] tracking-widest2 uppercase"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" className="border-t border-stone-line bg-ivory px-5 pb-6 pt-2 md:hidden">
            <ul className="flex flex-col divide-y divide-stone-line">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-sm tracking-widest2 uppercase text-ink-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-sm tracking-widest2 uppercase text-rust"
                >
                  Work with me ↗
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
