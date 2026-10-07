import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { deskItems, metaLabel, streams, type StreamKey } from "./data";

type Position = { left: number; top: number; rotate: number };

export function ExampleDesk() {
  const [active, setActive] = useState<StreamKey | null>(null);
  const deskRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const zIndex = useRef(100);

  // Seeded, loosely gridded scatter: same layout on every visit, few full overlaps.
  const initialPositions = useMemo<Position[]>(() => {
    let seed = 11;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const width = typeof window === "undefined" ? 1280 : window.innerWidth;
    const cols = width < 640 ? 3 : width < 1024 ? 4 : 6;
    const rows = Math.ceil(deskItems.length / cols);
    const slots = deskItems.map((_, index) => index);
    for (let i = slots.length - 1; i > 0; i -= 1) {
      const j = Math.floor(rnd() * (i + 1));
      [slots[i], slots[j]] = [slots[j], slots[i]];
    }
    return deskItems.map((_, index) => {
      const slot = slots[index];
      const col = slot % cols;
      const row = Math.floor(slot / cols);
      return {
        left: (col + 0.04 + rnd() * 0.3) * (100 / cols),
        top: 9 + (row + rnd() * 0.25) * (84 / rows),
        rotate: (rnd() - 0.5) * 12,
      };
    });
  }, []);
  const positions = useRef<Position[]>(initialPositions.map((p) => ({ ...p })));

  const applyPosition = useCallback((index: number) => {
    const card = cardRefs.current[index];
    const p = positions.current[index];
    if (!card || !p) return;
    card.style.left = `${p.left}%`;
    card.style.top = `${p.top}%`;
  }, []);

  const clampAll = useCallback(() => {
    const desk = deskRef.current;
    if (!desk) return;
    const W = desk.clientWidth;
    const H = desk.clientHeight;
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const p = positions.current[index];
      const maxLeft = ((W - card.offsetWidth - 8) / W) * 100;
      const maxTop = ((H - card.offsetHeight - 8) / H) * 100;
      p.left = Math.max(1, Math.min(maxLeft, p.left));
      p.top = Math.max(7, Math.min(maxTop, p.top));
      applyPosition(index);
    });
  }, [applyPosition]);

  useLayoutEffect(() => {
    clampAll();
    window.addEventListener("resize", clampAll);
    return () => window.removeEventListener("resize", clampAll);
  }, [clampAll]);

  const startDrag = (index: number) => (event: ReactPointerEvent<HTMLElement>) => {
    const desk = deskRef.current;
    const card = cardRefs.current[index];
    if (!desk || !card) return;
    event.preventDefault();
    card.setPointerCapture(event.pointerId);
    zIndex.current += 1;
    card.style.zIndex = String(zIndex.current);

    const deskBox = desk.getBoundingClientRect();
    const offsetX = event.clientX - deskBox.left - card.offsetLeft;
    const offsetY = event.clientY - deskBox.top - card.offsetTop;

    const move = (moveEvent: PointerEvent) => {
      const box = desk.getBoundingClientRect();
      const x = moveEvent.clientX - box.left - offsetX;
      const y = moveEvent.clientY - box.top - offsetY;
      const p = positions.current[index];
      p.left = Math.max(-card.offsetWidth * 0.4, Math.min(box.width - card.offsetWidth * 0.6, x)) / box.width * 100;
      p.top = Math.max(0, Math.min(box.height - card.offsetHeight * 0.5, y)) / box.height * 100;
      applyPosition(index);
    };
    const end = () => {
      card.removeEventListener("pointermove", move);
      card.removeEventListener("pointerup", end);
      card.removeEventListener("pointercancel", end);
    };
    card.addEventListener("pointermove", move);
    card.addEventListener("pointerup", end);
    card.addEventListener("pointercancel", end);
  };

  const toggle = (key: StreamKey) => {
    setActive((current) => (current === key ? null : key));
    if (active !== key) {
      deskItems.forEach((item, index) => {
        const card = cardRefs.current[index];
        if (card && item.stream === key) {
          zIndex.current += 1;
          card.style.zIndex = String(zIndex.current);
        }
      });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {streams.map((stream) => {
          const isActive = active === stream.key;
          return (
            <button
              key={stream.key}
              type="button"
              onClick={() => toggle(stream.key)}
              aria-pressed={isActive}
              className={`group flex flex-col justify-between gap-6 rounded-[16px] border p-6 lg:min-h-[13rem] text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-black/5 bg-card text-foreground hover:border-black/15"
              }`}
            >
              <span className={`${metaLabel} ${isActive ? "text-background/60" : "text-foreground/50"}`}>
                {stream.channels}
              </span>
              <span>
                <span className="block text-[24px] font-medium leading-[1.1] tracking-[-0.02em]">{stream.title}</span>
                <span
                  className={`mt-3 block text-[16px] font-medium leading-[1.4] ${
                    isActive ? "text-background/70" : "text-foreground/62"
                  }`}
                >
                  {stream.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        ref={deskRef}
        className="relative mt-4 h-[780px] overflow-hidden rounded-[16px] border border-black/5 bg-card sm:h-[640px] lg:h-[clamp(600px,52vw,760px)]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.09) 1px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        <p className={`${metaLabel} pointer-events-none absolute left-5 top-5 z-[1] text-foreground/50`}>
          A few examples out of thousands · drag them around
        </p>

        {deskItems.map((item, index) => {
          const position = initialPositions[index];
          const dimmed = active !== null && item.stream !== active;
          return (
            <figure
              key={item.src}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              onPointerDown={startDrag(index)}
              className={`absolute m-0 cursor-grab touch-none select-none transition-[opacity,filter] duration-300 active:cursor-grabbing ${
                dimmed ? "opacity-[0.12] grayscale" : "opacity-100"
              }`}
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                rotate: `${position.rotate.toFixed(1)}deg`,
                zIndex: 10 + index,
                width: `clamp(${Math.round(item.width * 0.58)}px, ${(item.width / 9.5).toFixed(1)}vw, ${Math.round(item.width * 1.2)}px)`,
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                draggable={false}
                loading="lazy"
                className="block w-full shadow-[0_14px_34px_-12px_rgba(0,0,0,0.35)]"
                style={{ aspectRatio: String(item.ratio) }}
              />
              <figcaption className="mt-2 hidden whitespace-nowrap sm:block text-[11px] font-medium uppercase tracking-[0.12em] text-foreground/50">
                Example · {item.caption}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
