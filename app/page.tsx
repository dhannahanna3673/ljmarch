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
            Serving Palm Coast, Flagler Beach, Bunnell, Ormond Beach, and St.
            Augustine.
          </p>
        </div>
        <div className="min-h-[380px] rounded-[30px] border border-[var(--border)] bg-gradient-to-b from-white/80 to-[rgba(239,228,219,0.65)] shadow-soft p-5 flex flex-col justify-end">
          <div className="mb-3 inline-flex items-center rounded-full border border-[var(--border)] bg-white/90 px-4 py-2 text-xs font-semibold">
            Personalized treatment plans • Physician-directed protocols
          </div>
          <h2 className="font-serif text-2xl mb-2">
            A luxury-clinical experience, without the pressure.
          </h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            Consultations are focused on education, not sales. You&apos;ll
            receive clear recommendations, realistic timelines, and a plan that
            respects both your anatomy and your comfort level.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  copy,
  children,
  soft,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  copy?: string;
  children?: React.ReactNode;
  soft?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${soft ? "bg-[var(--soft-2)]" : ""} py-16 md:py-20`}
    >
      <div className="container-lj">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            {eyebrow && (
              <p className="mb-2 text-[0.7rem] font-semibold tracking-[0.28em] uppercase text-[var(--primary)]">
                {eyebrow}
              </p>
            )}
            <h2 className="font-serif text-2xl md:text-3xl tracking-[-0.03em]">
              {title}
            </h2>
          </div>
          {copy && (
            <p className="max-w-xl text-sm text-[var(--muted)] leading-relaxed">
              {copy}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="Thoughtfully curated treatments for face, skin, and wellness."
      copy="Each service is designed to complement the others, allowing you to move from prevention to correction to long-term maintenance with a single, cohesive plan."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <ServiceCard
          label="Injectables"
          title="Wrinkle Relaxers &amp; Facial Balancing"
          body="Neuromodulators such as Botox® are used to soften expression lines, refine facial contours, and prevent deeper etched-in wrinkles while preserving natural movement."
          href="/injectables"
        />
        <ServiceCard
          label="Skin Rejuvenation"
          title="Facials, Hydrodermabrasion &amp; Texture Renewal"
          body="Clinical-grade facials and hydrodermabrasion treatments address tone, texture, congestion, and early signs of aging with gentle yet effective protocols."
          href="/skin-treatments"
        />
        <ServiceCard
          label="Wellness"
          title="Medical Weight Loss &amp; Hormone Support"
          body="Medically supervised weight management and hormone wellness services are designed to support energy, metabolism, and overall quality of life."
          href="/medical-weight-loss"
        />
      </div>
    </SectionShell>
  );
}

function ServiceCard({
  label,
  title,
  body,
  href,
}: {
  label: string;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <article className="rounded-[26px] border border-[var(--border)] bg-white p-6 shadow-soft flex flex-col h-full">
      <span className="mb-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--primary)]">
        {label}
      </span>
      <h3 className="font-serif text-xl mb-2">{title}</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
        {body}
      </p>
      <a
        href={href}
        className="mt-4 inline-flex text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
      >
        Learn more →
      </a>
    </article>
  );
}

function InjectablesSection() {
  return (
    <SectionShell
      id="injectables"
      eyebrow="Injectables"
      title="Wrinkle relaxers with a conservative, anatomy-first approach."
      copy="Wrinkle relaxers are used to soften lines caused by repeated expression, such as frown lines, forehead lines, and crow’s feet. Dosing is customized to your muscle strength, facial proportions, and desired level of movement."
    >
      <div className="grid gap-6 md:grid-cols-[1.15fr,0.85fr]">
        <div className="space-y-4 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            During your injectable consultation, your provider will assess your
            facial animation, skin quality, and treatment history. Together,
            you&apos;ll determine a plan that may include Botox® for dynamic
            lines, as well as complementary skin treatments to support collagen
            and texture.
          </p>
          <p>
            Treatment areas may include the glabella (frown lines), forehead,
            crow&apos;s feet, bunny lines, lip lines, and other medically
            appropriate regions. Results typically develop over several days and
            can last three to four months, depending on metabolism and dosing.
          </p>
          <p>
            LaJolee participates in the Allē rewards program for eligible
            Botox® treatments, allowing you to earn points toward future
            services.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={BOOK_URL}
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
            >
              Schedule Wrinkle Relaxer Consultation
            </a>
            <a
              href={ALLE_URL}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-2.5 text-xs font-semibold tracking-wide uppercase text-[var(--foreground)] hover:bg-[var(--accent)]"
            >
              View Allē Rewards
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[24px] border border-dashed border-[#ccb7a6] bg-gradient-to-b from-white to-[#f8f2ec] min-h-[220px]" />
          <div className="rounded-[24px] border border-[var(--border)] bg-white p-4 text-xs text-[var(--muted)] leading-relaxed">
            <h4 className="mb-1 font-semibold text-[var(--foreground)]">
              Allē Rewards for Botox®
            </h4>
            <p>
              Allē is a rewards program that allows you to earn points on
              qualifying Botox® and other Allergan Aesthetics treatments. Points
              can be redeemed toward future services at participating practices,
              including LaJolee Aesthetics &amp; Wellness.
            </p>
            <p className="mt-2">
              You can enroll or access your existing account through Allē and
              apply rewards at the time of treatment.
            </p>
            <a
              href={ALLE_URL}
              className="mt-3 inline-flex text-xs font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
            >
              Learn about Allē →
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function SkinSection() {
  return (
    <SectionShell
      id="skin"
      soft
      eyebrow="Skin Treatments"
      title="Facials and hydrodermabrasion for healthy, resilient skin."
      copy="Skin treatments at LaJolee are designed to respect the skin barrier while addressing concerns such as dullness, congestion, fine lines, and uneven tone."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[26px] border border-[var(--border)] bg-white p-6 shadow-soft">
          <span className="mb-2 block text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--primary)]">
            Facials &amp; Skin Rejuvenation
          </span>
          <h3 className="font-serif text-xl mb-2">
            Signature and corrective facials
          </h3>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
            Facials are customized to your skin type and current condition,
            incorporating professional exfoliation, targeted serums, and
            massage. Treatment plans may focus on hydration, clarity, or
            early-age management, with homecare recommendations to extend your
            results.
          </p>
          <a
            href="/skin-treatments"
            className="inline-flex text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
          >
            Learn more about facials →
          </a>
        </article>
        <article className="rounded-[26px] border border-[var(--border)] bg-white p-6 shadow-soft">
          <span className="mb-2 block text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--primary)]">
            Hydrodermabrasion Facial
          </span>
          <h3 className="font-serif text-xl mb-2">
            Deep cleansing with gentle resurfacing
          </h3>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
            Hydrodermabrasion uses fluid-based exfoliation to lift away
            impurities while infusing the skin with hydrating and corrective
            solutions. This treatment is ideal before events or as part of a
            series to improve texture, congestion, and overall radiance with
            minimal downtime.
          </p>
          <a
            href="/hydrodermabrasion-facial"
            className="inline-flex text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
          >
            Learn more about hydrodermabrasion →
          </a>
        </article>
      </div>
      <div className="mt-6 rounded-[24px] border border-[var(--border)] bg-white p-5 text-sm text-[var(--muted)] leading-relaxed">
        <h4 className="mb-2 font-semibold text-[var(--foreground)]">
          Professional skincare to support in-clinic results
        </h4>
        <p>
          In addition to in-office treatments, LaJolee offers curated
          professional skincare to maintain barrier health, support collagen,
          and address pigment or texture concerns. Product recommendations are
          tailored to your skin history, tolerance, and goals.
        </p>
        <a
          href="/professional-skincare"
          className="mt-3 inline-flex text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
        >
          Explore professional skincare →
        </a>
      </div>
    </SectionShell>
  );
}

function WellnessSection() {
  return (
    <SectionShell
      id="wellness"
      eyebrow="Wellness"
      title="Medical weight loss and hormone wellness with clinical oversight."
      copy="Wellness services are designed to complement your aesthetic goals by supporting energy, metabolism, and overall health under medical guidance."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[26px] border border-[var(--border)] bg-white p-6 shadow-soft">
          <span className="mb-2 block text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--primary)]">
            Medical Weight Loss
          </span>
          <h3 className="font-serif text-xl mb-2">
            Structured, monitored weight management
          </h3>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
            Medical weight loss programs may incorporate prescription
            medications when appropriate, along with nutrition guidance and
            lifestyle support. The focus is on sustainable changes, regular
            monitoring, and realistic expectations rather than rapid, extreme
            shifts.
          </p>
          <a
            href="/medical-weight-loss"
            className="inline-flex text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
          >
            Learn more about medical weight loss →
          </a>
        </article>
        <article className="rounded-[26px] border border-[var(--border)] bg-white p-6 shadow-soft">
          <span className="mb-2 block text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--primary)]">
            Hormone Wellness
          </span>
          <h3 className="font-serif text-xl mb-2">
            Evaluating symptoms, not just numbers
          </h3>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
            Hormone wellness services focus on understanding your symptoms,
            labwork, and overall health picture. When appropriate, treatment
            plans may include hormone optimization strategies designed to
            support mood, sleep, cognition, and physical comfort.
          </p>
          <a
            href="/hormone-wellness"
            className="inline-flex text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
          >
            Learn more about hormone wellness →
          </a>
        </article>
      </div>
    </SectionShell>
  );
}

function SpecialsSection() {
  return (
    <SectionShell
      id="specials"
      soft
      eyebrow="March Specials"
      title="Seasonal savings on your most-requested treatments."
      copy="Promotions are designed to highlight services that pair well together and support consistent maintenance."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[28px] border border-[var(--border)] bg-gradient-to-b from-white to-[#f7f0ea] p-7 shadow-soft flex flex-col">
          <span className="mb-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--primary)]">
            Wrinkle Relaxer Wednesdays
          </span>
          <h3 className="font-serif text-2xl mb-2">
            $10.99 per unit wrinkle relaxer
          </h3>
          <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
            Enjoy special pricing on wrinkle relaxer treatments scheduled on
            Wednesdays. Ideal for maintaining soft, natural-looking results on
            frown lines, forehead lines, and crow&apos;s feet.
          </p>
          <a
            href={BOOK_URL}
            className="mt-4 inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
          >
            Book Wrinkle Relaxer Wednesday
          </a>
        </article>
        <article className="rounded-[28px] border border-[var(--border)] bg-gradient-to-b from-white to-[#f7f0ea] p-7 shadow-soft flex flex-col">
          <span className="mb-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--primary)]">
            Facial Thursdays
          </span>
          <h3 className="font-serif text-2xl mb-2">
            Signature Facial – $69
          </h3>
          <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
            Restore hydration and glow with a Signature Facial at special
            Thursday pricing. This treatment is ideal as a monthly reset or as a
            gentle introduction to professional skincare.
          </p>
          <a
            href={BOOK_URL}
            className="mt-4 inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
          >
            Book Facial Thursday
          </a>
        </article>
      </div>
    </SectionShell>
  );
}

function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="A calm, clinically grounded space for aesthetic and wellness care."
      copy="LaJolee Aesthetics & Wellness was created to offer a slower, more thoughtful approach to medical aesthetics—one that values education, safety, and subtle refinement over trends."
    >
      <div className="grid gap-6 md:grid-cols-[1.15fr,0.85fr]">
        <div className="space-y-4 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            Every visit begins with a detailed conversation about your goals,
            medical history, and comfort level. From there, treatment plans are
            built around realistic timelines, gradual improvements, and
            long-term skin and wellness health.
          </p>
          <p>
            The environment is intentionally quiet and uncluttered, allowing you
            to focus on your experience without feeling rushed or pressured.
            You&apos;ll leave with a clear understanding of what was performed,
            what to expect, and how to care for your skin and body between
            visits.
          </p>
        </div>
        <div className="rounded-[24px] border border-dashed border-[#ccb7a6] bg-gradient-to-b from-white to-[#f8f2ec] min-h-[260px]" />
      </div>
    </SectionShell>
  );
}

function ResultsGallery() {
  return (
    <SectionShell
      id="results"
      soft
      eyebrow="Results Gallery"
      title="Before-and-after results, thoughtfully documented."
      copy="Treatment outcomes vary based on anatomy, starting point, and adherence to recommended plans. A curated gallery will highlight realistic, achievable changes."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[24px] border border-dashed border-[#ccb7a6] bg-gradient-to-b from-white to-[#f8f2ec] min-h-[220px]" />
        <div className="rounded-[24px] border border-dashed border-[#ccb7a6] bg-gradient-to-b from-white to-[#f8f2ec] min-h-[220px]" />
        <div className="rounded-[24px] border border-dashed border-[#ccb7a6] bg-gradient-to-b from-white to-[#f8f2ec] min-h-[220px]" />
      </div>
    </SectionShell>
  );
}

function TestimonialsLayout() {
  return (
    <SectionShell
      id="testimonials"
      eyebrow="Client Experience"
      title="Thoughtful, relationship-based care."
      copy="Client feedback focuses on feeling heard, respected, and well-informed throughout the process. This section is structured to highlight real experiences once collected."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-soft min-h-[160px]" />
        <div className="rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-soft min-h-[160px]" />
      </div>
    </SectionShell>
  );
}

function FinancingSection() {
  return (
    <SectionShell
      id="financing"
      soft
      eyebrow="Financing"
      title="Cherry financing for flexible monthly payments."
      copy="Cherry allows you to split treatment costs into manageable payments, subject to approval. Many guests use Cherry to bundle services into a single, predictable monthly amount."
    >
      <div className="grid gap-6 md:grid-cols-[1.15fr,0.85fr]">
        <div className="space-y-4 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            With Cherry, you can apply in minutes and view available options
            without impacting your credit score. Approved plans may offer
            zero-interest or low-interest structures depending on terms and
            eligibility.
          </p>
          <p>
            Financing can be used for a range of services, including injectables,
            skin treatments, and wellness programs, allowing you to follow your
            recommended plan more comfortably.
          </p>
          <a
            href={CHERRY_URL}
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
          >
            Apply for Financing
          </a>
        </div>
        <div className="rounded-[24px] border border-dashed border-[#ccb7a6] bg-gradient-to-b from-white to-[#f8f2ec] min-h-[220px]" />
      </div>
    </SectionShell>
  );
}

function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Plan your visit to LaJolee Aesthetics & Wellness."
      copy="Located in Palm Coast, Florida, with convenient access from Flagler Beach, Bunnell, Ormond Beach, and St. Augustine."
    >
      <div className="grid gap-6 md:grid-cols-[0.95fr,1.05fr]">
        <div className="space-y-4 text-sm text-[var(--muted)] leading-relaxed">
          <div>
            <h3 className="font-semibold text-[var(--foreground)] mb-1">
              Location
            </h3>
            <p>
              4883 Palm Coast Parkway NW
              <br />
              Suite No. 5
              <br />
              Palm Coast, FL 32137
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--foreground)] mb-1">
              Contact
            </h3>
            <p>
              Phone:{" "}
              <a href="tel:13862646645" className="underline-offset-2 hover:underline">
                386-264-6645
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:lajoleeaesthetics@outlook.com"
                className="underline-offset-2 hover:underline"
              >
                lajoleeaesthetics@outlook.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--foreground)] mb-1">
              Online booking
            </h3>
            <p>
              View real-time availability and reserve appointments securely
              through Vagaro.
            </p>
            <a
              href={BOOK_URL}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
            >
              Book Now
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[24px] border border-[var(--border)] bg-white p-4 shadow-soft">
            <iframe
              title="LaJolee Aesthetics & Wellness Map"
              className="w-full min-h-[320px] rounded-[18px] border-0"
              src="https://www.google.com/maps?q=4883+Palm+Coast+Parkway+NW+Suite+No.+5+Palm+Coast,+FL+32137&output=embed"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Footer() {
  return (
    <footer className="mt-16 bg-[#1f1a17] text-[#f8f3ef] pt-12 pb-6">
      <div className="container-lj">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.8fr,0.8fr]">
          <div>
            <h4 className="mb-3 text-sm font-semibold">
              LaJolee Aesthetics &amp; Wellness
            </h4>
            <p className="text-sm text-[#dfd2c7] leading-relaxed">
              A luxury-clinical medical spa in Palm Coast, Florida, offering
              injectables, skin rejuvenation, and wellness services with a
              measured, education-first approach.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Visit</h4>
            <p className="text-sm text-[#dfd2c7] leading-relaxed">
              4883 Palm Coast Parkway NW
              <br />
              Suite No. 5
              <br />
              Palm Coast, FL 32137
            </p>
            <p className="mt-2 text-sm text-[#dfd2c7]">
              Phone:{" "}
              <a href="tel:13862646645" className="hover:underline">
                386-264-6645
              </a>
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Links</h4>
            <ul className="space-y-1 text-sm text-[#dfd2c7]">
              <li>
                <a href={BOOK_URL} className="hover:underline">
                  Book Now
                </a>
              </li>
              <li>
                <a href={CHERRY_URL} className="hover:underline">
                  Cherry Financing
                </a>
              </li>
              <li>
                <a href={ALLE_URL} className="hover:underline">
                  Allē Rewards
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-white/10 pt-4 text-xs text-[#c8b7a8] flex flex-wrap items-center justify-between gap-3">
          <span>
            © {new Date().getFullYear()} LaJolee Aesthetics &amp; Wellness. All
            rights reserved.
          </span>
          <span>Medical spa services provided under appropriate licensure and supervision.</span>
        </div>
      </div>
    </footer>
  );
}
