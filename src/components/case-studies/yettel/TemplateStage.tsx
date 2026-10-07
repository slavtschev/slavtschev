import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { adFormats, mediaRadius, metaLabel, phones, slotKeys, tradingImage } from "./data";

const MORPH_MS = 650;
const STEP_MS = 2200;
const PLATFORMS = ["Facebook", "Google Display Network"] as const;

export function TemplateStage() {
  const [selection, setSelection] = useState({ phone: 0, format: 0, previousFormat: 0 });
  const [userPaused, setUserPaused] = useState(false);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [animate, setAnimate] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { ref: inViewRef, isInView } = useInView({ threshold: 0.35, once: false });

  const { phone: phoneIndex, format: formatIndex } = selection;
  const phone = phones[phoneIndex];
  const format = adFormats[formatIndex];
  const keeps = phone.keeps[format.id];
  const formatChanged = selection.previousFormat !== formatIndex;

  // Measure the stage so each format can be fitted to it.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => {
      setSize({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    observer.observe(stage);
    const t = window.setTimeout(() => setAnimate(true), 100);
    return () => {
      observer.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  // Preload every creative so switching never flashes.
  useEffect(() => {
    phones.forEach((p) => adFormats.forEach((f) => {
      const image = new Image();
      image.src = tradingImage(p.id, f.id);
    }));
  }, []);

  const playing = isInView && !userPaused && !reduceMotion;

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setSelection((current) =>
        current.format + 1 < adFormats.length
          ? { ...current, format: current.format + 1, previousFormat: current.format }
          : { phone: (current.phone + 1) % phones.length, format: 0, previousFormat: current.format },
      );
    }, STEP_MS);
    return () => window.clearInterval(timer);
  }, [playing]);

  const sideX = size.w < 520 ? 28 : 56;
  const top = 56;
  const bottom = 44;
  const scale = size.w ? Math.min((size.w - sideX * 2) / format.w, (size.h - top - bottom) / format.h) : 0;
  const boxW = format.w * scale;
  const boxH = format.h * scale;
  const box = {
    width: boxW,
    height: boxH,
    left: (size.w - boxW) / 2,
    top: top + (size.h - top - bottom - boxH) / 2,
  };
  const transition = animate && !reduceMotion
    ? `left ${MORPH_MS}ms cubic-bezier(.65,0,.35,1), top ${MORPH_MS}ms cubic-bezier(.65,0,.35,1), width ${MORPH_MS}ms cubic-bezier(.65,0,.35,1), height ${MORPH_MS}ms cubic-bezier(.65,0,.35,1)`
    : "none";

  const choosePhone = (index: number) => {
    setUserPaused(true);
    setSelection((current) => ({ ...current, phone: index, previousFormat: current.format }));
  };
  const chooseFormat = (index: number) => {
    setUserPaused(true);
    setSelection((current) => ({ ...current, format: index, previousFormat: current.format }));
  };

  return (
    <div
      ref={(node) => {
        inViewRef.current = node;
      }}
      className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-6"
    >
      <div className="lg:col-span-8">
        <div
          ref={stageRef}
          className={`relative h-[380px] overflow-hidden border border-white/12 bg-white/[0.03] sm:h-[460px] lg:h-[clamp(480px,40vw,600px)] ${mediaRadius}`}
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        >
          <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between gap-4 sm:inset-x-5">
            <p className={`${metaLabel} min-w-0 text-white/60`}>
              {format.platform === "Google Display Network" && size.w < 560 ? "GDN" : format.platform} · {format.name} ·{" "}
              {format.w}×{format.h}
              {scale ? ` · ${Math.round(scale * 100)}%` : ""}
            </p>
            {!reduceMotion && (
              <button
                type="button"
                onClick={() => setUserPaused((paused) => !paused)}
                className="inline-flex h-8 shrink-0 items-center gap-2 rounded-full border border-white/25 px-4 text-[13px] font-medium text-white transition-colors hover:border-white/60"
                aria-label={playing ? "Pause the rotation" : "Play the rotation"}
              >
                {playing ? <Pause size={13} aria-hidden /> : <Play size={13} aria-hidden />}
                {playing ? "Pause" : "Play"}
              </button>
            )}
          </div>

          {scale > 0 && (
            <div
              className="absolute bg-[#B4FF00] outline outline-1 outline-offset-4 outline-accent"
              style={{ ...box, transition }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={`${phone.id}-${format.id}`}
                    src={tradingImage(phone.id, format.id)}
                    alt={`${phone.label} ad, ${format.platform} ${format.name} ${format.w}×${format.h}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.3, delay: formatChanged && !reduceMotion ? MORPH_MS / 1000 - 0.15 : 0.05 },
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  />
                </AnimatePresence>
              </div>
              {(["-left-[9px] -top-[9px]", "-right-[9px] -top-[9px]", "-bottom-[9px] -left-[9px]", "-bottom-[9px] -right-[9px]"] as const).map(
                (pos) => (
                  <span key={pos} aria-hidden className={`absolute h-[7px] w-[7px] border border-accent bg-[hsl(var(--cs-deep))] ${pos}`} />
                ),
              )}
              <span className="absolute inset-x-0 top-[calc(100%+14px)] text-center text-[11px] font-medium tabular-nums text-accent">
                {format.w}
              </span>
              <span
                className="absolute inset-y-0 left-[calc(100%+14px)] flex items-center text-[11px] font-medium tabular-nums text-accent"
                style={{ writingMode: "vertical-rl" }}
              >
                {format.h}
              </span>
            </div>
          )}
        </div>
        <p className="mt-4 max-w-[44rem] text-[14px] font-medium leading-[1.45] text-white/50">
          Two campaigns shown in full: iPhone 13 5G and Realme GT Neo 3 5G. What each size keeps is read from the final ads.
        </p>
      </div>

      <div className="space-y-10 lg:col-span-4">
        <div>
          <p className={`${metaLabel} text-white/50`}>Phone</p>
          <div className="mt-4 border-t border-white/25">
            {phones.map((p, index) => {
              const isActive = index === phoneIndex;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => choosePhone(index)}
                  aria-pressed={isActive}
                  className={`w-full border-b border-white/25 py-4 text-left transition-colors ${
                    isActive ? "bg-white/[0.08] text-white" : "text-[#ABABAB] hover:text-zinc-100"
                  }`}
                >
                  <span className="block px-1 text-[26px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[30px]">
                    {p.label}
                  </span>
                  <span className="mt-2 block px-1 text-[13px] font-medium text-white/50">{p.offer}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className={`${metaLabel} text-white/50`}>Format</p>
          {PLATFORMS.map((platform) => (
            <div key={platform} className="mt-4">
              <p className="text-[13px] font-medium text-white/60">{platform}</p>
              <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-3">
                {adFormats.map((f, index) => {
                  if (f.platform !== platform) return null;
                  const isActive = index === formatIndex;
                  const k = 30 / Math.max(f.w, f.h);
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => chooseFormat(index)}
                      aria-pressed={isActive}
                      aria-label={`${f.name}, ${f.w} by ${f.h}`}
                      className={`grid justify-items-center gap-2 rounded-[10px] border px-2 py-3 text-center transition-colors ${
                        isActive ? "border-accent bg-accent/10" : "border-white/15 hover:border-white/40"
                      }`}
                    >
                      <span className="grid h-[34px] w-full place-items-center" aria-hidden>
                        <span
                          className={`block rounded-[1px] ${isActive ? "bg-accent" : "bg-white/45"}`}
                          style={{ width: Math.max(3, f.w * k), height: Math.max(3, f.h * k) }}
                        />
                      </span>
                      <span className="text-[12px] font-medium tabular-nums text-white">
                        {f.w}×{f.h}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className={`${metaLabel} text-white/50`}>What this size keeps</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {slotKeys.map((slot) => {
              const kept = keeps.includes(slot);
              return (
                <li
                  key={slot}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium leading-none transition-colors duration-300 ${
                    kept ? "border-white/70 text-white" : "border-white/15 text-white/35 line-through"
                  }`}
                >
                  {slot}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
