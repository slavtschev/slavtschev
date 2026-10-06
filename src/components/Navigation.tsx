import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { Link } from "@/components/ReloadLink";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

const navLinks = [
  { number: "01", name: "About", path: "/about" },
  { number: "02", name: "Case Studies", path: "/systems" },
  { number: "03", name: "Selected Outputs", path: "/outputs" },
  { number: "04", name: "Notes", path: "/playground" },
];

export function Navigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const revealTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="container-wide h-24">
        <div className="hidden h-full md:grid md:grid-cols-[minmax(18rem,0.92fr)_minmax(0,1.8fr)] md:items-center md:gap-x-14 xl:gap-x-18">
          <div className="flex items-center justify-start min-w-0">
            <Link to="/" aria-label="D.SLAVCHEV, home" className="text-foreground">
              <Logo className="h-[18px] w-auto" />
            </Link>
          </div>

          <div className="flex items-center justify-between gap-8 min-w-0">
            <ul className="flex items-center justify-start gap-10 min-w-0">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[16px] leading-none font-semibold text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-end min-w-0">
              <Button
                asChild
                className="group h-10 rounded-full px-6 text-[16px] leading-none font-normal"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 ease-out group-hover:rotate-45"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex h-full items-center justify-between md:hidden">
          <Link to="/" aria-label="D.SLAVCHEV, home" className="relative z-[60] text-foreground">
            <Logo className="h-4 w-auto" />
          </Link>

          <button
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="relative z-[60] flex h-9 w-9 items-center justify-center"
          >
            <span className="relative flex h-[14px] w-5 flex-col justify-between">
              <motion.span
                className="block h-[1.5px] w-full origin-center rounded-full bg-foreground"
                animate={mobileOpen ? { rotate: 45, y: 6.25 } : { rotate: 0, y: 0 }}
                transition={revealTransition}
              />
              <motion.span
                className="block h-[1.5px] w-full rounded-full bg-foreground"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              />
              <motion.span
                className="block h-[1.5px] w-full origin-center rounded-full bg-foreground"
                animate={mobileOpen ? { rotate: -45, y: -6.25 } : { rotate: 0, y: 0 }}
                transition={revealTransition}
              />
            </span>
          </button>
        </div>
      </nav>

      {createPortal(
        <AnimatePresence>
          {mobileOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={revealTransition}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-foreground text-background md:hidden"
          >
            <div className="container-wide flex h-24 shrink-0 items-center justify-between">
              <Link
                to="/"
                aria-label="D.SLAVCHEV, home"
                onClick={() => setMobileOpen(false)}
                className="text-background"
              >
                <Logo className="h-4 w-auto" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center text-background"
              >
                <X size={20} />
              </button>
            </div>

            <nav aria-label="Mobile" className="container-wide flex flex-1 flex-col justify-center gap-0 py-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.4, delay: 0.15 + index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }
                  }
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center gap-4 border-b border-white/15 py-5"
                  >
                    <span className="web-label text-white/50">{link.number}</span>
                    <span className="web-title flex-1 text-white">{link.name}</span>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-white/60 transition-transform duration-300 ease-out group-hover:rotate-45"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.4,
                        delay: 0.15 + navLinks.length * 0.06,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }
                }
                className="pt-8"
              >
                <Button
                  asChild
                  className="group h-12 w-full rounded-full bg-background text-foreground hover:bg-background/90 text-[16px] leading-none font-normal"
                >
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    Get in Touch
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 ease-out group-hover:rotate-45"
                    />
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}
