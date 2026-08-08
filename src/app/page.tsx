/**
 * Phase 1 theme specimen.
 *
 * Temporary — replaced in Phase 4+ as real sections land. Exists so the
 * design tokens can be eyeballed against the Figma reference renders in
 * public/images/_reference/frames/.
 */
const swatches = [
  { name: "brand", cls: "bg-brand", hex: "#F3C41A" },
  { name: "brand-bright", cls: "bg-brand-bright", hex: "#FFC700" },
  { name: "accent", cls: "bg-accent", hex: "#F79329" },
  { name: "accent-deep", cls: "bg-accent-deep", hex: "#ED6C30" },
  { name: "ink", cls: "bg-ink", hex: "#000000" },
  { name: "footer", cls: "bg-footer", hex: "#333131" },
  { name: "surface", cls: "bg-surface", hex: "#F8F8F8" },
  { name: "muted", cls: "bg-muted", hex: "#888888" },
  { name: "line", cls: "bg-line", hex: "#CCCCCC" },
];

const type = [
  { name: "display / 64", cls: "text-display" },
  { name: "h1 / 51", cls: "text-h1" },
  { name: "h2 / 45", cls: "text-h2" },
  { name: "h3 / 30", cls: "text-h3" },
  { name: "lg / 22", cls: "text-lg" },
  { name: "base / 18", cls: "text-base" },
  { name: "sm / 15", cls: "text-sm" },
  { name: "xs / 12", cls: "text-xs" },
];

export default function Home() {
  return (
    <main className="py-section">
      <div className="container-boldixer space-y-16">
        <header>
          <p className="eyebrow">00 --- Theme</p>
          <h1 className="text-display mt-2">Boldixer Pro costruction</h1>
          <p className="text-lg text-muted mt-4 max-w-2xl">
            Phase 1 specimen — Inter, tokens, container and type scale.
          </p>
        </header>

        <section>
          <h2 className="text-h3 mb-6">Color</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {swatches.map((s) => (
              <div key={s.name}>
                <div
                  className={`${s.cls} h-20 w-full rounded border border-line`}
                />
                <p className="text-sm mt-2 font-semibold">{s.name}</p>
                <p className="text-xs text-muted">{s.hex}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-h3 mb-6">Type scale</h2>
          <div className="space-y-4">
            {type.map((t) => (
              <div
                key={t.name}
                className="flex flex-wrap items-baseline gap-x-6 border-b border-line pb-3"
              >
                <span className="text-xs text-muted w-28 shrink-0">
                  {t.name}
                </span>
                <span className={t.cls}>We Help Pepole Elevate Happines</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-h3 mb-6">Buttons (Phase 2 preview)</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-brand text-ink rounded-full px-8 py-4 text-sm font-semibold">
              About Compnay
            </span>
            <span className="bg-ink text-white rounded-full px-8 py-4 text-sm font-semibold">
              Get a Quote
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
