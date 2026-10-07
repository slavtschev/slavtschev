// Content for the Yettel case study.
// Every line here comes from the original case-study material or from Dimitar directly.
// Bulgarian ad copy is quoted from the ads; English glosses are translations.

const ASSET_BASE = `${import.meta.env.BASE_URL}case-studies/yettel`;

export const asset = (name: string) => `${ASSET_BASE}/${name}.webp`;

export const revealEase = [0.25, 0.46, 0.45, 0.94] as const;

/* ---------- Shared class names (mirrors the About page system) ---------- */

export const sectionGrid = "grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-14";
export const sectionIntro =
  "lg:col-span-2 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground/68";
export const sectionIntroDark =
  "lg:col-span-2 text-[12px] font-medium uppercase tracking-[0.2em] text-white/60";
export const sectionTitle =
  "text-[38px] font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[44px] lg:text-[48px]";
export const sectionBody =
  "max-w-[44rem] text-[24px] font-medium leading-[1.28] tracking-[-0.02em] text-foreground/86";
export const sectionBodyMuted =
  "max-w-[44rem] text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-foreground/62 sm:text-[24px] sm:leading-[1.28]";
export const metaLabel = "text-[12px] font-medium uppercase tracking-[0.16em]";
export const mediaRadius = "rounded-[max(10px,1.4vw)]";

/* ---------- Hero + context ---------- */

export const hero = {
  meta: ["Yettel", "In-house creative production"],
  period: "6 years",
  titleStart: "My school was",
  titleHighlight: "a telecom.",
  subtitle: "I didn't learn advertising at university. I learned it here, one asset at a time.",
  wallCaption: "Illustration: blocks in the proportions of the ad formats I produced.",
};

export const context = {
  company:
    "Yettel is part of the PPF Telecom Group and connects over 3 million customers to people, devices, and businesses. With 200+ physical shops nationwide, the company acknowledged the call to adapt to the digital era and seize online opportunities.",
  roleBefore:
    "As the driving force behind our design processes, I took charge of setting up organized design systems in Figma, guiding our workflow, and ensuring our team had the most efficient tools for creating digital marketing content. ",
  roleHighlight: "I started as an intern",
  roleAfter: " and slowly developed skills, knowledge, passion and perspective.",
};

/* ---------- The job ---------- */

export type StreamKey = "trade" | "campaign" | "always" | "production";

export const streams: { key: StreamKey; title: string; channels: string; description: string }[] = [
  {
    key: "trade",
    title: "Everyday digital trading",
    channels: "Facebook · Google Display Network",
    description: "Ads for devices from Apple, Samsung, Huawei and more, following the brand guidelines.",
  },
  {
    key: "campaign",
    title: "Digital campaigns",
    channels: "Meta · Google Display Network",
    description: "Time-bound campaigns, like the Christmas advent calendar in the Yettel app.",
  },
  {
    key: "always",
    title: "Always-on",
    channels: "Meta · YouTube",
    description: "Campaigns that keep running, like Yettel TV.",
  },
  {
    key: "production",
    title: "Design production",
    channels: "Figma",
    description: "Workflows and processes, design systems, workspaces and tools.",
  },
];

export type DeskItem = {
  stream: StreamKey;
  src: string;
  alt: string;
  caption: string;
  ratio: number; // width / height
  width: number; // desktop width in px
};

