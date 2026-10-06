import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/components/ReloadLink";
import { usePageTitle } from "@/hooks/use-page-title";

const pages = [
  { number: "01", name: "Work", description: "4 case studies, each with the system behind it", path: "/systems" },
  { number: "02", name: "Outputs", description: "Screens, sites and motion pieces", path: "/outputs" },
  { number: "03", name: "Notes", description: "How I build, written as I go", path: "/playground" },
  { number: "04", name: "About", description: "The person, the record and the method", path: "/about" },
  { number: "05", name: "Contact", description: "Email and profiles", path: "/contact" },
];

export default function NotFound() {
  const location = useLocation();
  usePageTitle("Page not found");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <section className="container-wide pt-24 pb-0 md:pt-28 lg:pt-[128px] lg:pb-0">
        <div className="flex max-w-[56rem] flex-col gap-6">
          <span className="web-label text-muted-foreground">404 · Page not found</span>
          <h1 className="web-display text-foreground">This address leads nowhere.</h1>
          <p className="web-lead max-w-[36ch] text-foreground/68">
            The page may have moved when the site changed. Every page that exists is listed below.
          </p>
        </div>
      </section>

      <nav aria-label="Pages" className="container-wide pt-[64px] pb-[96px] lg:pb-[128px]">
        <div className="flex flex-col border-t border-foreground">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="group flex flex-wrap items-center gap-2 gap-x-6 border-b border-foreground/15 py-6 text-foreground transition-colors hover:text-accent"
            >
              <span className="w-12 shrink-0 web-label text-muted-foreground">{page.number}</span>
              <span className="web-title flex-1 basis-[240px]">{page.name}</span>
              <span className="web-body flex-[999] basis-[280px] text-muted-foreground">
                {page.description}
              </span>
              <ArrowUpRight
                size={18}
                className="shrink-0 transition-transform duration-300 ease-out group-hover:rotate-45"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
