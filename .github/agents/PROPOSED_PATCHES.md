# Proposed Patches (suggested changes)

These are suggested changes presented as "Original" → "Proposed" snippets for easy review.

## 1) Footer: replace hard hex background and inline typography with tokens

Original (excerpt):

```tsx
<footer className="overflow-hidden bg-[#050505] text-white">
  ...
  <h2 className="w-full whitespace-nowrap [font-family:'Satoshi'] text-[clamp(44px,8.4vw,136px)] font-medium leading-[1.02] tracking-[-0.04em] text-white">
  ...
  <p className="max-w-[30rem] [font-family:'Satoshi'] text-[16px] leading-[1.45] text-white/82">
```

Proposed replacement:

```tsx
<footer className="overflow-hidden bg-sidebar text-sidebar-foreground">
  ...
  <h2 className="w-full whitespace-nowrap text-display font-medium leading-[1.02] tracking-[-0.04em] text-sidebar-foreground">
  ...
  <p className="max-w-[30rem] font-sans text-body leading-[1.45] text-sidebar-foreground/82">
```

Notes: use `bg-sidebar` and `text-sidebar-foreground` to align footer with theme tokens and dark-mode behavior. Replace large inline `text-[clamp(...)]` with the `.text-display` utility to centralize scale.

---

## 2) Index page CTA: convert inline link to use `Button` primitive (asChild)

Original (excerpt):

```tsx
<Link
  to="/systems"
  className="group mt-7 inline-flex items-center gap-3 [font-family:'Satoshi'] text-[20px] font-medium text-black transition-colors"
>
  <span>Take a look at my work</span>
  <ArrowUpRight size={26} className="text-accent ..." />
</Link>
```

Proposed replacement:

```tsx
<Button
  asChild
  className="group mt-7 inline-flex items-center gap-3 [font-family:'Satoshi'] h-10 rounded-full px-6 text-[16px] font-medium hover:bg-primary hover:text-primary-foreground"
>
  <Link to="/systems">
    <span>Take a look at my work</span>
    <ArrowUpRight size={26} className="text-accent ..." />
  </Link>
</Button>
```

Notes: This reuses the `Button` primitive, ensuring consistent hover/focus behavior and token usage.

---

If you want, I can apply these changes directly (create a branch + commit). Reply `apply` to proceed, or `adjust` to change details.
