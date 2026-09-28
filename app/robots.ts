import type { MetadataRoute } from "next";
import { siteUrl } from "@/components";

// AI crawlers are deliberately allowed: assistants are a real referral channel
// for questions like "best periodontist in Kathmandu".
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
