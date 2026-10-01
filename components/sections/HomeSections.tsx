import Image from "next/image";
import Link from "next/link";
import { featuredServices } from "@/data/services";
import { ButtonLink } from "../ui/ButtonLink";
import { CardsGrid } from "../ui/CardsGrid";
import { FAQList } from "../ui/FAQList";
import { HeroHighlights } from "../ui/HeroHighlights";
import { SectionHeader } from "../ui/SectionHeader";
import { ServiceCard } from "../ui/ServiceCard";
import { StatStrip } from "../ui/StatStrip";
import { ClinicGallery } from "./ClinicGallery";
import {
  actionRowClass,
  cardClass,
  clinic,
  container,
  eyebrowClass,
  h2Class,
  imagePanelClass,
  leadClass,
  section,
  sectionAlt,
  sectionPink,
  splitGridClass,
} from "../constants";
import { CTASection } from "./CTASection";
import { LocationSection } from "./LocationSection";
import { PageHero } from "./PageHero";

const patientReviews = [
  {
    name: "Promod Jossy",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJO1_Yuj4zUeACAZJZgXmOuU6JJYi6Wsbolz4FpnpYx1SiVcg=s64-c-rp-mo-br100",
    review:
      "If one has dental issues, be sure to visit Gums and Giggles and meet Dr Niyukty, a highly professionally skilled, helpful and pleasant personality. Diagnosis, prognosis and treatment by Dr Niyukti is commendable. The professionalism of the entire team, cleanliness and ambience of the clinic impressive. Charges are very reasonable.",
  },
  {
    name: "Khem Gurung",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVw-Asm7s1UD27Gz7RLIESdyYeOGn_-R4FcJwSdQTcsj0dKJkij=s64-c-rp-mo-br100",
    review:
      "I went to Gums and Giggles Dental Clinic for teeth cleaning. Dr. Niyukty Arjal was very kind and gentle. The clinic was clean and nice. My teeth feel fresh and shiny now. I had a good time and will visit again.",
  },
  {
    name: "Akash Shakya",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWdzapMj7SIRJPe0S9wQT4eQQSYc14NctUnVFm3egApK39HdDVE=s64-c-rp-mo-br100",
    review:
      "Dr. Niyukty is truly an amazing, her hands have such amazing skills, my treatment process was so smooth, i didn't feel any pain and even before the procedure she made me feel really comfortable",
  },
];

const gumCareConcerns = [
  {
    title: "Bleeding gums",
    text: "Gums that repeatedly bleed while brushing or flossing may be inflamed and should be assessed.",
    href: "/services/gum-care-and-periodontics",
    linkLabel: "Bleeding gums & gingivitis",
    image: "/images/gum-care/bleeding-gums.png",
    imageAlt: "Close-up of mild bleeding gums while brushing",
  },
  {
    title: "Red, puffy or swollen gums",
    text: "Swelling and tenderness can develop with gingivitis or more advanced periodontal inflammation.",
    href: "/services/gum-care-and-periodontics",
    linkLabel: "Explore gum care",
    image: "/images/gum-care/swollen-gums.png",
    imageAlt: "Close-up of red and swollen gums around front teeth",
  },
  {
    title: "Persistent bad breath",
    text: "If bad breath continues despite normal oral hygiene, gum inflammation or deeper pockets may need to be ruled out.",
    href: clinic.appointmentHref,
    linkLabel: "Book a gum assessment",
    image: "/images/gum-care/bad-breath.png",
    imageAlt: "Patient concerned about persistent bad breath",
  },
  {
    title: "Receding gums",
    text: "Teeth appearing longer or roots becoming sensitive may be signs of gum recession.",
    href: "/services/gum-care-and-periodontics",
    linkLabel: "Gum recession treatment",
    image: "/images/gum-care/receding-gums.png",
    imageAlt: "Close-up of gum recession around front teeth",
  },
  {
    title: "Loose or shifting teeth",
    text: "Loss of periodontal support is one possible cause of adult teeth becoming mobile or changing position.",
    href: "/services/gum-care-and-periodontics",
    linkLabel: "Gum disease treatment",
    image: "/images/gum-care/loose-teeth.png",
    imageAlt: "Close-up of front teeth with subtle spacing and shifting",
  },
  {
    title: "Been told you need deep cleaning?",
    text: "Scaling and root planing works below the gumline when routine cleaning is not enough.",
    href: "/services/teeth-cleaning-and-scaling",
    linkLabel: "Deep cleaning & root planing",
    image: "/images/gum-care/deep-cleaning.png",
    imageAlt: "Dental deep cleaning near the gumline",
  },
];

