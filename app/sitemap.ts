import type { MetadataRoute } from "next";
import { siteUrl } from "@/components";
import { gumTopics } from "@/data/gum-topics";
import { posts } from "@/data/posts";
import { services } from "@/data/services";

// One registry, so the sitemap cannot drift from the router.
const staticRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/gum-care", priority: 0.9 },
  { path: "/services", priority: 0.9 },
  { path: "/treatment-prices", priority: 0.9 },
  { path: "/appointment", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/about-us", priority: 0.7 },
  { path: "/about-us/dr-niyukty-arjal", priority: 0.7 },
  { path: "/about-us/clinic", priority: 0.6 },
  { path: "/patient-results", priority: 0.6 },
  { path: "/blog", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...gumTopics.map((topic) => ({
      url: `${siteUrl}/gum-care/${topic.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
