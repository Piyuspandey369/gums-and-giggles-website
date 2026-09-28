import type { Metadata } from "next";
import Image from "next/image";
import {
  JsonLd,
  breadcrumbSchema,
  doctorSchema,
  ButtonLink,
  CTASection,
  CardsGrid,
  FAQList,
  LocationSection,
  PageHero,
  SectionHeader,
  actionRowClass,
  cardClass,
  clinic,
  container,
  eyebrowClass,
  h2Class,
  leadClass,
  section,
  sectionAlt,
  sectionPink,
  splitGridClass,
} from "@/components";

export const metadata: Metadata = {
  title: "Dr. Niyukty Arjal, MDS Periodontist",
  description:
    "Dr. Niyukty Arjal is an MDS Periodontist and lead dentist at Gums & Giggles Dental Clinic, Dhobidhara Marg, Kathmandu, treating gum disease, recession, and implant foundations.",
  alternates: { canonical: "/about-us/dr-niyukty-arjal" },
};

// TODO (client): confirm and add MDS institution and graduation year, NMC
// registration number, professional memberships, and any published work.
// These belong in the Qualifications card below and raise patient trust.

export default function DoctorPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "About", path: "/about-us" },
          { name: "Dr. Niyukty Arjal", path: "/about-us/dr-niyukty-arjal" },
        ])}
      />
      <JsonLd data={doctorSchema()} />
      <PageHero
        eyebrow="Meet your dentist"
        title="Dr. Niyukty Arjal"
        lead="MDS Periodontist and lead doctor at Gums & Giggles. A specialist in the gums, bone and tissue that hold teeth in place, and in the treatments that keep them there."
        image="/clinic_photos/doctor_photo_with_a_adult_male_patient.webp"
        imageAlt="Dr. Niyukty Arjal consulting with a patient at Gums and Giggles Dental Clinic"
      />

      <section className={section}>
        <div className={`${container} ${splitGridClass}`}>
          <div>
            <SectionHeader
              eyebrow="Background"
              title="A periodontist leading a general practice"
              lead="Most dental clinics are led by a general dentist who refers the difficult gum cases elsewhere. Here, the specialist is the person you see first."
            />
            <div className="grid max-w-3xl gap-4 leading-8 text-zinc-600">
              <p>
                Dr. Arjal completed an MDS in Periodontics, the specialist
                postgraduate degree in the treatment of gums, supporting bone
                and the tissue around dental implants. It follows a full dental
                degree and adds three years of training focused entirely on
                periodontal diagnosis, non-surgical therapy and surgery.
              </p>
              <p>
                That training shapes how the whole clinic works. Gum charting
                is done properly, with measurements recorded around every
                tooth. Disease is staged before treatment is recommended.
                Implant cases are planned from the foundation upward, because
                an implant is only as stable as the bone and gum it sits in.
              </p>
              <p>
                Her patients at Dhobidhara Marg range from children having
                their first check-up to adults managing long-standing gum
                disease. The approach stays the same across both: explain what
                is happening in plain language, show the evidence, and let the
                patient decide with the facts in front of them.
              </p>
            </div>
            <div className={actionRowClass}>
              <ButtonLink href={clinic.appointmentHref}>
                Book a consultation
              </ButtonLink>
              <ButtonLink href="/gum-care" variant="secondary">
                See gum treatments
              </ButtonLink>
            </div>
          </div>
          <aside className={`${cardClass} p-7`} id="qualifications">
            <p className={eyebrowClass}>Qualifications</p>
            <h2 className="mb-4 font-sans text-2xl font-black leading-tight text-zinc-950">
              Specialist credentials
            </h2>
            <ul className="grid gap-2.5">
              {[
                "MDS in Periodontics",
                "Lead dentist, Gums & Giggles Dental Clinic",
                "Special interest in gum disease and implant foundations",
                "Periodontal surgery, including grafting and crown lengthening",
                "Consultations for children, adults and families",
              ].map((item) => (
                <li
                  className="rounded-2xl bg-pink-100 px-4 py-3 font-bold text-zinc-800"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={container}>
          <SectionHeader
            eyebrow="Areas of focus"
            title="What Dr. Arjal treats"
            lead="Specialist gum work sits alongside the everyday dentistry a family clinic needs."
            center
          />
          <CardsGrid
            items={[
              {
                title: "Gum disease, all stages",
                text: "From gingivitis through advanced periodontitis, staged by charting and X-ray, then treated non-surgically or surgically as needed.",
              },
              {
                title: "Gum recession",
                text: "Identifying why the gum is receding, stopping the progression, and grafting to cover exposed roots where the site is suitable.",
              },
              {
                title: "Deep cleaning and root planing",
                text: "Non-surgical periodontal therapy under local anaesthetic, with before and after charting so results are measured.",
              },
              {
                title: "Periodontal surgery",
                text: "Flap surgery, gingivectomy, crown lengthening and soft tissue grafting, performed in a sterile clinical setting.",
              },
              {
                title: "Implant foundations",
                text: "Assessing bone and gum support before implant placement, which is what determines whether an implant lasts.",
              },
              {
                title: "Preventive care",
                text: "Routine examinations, professional cleaning, and setting the right recall interval for each patient's actual risk.",
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
              src="/clinic_photos/doctor_photo_with_a_child_patient.webp"
              alt="Dr. Niyukty Arjal treating a child patient"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
          <div>
            <p className={eyebrowClass}>How she works</p>
            <h2 className={h2Class}>Explain first, treat second</h2>
            <p className={leadClass}>
              Patients are shown what the examination found before any
              treatment is proposed: the chart, the X-ray, the specific teeth
              involved. Options are laid out with what each costs, what it
              achieves, and what happens if you wait. Nobody is asked to agree
              to treatment they do not understand.
            </p>
            <p className="mt-4 leading-8 text-zinc-600">
              For anxious patients and for children, that same clarity is the
              method: nothing happens without warning, and the pace is set by
              the person in the chair.
            </p>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={`${container} max-w-4xl`}>
          <SectionHeader
            eyebrow="Common questions"
            title="About seeing a specialist"
            center
          />
          <FAQList
            items={[
              {
                question: "What does MDS Periodontist mean?",
                answer:
                  "MDS stands for Master of Dental Surgery. A periodontist is a dentist who has completed that postgraduate specialisation in periodontics, the branch of dentistry dealing with gums, supporting bone, and the tissues around implants. It is a further three years of training after the dental degree.",
              },
              {
                question: "Do I need a referral to book with Dr. Arjal?",
                answer:
                  "No. You can book directly. If another dentist has examined you already, bring any X-rays or charts with you so we can compare rather than repeat.",
              },
              {
                question: "Does she only treat gum problems?",
                answer:
                  "No. Gums & Giggles is a general dental clinic offering cleaning, fillings, root canal treatment, crowns, braces and extractions. The specialist training means gum cases and implant planning are handled in-house rather than referred elsewhere.",
              },
              {
                question: "Does she see children?",
                answer:
                  "Yes. The clinic treats children and families, with a deliberately gentle approach to first visits so early experiences of the dentist stay positive.",
              },
            ]}
          />
        </div>
      </section>

      <LocationSection />
      <CTASection
        title="Book a consultation with Dr. Arjal"
        text="Specialist examination, clear explanation, and a written estimate before treatment begins."
      />
    </>
  );
}
