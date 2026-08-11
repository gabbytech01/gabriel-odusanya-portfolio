import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ivory">
      <div className="mx-auto max-w-edit px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12">
          <div className="sm:col-span-5">
            <p className="font-display text-xl font-bold tracking-tight">GABBYTECH.</p>
            <p className="mt-1 font-display text-[11px] tracking-widest2 uppercase text-ink-soft">
              Application Security Engineer
            </p>
            <p className="mt-4 font-body text-sm text-ink-soft">Nigeria · Working Worldwide</p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="border-b border-transparent font-display text-[11px] tracking-widest2 uppercase text-ink-soft transition-colors hover:border-rust hover:text-rust"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-4">
            <p className="font-display text-[11px] tracking-widest2 uppercase text-ink-soft">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((s) => (
                <li key={s} className="font-body text-sm text-ink-soft">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-3">
            <p className="font-display text-[11px] tracking-widest2 uppercase text-ink-soft">
              Contact
            </p>
            <a
              href="mailto:gabbytechsec@gmail.com"
              className="mt-4 inline-block font-body text-sm text-ink underline decoration-stone-line underline-offset-4 hover:decoration-rust"
            >
              gabbytechsec@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-stone-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-ink-soft">© 2026 Gabriel Odusanya</p>
          <p className="font-body text-xs text-ink-soft">Built with intention, in Lagos.</p>
        </div>
      </div>
    </footer>
  );
}
