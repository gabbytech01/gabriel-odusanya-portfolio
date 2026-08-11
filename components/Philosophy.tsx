"use client";

import { motion } from "framer-motion";
import { philosophy } from "@/lib/data";

export default function Philosophy() {
  return (
    <section className="border-b border-stone-line bg-ink text-ivory">
      <div className="mx-auto max-w-edit px-5 py-20 sm:px-8 sm:py-28">
        <span className="font-display text-[11px] tracking-widest2 uppercase text-rust-tint">
          What guides the work
        </span>

        <div className="mt-10 grid grid-cols-1 divide-y divide-ivory/15 border-t border-ivory/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {philosophy.map((p, i) => (
            <motion.div
              key={p.index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="px-0 py-10 sm:px-8 sm:py-4"
            >
              <span className="font-display text-xs text-rust-tint">{p.index}</span>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-[1.6rem]">
                {p.title}
              </h3>
              <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-ivory/70">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
