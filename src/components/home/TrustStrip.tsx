const trustItems = [
  { icon: "🔬", label: "Dermatologist Tested" },
  { icon: "🌿", label: "100% Natural Actives" },
  { icon: "🐰", label: "Cruelty Free" },
  { icon: "♻️", label: "Sustainable Packaging" },
  { icon: "🇮🇳", label: "Made in India" },
  { icon: "⚡", label: "Fast & Visible Results" },
];

export function TrustStrip() {
  return (
    <section className="bg-sage-700 py-4 overflow-hidden">
      <div className="flex items-center gap-12 animate-none">
        <div className="flex items-center gap-12 min-w-max px-8">
          {[...trustItems, ...trustItems].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 shrink-0 text-white"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium whitespace-nowrap">
                {item.label}
              </span>
              <span className="text-sage-400 text-lg ml-4">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
