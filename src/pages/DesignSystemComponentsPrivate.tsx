import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";
import { Link } from "@/components/ReloadLink";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const AUTH_STORAGE_KEY = "private-design-system-auth";

const SKILLS = ["System design", "Motion", "Automation", "Creative ops", "Web interfaces"];

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-card/30 p-6 md:p-8 space-y-5">
      <h2 className="text-[20px] leading-[1.2] font-medium [font-family:'Satoshi']">{title}</h2>
      {children}
    </section>
  );
}

function ProjectCardPreview({
  title,
  description,
  size,
}: {
  title: string;
  description: string;
  size: "small" | "medium" | "big";
}) {
  const classes = {
    small: "md:col-span-1",
    medium: "md:col-span-2",
    big: "md:col-span-3",
  };

  return (
    <article className={`rounded-2xl border border-border overflow-hidden bg-background ${classes[size]}`}>
      <div className="h-28 bg-gradient-to-r from-[#0050B3] to-[#3185FC]" />
      <div className="p-4 space-y-2">
        <h3 className="text-[16px] font-medium [font-family:'Satoshi']">{title}</h3>
        <p className="text-[14px] text-muted-foreground [font-family:'Satoshi']">{description}</p>
      </div>
    </article>
  );
}

export default function DesignSystemComponentsPrivate() {
  const requiredKey = import.meta.env.VITE_PRIVATE_DESIGN_SYSTEM_KEY as string | undefined;
  const [inputKey, setInputKey] = useState("");
  const [error, setError] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(() => {
    if (!requiredKey) return true;
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === "true";
  });

  useEffect(() => {
    document.title = "Private Components";

    const existingMeta = document.querySelector('meta[name="robots"]');
    const createdMeta = existingMeta ?? document.createElement("meta");
    createdMeta.setAttribute("name", "robots");
    createdMeta.setAttribute("content", "noindex, nofollow, noarchive");

    if (!existingMeta) {
      document.head.appendChild(createdMeta);
    }

    return () => {
      if (!existingMeta) {
        createdMeta.remove();
      } else {
        createdMeta.setAttribute("content", "index, follow");
      }
    };
  }, []);

  const requiresAuth = useMemo(() => Boolean(requiredKey), [requiredKey]);

  const handleUnlock = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!requiredKey) {
      setIsAuthorized(true);
      return;
    }

    if (inputKey === requiredKey) {
      sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
      setIsAuthorized(true);
      setError("");
      return;
    }

    setError("Access key is incorrect.");
  };

  if (requiresAuth && !isAuthorized) {
    return (
      <section className="container-wide py-32 min-h-[70vh] [font-family:'Satoshi']">
        <div className="max-w-xl space-y-8">
          <p className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Private Route</p>
          <h1 className="text-[40px] leading-[1.1] font-medium">Components Access</h1>
          <p className="text-[16px] leading-relaxed text-muted-foreground">
            This page is restricted. Enter your private key to continue.
          </p>

          <form className="space-y-4" onSubmit={handleUnlock}>
            <input
              type="password"
              value={inputKey}
              onChange={(event) => setInputKey(event.target.value)}
              placeholder="Private key"
              className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
              autoComplete="off"
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button
              type="submit"
              className="h-11 px-6 rounded-full bg-primary text-primary-foreground text-[16px] font-normal"
            >
              Unlock
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="container-wide py-28 md:py-32 [font-family:'Satoshi']">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="space-y-4">
          <p className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Private Design System</p>
          <h1 className="text-[40px] leading-[1.1] font-medium">Component Library</h1>
          <p className="text-[16px] text-muted-foreground max-w-2xl">
            Implemented components based on your list, ready to refine and reuse.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <SectionCard title="Buttons And Icons">
            <div className="flex flex-wrap items-center gap-4">
              <Button className="h-11 px-6 rounded-full text-[16px] font-normal [font-family:'Satoshi']">
                Button
              </Button>
              <Button className="h-11 px-5 rounded-full text-[16px] font-normal [font-family:'Satoshi']">
                Button Icon <ArrowRight size={16} />
              </Button>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border">
                <ArrowRight size={18} />
              </div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border">
                <Menu size={18} />
              </div>
            </div>
            <p className="text-[13px] text-muted-foreground">Includes: Button, Button Icon, Icon Arrow, Icon Menu</p>
          </SectionCard>

          <SectionCard title="Links And List">
            <div className="space-y-4">
              <Link
                to="/systems"
                className="inline-flex items-center gap-2 text-[16px] font-medium hover:text-[#0050B3] transition-colors"
              >
                Link Item
                <ArrowRight size={15} />
              </Link>
              <p>
                <a href="#" className="text-[16px] font-medium underline underline-offset-4 hover:text-[#0050B3] transition-colors">
                  Text Link
                </a>
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-xl border border-border bg-background px-3 py-2 text-[14px] text-foreground/90"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[13px] text-muted-foreground">Includes: Link Item, Text Link, List - Skills</p>
          </SectionCard>
        </div>

        <SectionCard title="Navigation Preview">
          <div className="w-full rounded-2xl border border-border px-5 py-4 bg-background">
            <div className="flex items-center justify-between gap-6">
              <p className="text-[22px] font-bold tracking-tight">SLAVTSCHEV</p>
              <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
                <li>About</li>
                <li>Case Studies</li>
                <li>Selected Outputs</li>
                <li>Notes</li>
              </ul>
              <Button className="h-10 rounded-full px-6 text-[16px] font-normal">Get in Touch</Button>
            </div>
          </div>
          <p className="text-[13px] text-muted-foreground">Includes: Navigation</p>
        </SectionCard>

        <SectionCard title="Project Cards">
          <div className="grid md:grid-cols-3 gap-4">
            <ProjectCardPreview
              size="small"
              title="Project Card Small"
              description="Compact format for secondary case studies."
            />
            <ProjectCardPreview
              size="medium"
              title="Project Card Medium"
              description="Balanced card for featured work blocks."
            />
            <ProjectCardPreview
              size="big"
              title="Project Card Big"
              description="Large storytelling card with headline emphasis."
            />
          </div>
          <p className="text-[13px] text-muted-foreground">Includes: Project Card Small, Project Card Medium, Project Card Big</p>
        </SectionCard>

        <SectionCard title="Footer Preview">
          <div className="rounded-2xl bg-foreground text-background p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-[24px] font-medium">Let's build something cool</h3>
              <Button variant="outline" className="border-background bg-transparent text-background hover:bg-background hover:text-foreground">
                Let's talk
              </Button>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-background/80">
              <span>Home</span>
              <span>Systems</span>
              <span>Selected Outputs</span>
              <span>About</span>
              <span>Contact</span>
            </div>
          </div>
          <p className="text-[13px] text-muted-foreground">Includes: Footer</p>
        </SectionCard>

        <div className="pt-2">
          <Link
            to="/_private/design-system"
            className="inline-flex items-center gap-2 text-[16px] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to token page
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
