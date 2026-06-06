const features = [
  { num: "01", title: "Spatial Navigation", desc: "First-person WASD, drag-to-orbit, fly cams. Visitors move through your work instead of scrolling past it." },
  { num: "02", title: "Repo-as-Object", desc: "Every repository becomes a tangible thing — a book, a planet, a voxel, a CRT. Pick it up, open it, read it." },
  { num: "03", title: "Live GitHub Bind", desc: "The scene rebuilds from your API automatically. New repos shelve themselves. Languages re-tint. Stars reweight the world." },
  { num: "04", title: "Diegetic Interactions", desc: "Controls live inside the fiction. Press E to open. Hit the desk to clone. No floating UI chrome breaking the spell." },
  { num: "05", title: "Bespoke Physics", desc: "Custom shaders, motion, and sound per commission. Nothing pulled from a marketplace, no two worlds alike." },
  { num: "06", title: "Ship-Ready Build", desc: "Three.js / R3F under the hood, performance-tuned, mobile-aware fallback, deploys to Vercel or GitHub Pages in one command." },
];

const Features = () => {
  return (
    <section id="stack" className="px-6 py-32 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <div className="font-mono text-xs text-primary mb-4">[03] INTERACTION PRIMITIVES</div>
            <h2 className="text-4xl font-bold tracking-tighter">What every world is built from.</h2>
            <p className="mt-4 text-muted-foreground font-mono text-sm leading-relaxed">
              While each site may look and feel totally unique, every one has the same core functionality - displaying your repositories.
            </p>
          </div>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {features.map((f) => (
            <div key={f.num} className="bg-background p-8">
              <span className="font-mono text-primary">{f.num}</span>
              <h3 className="mt-4 font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;