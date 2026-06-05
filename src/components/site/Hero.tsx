const Hero = () => {
  return (
    <section className="px-6 pt-24 pb-32 max-w-7xl mx-auto grid grid-cols-12 gap-8 items-end">
      <div className="col-span-12 lg:col-span-7 animate-in-up">
        <div className="font-mono text-xs text-primary mb-6 flex items-center gap-4">
          <span>[01] INTERACTIVE PORTFOLIO STUDIO</span>
          <span className="h-px w-24 bg-border" />
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-balance mb-8">
          YOUR REPOS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300">
            DESERVE A WORLD.
          </span>
        </h1>
        <p className="max-w-lg text-muted-foreground leading-relaxed font-mono text-sm">
          I build inhabitable portfolio experiences — infinite 3D libraries where each book
          is a repo, observable galaxies of your commits, walk-in terminals. Not pages.
          <span className="text-foreground"> Worlds.</span>
        </p>
        <div className="mt-10 flex flex-wrap gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="px-3 py-1.5 border border-border">WASD navigation</span>
          <span className="px-3 py-1.5 border border-border">First-person scenes</span>
          <span className="px-3 py-1.5 border border-border">Repo-as-object</span>
          <span className="px-3 py-1.5 border border-border">Bespoke physics</span>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-5 animate-in-up [animation-delay:200ms]">
        <div className="bg-surface/50 border border-border p-6 rounded-lg ring-1 ring-white/5">
          <div className="flex gap-2 mb-4">
            <div className="size-2.5 rounded-full bg-muted" />
            <div className="size-2.5 rounded-full bg-muted" />
            <div className="size-2.5 rounded-full bg-muted" />
          </div>
          <div className="font-mono text-[13px] space-y-2">
            <p className="text-muted-foreground">{"// Booting world: the_archive"}</p>
            <p className="text-foreground">
              $ <span className="text-primary">load</span>{" "}
              --scene <span className="text-sky-400">"infinite_library"</span>
            </p>
            <p className="text-muted-foreground/80">Cataloguing 47 repositories...</p>
            <p className="text-muted-foreground/80">Binding leather. Shelving by language...</p>
            <p className="text-green-500">Ready. Press E to open a book.</p>
            <p className="text-foreground">
              ${" "}
              <span className="animate-blink inline-block w-2 h-4 bg-primary align-middle" />
            </p>
          </div>
        </div>
        <div className="mt-3 flex gap-2 font-mono text-[10px] text-muted-foreground/70 uppercase tracking-widest">
          <span className="px-2 py-1 border border-border">W A S D</span>
          <span className="px-2 py-1 border border-border">Mouse</span>
          <span className="px-2 py-1 border border-border">E</span>
          <span className="px-2 py-1 border border-border">← →</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;