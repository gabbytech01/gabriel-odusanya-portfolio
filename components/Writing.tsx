"use client";

import { motion } from "framer-motion";
import Marked from "./Marked";
import { articles } from "@/lib/data";

export default function Writing() {
  return (
    <section id="writing" className="border-b border-stone-line">
      <div className="mx-auto max-w-edit px-5 py-20 sm:px-8 sm:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
        >
          Thinking about <Marked variant={2}>security.</Marked>
        </motion.h2>

        <div className="mt-14 border-t border-stone-line">
          {articles.map((a, i) => (
            <motion.a
              key={a.title}
              href={a.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group grid grid-cols-1 items-start gap-2 border-b border-stone-line py-8 transition-colors hover:bg-ivory-dim sm:grid-cols-12 sm:items-center sm:gap-6"
            >
              <span className="font-display text-[11px] tracking-widest2 uppercase text-rust sm:col-span-3">
                {a.category}
              </span>
              <div className="sm:col-span-6">
                <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                  {a.title}
                </h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-soft">
                  {a.description}
                </p>
              </div>
              <span className="font-display text-xs text-ink-soft sm:col-span-1">
                {a.date}
              </span>
              <span className="inline-flex items-center gap-1.5 font-display text-[11px] tracking-widest2 uppercase text-ink sm:col-span-2 sm:justify-self-end">
                Read article
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-rust" aria-hidden="true">
                  ↗
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
