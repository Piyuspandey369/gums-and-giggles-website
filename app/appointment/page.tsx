import type { Metadata } from "next";
import {
  JsonLd,
  breadcrumbSchema,
  ButtonLink,
  LocationSection,
  PageHero,
  actionRowClass,
  cardClass,
  clinic,
  container,
  eyebrowClass,
  h2Class,
  leadClass,
  section,
  splitGridClass,
} from "@/components";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book a dental appointment at Gums & Giggles Dental Clinic on Dhobidhara Marg, Kathmandu.",
  alternates: { canonical: "/appointment" },
};

export default function AppointmentPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Book an Appointment", path: "/appointment" }])} />
      <PageHero
        eyebrow="Book a visit"
        title="Book an appointment at Gums & Giggles"
        lead="Call, email, or visit us on Dhobidhara Marg. We will help you choose the right consultation slot and explain what to bring for your visit."
        image="/clinic_photos/clinics_counter_image.webp"
        imageAlt="Reception at Gums and Giggles Dental Clinic"
      />

      <section className={section}>
        <div className={`${container} ${splitGridClass}`}>
          <div>
            <p className={eyebrowClass}>Fastest way to book</p>
            <h2 className={h2Class}>Call the clinic directly</h2>
            <p className={leadClass}>
              For appointments, urgent dental pain, swelling, broken teeth, or
              questions about treatment cost, calling is the quickest route.
            </p>
            <div className={actionRowClass}>
              <ButtonLink href={clinic.phoneHref}>Call {clinic.phone}</ButtonLink>
              <ButtonLink href={clinic.emailHref} variant="secondary">
                Email the clinic
              </ButtonLink>
            </div>
          </div>
          <aside className={`${cardClass} p-7`}>
            <p className={eyebrowClass}>Clinic hours</p>
            <h2 className="mb-3 font-sans text-2xl font-black leading-tight text-[#c69214]">{clinic.hours}</h2>
            <p className="leading-7 text-zinc-600">{clinic.address}</p>
            <div className="mt-6">
              <ButtonLink href={clinic.mapsHref} variant="secondary">
                Get directions
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      <LocationSection />
    </>
  );
}
