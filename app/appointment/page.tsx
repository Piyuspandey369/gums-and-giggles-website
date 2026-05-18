import type { Metadata } from "next";
import { ButtonLink, LocationSection, PageHero, clinic } from "@/components/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book a dental appointment at Gums & Giggles Dental Clinic on Dhobidhara Marg, Kathmandu.",
};

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a visit"
        title="Book an appointment at Gums & Giggles"
        lead="Call, email, or visit us on Dhobidhara Marg. We will help you choose the right consultation slot and explain what to bring for your visit."
        image="/clinic_photos/clinics_counter_image.webp"
        imageAlt="Reception at Gums and Giggles Dental Clinic"
      />

      <section className="section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Fastest way to book</p>
            <h2>Call the clinic directly</h2>
            <p className="section-lead">
              For appointments, urgent dental pain, swelling, broken teeth, or
              questions about treatment cost, calling is the quickest route.
            </p>
            <div className="hero-actions">
              <ButtonLink href={clinic.phoneHref}>Call {clinic.phone}</ButtonLink>
              <ButtonLink href={clinic.emailHref} variant="secondary">
                Email the clinic
              </ButtonLink>
            </div>
          </div>
          <aside className="price-panel">
            <p className="eyebrow">Clinic hours</p>
            <h2>{clinic.hours}</h2>
            <p>{clinic.address}</p>
            <ButtonLink href={clinic.mapsHref} variant="secondary">
              Get directions
            </ButtonLink>
          </aside>
        </div>
      </section>

      <LocationSection />
    </>
  );
}

