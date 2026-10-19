import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// /sitemap.xml. URLs end in "/" to match trailingSlash in next.config.ts.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.siteUrl}/gallery/`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
