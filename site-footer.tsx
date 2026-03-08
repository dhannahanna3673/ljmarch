import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Hormone Wellness"
};

export default function Page() {
  return <ServicePageTemplate serviceKey="hormone-wellness" />;
}
