import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { services, type CardItem, type FAQItem, type Service } from "@/data/services";

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

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const className =
    variant === "light"
      ? "btn btn-light"
      : variant === "secondary"
        ? "btn btn-secondary"
        : "btn btn-primary";

  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
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

export function Header() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <div>
            <a href={clinic.phoneHref}>{clinic.phone}</a>
            <span className="topbar-separator">/</span>
            <span>{clinic.hours}</span>
          </div>
          <div className="topbar-right">
            <span>{clinic.address}</span>
            <a href={clinic.emailHref}>{clinic.email}</a>
          </div>
        </div>
      </div>
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Gums and Giggles home">
          <Image
            className="brand-mark"
            src="/logo_.png"
            alt=""
            width={44}
            height={44}
            priority
          />
          <span>
            <strong>Gums &amp; Giggles</strong>
            <small>Dental Clinic Kathmandu</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about-us">About</Link>
          <Link href="/services">Services</Link>
          <a href={clinic.phoneHref}>Call</a>
        </nav>
        <ButtonLink href={clinic.appointmentHref}>Book Appointment</ButtonLink>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <Image
              className="brand-mark"
              src="/logo_.png"
              alt=""
              width={44}
              height={44}
            />
            <span>
              <strong>Gums &amp; Giggles</strong>
              <small>Khulera Hasau, Majja Ley Hassau</small>
            </span>
          </Link>
          <p>
            Specialist-led dental care in Kathmandu, built around clear
            communication, comfort, and long-term oral health.
          </p>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Visit</h3>
          <ul>
            <li>{clinic.address}</li>
            <li>
              <a href={clinic.phoneHref}>{clinic.phone}</a>
            </li>
            <li>
              <a href={clinic.emailHref}>{clinic.email}</a>
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
    <div className={center ? "section-header center" : "section-header"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
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
    <section className="page-hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="hero-lead">{lead}</p>
          <div className="hero-actions">
            <ButtonLink href={clinic.appointmentHref}>Book a Consultation</ButtonLink>
            <ButtonLink href={clinic.phoneHref} variant="secondary">
              Call {clinic.phone}
            </ButtonLink>
          </div>
          {children}
        </div>
        <div className="hero-media">
          <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
      </div>
    </section>
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
    <section className="stat-strip" aria-label="Clinic highlights">
      <div className="container stat-grid">
        {stats.map((stat) => (
          <div className="stat" key={`${stat.value}-${stat.label}`}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden="true">
        {service.navTitle.slice(0, 1)}
      </div>
      <div>
        <h3>{service.shortTitle}</h3>
        <p>{service.summary}</p>
        <p className="service-price">{service.price}</p>
        <Link href={`/services/${service.slug}`} className="text-link">
          Learn more
        </Link>
      </div>
    </article>
  );
}

export function CardsGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="cards-grid">
      {items.map((item) => (
        <article className="info-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function ProcessSteps({ steps }: { steps: CardItem[] }) {
  return (
    <div className="process-grid">
      {steps.map((step, index) => (
        <article className="process-step" key={step.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>
      ))}
    </div>
  );
}

export function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question} className="faq-item">
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
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
    <div className="gallery-grid">
      {images.map((image) => (
        <figure className="gallery-card" key={image.src}>
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function LocationSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Find us"
          title="Visit our clinic in Kathmandu"
          lead="Conveniently located on Dhobidhara Marg, minutes from Lazimpat, Maharajgunj, Naxal, Baluwatar, and Thamel."
          center
        />
        <div className="location-grid">
          <div className="contact-panel">
            <h3>Clinic information</h3>
            <dl>
              <div>
                <dt>Address</dt>
                <dd>{clinic.address}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={clinic.phoneHref}>{clinic.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={clinic.emailHref}>{clinic.email}</a>
                </dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>{clinic.hours}</dd>
              </div>
            </dl>
            <ButtonLink href={clinic.mapsHref} variant="secondary">
              Open Google Maps
            </ButtonLink>
          </div>
          <div className="map-frame">
            <iframe
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
    <section className="cta-section">
      <div className="container cta-inner">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="hero-actions">
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
    <div className="showcase-grid">
      {images.map((image) => (
        <figure className="showcase-card" key={image.src}>
          <div>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
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
        <ul className="hero-highlights">
          {service.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </PageHero>

      <section className="section">
        <div className="container split-grid">
          <div>
            <SectionHeader eyebrow="Overview" title={`About ${service.shortTitle}`} />
            <div className="rich-copy">
              {service.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="price-panel">
            <p className="eyebrow">Starting point</p>
            <h2>{service.price}</h2>
            <p>
              Final pricing is confirmed after examination, X-rays where needed,
              and a treatment plan.
            </p>
            <ButtonLink href={clinic.appointmentHref}>Get a clear estimate</ButtonLink>
          </aside>
        </div>
      </section>

      {service.options?.length ? (
        <section className="section section-alt">
          <div className="container">
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
        <section className="section">
          <div className="container compact-section">
            <SectionHeader
              eyebrow="Know the signs"
              title={service.signsTitle ?? "When to book a visit"}
              center
            />
            <ul className="check-grid">
              {service.signs.map((sign) => (
                <li key={sign}>{sign}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section section-pink">
        <div className="container">
          <SectionHeader
            eyebrow="Patient journey"
            title="What to expect"
            lead="We keep the process clear so you know what is happening at every stage."
            center
          />
          <ProcessSteps steps={service.process} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Why patients choose us"
            title={`Why choose Gums & Giggles for ${service.shortTitle.toLowerCase()}?`}
            center
          />
          <CardsGrid items={service.why} />
        </div>
      </section>

      {service.care?.length ? (
        <section className="section section-alt">
          <div className="container">
            <SectionHeader eyebrow="Aftercare" title={service.careTitle ?? "Care tips"} center />
            <CardsGrid items={service.care} />
          </div>
        </section>
      ) : null}

      {service.extraImages?.length ? (
        <section className="section">
          <div className="container">
            <ImageShowcase images={service.extraImages} />
          </div>
        </section>
      ) : null}

      <section className="section section-alt">
        <div className="container compact-section">
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
