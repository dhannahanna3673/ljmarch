const BOOK_URL =
  "https://www.vagaro.com/lajoleeaesthetics/book-now";

export default function HydrodermabrasionPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pb-16">
      <section className="bg-gradient-to-b from-[rgba(239,228,219,0.45)] to-[rgba(252,250,247,0)] py-14">
        <div className="container-lj">
          <p className="mb-2 text-[0.7rem] font-semibold tracking-[0.28em] uppercase text-[var(--primary)]">
            Hydrodermabrasion Facial
          </p>
          <h1 className="font-serif text-3xl md:text-4xl tracking-[-0.03em] mb-3">
            Fluid-based exfoliation for clear, luminous skin.
          </h1>
          <p className="max-w-2xl text-sm text-[var(--muted)] leading-relaxed">
            Hydrodermabrasion combines gentle exfoliation with targeted serum
            infusion to lift away buildup while replenishing hydration. It is
            well-suited for dullness, congestion, and uneven texture with
            minimal downtime.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container-lj grid gap-6 md:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-4 text-sm text-[var(--muted)] leading-relaxed">
            <p>
              The treatment uses a specialized handpiece to deliver solution
              while simultaneously removing debris and surface buildup. This
              approach helps refine pores, smooth texture, and enhance product
              penetration without the harshness of traditional abrasion.
            </p>
            <p>
              Hydrodermabrasion can be performed as a stand-alone service or
              integrated into a broader skin plan. Many guests choose a series
              of treatments for progressive improvement.
            </p>
            <a
              href={BOOK_URL}
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
            >
              Book Hydrodermabrasion Facial
            </a>
          </div>
          <div className="rounded-[24px] border border-dashed border-[#ccb7a6] bg-gradient-to-b from-white to-[#f8f2ec] min-h-[240px]" />
        </div>
      </section>
    </main>
  );
}
