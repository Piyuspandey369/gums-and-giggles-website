import type { Metadata } from "next";
import {
  JsonLd,
  breadcrumbSchema,
  ButtonLink,
  CTASection,
  CardsGrid,
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
  splitGridClass,
} from "@/components";

export const metadata: Metadata = {
  title: "Contact Gums & Giggles Dental Clinic",
  description:
    "Contact Gums & Giggles Dental Clinic on Dhobidhara Marg, Kathmandu. Phone, email, clinic hours, directions, and what to do in a dental emergency.",
  alternates: { canonical: "/contact" },
};

const directions = [
  {
    title: "From Lazimpat",
    text: "About 10 minutes by taxi. Head towards Naxal, then down to Dhobidhara Marg. The clinic sign is visible from the road.",
  },
  {
    title: "From Maharajgunj or Baluwatar",
    text: "15 to 20 minutes depending on traffic, via Naxal. Ask for Dhobidhara, which most drivers know by name.",
  },
  {
    title: "From Thamel or New Road",
    text: "Roughly 10 to 15 minutes. Dhobidhara Marg runs between Dillibazar and Putalisadak, easy to reach from the centre.",
  },
  {
    title: "From Boudha or Chabahil",
    text: "20 to 30 minutes in normal traffic. The Google Maps pin below is the most reliable way to guide a driver.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <PageHero
        eyebrow="Contact us"
        title="Talk to the clinic"
        lead="Call for appointments and dental pain, email for treatment questions and records, or come to the clinic on Dhobidhara Marg. We are open Sunday to Friday."
        image="/clinic_photos/clinics_counter_image.webp"
        imageAlt="Reception desk at Gums and Giggles Dental Clinic"
      />

      <section className={section}>
        <div className={`${container} ${splitGridClass}`}>
          <div>
            <p className={eyebrowClass}>Fastest route</p>
            <h2 className={h2Class}>Call the clinic</h2>
            <p className={leadClass}>
              Phone is quickest for appointments, dental pain, swelling, a
              broken tooth, or a question about what a treatment will cost. If
              the line is busy during clinic hours, we will call back.
            </p>
            <div className={`${cardClass} mt-7 grid gap-4 p-7`}>
              <div>
                <p className="font-sans font-black text-zinc-950">Phone</p>
                <a
                  className="text-lg leading-8 text-zinc-600 hover:text-[#E8177A]"
                  href={clinic.phoneHref}
                >
                  {clinic.phone}
                </a>
              </div>
              <div>
                <p className="font-sans font-black text-zinc-950">Email</p>
                <a
                  className="leading-8 text-zinc-600 hover:text-[#E8177A]"
                  href={clinic.emailHref}
                >
                  {clinic.email}
                </a>
              </div>
              <div>
                <p className="font-sans font-black text-zinc-950">Address</p>
                <p className="leading-8 text-zinc-600">{clinic.address}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={clinic.phoneHref}>Call now</ButtonLink>
                <ButtonLink href={clinic.mapsHref} variant="secondary">
                  Get directions
                </ButtonLink>
              </div>
            </div>
          </div>
          <aside className={`${cardClass} p-7`}>
            <p className={eyebrowClass}>Opening hours</p>
            <h2 className="mb-4 font-sans text-2xl font-black leading-tight text-[#c69214]">
              {clinic.hours}
            </h2>
            <dl className="grid gap-3">
              {[
                ["Sunday to Friday", "10:00 AM - 7:00 PM"],
                ["Saturday", "Closed"],
                ["Public holidays", "Closed, call to confirm"],
              ].map(([day, hours]) => (
                <div
                  className="flex flex-wrap justify-between gap-3 border-b border-zinc-200 pb-3 last:border-0 last:pb-0"
                  key={day}
                >
                  <dt className="font-sans font-black text-zinc-950">{day}</dt>
                  <dd className="text-zinc-600">{hours}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 leading-7 text-zinc-600">
              Appointments are preferred so you are seen at a set time. Walk-in
              patients are accommodated where the schedule allows.
            </p>
          </aside>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={container}>
          <SectionHeader
            eyebrow="Getting here"
            title="Finding us on Dhobidhara Marg"
            lead="We are in central Kathmandu, between Dillibazar and Putalisadak, with easy access from most of the ring road neighbourhoods."
            center
          />
          <CardsGrid items={directions} />
        </div>
      </section>

      <section className={section}>
        <div className={`${container} max-w-4xl`}>
          <SectionHeader
            eyebrow="Dental emergency"
            title="In pain right now?"
            lead="Call the clinic first. Describing the problem on the phone lets us tell you what to do immediately and fit you in sooner."
            center
          />
          <div className={`${cardClass} grid gap-4 p-7`}>
            <p className="leading-8 text-zinc-600">
              <strong className="font-black text-zinc-950">
                Severe toothache:
              </strong>{" "}
              take the pain relief you would normally take, avoid very hot and
              very cold food, and call us. Do not place aspirin against the gum,
              which burns the tissue.
            </p>
            <p className="leading-8 text-zinc-600">
              <strong className="font-black text-zinc-950">
                Facial swelling:
              </strong>{" "}
              this needs same-day attention. Call immediately. Swelling that is
              spreading towards the eye or under the jaw, or difficulty
              swallowing or breathing, is a hospital emergency, not a clinic
              one.
            </p>
            <p className="leading-8 text-zinc-600">
              <strong className="font-black text-zinc-950">
                Knocked-out adult tooth:
              </strong>{" "}
              hold it by the crown, not the root. If it is dirty, rinse briefly
              with milk or saline. Keep it in milk or inside the cheek and get
              to us within the hour. Time matters more than anything else here.
            </p>
            <p className="leading-8 text-zinc-600">
              <strong className="font-black text-zinc-950">
                Broken tooth or lost crown:
              </strong>{" "}
              keep the pieces, avoid chewing on that side, and call us for the
              next available slot.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <ButtonLink href={clinic.phoneHref}>
                Call {clinic.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <LocationSection />
      <CTASection
        title="Book a visit at a time that suits you"
        text="Tell us what is bothering you and we will arrange the right length of appointment with the right clinician."
      />
    </>
  );
}
