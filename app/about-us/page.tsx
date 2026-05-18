import type { Metadata } from "next";
import Image from "next/image";
import {
  ButtonLink,
  CTASection,
  CardsGrid,
  ClinicGallery,
  LocationSection,
  PageHero,
  SectionHeader,
  StatStrip,
  actionRowClass,
  container,
  h2Class,
  imagePanelClass,
  leadClass,
  section,
  sectionAlt,
  sectionPink,
  splitGridClass,
} from "@/components/site";

export const metadata: Metadata = {
  title: "About Our Dental Clinic in Kathmandu",
  description:
    "Learn about Gums & Giggles Dental Clinic, a specialist-led dental clinic on Dhobidhara Marg in Kathmandu.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About our clinic"
        title="The story behind Gums & Giggles"
        lead="Gums & Giggles was created to bring specialist dental care to Kathmandu in a setting that feels warm, polished, and genuinely patient-friendly."
        image="/clinic_photos/clinics_building_image_from_outside.webp"
        imageAlt="Exterior view of Gums and Giggles Dental Clinic on Dhobidhara Marg"
      />

      <StatStrip
        stats={[
          { value: "4.5+", label: "Rated by patients" },
          { value: "MDS", label: "Specialist led" },
          { value: "Sun-Fri", label: "10 AM to 7 PM" },
          { value: "Dhobidhara", label: "Central Kathmandu" },
        ]}
      />

      <section className={section}>
        <div className={`${container} ${splitGridClass}`}>
          <div>
            <SectionHeader
              eyebrow="Who we are"
              title="A modern dental clinic built around trust, comfort, and specialist care"
              lead="We serve families, children, working professionals, and visitors looking for thoughtful dental care in a friendly setting."
            />
            <div className="grid max-w-3xl gap-4 leading-8 text-zinc-600">
              <p>
                At Gums & Giggles Dental Clinic, we believe going to the
                dentist should feel less stressful and more supportive. Our
                team focuses on clear explanations, careful treatment planning,
                and a calm experience from consultation to follow-up.
              </p>
              <p>
                The clinic is based on Dhobidhara Marg, with convenient access
                from Lazimpat, Maharajgunj, Bansbari, Baluwatar, Thamel,
                Boudha, and nearby neighborhoods.
              </p>
            </div>
          </div>
          <CardsGrid
            items={[
              {
                title: "Specialist-led diagnosis",
                text: "Patients benefit from the guidance of an MDS Periodontist, especially for gum care, implants, and complex treatment planning.",
              },
              {
                title: "Comfort-first environment",
                text: "A warm atmosphere, respectful communication, and supportive team help reduce dental anxiety.",
              },
              {
                title: "Clear practical guidance",
                text: "We explain treatment options in plain language so patients can make informed decisions.",
              },
            ]}
          />
        </div>
      </section>

      <section className={sectionPink}>
        <div className={container}>
          <SectionHeader
            eyebrow="Meet the team"
            title="The people behind Gums & Giggles"
            lead="Our clinic combines specialist expertise with a genuinely approachable style of care."
            center
          />
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]">
            <div className={imagePanelClass}>
              <Image
                className="object-cover"
                src="/clinic_photos/doctor_photo_with_a_adult_male_patient.webp"
                alt="Dr. Niyukty Arjal consulting with an adult patient"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
            <div>
              <h2 className={h2Class}>Dr. Niyukty Arjal</h2>
              <p className={leadClass}>
              MDS Periodontist and lead doctor. Dr. Arjal&apos;s specialist
                background is a key strength for patients seeking gum care,
                implants, restorative planning, and long-term oral wellness in
                Kathmandu.
              </p>
              <ul className="mt-5 grid gap-2.5">
                <li className="rounded-2xl bg-pink-100 px-4 py-3 font-bold text-zinc-800">MDS in Periodontics</li>
                <li className="rounded-2xl bg-pink-100 px-4 py-3 font-bold text-zinc-800">Special interest in gum health and implant foundations</li>
                <li className="rounded-2xl bg-pink-100 px-4 py-3 font-bold text-zinc-800">Calm, clear consultations for children and adults</li>
              </ul>
              <div className={actionRowClass}>
                <ButtonLink href="/services">Explore services</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={container}>
          <SectionHeader
            eyebrow="Our approach"
            title="Care that feels personal, not rushed"
            lead="Every visit is shaped around comfort, clarity, and the long-term health of your smile."
            center
          />
          <CardsGrid
            items={[
              {
                title: "Thoughtful consultations",
                text: "We take time to understand your concern, explain what we see, and recommend next steps clearly.",
              },
              {
                title: "Modern clinical setting",
                text: "Our clinic uses current equipment and a clean, polished environment for careful dental treatment.",
              },
              {
                title: "Transparent communication",
                text: "From planning to fees, patients know what to expect before any procedure begins.",
              },
            ]}
          />
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={container}>
          <SectionHeader
            eyebrow="Inside our clinic"
            title="A bright and comfortable space on Dhobidhara Marg"
            lead="We want the clinic environment to feel as reassuring as the care itself."
            center
          />
          <ClinicGallery />
        </div>
      </section>

      <section className={section}>
        <div className={container}>
          <SectionHeader
            eyebrow="For every smile"
            title="Welcoming children, adults, and families"
            center
          />
          <div className="grid gap-5 md:grid-cols-2">
            <figure className="overflow-hidden rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_8px_24px_rgba(17,17,17,0.06)]">
              <div className="relative min-h-64 bg-pink-50 md:min-h-96">
                <Image
                  className="object-cover"
                  src="/clinic_photos/doctor_photo_with_a_child_patient.webp"
                  alt="Child-friendly dental care at Gums and Giggles"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <figcaption className="p-5 font-semibold leading-7 text-zinc-600">
                Gentle care that helps younger patients feel safe and
                supported.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_8px_24px_rgba(17,17,17,0.06)]">
              <div className="relative min-h-64 bg-pink-50 md:min-h-96">
                <Image
                  className="object-cover"
                  src="/clinic_photos/clinics_counter_image.webp"
                  alt="Reception area at Gums and Giggles Dental Clinic"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <figcaption className="p-5 font-semibold leading-7 text-zinc-600">
                Professional care for busy adults who want clear treatment
                planning.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <LocationSection />
      <CTASection
        title="Ready to visit our dental clinic in Kathmandu?"
        text="Book an appointment with a team that values specialist care, modern treatment, and a warm patient experience."
      />
    </>
  );
}
