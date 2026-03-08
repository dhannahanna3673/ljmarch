"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { business, promotions } from "@/lib/site-data";
import Link from "next/link";

export function PromoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = window.sessionStorage.getItem("lajolee-promo-seen");
    if (!seen) {
      const timer = window.setTimeout(() => setOpen(true), 700);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const close = () => {
    window.sessionStorage.setItem("lajolee-promo-seen", "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#201b22]/60 p-4">
      <div className="relative w-full max-w-xl rounded-[32px] bg-white p-6 shadow-soft sm:p-8">
        <button
          type="button"
          onClick={close}
          className="absolute right-4 top-4 rounded-full border border-[#eadfd7] p-2"
          aria-label="Close promotion"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="eyebrow">March Specials</p>
        <h3 className="mt-3 serif text-3xl text-ink">A polished monthly promotion your patients can act on now.</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {promotions.map((promo) => (
            <div key={promo.title} className="rounded-[24px] bg-blush p-5">
              <div className="text-lg font-semibold text-ink">{promo.title}</div>
              <div className="mt-2 text-sm text-[#5f5662]">{promo.detail}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={business.bookNow}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Book March Special
          </Link>
          <button type="button" onClick={close} className="btn-secondary">
            Continue to Site
          </button>
        </div>
      </div>
    </div>
  );
}
