import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell py-24">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-4 serif text-5xl text-ink">The page you requested is not available.</h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5761]">
        Return to the homepage to explore services, specials, financing, and contact information for
        LaJolee Aesthetics & Wellness.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </main>
  );
}
