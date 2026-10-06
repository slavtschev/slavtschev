import { Link } from "@/components/ReloadLink";
import { usePageTitle } from "@/hooks/use-page-title";

type Note = {
  title: string;
  category: string;
  date: string;
  image: string;
  link: string;
};

const notes: Note[] = [
  {
    title: "Why performance design needs a stronger system behind it.",
    category: "Notes",
    date: "January 9, 2026",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    link: "/playground",
  },
  {
    title: "Building faster workflows without flattening creative quality.",
    category: "Notes",
    date: "January 12, 2026",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    link: "/playground",
  },
  {
    title: "What I look for when shaping clearer digital experiences.",
    category: "Notes",
    date: "January 15, 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    link: "/playground",
  },
];

function NoteCard({
  title,
  category,
  date,
  image,
  link,
}: Note) {
  return (
    <Link to={link} className="block h-full">
      <article className="group h-full">
        <div className="aspect-video overflow-hidden rounded-[20px] bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-8 items-center rounded-[10px] bg-secondary px-3 text-[14px] font-medium leading-none text-foreground">
              {category}
            </span>
            <p className="web-small text-foreground/70">
              {date}
            </p>
          </div>

          <h2 className="web-title mt-4 text-foreground">
            {title}
          </h2>
        </div>
      </article>
    </Link>
  );
}

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
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-12">
          {notes.map((note) => (
            <div key={`${note.title}-${note.date}`} className="lg:col-span-4">
              <NoteCard {...note} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
