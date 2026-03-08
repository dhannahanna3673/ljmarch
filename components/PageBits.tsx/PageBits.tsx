import Link from "next/link";
import { business, promos, services } from "@/components/site-data";

export function PageHero({
  eyebrow,
  title,
  copy,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="section-title" style={{ maxWidth: "14ch" }}>
          {title}
        </h1>
        <p className="section-copy" style={{ maxWidth: "60ch", marginTop: 18 }}>
          {copy}
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href={business.booking}>
            Book Now
          </a>
          {secondaryHref && secondaryLabel ? (
            <a className="btn btn-secondary" href={secondaryHref}>
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function SidebarCard({ children }: { children: React.ReactNode }) {
  return <aside className="sidebar-card">{children}</aside>;
}

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">LaJolee Aesthetics & Wellness</span>
          <h1 className="hero-title">
            Elevated aesthetic care and wellness in Palm Coast.
          </h1>
          <p className="hero-copy">
            Discover a polished medical spa experience designed around refined
            injectables, skin rejuvenation, hydrodermabrasion, medical weight
            loss, hormone wellness, and professional skincare support.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={business.booking}>
              Book Now
            </a>
            <Link className="btn btn-secondary" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-badge">Now Booking Palm Coast Appointments</div>
          <h3 style={{ margin: 0, fontSize: "1.8rem", fontFamily: "Georgia, serif" }}>
            March Specials
          </h3>
          <p className="section-copy" style={{ marginTop: 10 }}>
            Wrinkle Relaxer Wednesdays at $10.99 per unit and Facial Thursdays
            featuring a Signature Facial for $69.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={business.booking}>
              Reserve Special
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesOverview() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Services Overview</span>
            <h2 className="section-title">A treatment menu built for beauty, skin, and wellness.</h2>
          </div>
          <p className="section-copy">
            Explore core service categories designed to mirror a high-end medical
            spa browsing experience with clear calls to action and smooth flow.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <div className="card" key={service.title}>
              <span className="card-label">{service.label}</span>
              <h3>{service.title}</h3>
              <p className="section-copy">{service.description}</p>
              <div className="cta-row">
                <Link className="btn btn-secondary" href={service.href}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DetailSplit() {
  return (
    <section className="section section-soft">
      <div className="container split-grid">
        <div className="info-card">
          <span className="eyebrow">Injectables</span>
          <h2 className="section-title">Wrinkle-relaxer treatments with a refined touch.</h2>
          <p className="section-copy">
            Wrinkle relaxers are often selected to soften dynamic expression
            lines created by repeated facial movement. Treatment planning is
            designed around natural-looking balance and a refreshed appearance.
          </p>
          <ul className="list">
            <li>Common areas include forehead lines, frown lines, and crow’s feet</li>
            <li>Brief appointment flow with minimal disruption to the day</li>
            <li>Natural-looking goals with individualized planning</li>
            <li>Allē rewards support available for eligible patients</li>
          </ul>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/injectables">
              Explore Injectables
            </Link>
            <a className="btn btn-secondary" href={business.alle}>
              Allē Rewards
            </a>
          </div>
        </div>

        <div className="info-card">
          <span className="eyebrow">Skin Treatments</span>
          <h3 style={{ marginTop: 0, fontSize: "1.7rem", fontFamily: "Georgia, serif" }}>
            Facials, hydrodermabrasion, and skincare support
          </h3>
          <p className="section-copy">
            Skin services are designed to support glow, texture, visible clarity,
            and a refreshed finish through customized care and elevated service flow.
          </p>
          <div className="cta-row">
            <Link className="btn btn-secondary" href="/facials-skin-rejuvenation">
              View Skin Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WellnessSplit() {
  return (
    <section className="section">
      <div className="container split-grid">
        <div className="info-card">
          <span className="eyebrow">Wellness</span>
          <h2 className="section-title">Wellness support designed around real-life goals.</h2>
          <p className="section-copy">
            LaJolee Aesthetics & Wellness also offers wellness-centered services
            that support confidence, consistency, and a stronger long-term plan.
          </p>
          <ul className="list">
            <li>Medical weight loss with physician-supervised planning</li>
            <li>Hormone wellness support for energy, vitality, and overall balance</li>
            <li>Professional guidance and individualized recommendations</li>
          </ul>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/medical-weight-loss">
              Explore Wellness
            </Link>
          </div>
        </div>

        <div className="info-card">
          <span className="eyebrow">Financing</span>
          <h3 style={{ marginTop: 0, fontSize: "1.7rem", fontFamily: "Georgia, serif" }}>
            Flexible financing through Cherry
          </h3>
          <p className="section-copy">
            Make it easier to plan aesthetic and wellness care with flexible financing options.
          </p>
          <div className="cta-row">
            <a className="btn btn-secondary" href={business.cherry}>
              Apply for Financing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SpecialsSection() {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Specials</span>
            <h2 className="section-title">This month’s featured offers.</h2>
          </div>
          <p className="section-copy">
            Clear promotional placement keeps current offers visible without
            interrupting the overall browsing experience.
          </p>
        </div>

        <div className="specials-grid">
          {promos.map((promo) => (
            <div className="special-card" key={promo.title}>
              <span className="card-label">March Specials</span>
              <h3>{promo.title}</h3>
              <div className="special-price">{promo.price}</div>
              <p className="section-copy">{promo.detail}</p>
              <div className="cta-row">
                <a className="btn btn-primary" href={business.booking}>
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section">
      <div className="container about-grid">
        <div className="info-card">
          <span className="eyebrow">About</span>
          <h2 className="section-title">A calm, modern destination for aesthetics and wellness.</h2>
          <p className="section-copy">
            LaJolee Aesthetics & Wellness is positioned as a refined Palm Coast
            clinic experience with clean design, clear service education, and a
            strong emphasis on convenient booking.
          </p>
          <p className="section-copy">
            The focus is on polished patient experience, balanced treatment goals,
            and a website flow that makes it easy to explore services and take the
            next step.
          </p>
        </div>

        <div className="info-card">
          <span className="eyebrow">Visit</span>
          <p className="section-copy">
            {business.addressLine1}
            <br />
            {business.addressLine2}
            <br />
            {business.cityStateZip}
          </p>
          <p className="section-copy">
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
            <br />
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
          <div className="cta-row">
            <Link className="btn btn-secondary" href="/contact">
              Get Directions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResultsGallerySection() {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Results Gallery</span>
            <h2 className="section-title">Room for future before-and-after imagery.</h2>
          </div>
          <p className="section-copy">
            Gallery placeholders are intentionally left empty so branded imagery can be added later.
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-box" />
          <div className="gallery-box" />
          <div className="gallery-box" />
          <div className="gallery-box" />
          <div className="gallery-box" />
          <div className="gallery-box" />
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="section">
      <div className="container experience-grid">
        <div className="info-card">
          <span className="eyebrow">Testimonials Layout</span>
          <h2 className="section-title">A polished space reserved for client feedback.</h2>
          <p className="section-copy">
            This section is intentionally structured without fabricated reviews.
            Once real testimonials are available, they can be added here without
            changing the design flow.
          </p>
        </div>

        <div className="info-card">
          <span className="eyebrow">Rewards</span>
          <h3 style={{ marginTop: 0, fontSize: "1.7rem", fontFamily: "Georgia, serif" }}>
            Earn and use Allē rewards for Botox® visits
          </h3>
          <p className="section-copy">
            Eligible patients can explore Allē rewards as part of their wrinkle-relaxer plan.
          </p>
          <div className="cta-row">
            <a className="btn btn-secondary" href={business.alle}>
              Explore Allē Rewards
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinancingAndContact() {
  return (
    <section className="section section-soft">
      <div className="container financing-grid">
        <div className="contact-card">
          <span className="eyebrow">Financing</span>
          <h2 className="section-title">Flexible options with Cherry.</h2>
          <p className="section-copy">
            Make your treatment plan more manageable with financing designed for convenience.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={business.cherry}>
              Apply for Financing
            </a>
          </div>
        </div>

        <div className="contact-card">
          <span className="eyebrow">Contact</span>
          <h3 style={{ marginTop: 0, fontSize: "1.7rem", fontFamily: "Georgia, serif" }}>
            Ready to schedule your visit?
          </h3>
          <p className="section-copy">
            Book online, call the clinic, or reach out by email to plan your next appointment.
          </p>
          <p className="section-copy">
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
            <br />
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={business.booking}>
              Book Now
            </a>
            <Link className="btn btn-secondary" href="/contact">
              View Contact Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}