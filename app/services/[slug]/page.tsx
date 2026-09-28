import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  JsonLd,
  ServicePage,
  breadcrumbSchema,
  procedureSchema,
} from "@/components";
import { getServiceBySlug, services } from "@/data/services";

// Aliases are handled by 301 redirects in next.config.ts, never as routes.
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.summary,
      url: `/services/${service.slug}`,
      images: [service.heroImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const path = `/services/${service.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Dental Services", path: "/services" },
          { name: service.shortTitle, path },
        ])}
      />
      <JsonLd data={procedureSchema(service, path)} />
      <ServicePage service={service} />
    </>
  );
}
