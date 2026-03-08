import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Medical Weight Loss"
};

export default function Page() {
  return <ServicePageTemplate serviceKey="medical-weight-loss" />;
}