export const deskItems: DeskItem[] = [
  { stream: "trade", src: asset("trading-iphone-1200x1200"), alt: "iPhone 13 5G ad: Новата ти суперсила", caption: "Facebook · 1200×1200", ratio: 1, width: 170 },
  { stream: "trade", src: asset("trading-realme-300x600"), alt: "Realme GT Neo 3 5G ad: -200 лв. отстъпка", caption: "GDN · 300×600", ratio: 0.5, width: 92 },
  { stream: "trade", src: asset("trading-realme-1200x1200"), alt: "Realme GT Neo 3 5G Facebook post", caption: "Facebook · 1200×1200", ratio: 1, width: 150 },
  { stream: "trade", src: asset("trading-iphone-728x90"), alt: "iPhone 13 5G leaderboard", caption: "GDN · 728×90", ratio: 728 / 90, width: 300 },
  { stream: "trade", src: asset("trading-iphone-300x250"), alt: "iPhone 13 5G medium rectangle", caption: "GDN · 300×250", ratio: 1.2, width: 140 },
  { stream: "trade", src: asset("trading-realme-1200x628"), alt: "Realme GT Neo 3 5G click-to-website ad", caption: "Facebook · 1200×628", ratio: 1200 / 628, width: 200 },
  { stream: "campaign", src: asset("xmas-kv"), alt: "Key visual: 31 дни Коледа в приложението Yettel", caption: "Key visual", ratio: 1, width: 170 },
  { stream: "campaign", src: asset("xmas-rt-1200x1200"), alt: "Retargeting ad: Игра ли за изненади днес?", caption: "Meta · retargeting", ratio: 1, width: 140 },
  { stream: "campaign", src: asset("xmas-aw-1080x1920"), alt: "Awareness story ad for the advent calendar", caption: "Meta · story", ratio: 1080 / 1920, width: 100 },
  { stream: "campaign", src: asset("xmas-incentive"), alt: "Incentive screen: Игра ли 10 пъти?", caption: "Incentive", ratio: 600 / 1130, width: 98 },
  { stream: "always", src: asset("tv-moment-3"), alt: "Yettel TV ad: Един сезон от любимия сериал и си на морето", caption: "Meta · use case", ratio: 1, width: 160 },
  { stream: "always", src: asset("tv-moment-5"), alt: "Yettel TV ad: Ще гледаш ли мача?", caption: "Meta · use case", ratio: 1, width: 140 },
  { stream: "always", src: asset("tv-content-3"), alt: "Yettel TV ad: Не търси филма, той те намери.", caption: "YouTube · content", ratio: 707 / 1256, width: 100 },
  { stream: "always", src: asset("tv-price-2"), alt: "Yettel TV ad: Телевизия за 1 лв./месец", caption: "YouTube · price", ratio: 720 / 1280, width: 100 },
  { stream: "always", src: asset("tv-reengage-970x250"), alt: "Yettel TV re-engagement ad: Видя ли?", caption: "Re-engagement · 970×250", ratio: 970 / 250, width: 250 },
  { stream: "production", src: asset("production-design-system"), alt: "Figma: the Yettel design system", caption: "Figma · design system", ratio: 1600 / 822, width: 230 },
  { stream: "production", src: asset("production-workflows"), alt: "Figma: Yettel Digital Design file", caption: "Figma · workflows", ratio: 1600 / 822, width: 210 },
];

/* ---------- Everyday digital trading: template stage ---------- */

export type SlotKey = "Headline" | "Product" | "Name" | "Price" | "Plan" | "Button" | "Logo";
export const slotKeys: SlotKey[] = ["Headline", "Product", "Name", "Price", "Plan", "Button", "Logo"];

export type AdFormat = {
  id: string;
  w: number;
  h: number;
  platform: "Facebook" | "Google Display Network";
  name: string;
};

export const adFormats: AdFormat[] = [
  { id: "1200x1200", w: 1200, h: 1200, platform: "Facebook", name: "Post" },
  { id: "1200x628", w: 1200, h: 628, platform: "Facebook", name: "Click to website" },
  { id: "640x360", w: 640, h: 360, platform: "Google Display Network", name: "Bumper" },
  { id: "300x600", w: 300, h: 600, platform: "Google Display Network", name: "Half page" },
  { id: "160x600", w: 160, h: 600, platform: "Google Display Network", name: "Wide skyscraper" },
  { id: "300x250", w: 300, h: 250, platform: "Google Display Network", name: "Medium rectangle" },
  { id: "320x100", w: 320, h: 100, platform: "Google Display Network", name: "Large mobile banner" },
  { id: "320x50", w: 320, h: 50, platform: "Google Display Network", name: "Mobile leaderboard" },
  { id: "728x90", w: 728, h: 90, platform: "Google Display Network", name: "Leaderboard" },
];

const ALL: SlotKey[] = ["Headline", "Product", "Name", "Price", "Plan", "Button", "Logo"];

export type Phone = {
  id: string;
  label: string;
  offer: string;
  // What each size keeps, read from the final ads.
  keeps: Record<string, SlotKey[]>;
};

