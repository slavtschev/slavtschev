import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "@/components/ReloadLink";
import { usePageTitle } from "@/hooks/use-page-title";
import { useInView } from "@/hooks/use-in-view";

const revealEase = [0.25, 0.46, 0.45, 0.94] as const;

const workstreams = [
  {
    key: "trade",
    title: "Everyday digital trading",
    channels: "Facebook · Google Display Network",
    description: "Ads for devices from Apple, Samsung, Huawei and more, following the brand guidelines.",
    id: "trading",
  },
  {
    key: "campaign",
    title: "Digital campaigns",
    channels: "Meta · Google Display Network",
    description: "Time-bound campaigns, like the Christmas advent calendar in the Yettel app.",
    id: "christmas",
  },
  {
    key: "always",
    title: "Always-on",
    channels: "Meta · YouTube",
    description: "Campaigns that keep running, like Yettel TV.",
    id: "tv",
  },
  {
    key: "production",
    title: "Design production",
    channels: "Figma",
    description: "Workflows and processes, design systems, workspaces and tools.",
    id: "production",
  },
];

const tradingDevices = [
  {
    label: "iPhone 13 5G",
    offer: "60,99 лв./мес. · Тотал Макс 59,99",
    formats: [
      { src: "/case-studies/yettel/trading-iphone-1200x1200.webp", caption: "Facebook · 1200×1200", ratio: 1 },
      { src: "/case-studies/yettel/trading-iphone-300x250.webp", caption: "GDN · 300×250", ratio: 600 / 500 },
      { src: "/case-studies/yettel/trading-iphone-728x90.webp", caption: "GDN · 728×90", ratio: 1456 / 180 },
    ],
  },
  {
    label: "Realme GT Neo 3 5G",
    offer: "-200 лв. отстъпка · Total Unlimited 59,99",
    formats: [
      { src: "/case-studies/yettel/trading-realme-1200x1200.webp", caption: "Facebook · 1200×1200", ratio: 1 },
      { src: "/case-studies/yettel/trading-realme-300x600.webp", caption: "GDN · 300×600", ratio: 600 / 1200 },
    ],
  },
];

const xmas = {
  period: "Digital campaign · Dec 1–31, 2022",
  title: "31 days of Christmas in the Yettel app.",
  body: "A campaign for the Christmas advent calendar inside the app. The objective: make customers excited to play in the Yettel app every day.",
  stages: [
    {
      label: "01 · Awareness · Meta, GDN",
      title: "Make people aware of the game.",
      gloss: "“31 days of Christmas in the Yettel app. Play every day for surprises.”",
      image: "/case-studies/yettel/xmas-kv.webp",
      caption: "Key visual: 31 дни Коледа в приложението Yettel",
    },
    {
      label: "02 · Retargeting · Meta",
      title: "Remind them to play every day.",
      gloss: "“Did you play for surprises today? In the Yettel app.”",
      image: "/case-studies/yettel/xmas-rt-1200x1200.webp",
      caption: "Retargeting ad: Игра ли за изненади днес?",
    },
    {
      label: "03 · Incentive",
      title: "Show what they can win.",
      gloss: "“Played 10 times? If you've played for 10 days in the Yettel app, you're automatically entered into a raffle for Samsung prizes.”",
      image: "/case-studies/yettel/xmas-incentive.webp",
      caption: "Incentive screen: Игра ли 10 пъти?",
    },
  ],
  results: [
    { value: "4.63%", label: "Click-through rate" },
    { value: "€0.04", label: "Price per link click" },
    { value: "284", label: "Comments" },
  ],
};

