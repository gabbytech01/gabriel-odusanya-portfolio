"use client";

import { motion } from "framer-motion";
import Marked from "./Marked";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="border-b border-stone-line bg-ivory-dim">
      <div className="mx-auto max-w-edit px-5 py-20 sm:px-8 sm:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
        >
          Built through <Marked variant={1}>real security work.</Marked>
        </motion.h2>

        <div className="mt-14 border-t border-stone-line">
          {experience.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="grid grid-cols-1 gap-2 border-b border-stone-line py-8 sm:grid-cols-12 sm:gap-6"
            >
              <span className="font-display text-xs tracking-widest2 uppercase text-ink-soft sm:col-span-2">
                {e.period}
              </span>
              <h3 className="font-display text-xl font-semibold tracking-tight sm:col-span-4">
                {e.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-ink-soft sm:col-span-6 sm:text-[15px]">
                {e.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
