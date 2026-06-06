const tiers = [
  {
    name: "Template",
    price: "£50",
    features: [
      "Choose a pre-built design",
      "Live GitHub repo binding",
      "Full file access and deployment guide",
      "Fast Delivery",
    ],
    featured: true,
  },
  {
    name: "Bespoke",
    price: "£100",
    features: [
      "Design your own interactive portfolio",
      "Live GitHub repo binding",
      "Full file access and deployment guide",
      "Direct contact for iteration and changes",
    ],
    featured: false,
  }
];

const Pricing = () => {
  return (
    <section id="cost" className="bg-surface py-32 border-y border-border px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-primary mb-4">[04] COMMISSION TIERS</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Pick a depth.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`p-8 rounded-lg bg-background flex flex-col relative ${
                t.featured ? "border-2 border-primary" : "border border-border"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-mono font-bold uppercase tracking-widest rounded-full">
                  Recommended
                </div>
              )}
              <span className="font-mono text-xs text-muted-foreground mb-4">Tier: {t.name}</span>
              <div className="text-4xl font-bold mb-6">{t.price}</div>
              <ul className="space-y-4 font-mono text-[13px] text-muted-foreground mb-8 flex-grow">
                {t.features.map((f) => (
                  <li key={f}>+ {f}</li>
                ))}
              </ul>
              <a
                href="#initialize"
                className={`w-full py-3 text-xs font-mono uppercase tracking-widest text-center transition-colors ${
                  t.featured
                    ? "bg-primary text-primary-foreground font-bold hover:opacity-90"
                    : "border border-border hover:bg-foreground hover:text-background"
                }`}
              >
                {t.featured ? "Select Pro" : "Select"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;