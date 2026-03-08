import Link from "next/link";
import { business, services } from "@/components/site-data";

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-links">
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </div>
          <div className="topbar-links">
            <span>
              {business.addressLine1}, {business.addressLine2}, {business.cityStateZip}
            </span>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container navbar">
          <Link href="/" className="brand">
            <span className="brand-mark">Palm Coast</span>
            <span className="brand-name">{business.name}</span>
          </Link>

          <nav className="nav-links">
            <Link className="nav-link" href="/">
              Home
            </Link>

            <div className="dropdown">
              <button className="dropdown-toggle" type="button">
                Services
              </button>
              <div className="dropdown-menu">
                {services.map((service) => (
                  <Link key={service.title} href={service.href}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link className="nav-link" href="/injectables">
              Injectables
            </Link>
            <Link className="nav-link" href="/facials-skin-rejuvenation">
              Skin Treatments
            </Link>
            <Link className="nav-link" href="/medical-weight-loss">
              Wellness
            </Link>
            <Link className="nav-link" href="/contact">
              Contact
            </Link>
          </nav>

          <a className="btn btn-primary" href={business.booking}>
            Book Now
          </a>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="brand-mark" style={{ color: "#d8c1af" }}>
                LaJolee
              </div>
              <h4>{business.name}</h4>
              <p>
                Aesthetics and wellness services in Palm Coast with a polished,
                modern, patient-centered experience.
              </p>
            </div>

            <div>
              <h4>Visit</h4>
              <p>
                {business.addressLine1}
                <br />
                {business.addressLine2}
                <br />
                {business.cityStateZip}
              </p>
              <p>
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
                <br />
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </p>
            </div>

            <div>
              <h4>Quick Links</h4>
              <p>
                <a href={business.booking}>Book Now</a>
                <br />
                <a href={business.cherry}>Cherry Financing</a>
                <br />
                <a href={business.alle}>Allē Rewards</a>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}