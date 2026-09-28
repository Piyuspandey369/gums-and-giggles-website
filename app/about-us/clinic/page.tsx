import type { Metadata } from "next";
import Image from "next/image";
import {
  JsonLd,
  breadcrumbSchema,
  CTASection,
  CardsGrid,
  ClinicGallery,
  LocationSection,
  PageHero,
  SectionHeader,
  StatStrip,
  cardClass,
  container,
  eyebrowClass,
  h2Class,
  leadClass,
  section,
  sectionAlt,
  sectionPink,
} from "@/components";

export const metadata: Metadata = {
  title: "Inside Our Dental Clinic in Kathmandu",
  description:
    "A look inside Gums & Giggles Dental Clinic on Dhobidhara Marg, Kathmandu: the treatment rooms, the reception, hygiene practice, and what your first visit feels like.",
  alternates: { canonical: "/about-us/clinic" },
};

// TODO (client): confirm the equipment list and sterilisation protocol wording
// below, and send photos of the treatment room, sterilisation area and signage
// so the placeholders in the gallery can be replaced with real images.

export default function ClinicPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about-us" }, { name: "Inside the Clinic", path: "/about-us/clinic" }])} />
      <PageHero
        eyebrow="Inside the clinic"
        title="A clinic built to feel calm"
        lead="Dental anxiety is mostly about not knowing what happens next. The clinic is set up to remove as much of that as possible, from the reception desk to the chair."
        image="/clinic_photos/clinics_building_image_from_outside.webp"
        imageAlt="Exterior of Gums and Giggles Dental Clinic on Dhobidhara Marg, Kathmandu"
      />

      <StatStrip
        stats={[
          { value: "Dhobidhara", label: "Central Kathmandu" },
          { value: "Sun-Fri", label: "10 AM to 7 PM" },
          { value: "MDS", label: "Specialist led" },
          { value: "All ages", label: "Children and adults" },
        ]}
      />

      <section className={section}>
        <div className={container}>
          <SectionHeader
            eyebrow="The space"
            title="Our clinic on Dhobidhara Marg"
            lead="Ground-level access, a reception you can actually sit in, and treatment rooms kept bright and uncluttered."
            center
          />
          <ClinicGallery />
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={container}>
          <SectionHeader
            eyebrow="Hygiene and safety"
            title="How we handle cleanliness"
            lead="The parts of infection control patients rarely see are the parts that matter most."
            center
          />
          <CardsGrid
            items={[
              {
                title: "Sterilised instruments",
                text: "Instruments are cleaned, packed and sterilised between every patient. Packs are opened in front of you at the chair.",
              },
              {
                title: "Single-use where it counts",
                text: "Needles, gloves, suction tips, bibs and cups are used once and disposed of. Nothing disposable is reused.",
              },
              {
                title: "Surfaces between patients",
                text: "The chair, light handles, bracket table and controls are disinfected after each appointment, not at the end of the day.",
              },
              {
                title: "Clinical waste handled separately",
                text: "Sharps and clinical waste are segregated and disposed of through the correct channels.",
              },
            ]}
          />
        </div>
      </section>

      <section className={sectionPink}>
        <div
          className={`${container} grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]`}
        >
          <div className="relative min-h-80 overflow-hidden rounded-[1.75rem] bg-pink-50 shadow-[0_18px_50px_rgba(17,17,17,0.09)] md:min-h-[420px]">
            <Image
              className="object-cover"
              src="/clinic_photos/clinics_counter_image.webp"
              alt="Reception area at Gums and Giggles Dental Clinic"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
          <div>
            <p className={eyebrowClass}>Your first visit</p>
            <h2 className={h2Class}>What actually happens</h2>
            <ol className="mt-5 grid gap-3">
              {[
                "Reception takes your details and a short medical history, which matters for anaesthetic and healing.",
                "The dentist asks what brought you in, and listens before looking.",
                "Examination of teeth, gums and soft tissues, with X-rays only where they will change the plan.",
                "Findings explained with the chart or image in front of you.",
                "Options, costs and timing set out, with a written estimate.",
                "You decide. Treatment is booked when you are ready, not on the spot.",
              ].map((step, index) => (
                <li
                  className={`${cardClass} grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-3 p-4`}
                  key={step}
                >
                  <span className="font-sans text-sm font-black text-[#E8177A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-7 text-zinc-600">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={container}>
          <SectionHeader
            eyebrow="Practical details"
            title="Before you come in"
            center
          />
          <CardsGrid
            items={[
              {
                title: "Bring your medication list",
                text: "Blood thinners, bisphosphonates, diabetes medication and blood pressure tablets all change how we plan treatment.",
              },
              {
                title: "Bring previous records",
                text: "Old X-rays, gum charts or treatment notes save time and let us compare rather than start from scratch.",
              },
              {
                title: "Allow about 45 minutes",
                text: "A first examination with X-rays and a proper discussion is not a ten-minute appointment.",
              },
              {
                title: "Eat beforehand",
                text: "Some treatments leave you numb for a couple of hours. Arriving fed makes the rest of the day easier.",
              },
              {
                title: "Bring someone if it helps",
                text: "Anxious patients and children are welcome to have someone with them in the room.",
              },
              {
                title: "Ask about cost upfront",
                text: "We would rather discuss fees at the start than surprise anyone at the end. Ask, and you get it in writing.",
              },
            ]}
          />
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={`${container} max-w-3xl`}>
          <div className={`${cardClass} p-7`}>
            <p className={eyebrowClass}>Accessibility and comfort</p>
            <h2 className={h2Class}>Getting in and settling in</h2>
            <p className={leadClass}>
              The clinic sits directly on Dhobidhara Marg with taxi access at
              the door. If you have limited mobility, are bringing a
              wheelchair, or need help getting in, call ahead and we will meet
              you at the entrance and arrange the visit around it.
            </p>
          </div>
        </div>
      </section>

      <LocationSection />
      <CTASection
        title="Come and see the clinic"
        text="Book a consultation on Dhobidhara Marg, or call if you would like to ask something before you commit to an appointment."
      />
    </>
  );
}
