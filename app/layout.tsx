import "./globals.css";
import { ReactNode } from "react";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata = {
  title: "LaJolee Aesthetics & Wellness",
  description:
    "Aesthetic and wellness services in Palm Coast Florida including injectables, facials, medical weight loss, and hormone wellness.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}