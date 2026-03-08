import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@/components/top-bar";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PromoModal } from "@/components/promo-modal";
import { business } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://lajoleeaesthetics.com"),
  title: {
    default: `${business.name} | Medical Spa in Palm Coast, FL`,
    template: `%s | ${business.name}`
  },
  description:
    "Luxury-inspired medical spa website for LaJolee Aesthetics & Wellness in Palm Coast, Florida featuring injectables, skin rejuvenation, wellness services, financing, and booking access.",
  keywords: [
    "Palm Coast med spa",
    "Botox Palm Coast",
    "medical weight loss Palm Coast",
    "hydrodermabrasion facial Palm Coast",
    "LaJolee Aesthetics & Wellness"
  ],
  openGraph: {
    title: `${business.name} | Medical Spa in Palm Coast, FL`,
    description:
      "Discover injectables, skin rejuvenation, wellness services, financing, and rewards at LaJolee Aesthetics & Wellness.",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <SiteHeader />
        <PromoModal />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
