// Only verified numbers belong here. Leave the array empty until real figures
// are confirmed — the section simply won't render rather than showing a placeholder stat.
// Example once verified:
// { value: "40+", label: "Applications tested" }
type Metric = { value: string; label: string };

const metrics: Metric[] = [];

export default function Metrics() {
  if (metrics.length === 0) return null;

  return (
    <section className="border-b border-stone-line">
      <div className="mx-auto max-w-edit px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="border-t border-stone-line pt-4">
              <div className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {m.value}
              </div>
              <div className="mt-1 font-display text-[11px] tracking-widest2 uppercase text-ink-soft">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
