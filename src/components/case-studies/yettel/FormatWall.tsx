import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// Ad formats Dimitar produced, used as the proportions of every block.
const RATIOS: [number, number][] = [
  [1, 1],
  [1200, 628],
  [640, 360],
  [300, 600],
  [160, 600],
  [300, 250],
  [320, 100],
  [320, 50],
  [728, 90],
];

const LIME = "#B4FF00";
const COLORS = [LIME, LIME, LIME, "#C4DEEA", "#F2F2F2", "#123A5C", "#2B5C86"];

type Tile = { x: number; y: number; w: number; h: number; c: string; p: number };

export function FormatWall({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let tiles: Tile[] = [];
    let frame = 0;
    let visible = true;

    const layout = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      let seed = 7;
      const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
      const row = w < 640 ? 9 : 12;
      tiles = [];
      for (let y = 4; y < h; y += row + 3) {
        let x = 4;
        while (x < w) {
          const [rw, rh] = RATIOS[Math.floor(rnd() * RATIOS.length)];
          const tw = Math.max(3, Math.min((row * rw) / rh, row * 8));
          tiles.push({ x, y, w: tw, h: row, c: COLORS[Math.floor(rnd() * COLORS.length)], p: rnd() });
          x += tw + 3;
        }
      }
    };

    const draw = (t: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      for (const tile of tiles) {
        const wave = Math.sin((tile.x / w) * 6 - t * 0.0012 + tile.p * 2);
        ctx.globalAlpha = 0.32 + 0.68 * Math.max(0, wave) * (tile.c === LIME ? 1 : 0.6);
        ctx.fillStyle = tile.c;
        ctx.fillRect(tile.x, tile.y, tile.w, tile.h);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t: number) => {
      if (visible) draw(t);
      frame = window.requestAnimationFrame(loop);
    };

    layout();
    draw(0);

    const resizeObserver = new ResizeObserver(() => {
      layout();
      draw(performance.now());
    });
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    intersectionObserver.observe(canvas);

    if (!reduceMotion) frame = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className={`block h-full w-full ${className}`} aria-hidden />;
}
