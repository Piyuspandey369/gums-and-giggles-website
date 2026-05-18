import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  services,
  type CardItem,
  type FAQItem,
  type Service,
} from "@/data/services";

export const clinic = {
  phone: "+977 984-1243430",
  phoneHref: "tel:+9779841243430",
  email: "mail@gumsandgiggles.com",
  emailHref: "mailto:mail@gumsandgiggles.com",
  address: "Dhobidhara Marg, Kathmandu 44600, Nepal",
  hours: "Sunday to Friday, 10 AM to 7 PM",
  appointmentHref: "/appointment",
  mapsHref: "https://maps.app.goo.gl/ff5JWHjBLUdsBLij8",
};

export const container = "mx-auto w-full max-w-6xl px-4 sm:px-5";
export const section = "py-14 md:py-20";
export const sectionAlt = `${section} bg-stone-50`;
export const sectionPink = `${section} bg-pink-50`;
export const eyebrowClass =
  "mb-2.5 text-xs font-black uppercase tracking-[0.1em] text-[#E8177A]";
export const h2Class =
  "font-sans text-3xl font-black leading-tight text-zinc-950 md:text-4xl";
export const leadClass = "mt-3 text-base leading-8 text-zinc-600 md:text-lg";
export const actionRowClass = "mt-7 flex flex-wrap gap-3";
export const splitGridClass =
  "grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]";
export const imagePanelClass =
  "relative min-h-80 overflow-hidden rounded-[1.75rem] bg-pink-50 shadow-[0_18px_50px_rgba(17,17,17,0.09)] md:min-h-[420px]";
export const cardClass =
  "rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_8px_24px_rgba(17,17,17,0.06)]";