export function HomeHero() {
  return (
    <PageHero
      eyebrow="Dental clinic in Kathmandu"
      title="Specialist-led dental care for confident smiles"
      lead="Gums & Giggles is a modern dental clinic on Dhobidhara Marg, led by MDS Periodontist Dr. Niyukty Arjal. From routine cleaning to braces, implants, crowns, root canal treatment, and gum care, your treatment is planned clearly from the start."
      image="/clinic_photos/doctor_photo_with_a_child_patient.webp"
      imageAlt="Dr. Niyukty Arjal with a child patient at Gums and Giggles Dental Clinic"
      backgroundClassName="bg-[linear-gradient(115deg,rgba(255,255,255,0.52),rgba(255,240,247,0.42)),url('/clinic_photos/clinics_building_image_from_outside.webp')]"
    >
      <HeroHighlights
        items={[
          "4.5+ rated by Kathmandu patients",
          "MDS Periodontist-led diagnosis and treatment planning",
          "Open Sunday to Friday, 10 AM to 7 PM",
        ]}
      />
    </PageHero>
  );
}

export function HomeStats() {
  return (
    <StatStrip
      stats={[
        { value: "4.5+", label: "Google rating" },
        { value: "MDS", label: "Specialist dentist" },
        { value: "8+", label: "Dental services" },
        { value: "6", label: "Days open weekly" },
      ]}
    />
  );
}

