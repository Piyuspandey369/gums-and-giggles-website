import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  JsonLd,
  ServicePage,
  breadcrumbSchema,
  procedureSchema,
} from "@/components";
import { getGumTopicBySlug, gumTopics } from "@/data/gum-topics";

export function generateStaticParams() {
  return gumTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getGumTopicBySlug(slug);

  if (!topic) {
    return {};
  }

  return {
    title: topic.title,
    description: topic.summary,
    alternates: { canonical: `/gum-care/${topic.slug}` },
    openGraph: {
      title: topic.title,
      description: topic.summary,
      url: `/gum-care/${topic.slug}`,
      images: [topic.heroImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getGumTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const path = `/gum-care/${topic.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Gum Care and Periodontics", path: "/gum-care" },
          { name: topic.shortTitle, path },
        ])}
      />
      <JsonLd data={procedureSchema(topic, path)} />
      <ServicePage service={topic} />
    </>
  );
}