export const phones: Phone[] = [
  {
    id: "iphone",
    label: "iPhone 13 5G",
    offer: "60,99 лв./мес. · Тотал Макс 59,99",
    keeps: {
      "1200x1200": ["Headline", "Product", "Name", "Price", "Plan", "Button"],
      "1200x628": ["Headline", "Product", "Name", "Price", "Plan"],
      "640x360": ["Headline", "Product", "Name", "Price", "Plan"],
      "300x600": ALL,
      "160x600": ALL,
      "300x250": ALL,
      "320x100": ALL,
      "320x50": ["Headline", "Product", "Name", "Button", "Logo"],
      "728x90": ["Headline", "Product", "Name", "Button", "Logo"],
    },
  },
  {
    id: "realme",
    label: "Realme GT Neo 3 5G",
    offer: "-200 лв. отстъпка · Total Unlimited 59,99",
    keeps: {
      "1200x1200": ["Headline", "Product", "Name", "Price", "Plan"],
      "1200x628": ["Headline", "Product", "Name"],
      "640x360": ["Headline", "Product", "Name"],
      "300x600": ALL,
      "160x600": ALL,
      "300x250": ALL,
      "320x100": ALL,
      "320x50": ["Headline", "Product", "Name", "Button", "Logo"],
      "728x90": ALL,
    },
  },
];

export const tradingImage = (phoneId: string, formatId: string) => asset(`trading-${phoneId}-${formatId}`);

/* ---------- Christmas campaign ---------- */

export const xmas = {
  period: "Digital campaign · Dec 1–31, 2022",
  title: "31 days of Christmas in the Yettel app.",
  body: "A campaign for the Christmas advent calendar inside the app. The objective: make customers excited to play in the Yettel app every day.",
  stages: [
    {
      label: "01 · Awareness · Meta, GDN",
      title: "Make people aware of the game.",
      gloss: "“31 days of Christmas in the Yettel app. Play every day for surprises.”",
    },
    {
      label: "02 · Retargeting · Meta",
      title: "Remind them to play every day.",
      gloss: "“Did you play for surprises today? In the Yettel app.”",
    },
    {
      label: "03 · Incentive",
      title: "Show what they can win.",
      gloss:
        "“Played 10 times? If you've played for 10 days in the Yettel app, you're automatically entered into a raffle for Samsung prizes.”",
    },
  ],
  awarenessFormats: [
    { src: asset("xmas-aw-1080x1920"), label: "Story", ratio: 1080 / 1920 },
    { src: asset("xmas-aw-300x600"), label: "300×600", ratio: 0.5 },
    { src: asset("xmas-aw-300x250"), label: "300×250", ratio: 1.2 },
    { src: asset("xmas-aw-320x480"), label: "320×480", ratio: 320 / 480 },
    { src: asset("xmas-aw-1200x628"), label: "1200×628", ratio: 1200 / 628 },
  ],
  results: [
    { value: "4.63%", label: "Click-through rate" },
    { value: "€0.04", label: "Price per link click" },
    { value: "284", label: "Comments" },
  ],
};

/* ---------- Yettel TV ---------- */

