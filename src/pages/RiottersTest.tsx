import { Link } from "@/components/ReloadLink";

export default function RiottersTest() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative pt-32 pb-20 overflow-x-hidden">
        <div className="w-full px-12 md:px-16 lg:px-20">
          {/* Centered Headline */}
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              Gett ready for
              <br />
              a design{" "}
              <span className="relative inline-block">
                <span className="relative z-10 px-4 bg-cyan-400 text-black">
                  accelleratttion
                </span>
                <span className="absolute top-1/2 left-0 right-0 h-[2px] bg-black z-20 -translate-y-1/2" />
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Testimonial */}
            <div className="lg:col-span-4 space-y-8">
              {/* Avatar & Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-black">Dustin Ray</p>
                  <p className="text-sm text-gray-500">Head of Business Development, bizee.com</p>
                </div>
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-lg leading-relaxed">
                "Working with Riotters has never felt like an agency-client 
                relationship. Everyone from their team is very engaged and 
                involved in the project, making them feel like they are an 
                extension of our team."
              </blockquote>

              {/* CTA Link */}
              <Link
                to="/outputs"
                className="inline-flex items-center gap-2 text-base hover:text-gray-600 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                Explore Case Studies
              </Link>
            </div>

            {/* Right Column: Hero Image */}
            <div className="lg:col-span-8">
              <div className="aspect-[16/9] bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format"
                  alt="Hero visual"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hello Section */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="w-full px-12 md:px-16 lg:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              Hello from Riotters, where imagination meets technology and solid craftsmanship to challenge the status quo.
            </h2>
            <Link 
              to="/services"
              className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Check Our Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="w-full px-12 md:px-16 lg:px-20">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              In the design and development process, we blend the power of data analysis with a sprinkle of creativity and a touch of goals.
            </h2>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Product Design</h3>
              <p className="text-gray-600">Creating intuitive and engaging product experiences</p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">[Re]Branding</h3>
              <p className="text-gray-600">Refreshing brands for the modern era</p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Low/No code Development</h3>
              <p className="text-gray-600">Rapid development with cutting-edge tools</p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Motion Design</h3>
              <p className="text-gray-600">Bringing designs to life with animation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 md:py-32">
        <div className="w-full px-12 md:px-16 lg:px-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
            As a design accelleratttor, we'll help transform your digital product into a future-scale business.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Case Study Cards */}
            {[
              { name: "4th Moment", services: "Branding Development Product Design" },
              { name: "Eyebou", services: "Branding Product Design Motion Design 3D Design" },
              { name: "Bizee", services: "Branding Payload Development Marketing Design Product Design UX Design" },
              { name: "Sparrowbid", services: "Website Branding Product Design UX Design Motion Design" },
              { name: "Partners Personnel", services: "Branding Product Design UX Design" },
              { name: "RTT-01", services: "Product Design Branding Development UX Research" },
            ].map((project, i) => (
              <Link 
                key={i}
                to="/outputs"
                className="group block bg-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-300 to-gray-400"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.services}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="w-full px-12 md:px-16 lg:px-20">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              We're a tteam of design folks and tech geeks passionate about the transformative power of design.
            </h2>
            <Link 
              to="/about"
              className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Meet your Futture Team
            </Link>
          </div>

          <div className="aspect-[21/9] bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl max-w-7xl mx-auto"></div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32">
        <div className="w-full px-12 md:px-16 lg:px-20">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              In our universe, there's no room for political maneuvering or rigid mindsets.
            </h2>
            <p className="text-xl text-gray-600">
              We value collaboration, creativity, and a positive work environment over office politics and manipulative tactics.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">RIOTTERS RULES</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Quality®", desc: "We're aesthetic (but healthy) perfectionists." },
                { title: "Equipment", desc: "Working on inefficient equipment is actual torture." },
                { title: "Collaboration", desc: "We act, we listen, and we improve." },
                { title: "Relationships", desc: "We build long-term relationships regardless of location." },
                { title: "Respect", desc: "We respect each other with our different views and opinions." },
                { title: "Meetings", desc: "Conversation is important, but everything has limits." },
                { title: "Structure", desc: "Our organization has a flat structure, and we're all equals." },
                { title: "Help", desc: "Don't hesitate to ask for help if you need it." },
              ].map((rule, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-bold mb-2">{rule.title}</h4>
                  <p className="text-gray-600">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Toolbox Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="w-full px-12 md:px-16 lg:px-20">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              For us, creativity is stimulated by tools and processes and backed by solid craftsmanship.
            </h2>
            <Link 
              to="/toolbox"
              className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Check our toolbox
            </Link>
          </div>
        </div>
      </section>

      {/* Dribbble Section */}
      <section className="py-24 md:py-32">
        <div className="w-full px-12 md:px-16 lg:px-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
            Check out our recent<br />work on Dribbble.
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="w-full px-12 md:px-16 lg:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Wanna accellerattte your business through design?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's have a virtual coffee and chat about your goals and how our processes can help achieve them.
            </p>
            <Link 
              to="/contact"
              className="inline-block px-8 py-4 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition-colors"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
