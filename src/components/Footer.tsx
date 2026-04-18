import { Link } from "@/components/ReloadLink";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerNavLinks = [
  { name: "Homepage", path: "/" },
  { name: "About", path: "/about" },
  { name: "Case Studies", path: "/systems" },
  { name: "Selected Outputs", path: "/outputs" },
  { name: "Playground", path: "/playground" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  "Creative Production",
  "UX/UI Design",
  "Branding",
  "Motion Design",
  "Marketing Design",
  "No-Code Development",
  "Workflow Automation",
];

const socialLinks = [
  { name: "Dribbble", href: "https://dribbble.com" },
  { name: "GitHub", href: "https://github.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Instagram", href: "https://instagram.com" },
];

export function Footer() {
  return (
    <footer className="overflow-hidden bg-[#050505] text-white">
      <div className="border-t border-white/10">
        <div className="container-wide">
          <div className="grid grid-cols-1 border-white/10 lg:grid-cols-2 lg:divide-x lg:divide-white/10">
            <div className="py-10 lg:pr-10 xl:pr-14">
              <h2 className="max-w-[33rem] [font-family:'Satoshi'] text-[38px] font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-[48px]">
                Build sharper digital experiences with design systems and scalable workflows.
              </h2>

              <Button
                asChild
                className="group mt-8 [font-family:'Satoshi'] h-10 rounded-full px-6 text-[16px] leading-none font-normal inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/contact">
                  Let's connect
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 ease-out group-hover:rotate-45"
                  />
                </Link>
              </Button>
            </div>

            <div className="py-10 lg:pl-10 xl:pl-14">
              <p className="max-w-[30rem] [font-family:'Satoshi'] text-[16px] leading-[1.45] text-white/82">
                Dimitar Slavchev
                <br />
                Sofia, Bulgaria
                <br />
                Working worldwide on digital products, campaign systems, and production workflows.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <p className="[font-family:'Satoshi'] text-[16px] font-medium text-white/45">Navigation</p>
                  <nav className="mt-3 flex flex-col gap-2">
                    {footerNavLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="footer-link [font-family:'Satoshi'] text-[16px] leading-none"
                      >
                        <span className="footer-link-label">{link.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>

                <div>
                  <p className="[font-family:'Satoshi'] text-[16px] font-medium text-white/45">Services</p>
                  <div className="mt-3 flex flex-col gap-2">
                    {serviceLinks.map((service) => (
                      <p key={service} className="[font-family:'Satoshi'] text-[16px] leading-none text-white/88">
                        {service}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-wide border-t border-white/10 py-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center">
            <p className="[font-family:'Satoshi'] text-[15px] text-white/62">
              © Dimitar Slavchev 2026. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link [font-family:'Satoshi'] text-[15px]"
                >
                  <span className="footer-link-label">{social.name}</span>
                  <ArrowUpRight
                    size={13}
                    className="footer-link-arrow transition-transform duration-300 group-hover:rotate-45"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
