import { Link } from "@/components/ReloadLink";

export default function About() {
  return (
    <>
      <section>
        <div className="container-wide pt-24 pb-0 md:pt-28 lg:pt-[144px] lg:pb-0">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-0">
            <div className="lg:col-span-6">
              <h1 className="max-w-[36rem] [font-family:'Satoshi'] text-[48px] font-medium leading-[1] tracking-[-0.02em] text-[#050505]">
                You Want To Know More
                <br />
                About Me?
              </h1>
              <p className="mt-14 max-w-[40rem] [font-family:'Satoshi'] text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-[#161616]">
                It all started with a series of mistakes... but those mistakes turned out to be moments of realisation. Through my passion for visual arts I found my true calling.
              </p>
            </div>

            <div className="hidden lg:block lg:col-span-1 xl:col-span-2" aria-hidden />

            <div className="w-full lg:col-span-5 xl:col-span-4 lg:justify-self-end">
              <div className="aspect-square overflow-hidden rounded-[20px]">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80"
                  alt="Portrait"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-[128px]">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-16">
          <p className="lg:col-span-2 [font-family:'Satoshi'] text-[16px] font-medium uppercase leading-none tracking-[0.04em] text-foreground/90">
            About Me
          </p>

          <div className="lg:col-start-4 lg:col-end-13">
            <h2 className="w-full max-w-none [font-family:'Satoshi'] text-[38px] font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[44px] lg:text-[48px]">
              Versatile visual designer with 7+ years in digital advertising and creative production.
            </h2>

            <p className="mt-10 w-full max-w-none [font-family:'Satoshi'] text-[24px] font-medium leading-[1.32] tracking-[-0.02em] text-foreground/90">
              I focus on Digital Design, No Code development, and Automation - always exploring smarter, more efficient ways to create. Inspired by art, photography, and classic graphic design.
            </p>
          </div>

          <div className="lg:col-span-12">
            <div className="aspect-[4/3] overflow-hidden rounded-[20px] lg:aspect-[21/9]">
              <img
                src="https://images.unsplash.com/photo-1653392110793-3e9fbf6b4d5d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Abstract blurred light composition"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide pb-[128px]">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-16">
          <p className="lg:col-span-2 [font-family:'Satoshi'] text-[16px] font-medium uppercase leading-none tracking-[0.04em] text-foreground/90">
            About Me
          </p>

          <div className="lg:col-start-4 lg:col-end-13">
            <h3 className="w-full max-w-none [font-family:'Satoshi'] text-[38px] font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[44px] lg:text-[48px]">
              Versatile visual designer with 6+ years in digital advertising and creative production.
            </h3>

            <div className="mt-16 max-w-none space-y-10 [font-family:'Satoshi'] tracking-[-0.01em] text-foreground/90">
              <div>
                <h4 className="text-[24px] font-medium leading-[1.25] text-foreground">Creative Production</h4>
                <p className="mt-1 text-[24px] font-normal leading-[1.35] text-foreground/90">
                  I've worked with two major brands with huge advertising volume - Storytel and Yettel Bulgaria. In both roles, my focus was on digital advertising. Beyond just delivering assets across various formats and platforms, I've helped build workflows, design systems, and templates that make high-volume production smooth and scalable.
                </p>
              </div>

              <div>
                <h4 className="text-[24px] font-medium leading-[1.25] text-foreground">UX/UI Design</h4>
                <p className="mt-1 text-[24px] font-normal leading-[1.35] text-foreground/90">
                  After completing the UX/UI Design course at Telerik, I've worked on several small-scale website projects. I'm focused on growing in this area and aiming to craft thoughtful, effective digital experiences that go beyond just looks.
                </p>
              </div>

              <div>
                <h4 className="text-[24px] font-medium leading-[1.25] text-foreground">Creative Automation</h4>
                <p className="mt-1 text-[24px] font-normal leading-[1.35] text-foreground/90">
                  Creative automation naturally grew out of my work in high-volume ad production. Managing large-scale campaigns across multiple markets taught me to approach everything with efficiency in mind. I use a lot of hand coded scripts, plugins, and even AI to speed things up - from layout automation to smarter file organisation. There's a script or solution for almost anything.
                </p>
              </div>

              <div>
                <h4 className="text-[24px] font-medium leading-[1.25] text-foreground">No Code Development</h4>
                <p className="mt-1 text-[24px] font-normal leading-[1.35] text-foreground/90">
                  I build fast, modern websites using tools like Webflow, Framer, and Builder.io. But building a nice-looking site is just the start, I also make sure it's connected, discoverable, and effective. From setting up GTM and analytics to integrating third-party tools, I focus on making sites that actually perform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide pb-[128px]">
        <div className="grid grid-cols-1 items-start gap-y-8 lg:grid-cols-12 lg:gap-x-6">
          <p className="lg:col-span-2 [font-family:'Satoshi'] text-[16px] font-medium uppercase leading-none tracking-[0.04em] text-foreground/90">
            About Me
          </p>

          <h3 className="lg:col-start-4 lg:col-end-10 [font-family:'Satoshi'] text-[38px] font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[44px] lg:text-[48px]">
            Versatile visual designer with 6+ years in digital advertising and creative production.
          </h3>

          <div className="lg:col-start-11 lg:col-span-2 lg:self-center lg:justify-self-end">
            <Link
              to="/systems"
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 [font-family:'Satoshi'] text-[16px] font-normal leading-none text-primary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
