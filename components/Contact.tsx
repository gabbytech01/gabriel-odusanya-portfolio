"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Marked from "./Marked";

const whatsappNumber = "2349127643783";

const buildWhatsAppUrl = (text: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    goal: "Security assessment",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = `Hi Gabriel,%0A%0AName: ${form.name}%0ACompany: ${form.company}%0AEmail: ${form.email}%0AGoal: ${form.goal}%0A%0A${form.message || "I would like to talk about my security needs."}`;
    window.open(buildWhatsAppUrl(text), "_blank");
  };

  return (
    <section id="contact" className="border-b border-stone-line">
      <div className="mx-auto max-w-edit px-5 pb-14 pt-20 sm:px-8 sm:pt-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        >
          Have a security <Marked variant={0}>problem worth solving?</Marked>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-6 max-w-lg font-body text-[15px] leading-relaxed text-ink-soft sm:text-base"
        >
          Whether you’re securing a new product, reviewing an existing application, or building security into your engineering process, start with a few details and I’ll open WhatsApp with your request.
        </motion.p>
      </div>

      <div className="mx-auto grid max-w-edit gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-stone-line bg-ink px-8 py-12 text-ivory sm:px-10">
          <span className="font-display text-[11px] tracking-widest2 uppercase text-rust-tint">
            For organizations
          </span>
          <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Need an application, API or mobile security assessment?
          </h3>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ivory/80">
            Share the details of your project and what you need most: assessments, threat modeling, secure architecture advice, or a practical security review.
          </p>
          <div className="mt-10 space-y-6 font-body text-sm leading-relaxed text-ivory/90">
            <div>
              <p className="font-display text-[11px] uppercase tracking-widest2 text-rust">What I help with</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Application Security Assessments</li>
                <li>API & Authorization Reviews</li>
                <li>Threat Modeling & Secure Design</li>
                <li>DevSecOps and Engineering Collaboration</li>
              </ul>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-stone-line bg-white px-8 py-10 shadow-sm sm:px-10"
        >
          <div className="grid gap-6">
            <label className="font-body text-sm text-ink">
              Name
              <input
                type="text"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-stone-line/80 bg-ivory px-4 py-3 text-sm outline-none transition focus:border-rust focus:ring-2 focus:ring-rust/20"
                required
              />
            </label>

            <label className="font-body text-sm text-ink">
              Company
              <input
                type="text"
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
                placeholder="Company or product"
                className="mt-2 w-full rounded-2xl border border-stone-line/80 bg-ivory px-4 py-3 text-sm outline-none transition focus:border-rust focus:ring-2 focus:ring-rust/20"
              />
            </label>

            <label className="font-body text-sm text-ink">
              Email
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-stone-line/80 bg-ivory px-4 py-3 text-sm outline-none transition focus:border-rust focus:ring-2 focus:ring-rust/20"
                required
              />
            </label>

            <label className="font-body text-sm text-ink">
              What do you want to do?
              <select
                value={form.goal}
                onChange={(event) => setForm({ ...form, goal: event.target.value })}
                className="mt-2 w-full rounded-2xl border border-stone-line/80 bg-ivory px-4 py-3 text-sm outline-none transition focus:border-rust focus:ring-2 focus:ring-rust/20"
              >
                <option>Security assessment</option>
                <option>Threat modeling</option>
                <option>DevSecOps review</option>
                <option>Application security advisory</option>
                <option>Other</option>
              </select>
            </label>

            <label className="font-body text-sm text-ink">
              Brief message
              <textarea
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                rows={5}
                placeholder="Describe what you need in a few sentences"
                className="mt-2 w-full rounded-2xl border border-stone-line/80 bg-ivory px-4 py-3 text-sm outline-none transition focus:border-rust focus:ring-2 focus:ring-rust/20"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-rust px-6 py-3 text-[12px] font-display uppercase tracking-widest2 text-ivory transition-colors hover:bg-rust-deep"
          >
            Contact on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