export function GumCareFocusSection() {
  return (
    <section className="bg-white py-8 md:py-10">
      <div className={container}>
        <div className="mb-5 flex flex-col gap-3 md:mb-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className={eyebrowClass}>Concerned about your gums?</p>
            <h2 className="font-sans text-2xl font-black leading-tight text-zinc-950 md:text-3xl">
              Start with what you are noticing
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 md:text-base">
              You do not need to know the diagnosis before booking. Your
              symptoms help us decide what kind of assessment you need.
            </p>
          </div>
          <Link
            className="inline-flex shrink-0 font-sans text-sm font-black text-[#E8177A] hover:text-[#c4115f]"
            href="/services/gum-care-and-periodontics"
          >
            Explore all gum care →
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {gumCareConcerns.map((concern) => (
            <article
              className={`${cardClass} group overflow-hidden transition duration-300 hover:-translate-y-0.5 hover:border-pink-200 hover:shadow-[0_14px_30px_rgba(232,23,122,0.1)]`}
              key={concern.title}
            >
              <div className="relative h-36 overflow-hidden bg-pink-50 md:h-28">
                <Image
                  className="object-cover transition duration-500 group-hover:scale-105"
                  src={concern.image}
                  alt={concern.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-sans text-base font-black leading-tight text-zinc-950">
                  {concern.title}
                </h3>
                <p className="mt-2 overflow-hidden text-sm leading-6 text-zinc-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                  {concern.text}
                </p>
                <Link
                  className="mt-2.5 inline-flex font-sans text-sm font-black text-[#E8177A] hover:text-[#c4115f]"
                  href={concern.href}
                >
                  {concern.linkLabel} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedServicesSection() {
  return (
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
  );
}

export function PatientBenefitsSection() {
  return (
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
  );
}

export function DoctorIntroSection() {
  return (
    <section className={sectionPink}>
      <div className={`${container} grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]`}>
        <div className={imagePanelClass}>
          <Image
            className="object-cover"
            src="/images/doctors_image.webp"
            alt="Reception area at Gums and Giggles Dental Clinic"
            fill
            sizes="(max-width: 900px) 100vw, 44vw"
          />
        </div>
        <div>
          <p className="mb-2.5 text-xs font-black uppercase tracking-[0.1em] text-[#E8177A]">Meet your doctor</p>
          <h2 className={h2Class}>Dr. Niyukty Arjal</h2>
          <p className={leadClass}>
            MDS Periodontist and lead dentist at Gums & Giggles Dental Clinic.
            Her approach is straightforward: honest advice, gentle treatment,
            and outcomes designed to last.
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
  );
}

export function ClinicOverviewSection() {
  return (
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
  );
}

export function PatientReviewsSection() {
  return (
    <section className={sectionAlt}>
      <div className={container}>
        <SectionHeader
          eyebrow="Patient reviews"
          title="What our patients say"
          lead="Patients consistently mention the caring team, clean clinic, and comfortable treatment experience."
          center
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[0.7fr_1fr_1fr_1fr]">
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
          {patientReviews.map((review) => (
            <article className={`${cardClass} p-6`} key={review.name}>
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    className="size-12 rounded-full object-cover"
                    src={review.avatar}
                    alt={`${review.name} profile photo`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <h3 className="font-sans text-base font-black leading-tight text-zinc-950">
                    {review.name}
                  </h3>
                </div>
                <div className="shrink-0 tracking-widest text-[#c69214]" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <p className="leading-7 text-zinc-600">&ldquo;{review.review}&rdquo;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFAQSection() {
  return (
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
              question: "How much do dental implants cost in Kathmandu?",
              answer:
                "Dental implants at Gums & Giggles start from NPR 100,000. Final pricing depends on bone support, crown material, and supporting treatment needs.",
            },
            {
              question: "How much do braces cost?",
              answer:
                "Braces start from NPR 70,000. The exact quote depends on braces type and case complexity.",
            },
            {
              question: "What type of dentist treats gum disease?",
              answer:
                "A periodontist is a dentist with postgraduate specialist training focused on the gums, supporting bone and tissues around the teeth and dental implants. Gums & Giggles is led by Dr. Niyukty Arjal, MDS Periodontist.",
            },
            {
              question: "Should I see a periodontist if my gums bleed?",
              answer:
                "Repeated bleeding during brushing or flossing can be a sign of gum inflammation. A professional examination can help determine whether the cause is gingivitis, tartar buildup, or a deeper periodontal problem.",
            },
            {
              question: "Can gingivitis be treated?",
              answer:
                "Gingivitis is an early stage of gum inflammation where supporting bone has not yet been lost. Professional cleaning and improved daily plaque control can often restore healthier gums.",
            },
            {
              question: "Can gum disease cause bad breath?",
              answer:
                "Yes, gum inflammation and periodontal pockets can contribute to persistent bad breath because bacteria can accumulate around and below the gumline. Bad breath can also have other causes, so a proper examination is important.",
            },
            {
              question: "Why are my gums receding?",
              answer:
                "Gum recession can develop because of periodontal disease, aggressive brushing, thin gum tissue, tooth position, or other local factors. Treatment depends on identifying the cause first.",
            },
            {
              question: "Why do my teeth feel loose?",
              answer:
                "Loss of supporting bone from periodontal disease is one possible cause of loose teeth. Other dental conditions can also contribute, so loose adult teeth should be examined professionally.",
            },
            {
              question: "Do I need a referral to see Dr. Niyukty?",
              answer:
                "No. Patients can book directly for a periodontal consultation.",
            },
            {
              question: "How much does gum treatment cost in Kathmandu?",
              answer:
                "The cost depends on the condition and how much treatment is needed. Routine scaling and polishing starts from NPR 2,000. Deep cleaning, gum recession treatment, and periodontal surgery are quoted after examination.",
            },
            {
              question: "How often should someone with gum disease visit the dentist?",
              answer:
                "Patients with a history of periodontal disease may need more frequent maintenance than patients with healthy gums. The recommended interval depends on the current condition of the gums and the patient's risk factors.",
            },
          ]}
        />
      </div>
    </section>
  );
}

export function HomeClosingSections() {
  return (
    <>
      <LocationSection />
      <CTASection
        title="Ready to smile with confidence?"
        text="Book your appointment with Gums & Giggles and get clear, specialist-led dental care in Kathmandu."
      />
    </>
  );
}
