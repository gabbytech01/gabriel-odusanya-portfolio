"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Marked from "./Marked";
import { services } from "@/lib/data";

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="border-b border-stone-line bg-ivory-dim">
      <div className="mx-auto max-w-edit px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
          >
            Application security
            <br /> <Marked variant={2}>with a purpose.</Marked>
          </motion.h2>
          <span className="font-display text-[11px] tracking-widest2 uppercase text-ink-soft">
            06 areas of focus
          </span>
        </div>

        <div className="mt-14 border-t border-stone-line">
          {services.map((s) => {
            const isHovered = hovered === s.index;
            return (
              <div
                key={s.index}
                onMouseEnter={() => setHovered(s.index)}
                onMouseLeave={() => setHovered(null)}
                className="group grid cursor-default grid-cols-1 items-center gap-2 border-b border-stone-line py-7 transition-colors sm:grid-cols-12 sm:gap-6 sm:py-9"
              >
                <span className="font-display text-xs text-rust sm:col-span-1">
                  {s.index}
                </span>

                <motion.h3
                  animate={{ x: isHovered ? 10 : 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-2xl font-semibold tracking-tight sm:col-span-4 sm:text-3xl"
                >
                  {s.title}
                </motion.h3>

                <p className="font-body text-sm leading-relaxed text-ink-soft sm:col-span-6 sm:text-[15px]">
                  {s.description}
                </p>

                <motion.span
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -6 }}
                  transition={{ duration: 0.3 }}
                  className="hidden font-display text-xl text-rust sm:col-span-1 sm:block sm:text-right"
                  aria-hidden="true"
                >
                  ↗
                </motion.span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
