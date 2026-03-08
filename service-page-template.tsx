import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Professional Skincare"
};

export default function Page() {
  return <ServicePageTemplate serviceKey="professional-skincare" />;
}
