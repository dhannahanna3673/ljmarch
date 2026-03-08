const BOOK_URL =
  "https://www.vagaro.com/lajoleeaesthetics/book-now";
const CHERRY_URL =
  "https://pay.withcherry.com/lajolee-aesthetics---wellness-?utm_source=merchant&utm_medium=qr_code_flyer&utm_campaign=v1";
const ALLE_URL =
  "https://alle.com/search/lajolee-aesthetics-and-wellness-palm-coast";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <HeaderNav />
      <main>
        <Hero />
        <ServicesOverview />
        <InjectablesSection />
        <SkinSection />
        <WellnessSection />
        <SpecialsSection />
        <AboutSection />
        <ResultsGallery />
        <TestimonialsLayout />
        <FinancingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="w-full bg-[#1f1a17] text-white text-sm">
      <div className="container-lj flex flex-wrap items-center justify-between gap-3 py-2">
        <div className="flex flex-wrap gap-4">
          <span>LaJolee Aesthetics &amp; Wellness</span>
          <span className="hidden sm:inline text-[#dfd2c7]">
            4883 Palm Coast Parkway NW, Suite No. 5, Palm Coast, FL 32137
          </span>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <a href="tel:13862646645" className="text-[#f8f3ef]">
            386-264-6645
          </a>
          <a
            href={BOOK_URL}
            className="inline-flex items-center justify-center rounded-full border border-[#f0e0d2] bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase"
          >
            Book Online
          </a>
        </div>
      </div>
    </div>
  );
}

function HeaderNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[rgba(252,250,247,0.96)] backdrop-blur">
      <div className="container-lj flex items-center justify-between gap-6 py-4">
        <div className="flex flex-col gap-1">
          <span className="text-[0.7rem] font-semibold tracking-[0.28em] uppercase text-[var(--primary)]">
            LaJolee
          </span>
          <span className="text-lg font-semibold">
            Aesthetics &amp; Wellness
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          <a href="#services" className="hover:text-[var(--primary)]">
            Services
          </a>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[var(--primary)]">
              Aesthetic Services
              <span className="text-xs">▾</span>
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 top-full mt-4 w-72 rounded-2xl border border-[var(--border)] bg-white shadow-soft p-3">
              <a
                href="/injectables"
                className="block rounded-xl px-3 py-2 text-sm hover:bg-[var(--soft)]"
              >
                Injectables &amp; Wrinkle Relaxers
              </a>
              <a
                href="/skin-treatments"
                className="block rounded-xl px-3 py-2 text-sm hover:bg-[var(--soft)]"
              >
                Facials &amp; Skin Rejuvenation
              </a>
              <a
                href="/hydrodermabrasion-facial"
                className="block rounded-xl px-3 py-2 text-sm hover:bg-[var(--soft)]"
              >
                Hydrodermabrasion Facial
              </a>
              <a
                href="/professional-skincare"
                className="block rounded-xl px-3 py-2 text-sm hover:bg-[var(--soft)]"
              >
                Professional Skincare
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[var(--primary)]">
              Wellness
              <span className="text-xs">▾</span>
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 top-full mt-4 w-72 rounded-2xl border border-[var(--border)] bg-white shadow-soft p-3">
              <a
                href="/medical-weight-loss"
                className="block rounded-xl px-3 py-2 text-sm hover:bg-[var(--soft)]"
              >
                Medical Weight Loss
              </a>
              <a
                href="/hormone-wellness"
                className="block rounded-xl px-3 py-2 text-sm hover:bg-[var(--soft)]"
              >
                Hormone Wellness
              </a>
            </div>
          </div>
          <a href="#specials" className="hover:text-[var(--primary)]">
            Specials
          </a>
          <a href="#financing" className="hover:text-[var(--primary)]">
            Financing
          </a>
          <a href="#contact" className="hover:text-[var(--primary)]">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={BOOK_URL}
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--primary-dark)]"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-[rgba(239,228,219,0.55)] to-[rgba(252,250,247,0)] py-16 md:py-20"
    >
      <div className="container-lj grid gap-10 md:grid-cols-[1.15fr,0.85fr] items-center">
        <div>
          <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.28em] uppercase text-[var(--primary)]">
            Palm Coast Medical Aesthetics
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-[3.2rem] leading-tight tracking-[-0.03em] max-w-xl">
            Subtle, refined results that honor your natural features.
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--muted)] leading-relaxed">
            LaJolee Aesthetics &amp; Wellness is a boutique medical spa in Palm
            Coast, Florida, offering evidence-based injectables, advanced skin
            rejuvenation, and wellness services in a calm, clinically grounded
            environment. Every treatment plan is tailored to your goals, skin,
            and lifestyle.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={BOOK_URL}
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-[var(--primary-dark)]"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/70 px-6 py-2.5 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--accent)]"
            >
              Explore Services
            </a>
          </div>
          <p className="mt-4 text-xs text-[var(--muted)]">
            Serving Palm Coast, Flagler Beach, Bunnell