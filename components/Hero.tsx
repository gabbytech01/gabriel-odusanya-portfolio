"use client";

import { motion } from "framer-motion";
import Marked from "./Marked";
import PortraitFrame from "./PortraitFrame";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative border-b border-stone-line">
      <div className="mx-auto grid max-w-edit grid-cols-1 gap-10 px-5 pb-14 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-12 lg:gap-6 lg:pb-0">
        <div className="lg:col-span-7 lg:pr-6 lg:pt-6">
          <motion.p
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="font-display text-[11px] tracking-widest2 uppercase text-ink-soft"
          >
            Gabriel Odusanya · Application Security Engineer
            <span className="mx-2 text-rust">—</span>
            Nigeria · Working Worldwide
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-6 font-display text-[13vw] font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.6rem] xl:text-[5.1rem]"
          >
            I secure applications.
            <br />
            <Marked variant={0}>I teach people how to secure them.</Marked>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-8 max-w-md font-body text-[15px] leading-relaxed text-ink-soft sm:text-base"
          >
            Application Security Engineer · Educator · YouTuber · Mentor.
            <br />
            I work across application security, web & API security, penetration
            testing, threat modeling, and DevSecOps — helping organizations build
            more secure software and helping the next generation of security
            professionals become better practitioners.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-ink px-6 py-3 font-display text-[12px] tracking-widest2 uppercase text-ivory transition-colors hover:bg-rust"
            >
              View my work <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 border-b border-ink pb-0.5 font-display text-[12px] tracking-widest2 uppercase text-ink transition-colors hover:border-rust hover:text-rust"
            >
              Work with me <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-5 lg:self-end"
        >
          <PortraitFrame
            src="/images/chatgpt-home.png"
            alt="ChatGPT-inspired AI security image"
            caption={{ name: "Gabriel Odusanya", role: "Application Security Engineer" }}
            priority
            className="aspect-[4/5] w-full lg:aspect-[3/4]"
          />
        </motion.div>
      </div>
    </section>
  );
}
