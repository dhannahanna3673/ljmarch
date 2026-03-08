import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Injectables"
};

export default function Page() {
  return <ServicePageTemplate serviceKey="injectables" />;
}
