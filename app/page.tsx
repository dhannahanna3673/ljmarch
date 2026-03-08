import {
  AboutSection,
  DetailSplit,
  ExperienceSection,
  FinancingAndContact,
  HeroSection,
  ResultsGallerySection,
  ServicesOverview,
  SpecialsSection,
  WellnessSplit,
} from "@/components/PageBits";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <DetailSplit />
      <WellnessSplit />
      <SpecialsSection />
      <AboutSection />
      <ResultsGallerySection />
      <ExperienceSection />
      <FinancingAndContact />
    </main>
  );
}