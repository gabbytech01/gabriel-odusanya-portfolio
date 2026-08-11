import { capabilities } from "@/lib/data";

export default function CapabilityStrip() {
  return (
    <div className="border-b border-stone-line bg-ivory-dim">
      <div className="mx-auto max-w-edit overflow-x-auto px-5 sm:px-8">
        <ul className="flex min-w-max items-center gap-8 py-4 sm:gap-10">
          {capabilities.map((c, i) => (
            <li key={c} className="flex items-center gap-8 sm:gap-10">
              <span className="font-display text-[11px] tracking-widest2 uppercase text-ink-soft">
                {c}
              </span>
              {i < capabilities.length - 1 && (
                <span className="text-rust" aria-hidden="true">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
