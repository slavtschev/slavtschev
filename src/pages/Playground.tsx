import { ArrowUpRight } from "lucide-react";
import { Link } from "@/components/ReloadLink";
import { usePageTitle } from "@/hooks/use-page-title";

const note = {
  title: "Vibe Flow: vibe coding in After Effects",
  category: "After Effects",
  description: "How I built a localization plugin for After Effects by prompting, one step at a time.",
  image: "/notes/vibe-flow.jpg",
  link: "/playground",
};

export default function Playground() {
  usePageTitle("Notes");
  return (
    <>
      <section className="container-wide pt-24 pb-0 md:pt-28 lg:pt-[128px] lg:pb-0">
        <div className="grid grid-cols-1 items-start">
          <h1 className="web-headline max-w-[14ch] text-foreground">
            Notes on how the work gets made.
          </h1>
        </div>

        <div className="mt-[64px] w-full border-t border-foreground/20" aria-hidden />
      </section>

      <section className="container-wide pt-[64px] pb-[128px]">
        <Link to={note.link} className="group block">
          <article className="grid grid-cols-1 items-center gap-8 rounded-[20px] bg-foreground p-8 text-background sm:p-10 lg:grid-cols-2 lg:gap-12">
            <div className="aspect-video overflow-hidden rounded-[12px] bg-background/10">
              <img
                src={note.image}
                alt="Vibe Flow running inside After Effects, rendering 24 language versions"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col items-start gap-4">
              <span className="inline-flex h-8 items-center rounded-[10px] bg-background/10 px-3 web-small text-background/80">
                {note.category}
              </span>
              <h2 className="web-title text-background">{note.title}</h2>
              <p className="web-body text-background/68">{note.description}</p>
              <span className="mt-2 inline-flex items-center gap-2 web-body text-background">
                Read the note
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 ease-out group-hover:rotate-45"
                />
              </span>
            </div>
          </article>
        </Link>
      </section>
    </>
  );
}
