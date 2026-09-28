import type { Metadata } from "next";
import Link from "next/link";
import {
  JsonLd,
  breadcrumbSchema,
  CTASection,
  CardsGrid,
  FAQList,
  LocationSection,
  PageHero,
  SectionHeader,
  cardClass,
  container,
  eyebrowClass,
  h2Class,
  leadClass,
  section,
  sectionAlt,
} from "@/components";
import { services } from "@/data/services";
import { gumTopics } from "@/data/gum-topics";

export const metadata: Metadata = {
  title: "Treatment Prices in Kathmandu",
  description:
    "Dental treatment prices at Gums & Giggles Dental Clinic, Kathmandu. Starting prices for cleaning, root canal treatment, crowns, braces, implants, wisdom tooth removal, and specialist gum care.",
  alternates: { canonical: "/treatment-prices" },
};

// TODO (client): confirm every figure below and the review date before launch.
// Prices are pulled from data/services.ts and data/gum-topics.ts, so update
// them there and this page follows automatically.

const priceReviewedOn = "September 2026";

const groups = [
  {
    title: "Gum care and periodontics",
    lead: "Specialist treatment led by an MDS Periodontist. Gum treatment is quoted after charting, because the number of affected areas is what drives the cost.",
    basePath: "/gum-care",
    items: gumTopics,
  },
  {
    title: "General and restorative dentistry",
    lead: "Starting prices for the treatments patients ask about most. The final figure is confirmed after examination and any X-rays.",
    basePath: "/services",
    items: services,
  },
];

export default function TreatmentPricesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Treatment Prices", path: "/treatment-prices" }])} />
      <PageHero
        eyebrow="Treatment prices"
        title="What treatment costs at Gums & Giggles"
        lead="Published starting prices, and an honest explanation of what moves the number up or down. You get a written estimate after examination, before any treatment is booked."
        image="/clinic_photos/clinics_counter_image.webp"
        imageAlt="Reception desk at Gums and Giggles Dental Clinic"
      />

      <section className={section}>
        <div className={container}>
          <div className={`${cardClass} mb-9 p-6`}>
            <p className={eyebrowClass}>Read this first</p>
            <p className="leading-8 text-zinc-600">
              Every price below is a starting point for a straightforward case.
              Dental treatment is not a fixed product: the cost depends on how
              much damage is present, which materials suit your mouth, and how
              many visits the treatment takes. Nobody can quote your exact
              figure without looking. What we can promise is that the estimate
              comes in writing before treatment starts, and that it does not
              change without your agreement.
            </p>
            <p className="mt-4 text-sm font-black text-zinc-500">
              Prices last reviewed: {priceReviewedOn}
            </p>
          </div>

          {groups.map((group) => (
            <div className="mb-12 last:mb-0" key={group.title}>
              <SectionHeader title={group.title} lead={group.lead} />
              <div className={`${cardClass} overflow-x-auto`}>
                <table className="w-full min-w-[34rem] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-zinc-200 bg-stone-50">
                      <th className="px-5 py-4 font-sans text-xs font-black uppercase tracking-[0.1em] text-zinc-500">
                        Treatment
                      </th>
                      <th className="px-5 py-4 font-sans text-xs font-black uppercase tracking-[0.1em] text-zinc-500">
                        Starting price
                      </th>
                      <th className="px-5 py-4 font-sans text-xs font-black uppercase tracking-[0.1em] text-zinc-500">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((item) => (
                      <tr
                        className="border-b border-zinc-100 last:border-0"
                        key={item.slug}
                      >
                        <td className="px-5 py-4 font-sans font-black text-zinc-950">
                          {item.shortTitle}
                        </td>
                        <td className="px-5 py-4 font-black text-[#c69214]">
                          {item.price}
                        </td>
                        <td className="px-5 py-4">
                          <Link
                            className="font-sans text-sm font-black text-[#E8177A] hover:text-[#c4115f]"
                            href={`${group.basePath}/${item.slug}`}
                          >
                            See treatment page
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={container}>
          <SectionHeader
            eyebrow="What changes the price"
            title="Why two patients pay different amounts for the same treatment"
            lead="These are the factors that actually move the number, so you can see where your own case is likely to land."
            center
          />
          <CardsGrid
            items={[
              {
                title: "How advanced the problem is",
                text: "A small cavity is a filling. The same tooth left another year may need a root canal and a crown, which costs several times more.",
              },
              {
                title: "Materials and brand",
                text: "Implant systems, crown materials and orthodontic brackets vary in price. We explain the options rather than defaulting to the most expensive.",
              },
              {
                title: "Number of teeth or areas",
                text: "Gum treatment is quoted per quadrant, crowns and implants per tooth. Treating four areas costs more than treating one.",
              },
              {
                title: "Whether surgery is needed",
                text: "A simple extraction and a surgical extraction are different procedures with different costs. The X-ray usually tells us which applies.",
              },
              {
                title: "Diagnostics",
                text: "X-rays where they change the plan. We do not take images that will not affect what we recommend.",
              },
              {
                title: "Follow-up included",
                text: "Review visits tied to a treatment are part of the estimate, not a separate charge added later.",
              },
            ]}
          />
        </div>
      </section>

      <section className={section}>
        <div className={`${container} max-w-3xl`}>
          <div className={`${cardClass} p-7`}>
            <p className={eyebrowClass}>Our commitment</p>
            <h2 className={h2Class}>No surprises at the end</h2>
            <p className={leadClass}>
              You get a written estimate before treatment starts. If something
              found during treatment changes the plan, we stop and discuss it
              with you before continuing. A larger bill should never be the
              first you hear of a complication.
            </p>
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={`${container} max-w-4xl`}>
          <SectionHeader
            eyebrow="Common questions"
            title="Questions about cost"
            center
          />
          <FAQList
            items={[
              {
                question: "Is the consultation charged separately?",
                answer:
                  "Call the clinic and ask when booking, and you will be told the consultation fee before you come in. It covers the examination and the discussion of your options, and any X-rays needed are quoted on top.",
              },
              {
                question: "Can I pay in instalments?",
                answer:
                  "For longer treatments such as braces and implants, payment is usually spread across the course of treatment rather than paid upfront. Discuss the schedule at the planning appointment.",
              },
              {
                question: "Why is a specialist more expensive?",
                answer:
                  "Specialist treatment often is not more expensive for routine work. Where it costs more, it is because the procedure is more complex, takes longer, or uses surgical materials. For gum disease specifically, specialist treatment that stops the disease is considerably cheaper than replacing the teeth you lose to it.",
              },
              {
                question: "Do you give estimates over the phone?",
                answer:
                  "We can give you the starting prices on this page over the phone. We will not quote your exact treatment without examining you, because an inaccurate phone quote helps nobody.",
              },
              {
                question: "Are these prices up to date?",
                answer: `This page was last reviewed in ${priceReviewedOn}. Material and laboratory costs change, so confirm the current figure when you book.`,
              },
            ]}
          />
        </div>
      </section>

      <LocationSection />
      <CTASection
        title="Get a written estimate for your treatment"
        text="Book an examination. You will leave with a clear plan, a clear price, and no obligation to proceed on the day."
      />
    </>
  );
}