const tv = {
  kicker: "Always-on digital campaign · Yettel TV",
  title: "Launching TV in summer.",
  body: "My team and I launched an always-on campaign at the least expected time of year. The approach: turn unexpected moments into the perfect TV rendezvous, across the whole customer journey.",
  moments: [
    { label: "Too hot to play", src: "/case-studies/yettel/tv-moment-1.webp", bg: "Когато навън е твърде горещо за игра", en: "When it's too hot outside to play." },
    { label: "Un-summery", src: "/case-studies/yettel/tv-moment-2.webp", bg: "Има неЛЕТНИ моменти, но има и какво да гледаш", en: "There are un-summery moments, but there's also something to watch." },
    { label: "Seaside", src: "/case-studies/yettel/tv-moment-3.webp", bg: "Един сезон от любимия сериал и си на морето", en: "One season of your favourite series and you're at the seaside." },
    { label: "Match", src: "/case-studies/yettel/tv-moment-5.webp", bg: "Ще гледаш ли мача?", en: "Watching the match? You need your friends and Yettel TV." },
    { label: "Friday night", src: "/case-studies/yettel/tv-moment-6.webp", bg: "Петък вечер от дивана. Може и да не е скучна.", en: "Friday night on the couch. It might not be boring after all." },
    { label: "Travelling", src: "/case-studies/yettel/tv-moment-8.webp", bg: "Бъди в крак със случващото се, докато пътуваш", en: "Keep up with what's happening while you travel." },
  ],
  tracks: [
    {
      id: "price",
      label: "Price",
      meta: "YouTube · 2 creatives",
      body: "The promotional price: 1 лв. a month for the first 6 months.",
      image: "/case-studies/yettel/tv-price-1.webp",
      ratio: 721 / 1280,
      caption: "Телевизия и интернет за 1 лв./месец за първите 6 месеца",
      gloss: "“TV and internet for 1 lev a month for the first 6 months.” · “TV for 1 lev a month for the first 6 months.”",
    },
    {
      id: "content",
      label: "Content",
      meta: "YouTube · 5 creatives",
      body: "Spotlights for cinema fans and followers of the latest shows.",
      image: "/case-studies/yettel/tv-content-3.webp",
      ratio: 707 / 1256,
      caption: "Не търси филма, той те намери. Гледай HBO Max с Yettel TV",
      gloss: "“Don't look for the film, it found you. Watch HBO Max with Yettel TV.”",
    },
    {
      id: "reengage",
      label: "Re-engagement",
      meta: "YouTube · 5 sizes",
      body: "Simple text creatives for people who explored the service but haven't bought yet.",
      image: "/case-studies/yettel/tv-reengage-970x250.webp",
      ratio: 1467 / 379,
      caption: "Re-engagement · 970×250",
      gloss: "“Did you see? We have TV. In a package with internet. And without internet. For 1 lev a month for the first 6 months.”",
    },
  ],
};

const production = {
  kicker: "Streamlined design production",
  title: "It's not just about making content. It's about how you make it.",
  body: "Behind the ads: design workflows and processes, design systems, workspaces and tools.",
  items: [
    {
      label: "Workflows",
      caption: "Design workflows and processes in Figma: the yettel.digital team and the Yettel Digital Design file.",
      image: "/case-studies/yettel/production-workflows.webp",
    },
    {
      label: "Design system",
      caption: "Colors, typography and buttons. Lime Primary B4FF00 and Navy Primary 002340, set in the Yettel typeface.",
      image: "/case-studies/yettel/production-design-system.webp",
    },
    {
      label: "Workspaces",
      caption: "Workspaces and tools: the Website banners guideline file in Figma.",
      image: "/case-studies/yettel/production-workspaces.webp",
    },
  ],
};

const closing = {
  title: "From making visuals to thinking in systems.",
  paragraphs: [
    "This is where I learned marketing, advertising and digital advertising, and started developing my design skills.",
    "Then I moved towards digital experience and systems thinking: an intentional approach, for effectiveness and consistency.",
    "My job was mainly producing visuals, but I learned a lot about everything around them.",
  ],
  witnessed:
    "Witnessed along the way: the online store and performance marketing developing from an early stage, and simple campaigns growing into a CDP platform and other complex solutions.",
};

function useReveal() {
  return useInView({ threshold: 0.1, once: true });
}

