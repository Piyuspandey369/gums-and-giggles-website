import type { Post } from "@/data/posts";
import type { Service } from "@/data/services";
import { clinic, siteUrl } from "../constants";

export const clinicId = `${siteUrl}/#clinic`;
export const doctorId = `${siteUrl}/about-us/dr-niyukty-arjal#doctor`;

export function absolute(path: string) {
  return path.startsWith("http") ? path : `${siteUrl}${path}`;
}

export function clinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": clinicId,
    name: clinic.name,
    url: siteUrl,
    telephone: clinic.phoneE164,
    email: clinic.email,
    image: absolute("/clinic_photos/clinics_building_image_from_outside.webp"),
    logo: absolute("/logo_.png"),
    description:
      "Specialist-led dental clinic in Kathmandu offering gum care and periodontics, implants, braces, root canal treatment, teeth cleaning, crowns, and wisdom tooth removal.",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.street,
      addressLocality: clinic.locality,
      addressRegion: clinic.region,
      postalCode: clinic.postalCode,
      addressCountry: clinic.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.latitude,
      longitude: clinic.longitude,
    },
    hasMap: clinic.mapsHref,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: clinic.openDays,
        opens: clinic.opens,
        closes: clinic.closes,
      },
    ],
    areaServed: ["Kathmandu", "Lalitpur", "Bhaktapur"],
    medicalSpecialty: "Periodontic",
    currenciesAccepted: "NPR",
    sameAs: clinic.sameAs,
  };
}

export function doctorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": doctorId,
    name: "Dr. Niyukty Arjal",
    // TODO (client): add alumniOf, hasCredential and the NMC registration
    // number once confirmed. They are the strongest trust signals available.
    jobTitle: "MDS Periodontist",
    medicalSpecialty: "Periodontic",
    url: absolute("/about-us/dr-niyukty-arjal"),
    image: absolute("/clinic_photos/doctor_photo_with_a_adult_male_patient.webp"),
    worksFor: { "@id": clinicId },
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.street,
      addressLocality: clinic.locality,
      addressRegion: clinic.region,
      postalCode: clinic.postalCode,
      addressCountry: clinic.country,
    },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absolute(item.path),
      }),
    ),
  };
}

export function procedureSchema(service: Service, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.shortTitle,
    description: service.summary,
    url: absolute(path),
    procedureType: "https://schema.org/TherapeuticProcedure",
    howPerformed: service.process.map((step) => step.text).join(" "),
    preparation: service.signs?.length
      ? `Book an assessment if you notice: ${service.signs.join("; ")}.`
      : undefined,
    provider: { "@id": clinicId },
  };
}

export function articleSchema(post: Post) {
  const path = `/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: absolute(path),
    mainEntityOfPage: absolute(path),
    image: absolute(post.heroImage),
    datePublished: post.date,
    dateModified: post.date,
    author: { "@id": doctorId },
    publisher: { "@id": clinicId },
    articleSection: post.category,
  };
}