function externalHref(href: string) {
  return (
    href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const className = [
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-black leading-none transition hover:-translate-y-0.5",
    variant === "primary"
      ? "bg-[#E8177A] text-white shadow-[0_12px_28px_rgba(232,23,122,0.22)] hover:bg-[#c4115f]"
      : variant === "light"
        ? "bg-white text-[#E8177A] hover:bg-pink-50"
        : "border-2 border-pink-200 bg-white text-[#E8177A] hover:border-[#E8177A]",
  ].join(" ");

  if (externalHref(href)) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      className="inline-flex min-w-0 items-center gap-3"
      href="/"
      aria-label="Gums and Giggles home"
    >
      <Image
        className="h-11 w-11 rounded-2xl bg-white object-contain shadow-[0_10px_26px_rgba(232,23,122,0.18)]"
        src="/logo_.png"
        alt=""
        width={44}
        height={44}
        priority={!footer}
      />
      <span>
        <strong
          className={`block font-sans text-lg font-black leading-tight ${
            footer ? "text-white" : "text-zinc-950"
          }`}
        >
          Gums &amp; Giggles
        </strong>
        <small
          className={`mt-0.5 block text-xs leading-tight max-sm:hidden ${
            footer ? "text-white/65" : "text-zinc-500"
          }`}
        >
          {footer ? "Khulera Hasau, Majja Ley Hassau" : "Dental Clinic Kathmandu"}
        </small>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-pink-100 bg-white/90 backdrop-blur-xl">
      <div className="hidden bg-zinc-950 text-sm text-white/75 sm:block">
        <div className={`${container} flex min-h-8 items-center justify-between gap-5`}>
          <div>
            <a className="hover:text-[#E8177A]" href={clinic.phoneHref}>
              {clinic.phone}
            </a>
            <span className="mx-2.5 opacity-40">/</span>
            <span>{clinic.hours}</span>
          </div>
          <div className="hidden gap-5 lg:flex">
            <span>{clinic.address}</span>
            <a className="hover:text-[#E8177A]" href={clinic.emailHref}>
              {clinic.email}
            </a>
          </div>
        </div>
      </div>
      <div className={`${container} flex min-h-[4.5rem] items-center justify-between gap-5`}>
        <Brand />
        <nav
          className="flex items-center gap-3 text-sm font-black text-zinc-800 sm:gap-5"
          aria-label="Main navigation"
        >
          <Link className="hover:text-[#E8177A]" href="/">
            Home
          </Link>
          <Link className="hidden hover:text-[#E8177A] sm:inline" href="/about-us">
            About
          </Link>
          <Link className="hover:text-[#E8177A]" href="/services">
            Services
          </Link>
          <a className="hover:text-[#E8177A]" href={clinic.phoneHref}>
            Call
          </a>
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href={clinic.appointmentHref}>Book Appointment</ButtonLink>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-14 text-white/75">
      <div className={`${container} grid gap-9 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]`}>
        <div>
          <Brand footer />
          <p className="mt-5 max-w-md">
            Specialist-led dental care in Kathmandu, built around clear
            communication, comfort, and long-term oral health.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-sans font-black text-white">Services</h3>
          <ul className="grid gap-2">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  className="hover:text-[#E8177A]"
                  href={`/services/${service.slug}`}
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-sans font-black text-white">Visit</h3>
          <ul className="grid gap-2">
            <li>{clinic.address}</li>
            <li>
              <a className="hover:text-[#E8177A]" href={clinic.phoneHref}>
                {clinic.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-[#E8177A]" href={clinic.emailHref}>
                {clinic.email}
              </a>
            </li>
            <li>{clinic.hours}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-9 max-w-3xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <p className={eyebrowClass}>{eyebrow}</p> : null}
      <h2 className={h2Class}>{title}</h2>
      {lead ? <p className={leadClass}>{lead}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  return (
    <section className="overflow-hidden bg-[linear-gradient(115deg,rgba(255,255,255,0.94),rgba(255,240,247,0.84)),url('/clinic_photos/clinics_building_image_from_outside.webp')] bg-cover bg-center py-9 md:py-16">
      <div className={`${container} grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)]`}>
        <div className="rounded-[1.875rem] border border-white/70 bg-white/90 p-6 shadow-[0_28px_70px_rgba(96,30,56,0.12)] backdrop-blur-xl md:p-9">
          <p className={eyebrowClass}>{eyebrow}</p>
          <h1 className="max-w-3xl font-sans text-4xl font-black leading-tight text-zinc-950 md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-8 text-zinc-600 md:text-lg">
            {lead}
          </p>
          <div className={actionRowClass}>
            <ButtonLink href={clinic.appointmentHref}>Book a Consultation</ButtonLink>
            <ButtonLink href={clinic.phoneHref} variant="secondary">
              Call {clinic.phone}
            </ButtonLink>
          </div>
          {children}
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-[2rem] border-8 border-white/90 bg-pink-50 shadow-[0_18px_50px_rgba(17,17,17,0.09)] md:min-h-[520px]">
          <Image
            className="object-cover"
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
      </div>
    </section>
  );
}

export function HeroHighlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 grid gap-2.5">
      {items.map((item) => (
        <li className="relative pl-7 text-zinc-800 before:absolute before:left-0 before:text-[#E8177A] before:content-['✓']" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function StatStrip({
  stats,
}: {
  stats: {
    value: string;
    label: string;
  }[];
}) {
  return (
    <section className="bg-[#E8177A] text-white" aria-label="Clinic highlights">
      <div className={`${container} grid gap-5 py-7 text-center sm:grid-cols-2 lg:grid-cols-4`}>
        {stats.map((stat) => (
          <div key={`${stat.value}-${stat.label}`}>
            <strong className="block font-sans text-3xl font-black leading-none md:text-4xl">
              {stat.value}
            </strong>
            <span className="mt-1 block text-sm text-white/85">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={`${cardClass} grid grid-cols-[3.375rem_minmax(0,1fr)] gap-4 p-5 md:p-6`}>
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-pink-50 font-sans text-2xl font-black text-[#E8177A]">
        {service.navTitle.slice(0, 1)}
      </div>
      <div>
        <h3 className="mb-2 font-sans text-lg font-black leading-snug text-zinc-950">
          {service.shortTitle}
        </h3>
        <p className="text-sm leading-6 text-zinc-600">{service.summary}</p>
        <p className="mt-2.5 text-sm font-black text-[#c69214]">
          {service.price}
        </p>
        <Link
          href={`/services/${service.slug}`}
          className="mt-3 inline-flex font-sans text-sm font-black text-[#E8177A] hover:text-[#c4115f]"
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}

export function CardsGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article className={`${cardClass} p-6`} key={item.title}>
          <h3 className="mb-2 font-sans text-lg font-black leading-snug text-zinc-950">
            {item.title}
          </h3>
          <p className="leading-7 text-zinc-600">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function ProcessSteps({ steps }: { steps: CardItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, index) => (
        <article className={`${cardClass} p-6`} key={step.title}>
          <span className="mb-4 inline-flex font-sans text-sm font-black text-[#E8177A]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mb-2 font-sans text-lg font-black leading-snug text-zinc-950">
            {step.title}
          </h3>
          <p className="leading-7 text-zinc-600">{step.text}</p>
        </article>
      ))}
    </div>
  );
}

export function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details
          key={item.question}
          className={`${cardClass} overflow-hidden open:border-pink-200`}
        >
          <summary className="cursor-pointer px-5 py-4 font-sans font-black text-zinc-950">
            {item.question}
          </summary>
          <p className="px-5 pb-5 leading-7 text-zinc-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function ClinicGallery() {
  const images = [
    {
      src: "/clinic_photos/clinics_building_image_from_outside.webp",
      alt: "Exterior of Gums and Giggles Dental Clinic in Kathmandu",
      caption: "Dhobidhara Marg location",
    },
    {
      src: "/clinic_photos/clinics_counter_image.webp",
      alt: "Reception area at Gums and Giggles Dental Clinic",
      caption: "Welcoming reception",
    },
    {
      src: "/clinic_photos/doctor_photo_with_a_child_patient.webp",
      alt: "Doctor with child patient at Gums and Giggles",
      caption: "Gentle family care",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {images.map((image) => (
        <figure
          className="relative min-h-72 overflow-hidden rounded-[1.25rem] bg-pink-50 shadow-[0_8px_24px_rgba(17,17,17,0.06)]"
          key={image.src}
        >
          <Image
            className="object-cover transition duration-500 hover:scale-105"
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/75 to-transparent px-5 pb-4 pt-12 font-sans font-black text-white">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function LocationSection() {
  return (
    <section className={sectionAlt}>
      <div className={container}>
        <SectionHeader
          eyebrow="Find us"
          title="Visit our clinic in Kathmandu"
          lead="Conveniently located on Dhobidhara Marg, minutes from Lazimpat, Maharajgunj, Naxal, Baluwatar, and Thamel."
          center
        />
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)]">
          <div className={`${cardClass} p-7`}>
            <h3 className="font-sans text-xl font-black text-zinc-950">
              Clinic information
            </h3>
            <dl className="my-5 grid gap-4">
              {[
                ["Address", clinic.address],
                ["Phone", clinic.phone],
                ["Email", clinic.email],
                ["Hours", clinic.hours],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="font-sans font-black text-zinc-950">{label}</dt>
                  <dd className="mt-1 text-zinc-600">
                    {label === "Phone" ? (
                      <a className="hover:text-[#E8177A]" href={clinic.phoneHref}>
                        {value}
                      </a>
                    ) : label === "Email" ? (
                      <a className="hover:text-[#E8177A]" href={clinic.emailHref}>
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <ButtonLink href={clinic.mapsHref} variant="secondary">
              Open Google Maps
            </ButtonLink>
          </div>
          <div className="overflow-hidden rounded-[1.25rem] bg-pink-50 shadow-[0_8px_24px_rgba(17,17,17,0.06)]">
            <iframe
              className="block min-h-[430px] w-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2698574990654!2d85.32186351100181!3d27.708953125321475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f184587513%3A0x2906ce17aa1ffb54!2sGums%20%26%20Giggles%20Dental%20Clinic!5e0!3m2!1sen!2snp!4v1774260384407!5m2!1sen!2snp"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gums and Giggles Dental Clinic location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTASection({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className="bg-[#E8177A] py-16 text-white md:py-20">
      <div className={`${container} text-center`}>
        <h2 className="font-sans text-3xl font-black leading-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
          {text}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <ButtonLink href={clinic.appointmentHref} variant="light">
            Book an Appointment
          </ButtonLink>
          <ButtonLink href={clinic.phoneHref} variant="secondary">
            Call {clinic.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function ImageShowcase({
  images,
}: {
  images: NonNullable<Service["extraImages"]>;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {images.map((image) => (
        <figure className={`${cardClass} overflow-hidden`} key={image.src}>
          <div className="relative min-h-64 bg-pink-50 md:min-h-96">
            <Image
              className="object-cover"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <figcaption className="p-5 font-semibold leading-7 text-zinc-600">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function CheckGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <li className="relative pl-7 text-zinc-800 before:absolute before:left-0 before:text-[#E8177A] before:content-['✓']" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

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
