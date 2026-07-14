import type { Service } from "@/data/services";
import { ButtonLink } from "../ui/ButtonLink";
import {
  cardClass,
  clinic,
  container,
  eyebrowClass,
  section,
  sectionAlt,
  sectionPink,
  splitGridClass,
} from "../constants";
import { CardsGrid } from "../ui/CardsGrid";
import { CheckGrid } from "../ui/CheckGrid";
import { FAQList } from "../ui/FAQList";
import { HeroHighlights } from "../ui/HeroHighlights";
import { ImageShowcase } from "../ui/ImageShowcase";
import { ProcessSteps } from "../ui/ProcessSteps";
import { SectionHeader } from "../ui/SectionHeader";
import { CTASection } from "../sections/CTASection";
import { LocationSection } from "../sections/LocationSection";
import { PageHero } from "../sections/PageHero";

export function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        lead={service.summary}
        image={service.heroImage}
        imageAlt={service.imageAlt}
      >
        <HeroHighlights items={service.highlights} />
      </PageHero>

      <section className={section}>
        <div className={`${container} ${splitGridClass}`}>
          <div>
            <SectionHeader eyebrow="Overview" title={`About ${service.shortTitle}`} />
            <div className="grid max-w-3xl gap-4 leading-8 text-zinc-600">
              {service.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className={`${cardClass} p-7`}>
            <p className={eyebrowClass}>Starting point</p>
            <h2 className="mb-3 font-sans text-2xl font-black leading-tight text-[#c69214]">
              {service.price}
            </h2>
            <p className="leading-7 text-zinc-600">
              Final pricing is confirmed after examination, X-rays where needed,
              and a treatment plan.
            </p>
            <div className="mt-6">
              <ButtonLink href={clinic.appointmentHref}>Get a clear estimate</ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      {service.options?.length ? (
        <section className={sectionAlt}>
          <div className={container}>
            <SectionHeader
              eyebrow="Treatment details"
              title={service.optionsTitle ?? "Treatment options"}
              lead={service.optionsLead}
              center
            />
            <CardsGrid items={service.options} />
          </div>
        </section>
      ) : null}

      {service.signs?.length ? (
        <section className={section}>
          <div className={`${container} max-w-4xl`}>
            <SectionHeader
              eyebrow="Know the signs"
              title={service.signsTitle ?? "When to book a visit"}
              center
            />
            <CheckGrid items={service.signs} />
          </div>
        </section>
      ) : null}

      <section className={sectionPink}>
        <div className={container}>
          <SectionHeader
            eyebrow="Patient journey"
            title="What to expect"
            lead="We keep the process clear so you know what is happening at every stage."
            center
          />
          <ProcessSteps steps={service.process} />
        </div>
      </section>

      <section className={section}>
        <div className={container}>
          <SectionHeader
            eyebrow="Why patients choose us"
            title={`Why choose Gums & Giggles for ${service.shortTitle.toLowerCase()}?`}
            center
          />
          <CardsGrid items={service.why} />
        </div>
      </section>

      {service.care?.length ? (
        <section className={sectionAlt}>
          <div className={container}>
            <SectionHeader eyebrow="Aftercare" title={service.careTitle ?? "Care tips"} center />
            <CardsGrid items={service.care} />
          </div>
        </section>
      ) : null}

      {service.extraImages?.length ? (
        <section className={section}>
          <div className={container}>
            <ImageShowcase images={service.extraImages} />
          </div>
        </section>
      ) : null}

      <section className={sectionAlt}>
        <div className={`${container} max-w-4xl`}>
          <SectionHeader
            eyebrow="Common questions"
            title={`FAQs about ${service.shortTitle}`}
            center
          />
          <FAQList items={service.faqs} />
        </div>
      </section>

      <LocationSection />
      <CTASection title={service.ctaTitle} text={service.ctaText} />
    </>
  );
}