export default function CaseStudyYettel() {
  usePageTitle("Yettel case study");

  const heroSection = useReveal();
  const tradingSection = useReveal();
  const xmasSection = useReveal();
  const tvSection = useReveal();
  const productionSection = useReveal();

  return (
    <article className="theme-yettel bg-background">
      <header className="container-wide pt-24 pb-0 md:pt-28 lg:pt-[128px] lg:pb-0">
        <div className="flex max-w-[56rem] flex-col items-start gap-6">
          <Link
            to="/systems"
            className="inline-flex items-center gap-2 text-[16px] leading-none font-medium text-accent transition-colors hover:text-accent/80"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            All case studies
          </Link>

          <span className="web-label text-muted-foreground">2018–2024 · Visual identity &amp; design systems</span>

          <motion.h1
            ref={heroSection.ref}
            initial={{ opacity: 0, y: 16 }}
            animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6 }}
            className="web-display text-foreground"
          >
            Yettel
          </motion.h1>

          <p className="web-lead max-w-[44ch] text-foreground/68">
            I didn't learn advertising at university. I learned it here, one asset at a time.
          </p>

          <p className="web-body max-w-[52rem] text-muted-foreground">
            Yettel is part of the PPF Telecom Group and connects over 3 million customers to
            people, devices, and businesses. With 200+ physical shops nationwide, the company
            acknowledged the call to adapt to the digital era and seize online opportunities.
          </p>

          <p className="web-body max-w-[52rem] text-muted-foreground">
            As the driving force behind our design processes, I took charge of setting up
            organized design systems in Figma, guiding our workflow, and ensuring our team had the
            most efficient tools for creating digital marketing content.{" "}
            <span className="font-medium text-foreground">I started as an intern</span> and slowly
            developed skills, knowledge, passion and perspective.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["Identity", "Design systems", "Strategy"].map((tag) => (
              <span
                key={tag}
                className="cs-tag inline-flex h-8 items-center text-[14px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <figure className="container-wide mt-16 mb-0 lg:mt-24">
        <span className="block aspect-[16/9] overflow-hidden rounded-[12px] bg-foreground">
          <img
            src="/case-studies/yettel/cover.webp"
            alt="Yettel brand and campaign work overview"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </span>
      </figure>

      <nav aria-label="Jump to section" className="container-wide pt-16 lg:pt-24">
        <p className="web-label mb-6 text-muted-foreground">
          Six years of helping various teams at Yettel. Four kinds of work; pick one to see examples.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workstreams.map((stream) => (
            <a
              key={stream.key}
              href={`#${stream.id}`}
              className="group flex flex-col justify-between gap-6 rounded-[16px] border border-black/5 bg-card p-6 text-left text-foreground transition-colors duration-300 hover:border-black/15 lg:min-h-[13rem]"
            >
              <span className="web-label text-muted-foreground">{stream.channels}</span>
              <span className="flex flex-col gap-2">
                <span className="web-title">{stream.title}</span>
                <span className="web-small text-muted-foreground">{stream.description}</span>
              </span>
            </a>
          ))}
        </div>
      </nav>

      <section
        id="trading"
        ref={tradingSection.ref}
        className="container-wide pt-24 lg:pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={tradingSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, ease: revealEase }}
        >
          <span className="web-label text-muted-foreground">Facebook · Google Display Network</span>
          <h2 className="web-headline mt-4 max-w-[28rem] text-foreground">
            New phone. Same template. Nine formats.
          </h2>
          <p className="web-body mt-6 max-w-[44rem] text-muted-foreground">
            Ads for devices from Apple, Samsung, Huawei and more. My approach: adaptable templates
            that follow the brand guidelines and display ad best practices, so every campaign is
            easy to adapt.
          </p>
        </motion.div>

        <figure className="mt-12">
          <img
            src="/case-studies/yettel/trading-vendors-collage.webp"
            alt="Vendors showcase: square ads for Motorola, Nokia, Xiaomi, Samsung, Huawei, Apple and Realme devices"
            className="w-full rounded-[12px]"
            style={{ aspectRatio: "1581 / 1600" }}
            loading="lazy"
          />
          <figcaption className="web-small mt-4 text-muted-foreground">
            Vendors showcase: square ads for Motorola, Nokia, Xiaomi, Samsung, Huawei, Apple and
            Realme devices.
          </figcaption>
        </figure>

        <div className="mt-16 grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-10">
          {tradingDevices.map((device) => (
            <div key={device.label}>
              <h3 className="web-title text-foreground">{device.label}</h3>
              <p className="web-small mt-2 text-muted-foreground">{device.offer}</p>
              <div className="mt-6 flex flex-wrap items-end gap-4">
                {device.formats.map((format) => (
                  <figure key={format.caption} className="flex flex-col gap-2">
                    <img
                      src={format.src}
                      alt={`${device.label} ad, ${format.caption}`}
                      className="max-h-[220px] max-w-full rounded-[4px]"
                      style={{ aspectRatio: format.ratio }}
                      loading="lazy"
                    />
                    <figcaption className="web-small text-muted-foreground">{format.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="christmas" ref={xmasSection.ref} className="cs-deep pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={xmasSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, ease: revealEase }}
        >
          <span className="web-label text-muted-foreground">{xmas.period}</span>
          <h2 className="web-headline mt-4 max-w-[28rem] text-foreground">{xmas.title}</h2>
          <p className="web-body mt-6 max-w-[44rem] text-muted-foreground">{xmas.body}</p>
        </motion.div>

        <ol className="mt-16 flex flex-col border-t border-foreground">
          {xmas.stages.map((stage) => (
            <li
              key={stage.label}
              className="grid grid-cols-1 items-center gap-8 border-b border-foreground/15 py-10 lg:grid-cols-12 lg:gap-x-10"
            >
              <div className="lg:col-span-7">
                <span className="web-label text-muted-foreground">{stage.label}</span>
                <h3 className="web-title mt-3 text-foreground">{stage.title}</h3>
                <p className="web-body mt-3 italic text-foreground/68">{stage.gloss}</p>
              </div>
              <figure className="lg:col-span-5">
                <img
                  src={stage.image}
                  alt={stage.caption}
                  className="aspect-square w-full max-w-[280px] rounded-[8px] object-cover"
                  loading="lazy"
                />
                <figcaption className="web-small mt-3 text-muted-foreground">{stage.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid grid-cols-1 gap-8 border-y border-foreground/15 py-10 sm:grid-cols-3 lg:gap-10">
          {xmas.results.map((result) => (
            <div key={result.label}>
              <span className="block text-[54px] font-medium leading-[0.95] tracking-[-0.04em] text-foreground sm:text-[64px]">
                {result.value}
              </span>
              <span className="web-small mt-3 block text-muted-foreground">{result.label}</span>
            </div>
          ))}
        </div>
      </div>
      </section>

      <section id="tv" ref={tvSection.ref} className="cs-light pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={tvSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, ease: revealEase }}
        >
          <span className="web-label text-muted-foreground">{tv.kicker}</span>
          <h2 className="web-headline mt-4 max-w-[28rem] text-foreground">{tv.title}</h2>
          <p className="web-body mt-6 max-w-[44rem] text-muted-foreground">{tv.body}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {tv.moments.map((moment) => (
            <figure key={moment.label} className="flex flex-col gap-3">
              <img
                src={moment.src}
                alt={moment.en}
                className="aspect-[9/16] w-full rounded-[8px] object-cover"
                loading="lazy"
              />
              <figcaption className="flex flex-col gap-1">
                <span className="web-label text-muted-foreground">{moment.label}</span>
                <span className="web-small italic text-foreground/68">{moment.en}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {tv.tracks.map((track) => (
            <div key={track.id} className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between gap-4 border-b border-foreground/25 pb-3">
                <span className="web-title text-foreground">{track.label}</span>
                <span className="web-small text-muted-foreground">{track.meta}</span>
              </div>
              <p className="web-small text-muted-foreground">{track.body}</p>
              <img
                src={track.image}
                alt={track.caption}
                className="w-full rounded-[8px]"
                style={{ aspectRatio: track.ratio }}
                loading="lazy"
              />
              <p className="web-small italic text-foreground/68">{track.gloss}</p>
            </div>
          ))}
        </div>
      </div>
      </section>

      <section
        id="production"
        ref={productionSection.ref}
        className="container-wide pt-24 pb-24 lg:pt-32 lg:pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={productionSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, ease: revealEase }}
        >
          <span className="web-label text-muted-foreground">{production.kicker}</span>
          <h2 className="web-headline mt-4 max-w-[28rem] text-foreground">{production.title}</h2>
          <p className="web-body mt-6 max-w-[44rem] text-muted-foreground">{production.body}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {production.items.map((item) => (
            <figure key={item.label} className="flex flex-col gap-3">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full rounded-[8px]"
                style={{ aspectRatio: "1600 / 822" }}
                loading="lazy"
              />
              <figcaption className="flex flex-col gap-1">
                <span className="web-label text-muted-foreground">{item.label}</span>
                <span className="web-small text-muted-foreground">{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-8 border-t border-foreground/15 pt-16 lg:grid-cols-12 lg:gap-x-6">
          <h2 className="web-headline text-foreground lg:col-span-7">{closing.title}</h2>
          <div className="flex flex-col gap-6 lg:col-span-5">
            {closing.paragraphs.map((paragraph) => (
              <p key={paragraph} className="web-body text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <p className="web-small border-t border-foreground/15 pt-6 text-muted-foreground">
              {closing.witnessed}
            </p>
          </div>
        </div>
      </section>

      <nav aria-label="More case studies" className="container-wide pb-24 lg:pb-32">
        <Link
          to="/systems"
          className="group flex flex-col justify-between gap-4 rounded-[12px] bg-card p-8 text-foreground no-underline"
        >
          <span className="web-label text-muted-foreground">All case studies</span>
          <span className="flex items-start justify-between gap-4">
            <span className="web-title">4 case studies, each with the system behind it</span>
            <ArrowUpRight
              size={18}
              className="shrink-0 transition-transform duration-300 ease-out group-hover:rotate-45"
              aria-hidden="true"
            />
          </span>
        </Link>
      </nav>
    </article>
  );
}
