import type { Metadata } from "next";
import Image from "next/image";
import {
  JsonLd,
  breadcrumbSchema,
  ButtonLink,
  CTASection,
  CardsGrid,
  CheckGrid,
  FAQList,
  HeroHighlights,
  LocationSection,
  PageHero,
  ProcessSteps,
  SectionHeader,
  ServiceCard,
  StatStrip,
  actionRowClass,
  container,
  h2Class,
  imagePanelClass,
  leadClass,
  section,
  sectionAlt,
  sectionPink,
} from "@/components";
import { gumTopics } from "@/data/gum-topics";

export const metadata: Metadata = {
  title: "Gum Care and Periodontics in Kathmandu",
  description:
    "Specialist gum treatment at Gums & Giggles, led by an MDS Periodontist. Gum disease treatment, bleeding gums, recession, deep cleaning, and gum surgery on Dhobidhara Marg, Kathmandu.",
  alternates: { canonical: "/gum-care" },
};

export default function GumCarePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Gum Care and Periodontics", path: "/gum-care" }])} />
      <PageHero
        eyebrow="Gum care and periodontics"
        title="Specialist gum care in Kathmandu"
        lead="Gums hold your teeth in place, and gum disease is the leading cause of adult tooth loss. Our clinic is led by an MDS Periodontist, a dentist who trained specifically in diagnosing and treating the tissue around the tooth."
        image="/clinic_photos/doctor_photo_with_a_adult_male_patient.webp"
        imageAlt="Dr. Niyukty Arjal examining a patient at Gums and Giggles Dental Clinic"
      >
        <HeroHighlights
          items={[
            "Diagnosed and treated by an MDS Periodontist",
            "Full gum charting, so you see your own measurements",
            "Treatment staged from cleaning to surgery, only as far as needed",
          ]}
        />
      </PageHero>

      <StatStrip
        stats={[
          { value: "MDS", label: "Specialist periodontist" },
          { value: "6 point", label: "Charting per tooth" },
          { value: "5", label: "Gum treatments offered" },
          { value: "Sun-Fri", label: "10 AM to 7 PM" },
        ]}
      />

      <section className={section}>
        <div className={container}>
          <SectionHeader
            eyebrow="Where to start"
            title="Gum treatments at Gums & Giggles"
            lead="Each page explains the symptoms, what the treatment involves, what to expect during healing, and how we decide what you need."
            center
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {gumTopics.map((topic) => (
              <ServiceCard basePath="/gum-care" service={topic} key={topic.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={container}>
          <SectionHeader
            eyebrow="Know the stages"
            title="How gum disease progresses"
            lead="Gum disease moves through predictable stages. Where you are on this path decides what treatment you need, which is why the examination comes before any recommendation."
            center
          />
          <ProcessSteps
            steps={[
              {
                title: "Healthy gums",
                text: "Firm, pale pink, and they do not bleed when you brush or floss. Pocket depths measure 1 to 3mm.",
              },
              {
                title: "Gingivitis",
                text: "Plaque along the gumline causes redness, swelling and bleeding. No bone has been lost yet, and this stage is fully reversible.",
              },
              {
                title: "Early periodontitis",
                text: "Pockets deepen past 4mm and the first bone loss appears on X-ray. Deep cleaning can stop it here, but the lost bone does not return.",
              },
              {
                title: "Advanced periodontitis",
                text: "Deep pockets, significant bone loss, teeth becoming loose or shifting. Surgical treatment is usually needed to save the teeth.",
              },
            ]}
          />
        </div>
      </section>

      <section className={section}>
        <div className={`${container} max-w-4xl`}>
          <SectionHeader
            eyebrow="Know the signs"
            title="When to see a periodontist"
            lead="Any one of these is worth an examination. Gum disease is painless for most of its course, which is why it is usually found late."
            center
          />
          <CheckGrid
            items={[
              "Gums bleed when you brush or floss",
              "Red, swollen or tender gums",
              "Persistent bad breath or a bad taste",
              "Gums pulling back, teeth looking longer",
              "Teeth feel loose, or have started to shift",
              "Pus at the gumline or a recurring abscess",
              "Sharp sensitivity where the root is exposed",
              "You have diabetes, smoke, or are pregnant",
            ]}
          />
        </div>
      </section>

      <section className={sectionPink}>
        <div
          className={`${container} grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]`}
        >
          <div className={imagePanelClass}>
            <Image
              className="object-cover"
              src="/clinic_photos/doctor_photo_with_a_adult_male_patient.webp"
              alt="Dr. Niyukty Arjal, MDS Periodontist, with a patient"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
          <div>
            <p className="mb-2.5 text-xs font-black uppercase tracking-[0.1em] text-[#E8177A]">
              Why a specialist
            </p>
            <h2 className={h2Class}>What an MDS Periodontist does differently</h2>
            <p className={leadClass}>
              A periodontist completes three additional years of training after
              dental school, focused entirely on the gums, the bone, and the
              tissue that supports each tooth. That covers gum disease
              diagnosis, non-surgical and surgical treatment, grafting, and the
              foundations that implants rely on.
            </p>
            <div className={actionRowClass}>
              <ButtonLink href="/about-us/dr-niyukty-arjal">
                Meet Dr. Niyukty Arjal
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={container}>
          <SectionHeader
            eyebrow="How we work"
            title="What your first gum appointment looks like"
            center
          />
          <CardsGrid
            items={[
              {
                title: "We measure before we advise",
                text: "Pocket depths at six points around every tooth, bleeding points, mobility, and X-rays where needed. The plan comes from that chart.",
              },
              {
                title: "You see your own numbers",
                text: "The chart is shown and explained, and repeated after treatment so improvement is measured rather than described.",
              },
              {
                title: "Least invasive first",
                text: "Cleaning before deep cleaning, deep cleaning before surgery. We escalate only when the re-evaluation says we need to.",
              },
              {
                title: "Costs in writing",
                text: "A written estimate after the examination, covering the treatment, the review visits, and anything that might follow.",
              },
              {
                title: "Maintenance planned properly",
                text: "Your recall interval is set from your risk and results, usually three to four months after active treatment.",
              },
              {
                title: "Comfort taken seriously",
                text: "Local anaesthetic as standard for deep cleaning and surgery, with time to settle and clear aftercare instructions.",
              },
            ]}
          />
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={`${container} max-w-4xl`}>
          <SectionHeader
            eyebrow="Common questions"
            title="Gum care FAQs"
            center
          />
          <FAQList
            items={[
              {
                question: "What is the difference between a dentist and a periodontist?",
                answer:
                  "A periodontist is a dentist who has completed a further specialist degree, an MDS in Periodontics, focused on the gums and supporting bone. General dentists treat gum problems routinely; a periodontist handles the advanced, surgical and complex cases, and diagnoses disease that is easy to miss on a quick check.",
              },
              {
                question: "How often should gums be checked?",
                answer:
                  "Most people benefit from a check and professional clean every six months. If you have been treated for gum disease, three to four months is usual, because treated pockets recolonise with bacteria faster than healthy gums do.",
              },
              {
                question: "Can gum disease affect the rest of my health?",
                answer:
                  "Gum disease is associated with diabetes, cardiovascular disease and adverse pregnancy outcomes in the research literature. The relationship with diabetes runs both ways: poorly controlled blood sugar worsens gum disease, and active gum inflammation makes blood sugar harder to control.",
              },
              {
                question: "Do I need a referral to see a periodontist?",
                answer:
                  "No. You can book directly with us. If you have been examined elsewhere, bring any X-rays or charts you have, as they help us compare rather than start from nothing.",
              },
              {
                question: "How much does gum treatment cost in Kathmandu?",
                answer:
                  "It depends on the stage and how many areas are affected. A scaling and polish starts from NPR 2,000. Deep cleaning is quoted per quadrant, and surgical treatment per site. You get a written estimate after the examination, before anything is booked.",
              },
            ]}
          />
        </div>
      </section>

      <LocationSection />
      <CTASection
        title="Get your gums properly checked"
        text="Book an examination with our MDS Periodontist on Dhobidhara Marg. You will leave knowing exactly what stage your gums are at, and what it takes to treat them."
      />
    </>
  );
}
