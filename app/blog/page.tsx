import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  JsonLd,
  breadcrumbSchema,
  CTASection,
  LocationSection,
  PageHero,
  SectionHeader,
  cardClass,
  container,
  section,
} from "@/components";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Dental Health Blog",
  description:
    "Practical dental health articles from Gums & Giggles Dental Clinic in Kathmandu, written by an MDS Periodontist: gum disease, bleeding gums, treatment costs, and what to expect.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [lead, ...rest] = posts;

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Blog", path: "/blog" }])} />
      <PageHero
        eyebrow="Dental health blog"
        title="Straight answers about your teeth"
        lead="Articles written by our dentist, not repackaged from elsewhere. What the conditions actually are, what treatment involves, and what it costs in Kathmandu."
        image="/images/clinic-illustration.png"
        imageAlt="Illustration of the Gums and Giggles dental clinic"
      />

      <section className={section}>
        <div className={container}>
          <SectionHeader eyebrow="Latest" title="Most recent article" />
          <article className={`${cardClass} grid overflow-hidden lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]`}>
            <div className="relative min-h-64 bg-pink-50 lg:min-h-[22rem]">
              <Image
                className="object-cover"
                src={lead.heroImage}
                alt={lead.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid content-center gap-3 p-6 md:p-9">
              <p className="text-xs font-black uppercase tracking-[0.1em] text-[#E8177A]">
                {lead.category} &middot; {lead.readingTime}
              </p>
              <h2 className="font-sans text-2xl font-black leading-tight text-zinc-950 md:text-3xl">
                {lead.title}
              </h2>
              <p className="leading-8 text-zinc-600">{lead.excerpt}</p>
              <p className="text-sm text-zinc-500">
                {lead.author} &middot; {lead.displayDate}
              </p>
              <Link
                className="mt-1 inline-flex font-sans font-black text-[#E8177A] hover:text-[#c4115f]"
                href={`/blog/${lead.slug}`}
              >
                Read the article
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className={section}>
        <div className={container}>
          <SectionHeader
            eyebrow="More reading"
            title="All articles"
            lead="New articles are added regularly, covering the questions patients ask most often in the chair."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article className={`${cardClass} overflow-hidden`} key={post.slug}>
                <div className="relative min-h-48 bg-pink-50">
                  <Image
                    className="object-cover"
                    src={post.heroImage}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div className="grid gap-2 p-6">
                  <p className="text-xs font-black uppercase tracking-[0.1em] text-[#E8177A]">
                    {post.category} &middot; {post.readingTime}
                  </p>
                  <h3 className="font-sans text-lg font-black leading-snug text-zinc-950">
                    {post.title}
                  </h3>
                  <p className="leading-7 text-zinc-600">{post.excerpt}</p>
                  <p className="text-sm text-zinc-500">{post.displayDate}</p>
                  <Link
                    className="inline-flex font-sans text-sm font-black text-[#E8177A] hover:text-[#c4115f]"
                    href={`/blog/${post.slug}`}
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LocationSection />
      <CTASection
        title="Reading about a problem you actually have?"
        text="Book an examination and get an answer specific to your mouth instead of a general one."
      />
    </>
  );
}
