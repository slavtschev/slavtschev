import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "@/components/ReloadLink";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Case Studies", path: "/systems" },
  { name: "Selected Outputs", path: "/outputs" },
  { name: "Notes", path: "/playground" },
];

export function Navigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="container-wide h-24">
        <div className="hidden h-full md:grid md:grid-cols-[minmax(18rem,0.92fr)_minmax(0,1.8fr)] md:items-center md:gap-x-14 xl:gap-x-18">
          <div className="flex items-center justify-start min-w-0">
            <Link
              to="/"
              className="[font-family:'Satoshi'] text-[24px] leading-none font-bold tracking-tight"
            >
              SLAVTSCHEV
            </Link>
          </div>

          <div className="flex items-center justify-between gap-8 min-w-0">
            <ul className="flex items-center justify-start gap-10 min-w-0">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="[font-family:'Satoshi'] text-[16px] leading-none font-semibold text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-end min-w-0">
              <Button
                asChild
                className="group [font-family:'Satoshi'] h-10 rounded-full px-6 text-[16px] leading-none font-normal inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/_private/design-system">
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

        <div className="flex h-full items-center md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex w-full items-center justify-between"
            aria-label="Toggle menu"
          >
            <span className="[font-family:'Satoshi'] text-[24px] leading-none font-bold tracking-tight">
              SLAVTSCHEV
            </span>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <ul className="container-wide py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`[font-family:'Satoshi'] text-[16px] leading-none font-medium ${
                      location.pathname === link.path
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Button
                  asChild
                  variant="outline"
                  className="[font-family:'Satoshi'] w-full rounded-full text-[16px] leading-none font-normal"
                >
                  <Link to="/_private/design-system" onClick={() => setMobileOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
