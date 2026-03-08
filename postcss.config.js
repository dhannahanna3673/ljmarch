"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { business } from "@/lib/site-data";

const services = [
  { label: "Injectables", href: "/injectables" },
  { label: "Wrinkle Relaxers", href: "/wrinkle-relaxers" },
  { label: "Facials & Skin Rejuvenation", href: "/facials-skin-rejuvenation" },
  { label: "Hydrodermabrasion Facial", href: "/hydrodermabrasion-facial" },
  { label: "Medical Weight Loss", href: "/medical-weight-loss" },
  { label: "Hormone Wellness", href: "/hormone-wellness" },
  { label: "Professional Skincare", href: "/professional-skincare" }
];

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services", children: services },
  { label: "Results Gallery", href: "/#gallery" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Financing", href: "/#financing" },
  { label: "Contact", href: "/#contact" }
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#ebe2db] bg-white/90 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="flex flex-col">
          <span className="serif text-2xl tracking-[0.08em] text-ink">LaJolee</span>
          <span className="text-[10px] uppercase tracking-[0.45em] text-taupe">
            Aesthetics & Wellness
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="inline-flex items-center gap-2 text-sm font-medium text-ink">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute left-0 top-full mt-4 w-80 rounded-[24px] border border-[#ebe2db] bg-white p-4 shadow-soft transition-all ${
                    servicesOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="grid gap-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-2xl px-4 py-3 text-sm text-[#5a525e] hover:bg-blush hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="text-sm font-medium text-ink hover:text-taupe">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={business.bookNow}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Schedule Visit
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-[#e8ddd2] p-3 lg:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#ebe2db] bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="rounded-[24px] border border-[#ebe2db] p-4">
                  <div className="mb-3 text-sm font-semibold text-ink">{item.label}</div>
                  <div className="grid gap-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-2xl bg-[#faf6f2] px-4 py-3 text-sm text-[#5a525e]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[24px] border border-[#ebe2db] px-4 py-4 text-sm font-medium text-ink"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href={business.bookNow}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-2"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
