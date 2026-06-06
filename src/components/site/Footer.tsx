const Footer = () => {
  return (
    <footer className="p-12 border-t border-border flex flex-col md:flex-row justify-between gap-12">
      <div className="space-y-4">
        <div className="font-mono font-bold text-xl tracking-tighter uppercase">Shifted.System</div>
        <p className="text-xs text-muted-foreground max-w-xs font-mono">
          Built for the 1% who build the 99%.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div className="space-y-2">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Social
          </span>
          <div className="flex flex-col gap-1 text-sm font-mono">
            <a href="https://www.instagram.com/shifted.system/" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="space-y-2">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Legal
          </span>
          <div className="flex flex-col gap-1 text-sm font-mono">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
      <div className="text-[10px] font-mono text-muted-foreground text-right self-end uppercase tracking-[0.2em]">
        © 2026 Shifted System Studio.
      </div>
    </footer>
  );
};

export default Footer;