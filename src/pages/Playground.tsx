import { ArrowUpRight } from "lucide-react";
import { Link } from "@/components/ReloadLink";
import { usePageTitle } from "@/hooks/use-page-title";

const featuredNote = {
  title: "Vibe Flow: vibe coding in After Effects",
  eyebrow: "Featured · After Effects · AI",
  description: "How I built a localization plugin for After Effects by prompting, one step at a time.",
  image: "/notes/vibe-flow.jpg",
  path: "/playground/vibe-flow",
  minutes: "6 min read",
};

const earlierNotes = [
  {
    date: "15 Jan 2026",
    title: "What I look for when shaping clearer digital experiences",
    description: "What clarity actually means when you're the one shaping the interface.",
    tag: "UX",
    minutes: "4 min",
    path: "/playground/digital-experiences",
  },
];

export default function Playground() {
  usePageTitle("Notes");
  return (
    <>
      <section className="container-wide pt-24 pb-0 md:pt-28 lg:pt-[128px] lg:pb-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[34rem] flex-col gap-4">
            <span className="web-label text-muted-foreground">Notes · 2 so far · newest first</span>
            <h1 className="web-display text-foreground">Notes</h1>
          </div>
          <p className="web-lead max-w-[24rem] text-foreground/68">
            How I build, written as I go. Systems, workflow, and the tools I make along the way.
          </p>
        </div>
      </section>

      <section className="container-wide pt-16 lg:pt-24">
        <Link
          to={featuredNote.path}
          className="group grid grid-cols-1 items-center gap-8 rounded-[12px] bg-foreground p-8 text-background no-underline lg:grid-cols-2 lg:gap-12"
        >
          <div className="aspect-video overflow-hidden rounded-[12px] bg-background/10">
            <img
              src={featuredNote.image}
              alt="Vibe Flow running inside After Effects, rendering 24 language versions"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col items-start gap-4">
            <span className="web-label text-white/50">{featuredNote.eyebrow}</span>
            <h2 className="web-title text-background">{featuredNote.title}</h2>
            <p className="web-body text-background/68">{featuredNote.description}</p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="inline-flex h-10 items-center gap-2 rounded-full bg-background px-6 text-[16px] font-medium leading-none text-foreground transition-colors group-hover:bg-background/90">
                Read the Note
                <ArrowUpRight size={18} className="transition-transform duration-300 ease-out group-hover:rotate-45" />
              </span>
              <span className="web-label text-white/50">{featuredNote.minutes}</span>
            </div>
          </div>
        </Link>
      </section>

      <section className="container-wide pt-24 pb-24 lg:pt-32 lg:pb-32">
        <div className="mb-12 flex max-w-[48rem] flex-col gap-4">
          <span className="web-label text-muted-foreground">Earlier notes</span>
          <h2 className="web-headline text-foreground">Systems, workflow and UX.</h2>
        </div>

        <div className="flex flex-col border-t border-foreground">
          {earlierNotes.map((note) => (
            <Link
              key={note.path}
              to={note.path}
              className="group flex flex-wrap items-baseline gap-x-6 gap-y-3 border-b border-foreground/15 py-8 text-foreground no-underline"
            >
              <span className="w-[140px] shrink-0 web-label text-foreground">{note.date}</span>
              <span className="flex-[999] basis-[320px] min-w-0">
                <span className="web-title block">{note.title}</span>
                <span className="web-body mt-2 block text-muted-foreground">{note.description}</span>
              </span>
              <span className="flex shrink-0 items-center gap-4">
                <span className="inline-flex h-8 items-center rounded-full bg-card px-4 text-[14px] font-medium text-foreground/68">
                  {note.tag}
                </span>
                <span className="web-label text-muted-foreground">{note.minutes}</span>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 transition-transform duration-300 ease-out group-hover:rotate-45"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
