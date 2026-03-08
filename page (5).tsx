import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Wrinkle Relaxers (Botox®)"
};

export default function Page() {
  return <ServicePageTemplate serviceKey="wrinkle-relaxers" />;
}
