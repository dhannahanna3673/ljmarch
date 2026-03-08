import Link from "next/link";
import { business } from "@/components/site-data";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-group">
          <span>{business.cityStateZip}</span>
          <a href={business.phoneHref}>{business.phoneDisplay}</a>
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </div>
        <div className="cta-row">
          <Link className="btn btn-soft" href={business.cherry}>
            Apply for Financing
          </Link>
          <Link className="btn btn-primary" href={business.booking}>
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/">
          <span className="brand-mark">Luxury Aesthetics</span>
          <span className="brand-name">LaJolee Aesthetics & Wellness</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/injectables">Injectables</Link>
          <details>
            <summary>Services</summary>
            <div className="dropdown">
              <Link href="/injectables">Wrinkle Relaxers</Link>
              <Link href="/facials-skin-rejuvenation">Facials & Skin Rejuvenation</Link>
              <Link href="/facials-skin-rejuvenation">Hydrodermabrasion Facial</Link>
              <Link href="/medical-weight-loss">Medical Weight Loss</Link>
              <Link href="/hormone-wellness">Hormone Wellness</Link>
              <Link href="/facials-skin-rejuvenation">Professional Skincare</Link>
            </div>
          </details>
          <Link href="/contact">Contact</Link>
          <Link className="btn btn-primary desktop-only" href={business.booking}>
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <span className="brand-mark">Luxury Aesthetics</span>
            <span className="brand-name">LaJolee Aesthetics & Wellness</span>
          </div>
          <p className="footer-note" style={{ marginTop: "1rem" }}>
            Personalized aesthetic and wellness care in Palm Coast with a polished,
            comfortable, booking-first experience designed for both desktop and mobile.
          </p>
          <p className="legal">
            Treatments and wellness services are provided based on provider evaluation and
            individual eligibility. Results vary by person.
          </p>
        </div>

        <div>
          <h3>Visit</h3>
          <p className="footer-note">
            {business.addressLine1}
            <br />
            {business.addressLine2}
            <br />
            {business.cityStateZip}
          </p>
          <p className="footer-note">
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
            <br />
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <div className="footer-note" style={{ display: "grid", gap: "0.5rem" }}>
            <Link href="/injectables">Wrinkle Relaxers</Link>
            <Link href="/facials-skin-rejuvenation">Facials & Skin Rejuvenation</Link>
            <Link href="/medical-weight-loss">Medical Weight Loss</Link>
            <Link href="/hormone-wellness">Hormone Wellness</Link>
            <Link href={business.cherry}>Cherry Financing</Link>
            <Link href={business.alle}>Allē Rewards</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
