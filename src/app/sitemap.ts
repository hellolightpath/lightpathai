import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog-data";

const BASE = "https://getlightpath.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/enterprise",
    "/our-story",
    "/blog",
    "/faq",
    "/demo",
    "/trust",
    "/privacy",
    "/terms",
  ];

  const blogSlugs = getAllSlugs();

  return [
    ...staticPages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
