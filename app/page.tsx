import {
  ClinicOverviewSection,
  DoctorIntroSection,
  FeaturedServicesSection,
  GumCareFocusSection,
  HomeClosingSections,
  HomeFAQSection,
  HomeHero,
  HomeStats,
  PatientBenefitsSection,
  PatientReviewsSection,
} from "@/components";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <GumCareFocusSection />
      <FeaturedServicesSection />
      <PatientBenefitsSection />
      <DoctorIntroSection />
      <ClinicOverviewSection />
      <PatientReviewsSection />
      <HomeFAQSection />
      <HomeClosingSections />
    </>
  );
}
