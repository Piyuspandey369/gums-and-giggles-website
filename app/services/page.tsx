import type { Metadata } from "next";
import Image from "next/image";
import {
  ButtonLink,
  CTASection,
  LocationSection,
  PageHero,
  SectionHeader,
  ServiceCard,
  actionRowClass,
  container,
  h2Class,
  imagePanelClass,
  leadClass,
  section,
  sectionPink,
} from "@/components/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Dental Services in Kathmandu",
  description:
    "Explore dental services at Gums & Giggles, including root canal treatment, gum care, zirconia crowns, braces, implants, teeth cleaning, and wisdom tooth removal.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental services"
        title="Dental services in Kathmandu"
        lead="Specialist-led dental care at Dhobidhara Marg. From routine cleaning to root canal treatment, gum care, implants, crowns, braces, and wisdom tooth removal, everything is planned clearly under one roof."
        image="/images/hero-home-illustration.png"
        imageAlt="Dental clinic hero illustration"
      />

      <section className={section}>
        <div className={container}>
          <SectionHeader
            eyebrow="What we offer"
            title="All dental treatments at Gums & Giggles"
            lead="Select a service to learn more about symptoms, pricing, what to expect, and how to book."
            center
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className={sectionPink}>
        <div className={`${container} grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]`}>
          <div className={imagePanelClass}>
            <Image
              className="object-cover"
              src="/clinic_photos/doctor_photo_with_a_adult_male_patient.webp"
              alt="Dr. Niyukty Arjal consulting with a patient"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
          <div>
            <p className="mb-2.5 text-xs font-black uppercase tracking-[0.1em] text-[#E8177A]">Our specialist</p>
            <h2 className={h2Class}>Meet Dr. Niyukty Arjal</h2>
            <p className={leadClass}>
              Dr. Arjal is an MDS Periodontist and lead dentist at Gums &
              Giggles. Her specialist training in gum health supports many of
              the treatments patients need most, from deep cleaning and gum
              disease management to implants and restorative planning.
            </p>
            <div className={actionRowClass}>
              <ButtonLink href="/about-us">Learn about the clinic</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <LocationSection />
      <CTASection
        title="Not sure which treatment you need?"
        text="Book a consultation. We will examine your teeth, explain what we find, and give you a clear estimate before treatment begins."
      />
    </>
  );
}
