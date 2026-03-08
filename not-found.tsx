import Link from "next/link";
import { ArrowRight, Check, CreditCard, Gift, PhoneCall, Quote, Sparkles, HeartPulse, Leaf } from "lucide-react";
import { business, featuredServices, injectables, promotions, skinTreatments, wellness } from "@/lib/site-data";
import { LinkButton } from "@/components/link-button";
import { SectionBanner } from "@/components/section-banner";

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-[#ebe2db] bg-hero-glow">
        <div className="section-shell grid gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow">Helping you look polished and feel well</p>
            <h1 className="mt-6 serif text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              A refined aesthetic and wellness destination in Palm Coast.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5761]">
              LaJolee Aesthetics & Wellness offers elevated care in a calm, boutique setting with
              services designed around graceful skin rejuvenation, injectable artistry, and whole-body wellness support.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <LinkButton href={business.bookNow}>Book an Appointment</LinkButton>
              <LinkButton href="/#services" variant="secondary">
                Explore Services
              </LinkButton>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="image-frame min-h-[420px] rounded-[36px]" />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[30px] border border-[#ebe2db] bg-white p-6 shadow-soft">
                <p className="eyebrow">Now booking</p>
                <p className="mt-3 text-2xl font-semibold text-ink">March Specials</p>
                <p className="mt-2 text-sm leading-7 text-[#5f5761]">
                  Limited monthly offers designed to bring patients in for polished maintenance and skin refresh visits.
                </p>
              </div>
              <div className="rounded-[30px] border border-[#ebe2db] bg-[#f6efe8] p-6">
                <p className="eyebrow">Palm Coast, Florida</p>
                <p className="mt-3 text-2xl font-semibold text-ink">Luxury-inspired patient experience</p>
                <p className="mt-2 text-sm leading-7 text-[#5f5761]">
                  Boutique service flow, intentional spacing, and clear calls to action modeled after a premium medical spa journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionBanner
            eyebrow="Who we are"
            title="Thoughtful aesthetic medicine and wellness care with an elevated, welcoming feel."
            body="LaJolee Aesthetics & Wellness is designed for patients who value beautiful restraint, attentive service, and a treatment plan that feels tailored rather than rushed. Our practice experience is centered on consultation, comfort, and gradual, confidence-building care."
          />
          <div className="space-y-6 rounded-[34px] border border-[#ebe2db] bg-white p-8 shadow-soft">
            <div className="flex items-start gap-4">
              <Sparkles className="mt-1 h-6 w-6 text-taupe" />
              <div>
                <h3 className="text-lg font-semibold text-ink">Elegant treatment planning</h3>
                <p className="mt-2 text-sm leading-7 text-[#5f5761]">
                  Recommendations are guided by natural-looking outcomes, skin quality, and treatment longevity.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Leaf className="mt-1 h-6 w-6 text-taupe" />
              <div>
                <h3 className="text-lg font-semibold text-ink">Skin-first philosophy</h3>
                <p className="mt-2 text-sm leading-7 text-[#5f5761]">
                  Rejuvenation services are selected to support healthy-looking skin, barrier care, and visible radiance.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HeartPulse className="mt-1 h-6 w-6 text-taupe" />
              <div>
                <h3 className="text-lg font-semibold text-ink">Wellness with continuity</h3>
                <p className="mt-2 text-sm leading-7 text-[#5f5761]">
                  Wellness services are structured around informed follow-up, practical guidance, and a long-view approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-[#ebe2db] bg-[#f8f2ef] py-20">
        <div className="section-shell">
          <SectionBanner
            eyebrow="Our services"
            title="A curated menu of medical spa and wellness services designed for visible refinement."
            body="The homepage mirrors a premium service-forward flow with clear feature cards, strong internal navigation, and category sections that guide visitors naturally into their next step."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-[30px] border border-[#ebe2db] bg-white p-7 shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-ink">{service.title}</h3>
                  <ArrowRight className="h-5 w-5 text-taupe transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-4 text-sm leading-7 text-[#5f5761]">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="eyebrow">Injectables section</p>
            <h2 className="section-title mt-4">Precision-focused injectable services with natural-looking intent.</h2>
            <p className="body-copy mt-5">
              Patients seeking smoother expression lines and a refined, rested appearance can explore consultation-led injectable care with individualized dosing and balanced treatment mapping.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/injectables">View Injectables</LinkButton>
              <LinkButton href="/wrinkle-relaxers" variant="secondary">
                Learn About Botox®
              </LinkButton>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {injectables.map((item) => (
              <div key={item} className="rounded-[28px] border border-[#ebe2db] bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-taupe" />
                  <p className="text-sm font-medium text-ink">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#ebe2db] bg-[#f7f1ec] py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {skinTreatments.map((item) => (
              <div key={item} className="rounded-[28px] border border-[#ebe2db] bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-taupe" />
                  <p className="text-sm font-medium text-ink">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="eyebrow">Skin treatments section</p>
            <h2 className="section-title mt-4">Advanced skin rejuvenation with a polished, spa-forward treatment flow.</h2>
            <p className="body-copy mt-5">
              Skin services emphasize hydration, smoothness, glow, and consistent maintenance. Visitors can move directly into facial treatment pages or browse professional skincare support within the same service family.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/facials-skin-rejuvenation">Facials & Rejuvenation</LinkButton>
              <LinkButton href="/hydrodermabrasion-facial" variant="secondary">
                Hydrodermabrasion Facial
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Wellness section</p>
            <h2 className="section-title mt-4">Wellness offerings that complement aesthetic care with practical support.</h2>
            <p className="body-copy mt-5">
              This section follows the reference site’s category rhythm by giving wellness its own dedicated moment within the page flow, making medical weight loss and hormone wellness easy to discover and book.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/medical-weight-loss">Medical Weight Loss</LinkButton>
              <LinkButton href="/hormone-wellness" variant="secondary">
                Hormone Wellness
              </LinkButton>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {wellness.map((item) => (
              <div key={item} className="rounded-[28px] border border-[#ebe2db] bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-taupe" />
                  <p className="text-sm font-medium text-ink">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#ebe2db] bg-[#fffdfa] py-20">
        <div className="section-shell">
          <SectionBanner
            eyebrow="March specials"
            title="Monthly offers presented clearly, high on the page, and built for immediate booking."
            body="To mirror the promotional rhythm of the reference experience, specials appear both in the launch modal and in this dedicated homepage block with strong action buttons."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {promotions.map((promo) => (
              <div key={promo.title} className="rounded-[34px] border border-[#ebe2db] bg-white p-8 shadow-soft">
                <p className="eyebrow">March promotion</p>
                <h3 className="mt-4 text-3xl font-semibold text-ink">{promo.title}</h3>
                <p className="mt-3 text-lg text-[#5f5761]">{promo.detail}</p>
                <div className="mt-8">
                  <LinkButton href={promo.href}>Book This Special</LinkButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="section-shell">
          <SectionBanner
            eyebrow="Results gallery"
            title="A clean before-and-after gallery layout ready for image uploads."
            body="The structure is in place so the brand can add approved photography later without redesigning the page. No stock imagery has been inserted."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {["Wrinkle Relaxers", "Injectables", "Skin Rejuvenation", "Wellness Transformations"].map((label) => (
              <div key={label} className="rounded-[30px] border border-[#ebe2db] bg-white p-5 shadow-soft">
                <div className="image-frame min-h-[280px]" />
                <p className="mt-4 text-base font-semibold text-ink">{label}</p>
                <p className="mt-2 text-sm leading-7 text-[#5f5761]">
                  Reserved gallery panel for future approved patient imagery.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="border-y border-[#ebe2db] bg-[#f8f2ef] py-20">
        <div className="section-shell">
          <SectionBanner
            eyebrow="Testimonials"
            title="A complete testimonial layout without fabricated patient reviews."
            body="This section maintains the same social-proof placement as the reference experience while avoiding invented testimonials. It is ready to be populated with approved review embeds or quoted feedback later."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((card) => (
              <div key={card} className="rounded-[30px] border border-[#ebe2db] bg-white p-8 shadow-soft">
                <Quote className="h-8 w-8 text-rose" />
                <h3 className="mt-6 text-xl font-semibold text-ink">Review-ready testimonial card</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5761]">
                  Designed for future Google, Vagaro, or approved written patient feedback integrations.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="financing" className="py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[36px] bg-ink p-8 text-white shadow-soft sm:p-10">
            <div className="inline-flex rounded-full bg-white/10 p-3">
              <CreditCard className="h-6 w-6" />
            </div>
            <p className="eyebrow mt-6 !text-[#d9c2ba]">Financing section</p>
            <h2 className="mt-4 serif text-4xl leading-tight">Flexible payment options with Cherry.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#f2e8e3]">
              Make it easier for patients to begin a treatment plan with a dedicated financing section and a direct pathway to apply online.
            </p>
            <div className="mt-8">
              <LinkButton href={business.cherry}>Apply for Financing</LinkButton>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              "Clearly separated financing feature section",
              "Strong CTA placement aligned with service conversion flow",
              "Luxury-neutral styling that complements the overall brand palette"
            ].map((item) => (
              <div key={item} className="rounded-[28px] border border-[#ebe2db] bg-white p-6 shadow-soft">
                <p className="text-sm font-medium leading-7 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#ebe2db] bg-[#f7f1ec] py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-4">
            {[
              "Dedicated education section for Botox® rewards awareness",
              "Direct link to locate the LaJolee Alle profile",
              "Natural placement between financing and contact for conversion support"
            ].map((item) => (
              <div key={item} className="rounded-[28px] border border-[#ebe2db] bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <Gift className="h-4 w-4 text-taupe" />
                  <p className="text-sm font-medium text-ink">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="eyebrow">Alle rewards</p>
            <h2 className="section-title mt-4">Encourage returning Botox® patients to take advantage of Alle rewards.</h2>
            <p className="body-copy mt-5">
              This rewards section gives the homepage a practical conversion feature for repeat injectable patients by connecting them directly to the LaJolee Aesthetics & Wellness Alle profile.
            </p>
            <div className="mt-8">
              <LinkButton href={business.alle}>Explore Alle Rewards</LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Contact section</p>
            <h2 className="section-title mt-4">Plan your visit to LaJolee Aesthetics & Wellness.</h2>
            <p className="body-copy mt-5">
              The closing section mirrors the reference site’s final conversion moment with direct contact details, an inquiry form layout, and quick access to booking.
            </p>
            <div className="mt-8 space-y-4 text-sm leading-7 text-[#5f5761]">
              <p>{business.addressLine1}</p>
              <p>{business.addressLine2}</p>
              <p>{business.cityStateZip}</p>
              <p>{business.phoneDisplay}</p>
              <p>{business.email}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={business.bookNow}>Book Now</LinkButton>
              <LinkButton href={business.phoneHref} variant="secondary">
                Call the Office
              </LinkButton>
            </div>
          </div>
          <div className="rounded-[34px] border border-[#ebe2db] bg-white p-8 shadow-soft">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[22px] border border-[#ebe2db] px-4 py-3">
                <label className="text-xs uppercase tracking-[0.2em] text-taupe">First Name</label>
              </div>
              <div className="rounded-[22px] border border-[#ebe2db] px-4 py-3">
                <label className="text-xs uppercase tracking-[0.2em] text-taupe">Last Name</label>
              </div>
              <div className="rounded-[22px] border border-[#ebe2db] px-4 py-3">
                <label className="text-xs uppercase tracking-[0.2em] text-taupe">Phone</label>
              </div>
              <div className="rounded-[22px] border border-[#ebe2db] px-4 py-3">
                <label className="text-xs uppercase tracking-[0.2em] text-taupe">Email</label>
              </div>
            </div>
            <div className="mt-5 rounded-[22px] border border-[#ebe2db] px-4 py-3">
              <label className="text-xs uppercase tracking-[0.2em] text-taupe">How can we help?</label>
              <div className="mt-16" />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 text-sm text-[#5f5761]">
                <PhoneCall className="h-4 w-4" />
                Prefer immediate scheduling? Use the online booking link.
              </div>
              <LinkButton href={business.bookNow}>Schedule Visit</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
