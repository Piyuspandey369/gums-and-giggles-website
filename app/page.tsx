import {
  ClinicOverviewSection,
  DoctorIntroSection,
  FeaturedServicesSection,
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
