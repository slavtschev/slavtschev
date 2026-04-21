import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const socialLinks = [
  { name: "Dribbble", href: "https://dribbble.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "GitHub", href: "https://github.com" },
];

export default function Contact() {
  const pageSection = useInView({ threshold: 0.1, once: true });

  return (
    <section ref={pageSection.ref} className="container-wide pt-24 pb-[128px] md:pt-28 lg:pt-[128px]">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
        <div className="lg:col-span-8">
          <motion.p
            className="[font-family:'Satoshi'] text-[14px] font-medium uppercase tracking-[0.04em] text-foreground/75"
            initial={{ opacity: 0 }}
            animate={pageSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Contact
          </motion.p>

          <motion.h1
            className="mt-6 max-w-[14ch] [font-family:'Satoshi'] text-[48px] font-medium leading-[1] tracking-[-0.035em] text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Let&apos;s connect
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[20ch] [font-family:'Satoshi'] text-[34px] font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[38px]"
            initial={{ opacity: 0, y: 16 }}
            animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.75, delay: 0.14, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Always open to new conversations and opportunities.
          </motion.p>

          <motion.div
            className="mt-14 space-y-8"
            initial={{ opacity: 0, y: 18 }}
            animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div>
              <p className="[font-family:'Satoshi'] text-[24px] font-medium leading-[1.1] tracking-[-0.02em] text-foreground/90">
                Email
              </p>
              <a
                href="mailto:slavchev.dimitar@yahoo.com"
                className="mt-2 inline-block [font-family:'Satoshi'] text-[20px] font-medium leading-[1.2] tracking-[-0.01em] text-foreground/90 transition-colors hover:text-accent"
              >
                slavchev.dimitar@yahoo.com
              </a>
            </div>

            <div>
              <p className="[font-family:'Satoshi'] text-[24px] font-medium leading-[1.1] tracking-[-0.02em] text-foreground/90">
                Phone
              </p>
              <a
                href="tel:+359893401023"
                className="mt-2 inline-block [font-family:'Satoshi'] text-[20px] font-medium leading-[1.2] tracking-[-0.01em] text-foreground/90 transition-colors hover:text-accent"
              >
                +359893401023
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-4 lg:justify-self-end"
          initial={{ opacity: 0, y: 14 }}
          animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <nav className="flex flex-col gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-w-[132px] items-center justify-between gap-5 [font-family:'Satoshi'] text-[16px] font-medium leading-none text-foreground/90 transition-colors hover:text-accent"
              >
                <span>{social.name}</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>
        </motion.div>
      </div>

      <motion.div
        className="mt-28 [font-family:'Satoshi'] text-[15px] text-foreground/70"
        initial={{ opacity: 0 }}
        animate={pageSection.isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.65, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Dimitar Slavchev All Rights Reserved
      </motion.div>
    </section>
  );
}
