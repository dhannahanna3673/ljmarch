import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaJolee Aesthetics & Wellness | Palm Coast Medical Spa",
  description:
    "LaJolee Aesthetics & Wellness in Palm Coast, FL offers injectables, skin rejuvenation, hydrodermabrasion, medical weight loss, hormone wellness, and professional skincare.",
  metadataBase: new URL("https://lajolee-aesthetics.com"),
  openGraph: {
    title: "LaJolee Aesthetics & Wellness",
    description:
      "Luxury medical aesthetics and wellness in Palm Coast, FL. Injectables, facials, hydrodermabrasion, weight loss, hormone wellness, and skincare.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
