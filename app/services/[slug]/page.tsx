import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/site";
import { getServiceBySlug, services } from "@/data/services";

export function generateStaticParams() {
  return services.flatMap((service) => [
    { slug: service.slug },
    ...(service.aliases ?? []).map((slug) => ({ slug })),
  ]);
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

  return <ServicePage service={service} />;
}

