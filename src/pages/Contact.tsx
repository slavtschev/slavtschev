import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { usePageTitle } from "@/hooks/use-page-title";

const revealEase = [0.25, 0.46, 0.45, 0.94] as const;

// TODO: swap href="#" for the real profile URL once you have it; placeholder shown in title on hover.
const profileLinks = [
  { name: "LinkedIn", href: "#", placeholder: "linkedin.com/in/your-name" },
  { name: "GitHub", href: "#", placeholder: "github.com/your-name" },
  { name: "Dribbble", href: "#", placeholder: "dribbble.com/your-name" },
  { name: "Instagram", href: "#", placeholder: "instagram.com/your-name" },
];

export default function Contact() {
  usePageTitle("Contact");
  const pageSection = useInView({ threshold: 0.1, once: true });

  return (
    <section ref={pageSection.ref} className="container-wide pt-24 pb-[136px] md:pt-28 lg:pt-[128px]">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
        <div className="lg:col-span-4">
          <motion.p
            className="web-label text-foreground/68"
            initial={{ opacity: 0 }}
            animate={pageSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: revealEase }}
          >
            Contact
          </motion.p>

          <motion.h1
            className="mt-5 web-display text-foreground"
            initial={{ opacity: 0, y: 22 }}
            animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            transition={{ duration: 0.78, delay: 0.06, ease: revealEase }}
          >
            Contact
          </motion.h1>

          <motion.p
            className="mt-8 max-w-[24ch] web-lead text-foreground/68"
            initial={{ opacity: 0, y: 16 }}
            animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.72, delay: 0.14, ease: revealEase }}
          >
            Email is the quickest way to reach me. My profiles and the basics are below.
          </motion.p>

          <motion.div
            className="mt-12 space-y-6"
            initial={{ opacity: 0, y: 14 }}
            animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.7, delay: 0.2, ease: revealEase }}
          >
            <div>
              <p className="web-label text-muted-foreground">
                Email
              </p>
              <a
                href="mailto:slavchev.dimitar@yahoo.com"
                className="mt-2 inline-block web-lead text-foreground transition-colors hover:text-accent"
              >
                slavchev.dimitar@yahoo.com
              </a>
            </div>

            <div>
              <p className="web-label text-muted-foreground">
                Phone
              </p>
              <a
                href="tel:+359893401023"
                className="mt-2 inline-block web-lead text-foreground transition-colors hover:text-accent"
              >
                +359893401023
              </a>
            </div>

            <div>
              <p className="web-label text-muted-foreground">
                Based in
              </p>
              <p className="mt-2 web-lead text-foreground">
                Sofia, Bulgaria
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-8 lg:pl-8"
          initial={{ opacity: 0, y: 18 }}
          animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.76, delay: 0.12, ease: revealEase }}
        >
          <p className="web-label text-muted-foreground">
            Elsewhere
          </p>
          <div className="mt-4 flex flex-col border-t border-foreground/15">
            {profileLinks.map((profile) => (
              <a
                key={profile.name}
                href={profile.href}
                title={`Add your real profile: ${profile.placeholder}`}
                onClick={(event) => event.preventDefault()}
                className="group flex items-center justify-between gap-6 border-b border-foreground/12 py-6 text-foreground transition-colors hover:text-accent"
              >
                <span className="web-title">{profile.name}</span>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-muted-foreground transition-transform duration-300 ease-out group-hover:rotate-45 group-hover:text-accent"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
