import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ButtonLink,
  JsonLd,
  articleSchema,
  breadcrumbSchema,
  CTASection,
  CheckGrid,
  LocationSection,
  cardClass,
  clinic,
  container,
  eyebrowClass,
  h2Class,
  section,
  sectionAlt,
} from "@/components";
import { getPostBySlug, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [post.heroImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const more = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={articleSchema(post)} />
      <section className="border-b border-pink-100 bg-stone-50 py-9 md:py-14">
        <div className={`${container} max-w-3xl`}>
          <Link
            className="inline-flex text-sm font-black text-[#E8177A] hover:text-[#c4115f]"
            href="/blog"
          >
            &larr; All articles
          </Link>
          <p className={`${eyebrowClass} mt-5`}>
            {post.category} &middot; {post.readingTime}
          </p>
          <h1 className="font-sans text-3xl font-black leading-tight text-zinc-950 md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-base leading-8 text-zinc-600 md:text-lg">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500">
            <span className="font-black text-zinc-950">{post.author}</span>
            <span>{post.authorRole}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.date}>{post.displayDate}</time>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={`${container} max-w-3xl`}>
          <div className="relative mb-9 min-h-64 overflow-hidden rounded-[1.75rem] bg-pink-50 shadow-[0_18px_50px_rgba(17,17,17,0.09)] md:min-h-[26rem]">
            <Image
              className="object-cover"
              src={post.heroImage}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48rem"
            />
          </div>

          <div className="grid gap-5">
            {post.intro.map((paragraph) => (
              <p className="text-lg leading-9 text-zinc-700" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          {post.sections.map((part) => (
            <div className="mt-11 grid gap-4" key={part.heading}>
              <h2 className="font-sans text-2xl font-black leading-tight text-zinc-950 md:text-3xl">
                {part.heading}
              </h2>
              {part.paragraphs.map((paragraph) => (
                <p className="leading-8 text-zinc-600" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              {part.bullets?.length ? (
                <div className="mt-1">
                  <CheckGrid items={part.bullets} />
                </div>
              ) : null}
            </div>
          ))}

          <aside className={`${cardClass} mt-11 border-pink-200 bg-pink-50 p-7`}>
            <p className={eyebrowClass}>The short version</p>
            <p className="text-lg leading-8 text-zinc-800">{post.takeaway}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={post.relatedHref}>{post.relatedLabel}</ButtonLink>
              <ButtonLink href={clinic.appointmentHref} variant="secondary">
                Book an appointment
              </ButtonLink>
            </div>
          </aside>

          <div className="mt-9 border-t border-zinc-200 pt-7">
            <p className="text-sm leading-7 text-zinc-500">
              Written by {post.author}, {post.authorRole}. This article is
              general information about dental health and is not a diagnosis.
              Symptoms vary between patients, so book an examination for advice
              specific to your own teeth and gums.
            </p>
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={container}>
          <h2 className={`${h2Class} mb-7`}>Keep reading</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {more.map((item) => (
              <article className={`${cardClass} grid gap-2 p-6`} key={item.slug}>
                <p className="text-xs font-black uppercase tracking-[0.1em] text-[#E8177A]">
                  {item.category} &middot; {item.readingTime}
                </p>
                <h3 className="font-sans text-lg font-black leading-snug text-zinc-950">
                  {item.title}
                </h3>
                <p className="leading-7 text-zinc-600">{item.excerpt}</p>
                <Link
                  className="inline-flex font-sans text-sm font-black text-[#E8177A] hover:text-[#c4115f]"
                  href={`/blog/${item.slug}`}
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LocationSection />
      <CTASection
        title="Questions about your own teeth?"
        text="Book a consultation at our Dhobidhara Marg clinic and get an answer based on an examination, not an article."
      />
    </>
  );
}
