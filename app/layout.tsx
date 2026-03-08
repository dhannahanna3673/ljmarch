import type { Metadata } from "next";
import "./globals.css";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "LaJolee Aesthetics & Wellness",
  description:
    "Aesthetic and wellness services in Palm Coast, Florida including wrinkle relaxers, facials, hydrodermabrasion, medical weight loss, hormone wellness, financing, and skincare support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}