export const tv = {
  kicker: "Always-on digital campaign · Yettel TV",
  title: "Launching TV in summer.",
  body: "My team and I launched an always-on campaign at the least expected time of year. The approach: turn unexpected moments into the perfect TV rendezvous, across the whole customer journey.",
  moments: [
    { label: "Too hot to play", src: asset("tv-moment-1"), bg: "Когато навън е твърде горещо за игра", en: "When it's too hot outside to play." },
    { label: "Un-summery", src: asset("tv-moment-2"), bg: "Има неЛЕТНИ моменти, но има и какво да гледаш", en: "There are un-summery moments, but there's also something to watch." },
    { label: "Seaside", src: asset("tv-moment-3"), bg: "Един сезон от любимия сериал и си на морето", en: "One season of your favourite series and you're at the seaside." },
    { label: "Recipes", src: asset("tv-moment-4"), bg: "Не помниш рецептите? Върни си шоуто", en: "Can't remember the recipes? Rewind the show." },
    { label: "Match", src: asset("tv-moment-5"), bg: "Ще гледаш ли мача?", en: "Watching the match? You need your friends and Yettel TV." },
    { label: "Friday night", src: asset("tv-moment-6"), bg: "Петък вечер от дивана. Може и да не е скучна.", en: "Friday night on the couch. It might not be boring after all." },
    { label: "Catching up", src: asset("tv-moment-7"), bg: "Имаш да наваксваш с предаванията?", en: "Shows to catch up on? With Yettel TV you can go back up to a week." },
    { label: "Travelling", src: asset("tv-moment-8"), bg: "Бъди в крак със случващото се, докато пътуваш", en: "Keep up with what's happening while you travel." },
  ],
  tabs: [
    { id: "use", label: "Use cases", meta: "Meta · 8 creatives", body: "Creatives showing the different ways people use the product." },
    { id: "price", label: "Price", meta: "YouTube · 2 creatives", body: "The promotional price: 1 лв. a month for the first 6 months." },
    { id: "content", label: "Content", meta: "YouTube · 5 creatives", body: "Spotlights for cinema fans and followers of the latest shows." },
    { id: "reengage", label: "Re-engagement", meta: "YouTube · 5 sizes", body: "Simple text creatives for people who explored the service but haven't bought yet." },
  ],
  price: [
    { src: asset("tv-price-1"), alt: "Телевизия и интернет за 1 лв./месец за първите 6 месеца" },
    { src: asset("tv-price-2"), alt: "Телевизия за 1 лв./месец за първите 6 месеца" },
  ],
  priceGloss: "“TV and internet for 1 lev a month for the first 6 months.” · “TV for 1 lev a month for the first 6 months.”",
  content: [1, 2, 3, 4, 5].map((n) => ({
    src: asset(`tv-content-${n}`),
    alt: n < 5 ? "Не търси филма, той те намери. Гледай HBO Max с Yettel TV" : "Запази вторник вечер за „Шампионска лига“. Гледай с Yettel TV",
  })),
  contentGloss:
    "“Don't look for the film, it found you. Watch HBO Max with Yettel TV.” · “Save Tuesday night for the Champions League. Watch with Yettel TV.”",
  reengage: [
    { src: asset("tv-reengage-1200x1200"), w: 240, ratio: 1 },
    { src: asset("tv-reengage-300x600"), w: 120, ratio: 0.5 },
    { src: asset("tv-reengage-300x250"), w: 120, ratio: 1.2 },
    { src: asset("tv-reengage-970x250"), w: 388, ratio: 970 / 250 },
    { src: asset("tv-reengage-320x100"), w: 128, ratio: 3.2 },
  ],
  reengageGloss:
    "“Did you see? We have TV. In a package with internet. And without internet. For 1 lev a month for the first 6 months.”",
};

/* ---------- Streamlined design production ---------- */

export const production = {
  kicker: "Streamlined design production",
  title: "It's not just about making content. It's about how you make it.",
  body: "Behind the ads: design workflows and processes, design systems, workspaces and tools.",
  items: [
    {
      label: "Workflows",
      caption: "Design workflows and processes in Figma: the yettel.digital team and the Yettel Digital Design file.",
      src: asset("production-workflows"),
    },
    {
      label: "Design system",
      caption: "Colors, typography and buttons. Lime Primary B4FF00 and Navy Primary 002340, set in the Yettel typeface.",
      src: asset("production-design-system"),
    },
    {
      label: "Workspaces",
      caption: "Workspaces and tools: the Website banners guideline file in Figma.",
      src: asset("production-workspaces"),
    },
  ],
};

/* ---------- Learning ---------- */

export const learning = {
  title: "From making visuals to thinking in systems.",
  paragraphs: [
    "This is where I learned marketing, advertising and digital advertising, and started developing my design skills.",
    "Then I moved towards digital experience and systems thinking: an intentional approach, for effectiveness and consistency.",
    "My job was mainly producing visuals, but I learned a lot about everything around them.",
  ],
  witnessed:
    "Witnessed along the way: the online store and performance marketing developing from an early stage, and simple campaigns growing into a CDP platform and other complex solutions.",
};

export const nextCaseStudy = { label: "Storytel", link: "/systems" };
