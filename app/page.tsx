import Image from "next/image";
import Link from "next/link";
import {
  ButtonLink,
  CTASection,
  CardsGrid,
  ClinicGallery,
  FAQList,
  HeroHighlights,
  LocationSection,
  PageHero,
  SectionHeader,
  ServiceCard,
  StatStrip,
  actionRowClass,
  cardClass,
  clinic,
  container,
  h2Class,
  imagePanelClass,
  leadClass,
  section,
  sectionAlt,
  sectionPink,
  splitGridClass,
} from "@/components/site";
import { featuredServices } from "@/data/services";

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Dental clinic in Kathmandu"
        title="Specialist-led dental care for confident smiles"
        lead="Gums & Giggles is a modern dental clinic on Dhobidhara Marg, led by MDS Periodontist Dr. Niyukty Arjal. From routine cleaning to braces, implants, crowns, root canal treatment, and gum care, your treatment is planned clearly from the start."
        image="/clinic_photos/doctor_photo_with_a_child_patient.webp"
        imageAlt="Dr. Niyukty Arjal with a child patient at Gums and Giggles Dental Clinic"
      >
        <HeroHighlights
          items={[
            "4.5+ rated by Kathmandu patients",
            "MDS Periodontist-led diagnosis and treatment planning",
            "Open Sunday to Friday, 10 AM to 7 PM",
          ]}
        />
      </PageHero>

      <StatStrip
        stats={[
          { value: "4.5+", label: "Google rating" },
          { value: "MDS", label: "Specialist dentist" },
          { value: "8+", label: "Dental services" },
          { value: "6", label: "Days open weekly" },
        ]}
      />

      <section className={sectionAlt}>
        <div className={container}>
          <SectionHeader
            eyebrow="What we treat"
            title="Complete dental care in Kathmandu"
            lead="Choose a service to learn about symptoms, pricing, treatment steps, and aftercare."
            center
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
          <div className={`${actionRowClass} justify-center`}>
            <ButtonLink href="/services">View all services</ButtonLink>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={`${container} ${splitGridClass}`}>
          <div className={imagePanelClass}>
            <Image
              className="object-cover"
              src="/clinic_photos/doctor_photo_with_a_adult_male_patient.webp"
              alt="Doctor consulting with an adult patient at Gums and Giggles"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Why patients choose us"
              title="More than a dentist, a specialist-led clinic"
              lead="Patients choose Gums & Giggles for specialist diagnosis, calm appointments, and practical explanations before treatment begins."
            />
            <CardsGrid
              items={[
                {
                  title: "Led by an MDS Periodontist",
                  text: "Dr. Niyukty Arjal brings specialist expertise in gum health, implants, and treatment planning.",
                },
                {
                  title: "Modern equipment and clear diagnosis",
                  text: "Digital X-rays and current dental instruments support accurate, comfortable care.",
                },
                {
                  title: "Transparent pricing",
                  text: "You receive a clear estimate and explanation before any treatment starts.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className={sectionPink}>
        <div className={`${container} grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]`}>
          <div className={imagePanelClass}>
            <Image
              className="object-cover"
              src="/clinic_photos/clinics_counter_image.webp"
              alt="Reception area at Gums and Giggles Dental Clinic"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
          <div>
            <p className="mb-2.5 text-xs font-black uppercase tracking-[0.1em] text-[#E8177A]">Meet your doctor</p>
            <h2 className={h2Class}>Dr. Niyukty Arjal</h2>
            <p className={leadClass}>
              MDS Periodontist and lead dentist at Gums & Giggles Dental
              Clinic. Her approach is straightforward: honest advice, gentle
              treatment, and outcomes designed to last.
            </p>
            <ul className="mt-5 grid gap-2.5">
              <li className="rounded-2xl bg-pink-100 px-4 py-3 font-bold text-zinc-800">MDS in Periodontics</li>
              <li className="rounded-2xl bg-pink-100 px-4 py-3 font-bold text-zinc-800">Expertise in gum care, implants, and restorative planning</li>
              <li className="rounded-2xl bg-pink-100 px-4 py-3 font-bold text-zinc-800">Welcoming to families, professionals, tourists, and expats</li>
            </ul>
            <div className={actionRowClass}>
              <ButtonLink href="/about-us">About the clinic</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={container}>
          <SectionHeader
            eyebrow="Our clinic"
            title="A clinic built for your comfort"
            lead="A bright, modern space on Dhobidhara Marg for children, adults, and families."
            center
          />
          <ClinicGallery />
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={container}>
          <SectionHeader
            eyebrow="Patient reviews"
            title="What our patients say"
            lead="Patients consistently mention the caring team, clean clinic, and comfortable treatment experience."
            center
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[0.7fr_1fr_1fr]">
            <article className={`${cardClass} p-6 text-center`}>
              <strong className="block font-sans text-6xl font-black leading-none text-zinc-950">
                4.5+
              </strong>
              <div className="my-2 tracking-widest text-[#c69214]">★★★★★</div>
              <p className="text-zinc-600">Google rating from local patients and families.</p>
              <Link className="mt-3 inline-flex font-sans font-black text-[#E8177A]" href={clinic.mapsHref}>
                Read on Google Maps
              </Link>
            </article>
            <article className={`${cardClass} p-6`}>
              <h3 className="mb-2 font-sans text-lg font-black text-zinc-950">Professional and helpful</h3>
              <p className="leading-7 text-zinc-600">
                Diagnosis, prognosis and treatment by Dr. Niyukty is
                commendable. The professionalism of the entire team,
                cleanliness and ambience of the clinic impressive.
              </p>
            </article>
            <article className={`${cardClass} p-6`}>
              <h3 className="mb-2 font-sans text-lg font-black text-zinc-950">Kind and gentle</h3>
              <p className="leading-7 text-zinc-600">
                I went for teeth cleaning. Dr. Niyukty Arjal was very kind and
                gentle. The clinic was clean and nice. My teeth feel fresh and
                shiny now.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={`${container} max-w-4xl`}>
          <SectionHeader
            eyebrow="Common questions"
            title="Frequently asked questions"
            center
          />
          <FAQList
            items={[
              {
                question: "Where is Gums & Giggles Dental Clinic located?",
                answer:
                  "We are located at Dhobidhara Marg, Kathmandu 44600, Nepal, with easy access from Lazimpat, Naxal, Baluwatar, Maharajgunj, and Thamel.",
              },
              {
                question: "Do you provide emergency dental care?",
                answer:
                  "Yes. Call +977 984-1243430 for toothache, swelling, broken teeth, abscesses, and urgent dental concerns.",
              },
              {
                question: "How much do dental implants cost in Kathmandu?",
                answer:
                  "Dental implants at Gums & Giggles start from NPR 100,000. Final pricing depends on bone support, crown material, and supporting treatment needs.",
              },
              {
                question: "How much do braces cost?",
                answer:
                  "Braces start from NPR 70,000. The exact quote depends on braces type and case complexity.",
              },
            ]}
          />
        </div>
      </section>

      <LocationSection />
      <CTASection
        title="Ready to smile with confidence?"
        text="Book your appointment with Gums & Giggles and get clear, specialist-led dental care in Kathmandu."
      />
    </>
  );
}
