"use client";

import { motion } from "framer-motion";
import Marked from "./Marked";
import { caseStudies } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="border-b border-stone-line">
      <div className="mx-auto max-w-edit px-5 py-20 sm:px-8 sm:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
        >
          Security work that <Marked variant={0}>solves real problems.</Marked>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
          {caseStudies.map((c, i) => (
            <motion.article
              key={c.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col border-t border-stone-line pt-6"
            >
              <span className="font-display text-[11px] tracking-widest2 uppercase text-rust">
                Case study / {c.index}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-tight">
                {c.category}
              </h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-ink">
                {c.title}
              </p>

              <dl className="mt-6 space-y-4 border-t border-stone-line pt-6 text-sm">
                <div>
                  <dt className="font-display text-[10px] tracking-widest2 uppercase text-ink-soft">
                    Focus
                  </dt>
                  <dd className="mt-1 text-ink-soft">{c.focus}</dd>
                </div>
                <div>
                  <dt className="font-display text-[10px] tracking-widest2 uppercase text-ink-soft">
                    Outcome
                  </dt>
                  <dd className="mt-1 italic text-ink-soft">{c.outcome}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
