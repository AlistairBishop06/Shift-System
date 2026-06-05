import { useState, type FormEvent } from "react";
import { toast } from "@/hooks/use-toast";

const concepts = [
  { id: "library", label: "Library / Archive" },
  { id: "galaxy", label: "Galaxy / Orbit" },
  { id: "terrain", label: "Terrain / Map" },
  { id: "console", label: "Console / Room" },
  { id: "custom", label: "Co-design with me" },
];

const IntakeForm = () => {
  const [concept, setConcept] = useState("library");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request received",
      description: "We'll reach out within 24h with next steps.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="initialize" className="px-6 py-32 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="font-mono text-xs text-primary mb-4">[05] COMMISSION BRIEF</div>
        <h2 className="text-4xl font-black tracking-tight mb-4">Tell me what world to build.</h2>
        <p className="font-mono text-sm text-muted-foreground">
          Quick brief. I reply within 24h with a concept sketch and quote.
        </p>
      </div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              GitHub Username
            </label>
            <input
              required
              type="text"
              placeholder="@yourname"
              className="w-full bg-surface border border-border p-4 font-mono text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Contact Email
            </label>
            <input
              required
              type="email"
              placeholder="hello@example.com"
              className="w-full bg-surface border border-border p-4 font-mono text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            World Concept
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {concepts.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setConcept(s.id)}
                className={`p-4 border bg-surface cursor-pointer flex flex-col items-center gap-2 transition-colors ${
                  concept === s.id ? "border-primary text-primary" : "border-border hover:border-muted-foreground"
                }`}
              >
                <span className="text-[11px] font-mono text-center leading-tight">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            What should it feel like?
          </label>
          <textarea
            rows={4}
            placeholder="Reference sites, atmosphere, vibe, a metaphor that fits your work..."
            className="w-full bg-surface border border-border p-4 font-mono text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <button
          type="submit"
          className="w-full py-6 bg-foreground text-background font-mono font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300"
        >
          Send Commission Brief
        </button>
      </form>
    </section>
  );
};

export default IntakeForm;