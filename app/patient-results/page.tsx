import type { Metadata } from "next";
import Link from "next/link";
import {
  JsonLd,
  breadcrumbSchema,
  ButtonLink,
  CTASection,
  CardsGrid,
  FAQList,
  LocationSection,
  PageHero,
  SectionHeader,
  cardClass,
  clinic,
  container,
  eyebrowClass,
  h2Class,
  leadClass,
  section,
  sectionAlt,
} from "@/components";

export const metadata: Metadata = {
  title: "Patient Results",
  description:
    "What treatment results look like at Gums & Giggles Dental Clinic, Kathmandu: realistic outcomes for gum treatment, implants, crowns and braces, and how we document them.",
  alternates: { canonical: "/patient-results" },
};

// TODO (client): before/after photos need written patient consent per case.
// Send consented image pairs and a one-line description of the treatment for
// each, and they replace the pending panels below.

const caseTypes = [
  {
    title: "Gum disease treatment",
    href: "/gum-care/gum-disease-treatment",
    expect:
      "Bleeding stops, swelling settles, and pocket depths measured on the chart reduce. The chart is the result here, more than the photograph.",
  },
  {
    title: "Deep cleaning and root planing",
    href: "/gum-care/deep-cleaning-scaling-root-planing",
    expect:
      "Calculus removed from below the gumline, gums firm up and change colour from red to pale pink over six to eight weeks.",
  },
  {
    title: "Gum recession and grafting",
    href: "/gum-care/gum-recession-treatment",
    expect:
      "Root coverage where the site is suitable, a more even gumline, and a clear reduction in cold sensitivity.",
  },
  {
    title: "Dental implants",
    href: "/services/dental-implants-kathmandu",
    expect:
      "A missing tooth replaced with a crown that matches the neighbouring teeth in shade and shape, stable on its own foundation.",
  },
  {
    title: "Zirconia crowns and bridges",
    href: "/services/zirconia-crowns-and-bridges",
    expect:
      "A damaged or heavily filled tooth restored to a natural contour, with no dark metal line at the gumline.",
  },
  {
    title: "Braces and aligners",
    href: "/services/dental-braces-kathmandu",
    expect:
      "Crowding resolved, the bite corrected, and teeth held in the new position by a retainer afterwards.",
  },
];

export default function PatientResultsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Patient Results", path: "/patient-results" }])} />
      <PageHero
        eyebrow="Patient results"
        title="What results actually look like"
        lead="Dental results are easy to exaggerate with a camera angle. This page sets out what each treatment can realistically achieve, and how we record it, so you can judge our work rather than our photography."
        image="/clinic_photos/doctor_photo_with_a_adult_male_patient.webp"
        imageAlt="Dr. Niyukty Arjal reviewing treatment with a patient"
      />

      <section className={section}>
        <div className={`${container} max-w-3xl`}>
          <div className={`${cardClass} p-7`}>
            <p className={eyebrowClass}>How we document results</p>
            <h2 className={h2Class}>Measurements first, photographs second</h2>
            <p className={leadClass}>
              For gum treatment, the honest record of a result is the
              periodontal chart: pocket depths at six points around every
              tooth, taken before treatment and again after healing. Numbers
              cannot be flattered by lighting. For restorative and orthodontic
              work, photographs taken under consistent conditions do the job,
              and we take them at the same angle before and after.
            </p>
            <p className="mt-4 leading-8 text-zinc-600">
              Every patient is shown their own record at review. Nothing is
              published without written consent, and consent can be withdrawn
              at any time.
            </p>
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={container}>
          <SectionHeader
            eyebrow="By treatment"
            title="What to expect from each treatment"
            lead="Case galleries are being added as consented photographs are collected. In the meantime, here is what a good outcome looks like for each."
            center
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseTypes.map((item) => (
              <article className={`${cardClass} overflow-hidden`} key={item.title}>
                <div className="grid min-h-44 place-items-center border-b border-zinc-100 bg-pink-50 px-5 text-center">
                  <span className="font-sans text-sm font-black text-[#E8177A]">
                    Case photographs coming soon
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-sans text-lg font-black leading-snug text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-zinc-600">{item.expect}</p>
                  <Link
                    className="mt-3 inline-flex font-sans text-sm font-black text-[#E8177A] hover:text-[#c4115f]"
                    href={item.href}
                  >
                    About this treatment
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={container}>
          <SectionHeader
            eyebrow="Being straight with you"
            title="What dentistry cannot promise"
            lead="Any clinic that guarantees an outcome is telling you something it cannot know. Here is where the honest limits sit."
            center
          />
          <CardsGrid
            items={[
              {
                title: "Lost bone does not grow back",
                text: "Gum disease treatment stops the damage and stabilises the teeth. It does not rebuild the bone that has already gone, except in specific grafted sites.",
              },
              {
                title: "Not every recession can be covered",
                text: "Root coverage depends on the tissue and bone around the site. We will tell you before treatment which of your sites are realistic.",
              },
              {
                title: "Results depend on you too",
                text: "Home cleaning, smoking, diabetes control and keeping maintenance visits affect the outcome as much as the treatment itself.",
              },
              {
                title: "Teeth move after braces",
                text: "Without a retainer, teeth drift back. Retention is part of orthodontic treatment, not an optional extra.",
              },
              {
                title: "Shade matching has limits",
                text: "A single crown next to natural teeth is matched as closely as materials allow. Perfect invisibility is not always achievable.",
              },
              {
                title: "Healing varies",
                text: "Two patients with identical treatment can heal at different speeds. Timelines we give are typical, not guaranteed.",
              },
            ]}
          />
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={`${container} max-w-3xl`}>
          <div className={`${cardClass} p-7`}>
            <p className={eyebrowClass}>Patient privacy</p>
            <h2 className={h2Class}>Consent, every time</h2>
            <p className={leadClass}>
              Clinical photographs are part of the record for many treatments.
              They are never published, shared or used in marketing without
              written consent for that specific use. Patients can decline
              publication and still receive exactly the same treatment, and
              anyone who has consented can withdraw it later.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={clinic.emailHref} variant="secondary">
                Ask about your records
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={`${container} max-w-4xl`}>
          <SectionHeader
            eyebrow="Common questions"
            title="Questions about results"
            center
          />
          <FAQList
            items={[
              {
                question: "How soon will I see a difference after gum treatment?",
                answer:
                  "Bleeding usually reduces within one to two weeks of a thorough clean. Gum colour and firmness change over several weeks, and pocket depths are formally re-measured at six to eight weeks, which is when the result is confirmed.",
              },
              {
                question: "Can you show me cases like mine?",
                answer:
                  "Ask at your consultation. Where we hold consented photographs of comparable cases, we will show them to you in the clinic, along with the charting that goes with them.",
              },
              {
                question: "Will my before and after photos be published?",
                answer:
                  "Only if you sign a consent form for that specific use. Declining changes nothing about your treatment, and consent can be withdrawn afterwards.",
              },
              {
                question: "How long do results last?",
                answer:
                  "Gum treatment holds as long as the maintenance and home care hold. Crowns, implants and orthodontic results have their own expected lifespans, which we explain per treatment before you commit.",
              },
            ]}
          />
        </div>
      </section>

      <LocationSection />
      <CTASection
        title="Want to know what is achievable for your case?"
        text="Book an examination. We will tell you what your teeth and gums can realistically be brought back to, and what it takes to get there."
      />
    </>
  );
}
