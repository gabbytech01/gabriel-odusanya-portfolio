"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { footerLinks } from "@/lib/data";

export default function About() {
  return (
    <section className="border-b border-stone-line">
      <div className="mx-auto max-w-edit px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-display text-[11px] tracking-widest2 uppercase text-rust"
            >
              ABOUT / 01
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Gabriel Odusanya
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-3xl font-body text-[15px] leading-relaxed text-ink-soft sm:text-base"
            >
              I’m an <strong>Application Security Engineer</strong> focused on helping organizations build, test, and ship more secure software. I work across application security, web and API security, penetration testing, threat modeling, and security throughout the software development lifecycle.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 max-w-3xl font-body text-[15px] leading-relaxed text-ink-soft sm:text-base"
            >
              Alongside engineering, I’m a <strong>cybersecurity educator, public speaker, YouTuber, and mentor</strong>, creating practical content that helps people understand security beyond theory, tools, and certifications.
            </motion.p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-stone-line bg-ivory shadow-sm">
            <div className="relative h-[520px] w-full sm:h-[600px] lg:h-[680px]">
              <Image
                src="/images/DSC03133.jpg"
                alt="Gabriel Odusanya portrait"
                fill
                sizes="(min-width: 1024px) 460px, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-edit px-5 pb-28 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-10">
          <section className="rounded-3xl border border-stone-line bg-ivory px-8 py-10 shadow-sm">
            <span className="font-display text-[11px] tracking-widest2 uppercase text-rust">
              THE WORK / 02
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              I build security by understanding how applications are built, how they break, and how they can be made resilient.
            </h2>
            <p className="mt-6 font-body text-[15px] leading-relaxed text-ink-soft sm:text-base">
              My work focuses on <strong>Web Application Security, API Security, Penetration Testing, Secure SDLC, Threat Modeling, DevSecOps, and Cloud Security</strong>. I approach security from both sides of the equation: understanding how an attacker can abuse a system and understanding what engineering teams need to do to prevent, detect, and remediate those weaknesses.
            </p>
            <p className="mt-4 font-body text-[15px] leading-relaxed text-ink-soft sm:text-base">
              I’m particularly interested in helping organizations move security <strong>earlier into the development lifecycle</strong>, rather than waiting until an application is already in production to discover critical vulnerabilities.
            </p>
            <p className="mt-4 font-body text-[15px] leading-relaxed text-ink-soft sm:text-base">
              Outside of client and engineering work, I share what I learn through <strong>YouTube, LinkedIn, X, and technical content</strong>, breaking down security concepts, tools, vulnerabilities, methodologies, and career lessons in a practical way.
            </p>
            <p className="mt-4 font-body text-[15px] leading-relaxed text-ink-soft sm:text-base">
              I also mentor aspiring cybersecurity professionals who want to transition from simply <em>learning cybersecurity</em> to actually <strong>becoming useful security practitioners</strong>.
            </p>
          </section>

          <section className="space-y-10">
            <div className="rounded-3xl border border-stone-line bg-white px-8 py-10 shadow-sm">
              <span className="font-display text-[11px] tracking-widest2 uppercase text-ink-soft">
                WHAT GUIDES THE WORK
              </span>
              <div className="mt-6 space-y-6 font-body text-[15px] leading-relaxed text-ink-soft sm:text-base">
                <div>
                  <p className="font-display text-sm uppercase tracking-widest2 text-ink">01 — Security should be practical.</p>
                  <p className="mt-3">Security knowledge means little if it cannot be applied to a real system, development workflow, or business problem.</p>
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-widest2 text-ink">02 — Understand the attack path.</p>
                  <p className="mt-3">I focus on understanding how vulnerabilities can actually be chained and exploited, not just identifying a vulnerability because a scanner reported it.</p>
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-widest2 text-ink">03 — Security belongs in engineering.</p>
                  <p className="mt-3">Application security shouldn&apos;t be a final checkpoint before deployment. It should be part of how software is designed, developed, tested, and maintained.</p>
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-widest2 text-ink">04 — Share what you learn.</p>
                  <p className="mt-3">Cybersecurity moves fast. I believe the industry becomes stronger when practitioners document their work, teach others, and make technical knowledge more accessible.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-stone-line bg-white px-8 py-10 shadow-sm">
              <span className="font-display text-[11px] tracking-widest2 uppercase text-ink-soft">
                THE JOURNEY / 03
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                From breaking applications to helping build them securely.
              </h2>
              <p className="mt-6 font-body text-[15px] leading-relaxed text-ink-soft sm:text-base">
                My cybersecurity journey has evolved from <strong>ethical hacking and bug hunting into application security engineering</strong>, with a growing focus on how security can be integrated into modern software development.
              </p>
              <p className="mt-4 font-body text-[15px] leading-relaxed text-ink-soft sm:text-base">
                I&apos;ve spent time working with technologies and security tooling across <strong>web applications, APIs, cloud environments, Linux, containers, CI/CD pipelines, and security testing workflows</strong>.
              </p>
              <p className="mt-4 font-body text-[15px] leading-relaxed text-ink-soft sm:text-base">
                Today, I&apos;m focused on becoming a stronger security engineer while building an online platform around <strong>education, engineering, and knowledge sharing</strong>.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="mx-auto max-w-edit px-5 pb-28 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <section className="rounded-3xl border border-stone-line bg-ivory px-8 py-10 shadow-sm">
            <span className="font-display text-[11px] tracking-widest2 uppercase text-rust">
              FOR ORGANIZATIONS
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Building software?
            </h2>
            <p className="mt-6 font-body text-[15px] leading-relaxed text-ink-soft sm:text-base">
              Let&apos;s make it harder to break. I help organizations think more seriously about application security — from identifying vulnerabilities to understanding where security fits within the development lifecycle.
            </p>
            <p className="mt-8 font-display text-[12px] uppercase tracking-widest2 text-rust">Work with Gabriel ↗</p>
          </section>

          <section className="rounded-3xl border border-stone-line bg-ivory px-8 py-10 shadow-sm">
            <span className="font-display text-[11px] tracking-widest2 uppercase text-rust">
              FOR ASPIRING SECURITY PROFESSIONALS
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Building your cybersecurity career?
            </h2>
            <p className="mt-6 font-body text-[15px] leading-relaxed text-ink-soft sm:text-base">
              Learn security by actually doing security. Through my content and mentorship, I share practical lessons around Application Security, penetration testing, cybersecurity engineering, tools, career development, and the realities of working in security.
            </p>
            <p className="mt-8 font-display text-[12px] uppercase tracking-widest2 text-rust">Explore my content ↗</p>
          </section>
        </div>
      </div>

      <div className="mx-auto max-w-edit px-5 pb-28 sm:px-8">
        <div className="rounded-3xl border border-stone-line bg-white px-8 py-10 shadow-sm">
          <p className="font-display text-xs uppercase tracking-widest2 text-ink-soft">GABRIEL</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            ODUSANYA.
          </h2>
          <p className="mt-6 font-body text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Application Security Engineer<br />Educator · YouTuber · Mentor<br /><br />Application Security<br />Web & API Security<br />Penetration Testing<br />Threat Modeling<br />DevSecOps
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {footerLinks.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-display text-sm uppercase tracking-widest2 text-ink transition-colors hover:text-rust"
                target="_blank"
                rel="noreferrer"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
