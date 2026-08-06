# Style Guide — Project Tokens & Usage

This concise guide maps the project's design tokens and recommended utility classes, plus quick migration rules to improve consistency.

## Fonts
- Primary: `Satoshi` (loaded in `src/index.css`). Use the utility classes below instead of inline `[font-family:'Satoshi']`.

## Typographic Utilities (preferred)
- `.text-display` — H1 / large display
- `.text-headline` — section headlines
- `.text-body-lg` — prominent body text
- `.text-body` — default body
- `.text-caption` — small captions

Migration rule: replace `className="[font-family:'Satoshi'] text-[48px] ..."` with `className="text-headline font-medium"` (adjust size via component token classes). Avoid raw `text-[NNpx]` unless exceptional.

## Color & Tokens
Tokens are defined as CSS variables in `src/index.css` and exported to Tailwind via `tailwind.config.ts`. Use token-based utility classes:
- Background: `bg-background`, `bg-card`, `bg-popover`, `bg-sidebar`
- Foreground: `text-foreground`, `text-card-foreground`, `text-popover-foreground`, `text-sidebar-foreground`
- Interaction (brand): `bg-accent`, `text-accent-foreground`, `text-primary`, `bg-primary`
- Border / input: `border-input`, `border-primary`, `ring` utilities.

Migration rule: replace hex literals (e.g., `bg-[#050505]`) with token classes (e.g., `bg-sidebar`). Replace `border-[#CACACA]` with `border-input` or a semantic token.

## Components
- Use primitives in `src/components/ui/*` (e.g., `Button`, `Input`, `Toast`) rather than recreating styles inline.
- When a visual variant is needed, prefer `buttonVariants` and prop-driven variants rather than ad-hoc classes.

## Spacing & Layout
- Use `.container-wide` / `.container-narrow` for page containers.
- Use spacing tokens (multiples) rather than arbitrary px when possible. Replace `max-w-[14ch]` / `max-w-[44rem]` with semantic classes where appropriate.

## Accessibility
- Keep `focus-visible:ring` and `focus-visible:outline-none` patterns on interactive primitives.
- Run contrast checks for `text-foreground` vs `background` and for `accent` on all call-to-action colors.

## Quick grep commands
Run these to find candidates to migrate:
```bash
# Inline font-family usage
rg "\[font-family:'Satoshi'\]" src | sed -n '1,200p'

# Arbitrary text sizes
rg "text-\[" src | sed -n '1,200p'

# Hex color literals
rg "#[0-9a-fA-F]{6}" src | sed -n '1,200p'

# Inline style= usages
rg "style=\{" src | sed -n '1,200p'
```

## Recommended workflow
1. Run the grep commands to produce a migration plan.
2. Replace color hexes and border px with token classes.
3. Replace repeated CTA/link patterns with `Button` (asChild) or a `Tag` component.
4. Run contrast checks and smoke-test dark mode.

## Conventions
- Prefer semantic tokens over raw values.
- Prefer small, single-purpose patches when editing components.

---
Created by automated audit — edit and expand as needed.
