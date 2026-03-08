import Link from "next/link";

const BOOK_URL =
  "https://www.vagaro.com/lajoleeaesthetics/book-now";
const ALLE_URL =
  "https://alle.com/search/lajolee-aesthetics-and-wellness-palm-coast";

export default function InjectablesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pb-16">
      <section className="bg-gradient-to-b from-[rgba(239,228,219,0.45)] to-[rgba(252,250,247,0)] py-14">
        <div className="container-lj">
          <p className="mb-2 text-[0.7rem] font-semibold tracking-[0.28em] uppercase text-[var(--primary)]">
            Injectables
          </p>
          <h1 className="font-serif text-3xl md:text-4xl tracking-[-0.03em] mb-3">
            Wrinkle relaxers and injectable refinement.
          </h1>
          <p className="max-w-2xl text-sm text-[var(--muted)] leading-relaxed">
            Neuromodulators such as Botox® are used to soften expression lines,
            refine facial balance, and help prevent deeper etched-in wrinkles.
            Treatment plans are conservative, anatomy-driven, and tailored to
            your goals.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container-lj grid gap-6 md:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-4 text-sm text-[var(--muted)] leading-relaxed">
            <p>
              Your injectable visit begins with a detailed assessment of facial
              movement, skin quality, and existing lines at rest. Dosing is
              customized based on muscle strength, previous treatment history,
              and your preference for subtle versus more complete relaxation.
            </p>
            <p>
              Commonly treated areas include frown lines, forehead lines,
              crow&apos;s feet, bunny lines, lip lines, and other medically
              appropriate regions. The goal is to soften harshness and
              heaviness, not to erase every line or create a “frozen” look.
            </p>
            <p>
              Results typically begin to appear within several days, with full
              effect around two weeks. Maintenance visits are usually scheduled
              every three to four months, depending on metabolism and dosing.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={BOOK_URL}
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
              >
                Book Wrinkle Relaxer Consultation
              </a>
              <a
                href={ALLE_URL}
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-2.5 text-xs font-semibold tracking-wide uppercase text-[var(--foreground)] hover:bg-[var(--accent)]"
              >
                Allē Rewards for Botox®
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-[24px] border border-dashed border-[#ccb7a6] bg-gradient-to-b from-white to-[#f8f2ec] min-h-[240px]" />
          </div>
        </div>
      </section>
    </main>
  );
}
