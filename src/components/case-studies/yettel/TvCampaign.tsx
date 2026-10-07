import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { metaLabel, revealEase, tv } from "./data";

type TabId = (typeof tv.tabs)[number]["id"];

export function TvCampaign() {
  const [tab, setTab] = useState<TabId>("use");
  const [moment, setMoment] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeTab = tv.tabs.find((t) => t.id === tab) ?? tv.tabs[0];
  const current = tv.moments[moment];

  const onTabKey = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = tv.tabs.findIndex((t) => t.id === tab);
    let next = -1;
    if (event.key === "ArrowRight") next = (index + 1) % tv.tabs.length;
    if (event.key === "ArrowLeft") next = (index - 1 + tv.tabs.length) % tv.tabs.length;
    if (next < 0) return;
    event.preventDefault();
    setTab(tv.tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Creative types" className="flex flex-wrap gap-2" onKeyDown={onTabKey}>
        {tv.tabs.map((t, index) => {
          const selected = t.id === tab;
          return (
            <button
              key={t.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`tv-tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`tv-panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setTab(t.id)}
              className={`inline-flex h-11 items-center rounded-full px-6 text-[16px] font-medium leading-none transition-colors ${
                selected ? "bg-foreground text-background" : "border border-black/10 bg-card text-foreground hover:border-black/25"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`tv-panel-${activeTab.id}`}
        aria-labelledby={`tv-tab-${activeTab.id}`}
        className="mt-10 min-h-[420px]"
      >
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <p className={`${metaLabel} text-foreground/50`}>{activeTab.meta}</p>
          <p className="max-w-[44rem] text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-foreground/70">
            {activeTab.body}
          </p>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.42, ease: revealEase }}
            className="mt-8"
          >
            {tab === "use" && (
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-x-6">
                <div className="relative aspect-square w-full max-w-[520px] overflow-hidden rounded-[6px] bg-black/5 lg:col-span-6">
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={current.src}
                      src={current.src}
                      alt={`Yettel TV ad: ${current.bg}`}
                      className="absolute inset-0 h-full w-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    />
                  </AnimatePresence>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-[28px] font-medium leading-[1.15] tracking-[-0.025em] text-foreground sm:text-[34px]">
                    {current.en}
                  </p>
                  <p className="mt-3 text-[16px] font-medium leading-[1.4] text-foreground/50" lang="bg">
                    {current.bg}
                  </p>
                  <input
                    type="range"
                    min={0}
                    max={tv.moments.length - 1}
                    step={1}
                    value={moment}
                    onChange={(event) => setMoment(Number(event.target.value))}
                    aria-label="Moment"
                    aria-valuetext={current.label}
                    className="mt-10 w-full accent-[hsl(var(--accent))]"
                  />
                  <div className="mt-3 grid grid-cols-4 gap-x-2 gap-y-1">
                    {tv.moments.map((m, index) => (
                      <button
                        key={m.label}
                        type="button"
                        onClick={() => setMoment(index)}
                        aria-current={index === moment}
                        className={`border-t-2 pb-1 pt-2 text-left text-[12px] font-medium uppercase tracking-[0.08em] transition-colors ${
                          index === moment
                            ? "border-accent text-foreground"
                            : "border-black/10 text-foreground/45 hover:text-foreground/80"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {tab === "price" && (
              <div>
                <div className="flex flex-wrap items-end gap-4">
                  {tv.price.map((item) => (
                    <img
                      key={item.src}
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-[min(260px,44%)] rounded-[6px]"
                      style={{ aspectRatio: "720 / 1280" }}
                    />
                  ))}
                </div>
                <p className="mt-5 text-[14px] font-medium text-foreground/50">{tv.priceGloss}</p>
              </div>
            )}

            {tab === "content" && (
              <div>
                <div className="-mx-1 overflow-x-auto px-1 pb-2">
                  <div className="flex w-max gap-4">
                    {tv.content.map((item) => (
                      <img
                        key={item.src}
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="w-[180px] shrink-0 rounded-[6px] lg:w-[200px]"
                        style={{ aspectRatio: "707 / 1256" }}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-5 text-[14px] font-medium text-foreground/50">{tv.contentGloss}</p>
              </div>
            )}

            {tab === "reengage" && (
              <div>
                <div className="flex flex-wrap items-end gap-4">
                  {tv.reengage.map((item) => (
                    <img
                      key={item.src}
                      src={item.src}
                      alt="Видя ли? Имаме телевизия. В пакет с интернет. И без интернет."
                      loading="lazy"
                      className="max-w-full rounded-[4px]"
                      style={{ width: item.w * 1.25, aspectRatio: String(item.ratio) }}
                    />
                  ))}
                </div>
                <p className="mt-5 text-[14px] font-medium text-foreground/50">{tv.reengageGloss}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
