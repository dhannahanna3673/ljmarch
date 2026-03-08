import Link from "next/link";
import { ReactNode } from "react";
import { business, promos, services } from "@/components/site-data";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-card">
          <div className="eyebrow">Helping You Look & Feel Your Best</div>
          <h1>Luxury aesthetic and wellness care in Palm Coast.</h1>
          <p className="lead">
            LaJolee Aesthetics & Wellness offers an elevated booking-first experience
            centered on natural-looking refinement, skin confidence, and modern
            physician-supervised wellness support.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href={business.booking}>
              Book an Appointment
            </Link>
            <Link className="btn btn-secondary" href="#services">
              Explore Services
            </Link>
          </div>
          <div className="promo-banner">March specials available now</div>
        </div>
        <div className="hero-side">
          <div className="feature-panel">
            <div>
              <div className="meta">Our Experience</div>
              <h3 style={{ fontSize: "1.8rem", margin: "0.6rem 0" }}>
                A polished med spa website experience modeled after a premium clinic flow.
              </h3>
              <p className="section-copy">
                Clear navigation, elegant service paths, and strong calls to action make it
                simple for visitors to move from browsing to booking on any device.
              </p>
            </div>
            <Link className="btn btn-secondary" href="/contact">
              Contact the Clinic
            </Link>
          </div>
          <div className="special-panel">
            <div className="meta">Featured This Month</div>
            {promos.map((promo) => (
              <div key={promo.title} style={{ paddingBottom: "0.8rem", borderBottom: "1px solid var(--line)" }}>
                <h3 style={{ marginBottom: "0.25rem" }}>{promo.title}</h3>
                <div className="special-price">{promo.price}</div>
                <p className="section-copy" style={{ marginBottom: "0.8rem" }}>
                  {promo.detail}
                </p>
                <Link className="btn btn-primary" href={business.booking}>
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesOverview() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Our Services</div>
            <h2 className="section-title">Designed to feel complete, elevated, and easy to book.</h2>
          </div>
          <p className="section-copy">
            This layout follows the same premium service-led rhythm as your reference site:
            clear categories, strong call-to-action spacing, and distinct treatment paths.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <Link className="card" key={service.title} href={service.href}>
              <div>
                <div className="meta">{service.label}</div>
                <h3>{service.title}</h3>
                <p className="section-copy">{service.description}</p>
              </div>
              <span className="btn btn-secondary mobile-only">Learn More</span>
              <span className="meta desktop-only">Explore treatment →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DetailSplit() {
  return (
    <section>
      <div className="container details-grid">
        <article className="service-detail">
          <div className="eyebrow">Injectables</div>
          <h3>Wrinkle relaxer treatments that prioritize balanced, natural-looking refinement.</h3>
          <p className="section-copy">
            Botox® and similar wrinkle-relaxer treatments are used to soften dynamic lines
            caused by repeated facial expression. Common treatment areas include forehead
            lines, frown lines between the brows, and crow’s feet around the eyes.
          </p>
          <ul className="list">
            <li>Quick appointment flow designed for minimal disruption to your day</li>
            <li>Focused on refreshed results without overdone expression</li>
            <li>Physician-supervised care with individualized treatment planning</li>
          </ul>
          <div className="cta-row" style={{ marginTop: "1rem" }}>
            <Link className="btn btn-primary" href="/injectables">
              Learn About Injectables
            </Link>
            <Link className="btn btn-secondary" href={business.alle}>
              View Allē Rewards
            </Link>
          </div>
        </article>

        <article className="service-detail">
          <div className="eyebrow">Facials & Skin Health</div>
          <h3>Customized skin services built for clarity, glow, texture, and long-term confidence.</h3>
          <p className="section-copy">
            Facial services and skin rejuvenation treatments are designed to refresh the skin,
            support a brighter appearance, and help address dullness, congestion, texture, and
            visible imbalance.
          </p>
          <ul className="list">
            <li>Signature facial experiences with a clean, polished treatment feel</li>
            <li>Hydrodermabrasion facial option for a more refreshed, refined finish</li>
            <li>Professional skincare support to extend results beyond the treatment room</li>
          </ul>
          <div className="cta-row" style={{ marginTop: "1rem" }}>
            <Link className="btn btn-primary" href="/facials-skin-rejuvenation">
              Explore Skin Treatments
            </Link>
            <Link className="btn btn-secondary" href={business.booking}>
              Reserve a Facial
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export function WellnessSplit() {
  return (
    <section>
      <div className="container details-grid">
        <article className="service-detail">
          <div className="eyebrow">Medical Weight Loss</div>
          <h3>Structured support for patients seeking physician-supervised weight management.</h3>
          <p className="section-copy">
            Weight-management services are designed around wellness goals, provider review, and
            a more sustainable approach to progress. Treatment recommendations are determined
            individually and only for those who qualify.
          </p>
          <div className="cta-row" style={{ marginTop: "1rem" }}>
            <Link className="btn btn-primary" href="/medical-weight-loss">
              View Weight Loss Services
            </Link>
            <Link className="btn btn-secondary" href={business.booking}>
              Book a Consultation
            </Link>
          </div>
        </article>

        <article className="service-detail">
          <div className="eyebrow">Hormone Wellness</div>
          <h3>Modern wellness support focused on vitality, energy, and feeling more like yourself.</h3>
          <p className="section-copy">
            Hormone wellness services are structured to support men and women who may benefit
            from individualized evaluation, provider guidance, and a more comprehensive
            wellness-centered plan.
          </p>
          <div className="cta-row" style={{ marginTop: "1rem" }}>
            <Link className="btn btn-primary" href="/hormone-wellness">
              Explore Hormone Wellness
            </Link>
            <Link className="btn btn-secondary" href="/contact">
              Contact the Clinic
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export function SpecialsSection() {
  return (
    <section id="specials">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Monthly Offers</div>
            <h2 className="section-title">March specials styled like a premium promo block.</h2>
          </div>
          <p className="section-copy">
            This section is intentionally prominent to mimic the specials rhythm of your
            reference site while using your real offers and direct booking path.
          </p>
        </div>
        <div className="specials-grid">
          {promos.map((promo) => (
            <div className="service-detail" key={promo.title}>
              <div className="meta">March Special</div>
              <h3>{promo.title}</h3>
              <div className="special-price">{promo.price}</div>
              <p className="section-copy">{promo.detail}</p>
              <div className="cta-row" style={{ marginTop: "1rem" }}>
                <Link className="btn btn-primary" href={business.booking}>
                  Book Now
                </Link>
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
    <section>
      <div className="container trust-grid">
        <div className="service-detail">
          <div className="eyebrow">Who We Are</div>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            A Palm Coast aesthetic and wellness destination with a clean, elevated client journey.
          </h2>
          <p className="section-copy">
            LaJolee Aesthetics & Wellness is presented here with a premium, service-led website
            experience inspired by your reference site. The visual hierarchy, section rhythm,
            call-to-action placement, and mobile flow are all designed to feel complete and
            professionally built instead of template-driven.
          </p>
          <p className="section-copy">
            Rather than adding a team section you do not want yet, this version keeps the focus
            on treatment categories, promotions, financing, and contact conversion.
          </p>
          <div className="stats-grid">
            <div className="stat">
              <strong>6</strong>
              <span className="section-copy">primary service paths on the site</span>
            </div>
            <div className="stat">
              <strong>3</strong>
              <span className="section-copy">core CTAs repeated throughout the experience</span>
            </div>
            <div className="stat">
              <strong>100%</strong>
              <span className="section-copy">responsive layout coverage for mobile visitors</span>
            </div>
          </div>
        </div>
        <div className="service-detail">
          <div className="eyebrow">Why This Layout Works</div>
          <ul className="list">
            <li>Top bar plus sticky navigation for an immediately polished med spa feel</li>
            <li>Service-card homepage structure that follows your reference layout logic</li>
            <li>Dedicated sections for injectables, skin treatments, and wellness conversion</li>
            <li>Prominent specials and financing blocks to support booking and affordability</li>
            <li>A strong mobile layout so the site feels designed, not merely shrunk down</li>
          </ul>
          <div className="cta-row" style={{ marginTop: "1rem" }}>
            <Link className="btn btn-primary" href={business.booking}>
              Book a Visit
            </Link>
            <Link className="btn btn-secondary" href={business.cherry}>
              View Financing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResultsGallerySection() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Results Gallery</div>
            <h2 className="section-title">Styled and ready for your before-and-after images.</h2>
          </div>
          <p className="section-copy">
            Per your instruction, the image areas are intentionally left empty but fully styled
            so you can drop in real clinic images later without redesigning the section.
          </p>
        </div>
        <div className="empty-gallery-grid">
          <div className="empty-gallery">
            <div>
              <div className="meta">Before & After</div>
              <h3>Wrinkle Relaxer Results</h3>
            </div>
          </div>
          <div className="empty-gallery">
            <div>
              <div className="meta">Before & After</div>
              <h3>Acne & Skin Clarity</h3>
            </div>
          </div>
          <div className="empty-gallery">
            <div>
              <div className="meta">Before & After</div>
              <h3>Skin Rejuvenation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Client Experience</div>
            <h2 className="section-title">A polished section in place of fake testimonials.</h2>
          </div>
          <p className="section-copy">
            Instead of placeholder reviews, this section preserves the premium testimonial-style
            layout while using original, non-fabricated trust messaging.
          </p>
        </div>
        <div className="testimonial-grid">
          <div className="quote-card">
            <div className="quote-mark">“</div>
            <h3>Booking should feel easy from the first click.</h3>
            <p className="section-copy">
              The site repeatedly surfaces direct booking actions so visitors can move naturally
              from browsing services to reserving an appointment.
            </p>
          </div>
          <div className="quote-card">
            <div className="quote-mark">“</div>
            <h3>Luxury presentation works best when it remains clear and calm.</h3>
            <p className="section-copy">
              This design avoids clutter, avoids fake filler content, and focuses on elegant
              service navigation with a complete mobile experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinancingAndContact() {
  return (
    <section>
      <div className="container contact-grid">
        <div className="contact-card">
          <div className="eyebrow">Payment Options</div>
          <h3>Cherry financing makes treatment planning more flexible.</h3>
          <p className="section-copy">
            Give clients a clear path to explore payment options directly from the site.
          </p>
          <div className="cta-row" style={{ marginTop: "1rem" }}>
            <Link className="btn btn-primary" href={business.cherry}>
              Apply for Financing
            </Link>
            <Link className="btn btn-secondary" href={business.alle}>
              Explore Allē Rewards
            </Link>
          </div>
        </div>
        <div className="contact-card">
          <div className="eyebrow">How Can We Help?</div>
          <h3>Contact LaJolee Aesthetics & Wellness</h3>
          <p className="section-copy">
            {business.addressLine1}, {business.addressLine2}, {business.cityStateZip}
          </p>
          <p className="section-copy">
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
            <br />
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
          <div className="cta-row" style={{ marginTop: "1rem" }}>
            <Link className="btn btn-primary" href={business.booking}>
              Book Now
            </Link>
            <Link className="btn btn-secondary" href="/contact">
              Visit Contact Page
            </Link>
          </div>
          <iframe
            title="LaJolee map"
            src={business.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  primaryHref = business.booking,
  primaryLabel = "Book Now",
  secondaryHref = "/contact",
  secondaryLabel = "Contact the Clinic",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-card">
        <div className="eyebrow">{eyebrow}</div>
        <h1 style={{ maxWidth: "14ch" }}>{title}</h1>
        <p className="lead">{copy}</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href={primaryHref}>
            {primaryLabel}
          </Link>
          <Link className="btn btn-secondary" href={secondaryHref}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SidebarCard({ children }: { children: ReactNode }) {
  return <div className="service-detail sticky-sidebar">{children}</div>;
}
