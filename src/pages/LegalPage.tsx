import { Link } from "react-router-dom";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

const LegalPage = ({ eyebrow, title, intro, sections }: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-6">
          <Link
            to="/"
            className="font-mono text-lg font-medium uppercase tracking-tighter transition-colors hover:text-primary"
          >
            Shifted.System
          </Link>
          <Link
            to="/"
            className="rounded-sm bg-foreground px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-background transition-colors hover:bg-primary"
          >
            Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-14">
          <div className="mb-4 font-mono text-xs text-primary">{eyebrow}</div>
          <h1 className="mb-5 text-4xl font-black tracking-tight md:text-6xl">{title}</h1>
          <p className="max-w-2xl font-mono text-sm leading-7 text-muted-foreground">{intro}</p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Last updated: 6 June 2026
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="border-t border-border pt-8">
              <h2 className="mb-4 font-mono text-sm font-bold uppercase tracking-widest">{section.title}</h2>
              <div className="space-y-4 text-sm leading-7 text-muted-foreground">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LegalPage;
