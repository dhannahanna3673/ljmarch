import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Facials & Skin Rejuvenation"
};

export default function Page() {
  return <ServicePageTemplate serviceKey="facials-skin-rejuvenation" />;
}
