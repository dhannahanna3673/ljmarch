const BOOK_URL =
  "https://www.vagaro.com/lajoleeaesthetics/book-now";

export default function SkinTreatmentsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pb-16">
      <section className="bg-gradient-to-b from-[rgba(239,228,219,0.45)] to-[rgba(252,250,247,0)] py-14">
        <div className="container-lj">
          <p className="mb-2 text-[0.7rem] font-semibold tracking-[0.28em] uppercase text-[var(--primary)]">
            Skin Rejuvenation
          </p>
          <h1 className="font-serif text-3xl md:text-4xl tracking-[-0.03em] mb-3">
            Facials and skin treatments tailored to your complexion.
          </h1>
          <p className="max-w-2xl text-sm text-[var(--muted)] leading-relaxed">
            Facials and corrective skin treatments are customized to your skin
            type, tolerance, and goals. Protocols are designed to respect the
            barrier while addressing tone, texture, congestion, and early signs
            of aging.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container-lj grid gap-6 md:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-4 text-sm text-[var(--muted)] leading-relaxed">
            <p>
              A thorough skin consultation guides product selection and
              treatment intensity. Depending on your needs, sessions may include
              gentle exfoliation, targeted serums, extractions, and massage to
              support circulation and lymphatic flow.
            </p>
            <p>
              Treatment plans often combine in-office facials with professional
              homecare to gradually improve clarity, hydration, and overall
              resilience. Adjustments are made over time based on how your skin
              responds.
            </p>
            <a
              href={BOOK_URL}
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
            >
              Book Facial or Skin Consultation
            </a>
          </div>
          <div className="rounded-[24px] border border-dashed border-[#ccb7a6] bg-gradient-to-b from-white to-[#f8f2ec] min-h-[240px]" />
        </div>
      </section>
    </main>
  );
}
