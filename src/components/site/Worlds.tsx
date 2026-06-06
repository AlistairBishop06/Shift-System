import archive from "@/assets/world-archive.jpg";
import orbit from "@/assets/world-orbit.jpg";
import terrain from "@/assets/world-terrain.jpg";
import console_ from "@/assets/world-console.jpg";

type World = {
  num: string;
  name: string;
  metaphor: string;
  status: "Live" | "Concept";
  desc: string;
  controls: string[];
  img: string;
  alt: string;
  href?: string;
  featured?: boolean;
};

const worlds: World[] = [
  {
    num: "00",
    name: "The Archive",
    metaphor: "Repos as books · Languages as spine colours",
    status: "Live",
    desc: "An infinite first-person library. Walk the aisles, pull a book from the shelf, open it to read the README, turn pages through the commit history, check out at the desk to clone.",
    controls: ["W A S D", "Mouse", "E", "← →", "Q"],
    img: archive,
    alt: "First-person view of an infinite dark library with glowing spines",
    href: "https://alistairbishop06.github.io/",
    featured: true,
  },
  {
    num: "01",
    name: "Orbit",
    metaphor: "Repos as luminous bodies in a navigable galaxy",
    status: "Live",
    desc: "A zero-gravity scene. Highest commit repos are stars, with orbiting repositories of the same language.",
    controls: ["Drag", "Scroll", "Click"],
    img: orbit,
    alt: "Constellation of glowing repo nodes connected by faint blue threads",
    href: "https://alistairbishop06.github.io/portfolio-orbit/",
    featured: true,
  },
  {
    num: "02",
    name: "Terrain",
    metaphor: "Commit graph as 3D voxel landscape",
    status: "Live",
    desc: "Your year of contributions becomes a heightmap you can fly over. Streaks rise into mountain ranges, dry spells fall into valleys, languages tint the biome.",
    controls: ["Fly", "Click", "Time scrub"],
    img: terrain,
    alt: "Glowing voxel terrain representing contribution data",
    href: "https://alistairbishop06.github.io/portfolio-terrain/",
    featured: true,
  },
  {
    num: "03",
    name: "Console",
    metaphor: "Operator workstation · Cmd+K career browser",
    status: "Live",
    desc: "A retrofuturistic terminal room. CRTs boot your projects, commands navigate the resume, and visitors can see each repo on its own CRT monitor",
    controls: ["Cmd+K", "Type", "Enter"],
    img: console_,
    alt: "Dimly lit operator workstation with glowing teal CRT monitors",
    href: "https://alistairbishop06.github.io/portfolio-crt/",
    featured: true,
  },
];

const Worlds = () => {
  return (
    <section id="gallery" className="border-y border-border">
      <div className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="font-mono text-xs text-primary mb-4">[02] SELECTED WORLDS</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Each portfolio is a place,<br />not a page.
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 font-mono text-sm text-muted-foreground">
            One built, three blueprints in motion. Every commission ships as a self-contained
            interactive scene — engineered, never templated.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-border">
        {worlds.map((w, i) => (
          <article
            key={w.num}
            className={`group relative border-border ${
              i % 2 === 0 ? "lg:border-r" : ""
            } ${i < worlds.length - 2 ? "lg:border-b" : ""} ${
              i < worlds.length - 1 && i % 2 !== 0 ? "border-b lg:border-b-0" : ""
            } ${i < worlds.length - 2 ? "border-b" : ""} overflow-hidden`}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-soft">
              <img
                src={w.img}
                alt={w.alt}
                loading="lazy"
                width={1600}
                height={1200}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
                <span className="px-2 py-1 bg-background/80 border border-border text-muted-foreground">
                  WORLD_{w.num}
                </span>
                <span
                  className={`px-2 py-1 border ${
                    w.status === "Live"
                      ? "bg-primary/10 border-primary/40 text-primary"
                      : "bg-background/80 border-border text-muted-foreground"
                  }`}
                >
                  ● {w.status}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-10 space-y-5">
              <div>
                <h3 className="text-3xl font-bold tracking-tight">{w.name}</h3>
                <p className="mt-2 font-mono text-xs text-primary">{w.metaphor}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-prose">{w.desc}</p>
              <div className="flex flex-wrap gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                {w.controls.map((c) => (
                  <span key={c} className="px-2 py-1 border border-border bg-surface">
                    {c}
                  </span>
                ))}
              </div>
              {w.href && (
                <a
                  href={w.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  View Demo
                  <span aria-hidden>↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Worlds;