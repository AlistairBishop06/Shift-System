const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
      <a href="#" className="font-mono font-medium tracking-tighter text-lg uppercase flex items-center gap-2">
        <span className="size-2 bg-primary animate-pulse" />
        Shift.System
      </a>
      <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
        <a href="#stack" className="hover:text-primary transition-colors">Stack</a>
        <a href="#cost" className="hover:text-primary transition-colors">Cost</a>
      </div>
      <a href="#initialize" className="px-4 py-2 bg-foreground text-background text-xs font-mono uppercase tracking-widest font-bold rounded-sm hover:bg-primary transition-colors">
        Initialize
      </a>
    </nav>
  );
};

export default Nav;