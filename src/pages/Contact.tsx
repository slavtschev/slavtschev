import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { usePageTitle } from "@/hooks/use-page-title";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";

const revealEase = [0.25, 0.46, 0.45, 0.94] as const;

const email = "slavchev.dimitar@yahoo.com";

const profileLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/slavtschev/", placeholder: "linkedin.com/in/slavtschev" },
  { name: "Dribbble", href: "https://dribbble.com/slavtschev", placeholder: "dribbble.com/slavtschev" },
  { name: "GitHub", href: "https://github.com/slavtschev", placeholder: "github.com/slavtschev" },
  { name: "Instagram", href: "https://www.instagram.com/slavtschev/", placeholder: "instagram.com/slavtschev" },
];

const quickFacts: { label: string; value: string; href?: string }[] = [
  { label: "Now", value: "Motion design and creative production at Storytel" },
  { label: "Before", value: "Visual identity and design systems at Yettel, 6 years" },
  { label: "Based in", value: "Sofia, Bulgaria" },
  { label: "Phone", value: "+359 89 340 1023", href: "tel:+359893401023" },
  { label: "Languages", value: "Bulgarian, English" },
];

function useSofiaTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      try {
        setTime(
          new Date().toLocaleTimeString("en-GB", {
            timeZone: "Europe/Sofia",
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      } catch {
        setTime(null);
      }
    };

    update();
    const interval = window.setInterval(update, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return time;
}

export default function Contact() {
  usePageTitle("Contact");
  const pageSection = useInView({ threshold: 0.1, once: true });
  const bannerSection = useInView({ threshold: 0.1, once: true });
  const [copied, setCopied] = useState(false);
  const sofiaTime = useSofiaTime();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; the email link below still works.
    }
  };

  return (
    <div>
      <Section size="hero" ref={pageSection.ref}>
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <motion.div
            className="flex flex-col gap-4 lg:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, ease: revealEase }}
          >
            <span className="web-label text-muted-foreground">Info and contact</span>
            <h1 className="web-display text-foreground">Contact</h1>
          </motion.div>
          <motion.p
            className="web-lead text-foreground/68 lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.1, ease: revealEase }}
          >
            Email is the quickest way to reach me. My profiles and the basics are below.
          </motion.p>
        </div>
      </Section>

      <section ref={bannerSection.ref} className="container-wide pt-16 lg:pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={bannerSection.isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: revealEase }}
          className="flex flex-col gap-8 sm:relative sm:overflow-hidden sm:rounded-[12px] sm:bg-foreground sm:aspect-[8/3] sm:gap-0"
        >
          <img
            src="/contact/banner.svg"
            alt=""
            aria-hidden="true"
            className="order-2 hidden h-full w-full object-cover object-right sm:absolute sm:inset-0 sm:order-none sm:block"
          />
          <div className="order-1 flex flex-col items-start gap-6 sm:absolute sm:inset-0 sm:order-none sm:flex sm:max-w-[22rem] sm:items-center sm:justify-center sm:py-12 sm:pl-0 sm:pr-12">
            <span className="web-label text-muted-foreground">Email</span>
            <a
              href={`mailto:${email}`}
              className="break-all text-[28px] font-semibold leading-[1.05] tracking-tight text-foreground underline decoration-accent decoration-[3px] underline-offset-8 sm:text-[36px]"
            >
              {email}
            </a>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-card px-6 text-[16px] font-medium leading-none text-foreground transition-colors hover:bg-card/70"
              >
                {copied ? (
                  <>
                    <Check size={18} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy Address
                  </>
                )}
              </button>
              <Button asChild className="group h-10 rounded-full px-6 text-[16px] leading-none font-normal">
                <a href={`mailto:${email}`}>
                  Send an Email
                  <ArrowUpRight size={18} className="transition-transform duration-300 ease-out group-hover:rotate-45" />
                </a>
              </Button>
            </div>
          </div>
          <img
            src="/contact/banner.svg"
            alt=""
            aria-hidden="true"
            className="order-3 aspect-[8/3] w-full rounded-[12px] object-cover object-right sm:hidden"
          />
        </motion.div>
      </section>

      <section className="container-wide pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="flex flex-wrap items-start gap-12">
          <div className="min-w-[280px] flex-[1_0_55%]">
            <p className="web-label mb-4 text-muted-foreground">Elsewhere</p>
            <div className="flex flex-col border-t border-foreground">
              {profileLinks.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-foreground/15 py-6 text-foreground transition-colors hover:text-accent"
                >
                  <span className="web-title w-[10rem] shrink-0">{profile.name}</span>
                  <span className="flex-1 web-small text-muted-foreground">{profile.placeholder}</span>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-muted-foreground transition-transform duration-300 ease-out group-hover:rotate-45 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          <aside
            aria-label="Quick facts"
            className="min-w-[280px] flex-[1_0_35%] rounded-[12px] bg-card p-8"
          >
            <div className="flex items-center gap-4">
              <img
                src="/contact/avatar-mark.png"
                alt=""
                aria-hidden="true"
                className="h-16 w-16 shrink-0 rounded-full"
              />
              <div className="flex flex-col gap-1">
                <span className="web-title">Dimitar Slavchev</span>
                <span className="web-small text-muted-foreground">Designer and creative technologist</span>
              </div>
            </div>

            <dl className="mt-6 flex flex-col border-t border-foreground">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-foreground/15 py-4">
                  <dt className="w-[6.5rem] shrink-0 web-label text-muted-foreground">{fact.label}</dt>
                  <dd className="flex-1 web-body">
                    {fact.href ? (
                      <a href={fact.href} className="transition-colors hover:text-accent">
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-foreground/15 py-4">
                <dt className="w-[6.5rem] shrink-0 web-label text-muted-foreground">Local time</dt>
                <dd className="flex-1 web-body">{sofiaTime ?? "--:--"} in Sofia, Eastern European Time</dd>
              </div>
            </dl>

            <button
              type="button"
              title="Add a real CV file to enable this button"
              onClick={(event) => event.preventDefault()}
              className="group mt-6 inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-6 text-[16px] font-normal leading-none text-background transition-colors hover:bg-foreground/90"
            >
              Download CV
              <ArrowUpRight size={18} className="transition-transform duration-300 ease-out group-hover:rotate-45" />
            </button>
          </aside>
        </div>
      </section>
    </div>
  );
}
