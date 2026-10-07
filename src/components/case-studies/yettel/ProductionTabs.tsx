import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mediaRadius, production, revealEase } from "./data";

export function ProductionTabs() {
  const [active, setActive] = useState(1);
  const item = production.items[active];

  return (
    <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="lg:col-span-5">
        <div className="border-t border-white/25">
          {production.items.map((entry, index) => {
            const isActive = index === active;
            return (
              <button
                key={entry.label}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={isActive}
                className={`w-full border-b border-white/25 py-4 text-left text-[36px] font-medium leading-[1.05] tracking-[-0.02em] transition-colors sm:text-[44px] lg:text-[48px] ${
                  isActive ? "bg-white/[0.08] text-white" : "text-[#ABABAB] hover:text-zinc-100"
                }`}
              >
                <span className="flex items-center justify-between gap-4 px-1">
                  <span>{entry.label}</span>
                  <span className="relative h-7 w-7 shrink-0" aria-hidden>
                    <span className="absolute left-1/2 top-1/2 h-[1px] w-7 -translate-x-1/2 -translate-y-1/2 bg-current" />
                    <span
                      className={`absolute left-1/2 top-1/2 h-7 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-current transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.18,0.9,0.22,1)] ${
                        isActive ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                      }`}
                    />
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-7">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={item.label}
            className="m-0"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.46, ease: revealEase }}
          >
            <div className={`overflow-hidden bg-white/[0.04] ${mediaRadius}`}>
              <img
                src={item.src}
                alt={`Figma screenshot: ${item.label}`}
                className="block w-full"
                style={{ aspectRatio: "1600 / 822" }}
                loading="lazy"
              />
            </div>
            <figcaption className="mt-5 max-w-[39rem] text-[20px] font-normal leading-[1.3] text-white/80 sm:text-[24px] sm:leading-[1.25]">
              {item.caption}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
    </div>
  );
}
