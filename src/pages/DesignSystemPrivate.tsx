import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link } from "@/components/ReloadLink";
import { ArrowRight } from "lucide-react";

const LAYOUT_SPACING = [128, 96, 64, 48];
const MICRO_SPACING = [64, 32, 24, 16, 8];

const COMPONENTS = [
  "Button",
  "Button Icon",
  "Icon Arrow",
  "Link Item",
  "List - Skills",
  "Navigation",
  "Text Link",
  "Footer",
  "Icon Menu",
  "Project Card Small",
  "Project Card Medium",
  "Project Card Big",
];

const COLORS = [
  { name: "Primary Blue", value: "#0050B3" },
  { name: "Secondary Blue", value: "#3185FC" },
  { name: "Black", value: "#0A0A0A" },
  { name: "Gray 900", value: "#1F1F1F" },
  { name: "Gray 800", value: "#2F2F2F" },
  { name: "Gray 700", value: "#474747" },
  { name: "Gray 600", value: "#666666" },
  { name: "Gray 500", value: "#8A8A8A" },
  { name: "Gray 400", value: "#B5B5B5" },
  { name: "Gray 300", value: "#D3D3D3" },
  { name: "Gray 200", value: "#E6E6E6" },
  { name: "Gray 100", value: "#F2F2F2" },
];

const TYPOGRAPHY = [
  { label: "H1 Display", size: "64px", className: "text-[64px] leading-[1.05] font-bold" },
  { label: "H1", size: "40px", className: "text-[40px] leading-[1.1] font-medium" },
  { label: "H2", size: "32px", className: "text-[32px] leading-[1.15] font-medium" },
  { label: "H3", size: "24px", className: "text-[24px] leading-[1.2] font-medium" },
  { label: "H4", size: "18px", className: "text-[18px] leading-[1.3] font-medium" },
  { label: "Body", size: "16px", className: "text-[16px] leading-[1.5] font-medium" },
];

const AUTH_STORAGE_KEY = "private-design-system-auth";

export default function DesignSystemPrivate() {
  const requiredKey = import.meta.env.VITE_PRIVATE_DESIGN_SYSTEM_KEY as string | undefined;
  const [inputKey, setInputKey] = useState("");
  const [error, setError] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(() => {
    if (!requiredKey) return true;
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === "true";
  });

  useEffect(() => {
    document.title = "Private Design System";

    const existingMeta = document.querySelector('meta[name="robots"]');
    const createdMeta = existingMeta ?? document.createElement("meta");
    createdMeta.setAttribute("name", "robots");
    createdMeta.setAttribute("content", "noindex, nofollow, noarchive");

    if (!existingMeta) {
      document.head.appendChild(createdMeta);
    }

    return () => {
      if (!existingMeta) {
        createdMeta.remove();
      } else {
        createdMeta.setAttribute("content", "index, follow");
      }
    };
  }, []);

  const requiresAuth = useMemo(() => Boolean(requiredKey), [requiredKey]);

  const handleUnlock = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!requiredKey) {
      setIsAuthorized(true);
      return;
    }

    if (inputKey === requiredKey) {
      sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
      setIsAuthorized(true);
      setError("");
      return;
    }

    setError("Access key is incorrect.");
  };

  if (requiresAuth && !isAuthorized) {
    return (
      <section className="container-wide py-32 min-h-[70vh] [font-family:'Satoshi']">
        <div className="max-w-xl space-y-8">
          <p className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Private Route</p>
          <h1 className="text-[40px] leading-[1.1] font-medium">Design System Access</h1>
          <p className="text-[16px] leading-relaxed text-muted-foreground">
            This page is restricted. Enter your private key to continue.
          </p>

          <form className="space-y-4" onSubmit={handleUnlock}>
            <input
              type="password"
              value={inputKey}
              onChange={(event) => setInputKey(event.target.value)}
              placeholder="Private key"
              className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
              autoComplete="off"
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button
              type="submit"
              className="h-11 px-6 rounded-full bg-primary text-primary-foreground text-[16px] font-normal"
            >
              Unlock
            </button>
          </form>
          <p className="text-sm text-muted-foreground">
            Set VITE_PRIVATE_DESIGN_SYSTEM_KEY in your environment to control access.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="container-wide py-28 md:py-32 [font-family:'Satoshi']">
      <div className="max-w-6xl mx-auto space-y-20">
        <header className="space-y-4">
          <p className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Private Design System</p>
          <h1 className="text-[40px] leading-[1.1] font-medium">Core Tokens And Components</h1>
          <Link
            to="/_private/design-system/components"
            className="inline-flex items-center gap-2 text-[16px] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Open components page
            <ArrowRight size={16} />
          </Link>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <section className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-[24px] leading-[1.2] font-medium">Spacing</h2>
              <div className="space-y-4">
                <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">Layout Spacing Scale</p>
                <ul className="space-y-3">
                  {LAYOUT_SPACING.map((value) => (
                    <li key={value} className="flex items-center gap-4">
                      <span className="w-10 text-[14px] font-medium">{value}</span>
                      <div
                        className="h-3 rounded-full bg-[#0050B3]"
                        style={{ width: `${value * 2}px`, maxWidth: "100%", opacity: 0.35 + value / 320 }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">Micro Spacing Scale</p>
                <ul className="space-y-3">
                  {MICRO_SPACING.map((value) => (
                    <li key={value} className="flex items-center gap-4">
                      <span className="w-10 text-[14px] font-medium">{value}</span>
                      <div
                        className="h-3 rounded-full bg-[#3185FC]"
                        style={{ width: `${value * 3}px`, maxWidth: "100%", opacity: 0.4 + value / 160 }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-[24px] leading-[1.2] font-medium">Components</h2>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {COMPONENTS.map((component) => (
                  <li key={component} className="text-[16px] leading-[1.4] font-medium text-foreground/90">
                    {component}
                  </li>
                ))}
              </ul>
              <Link
                to="/_private/design-system/components"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-[#0050B3] hover:text-[#3185FC] transition-colors"
              >
                View implemented components
                <ArrowRight size={15} />
              </Link>
            </div>
          </section>

          <section className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-[24px] leading-[1.2] font-medium">Styles</h2>
              <div className="space-y-4">
                <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">Colors</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {COLORS.map((color) => (
                    <article key={color.value} className="space-y-2">
                      <div
                        className="h-16 rounded-xl border border-border"
                        style={{ backgroundColor: color.value }}
                      />
                      <p className="text-[13px] leading-tight font-medium">{color.name}</p>
                      <p className="text-[12px] text-muted-foreground">{color.value}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">Typography</p>
              <div className="space-y-6">
                {TYPOGRAPHY.map((type) => (
                  <div key={type.label} className="space-y-2">
                    <p className="text-[12px] text-muted-foreground">
                      {type.label} - {type.size} - Satoshi {type.label === "H1 Display" ? "Bold" : type.label === "Body" ? "Medium" : "Medium"}
                    </p>
                    <p className={type.className}>The quick brown fox jumps over the lazy dog.</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">Other Tokens</p>
              <div className="rounded-2xl border border-border p-5 space-y-3">
                <p className="text-[16px] leading-[1.5] font-medium">Border radius: vw * 1.4</p>
                <div className="h-20 bg-[#0050B3]" style={{ borderRadius: "1.4vw" }} />
                <p className="text-[12px] text-muted-foreground">Preview token expression at current viewport width.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
