# GABBYTECH — Gabriel Odusanya portfolio

Editorial-style personal site for Gabriel Odusanya, Application Security
Engineer. Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What still needs real content

Nothing here is invented — client names, results, dates and stats are left as
clearly marked placeholders on purpose. Before this goes live, fill in:

1. **Photography.** Drop editorial portraits into `/public/images` and pass
   `src="/images/your-file.jpg"` into the `PortraitFrame` components in
   `components/Hero.tsx` and `components/About.tsx`. Until then, each frame
   renders a labeled placeholder instead of a stock photo.
2. **Case studies** — `lib/data.ts` → `caseStudies`. Only publish an
   engagement once you're cleared to describe it, even anonymously.
3. **Experience dates** — `lib/data.ts` → `experience`.
4. **Metrics** — `components/Metrics.tsx`. The array starts empty and the
   section stays hidden until you add verified numbers (applications tested,
   people trained, etc.). Don't estimate — leave it empty until it's real.
5. **Writing** — `lib/data.ts` → `articles`. The four entries are the example
   titles from the brief; swap in real published pieces and links.
6. **Social links** — `lib/data.ts` → `footerLinks.social` (LinkedIn, GitHub,
   YouTube, HackMD currently point to `#`).

## Structure

```
app/
  layout.tsx      fonts, metadata, SEO
  page.tsx         assembles every section
  globals.css      tokens, grain texture, signature underline animation
components/         one file per section
lib/data.ts         all editable copy/content in one place
```

## Design notes

- Palette, type and layout follow the brief's editorial direction: warm
  ivory background, near-black type, a burnt-orange accent used sparingly,
  and a restrained deep blue held in reserve.
- The signature visual device is the hand-drawn orange underline (`Marked`
  component) — it reads as a reviewer's ink stroke marking up a report,
  tying back to the "evidence before assumption" principle, rather than a
  decorative highlight.
- Motion is intentionally restrained: a scroll progress line, section
  fade/slide-ins on scroll, and hover feedback on interactive rows — nothing
  ambient or looping.
