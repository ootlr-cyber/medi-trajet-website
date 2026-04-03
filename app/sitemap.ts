import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog-data";
import { getAllCitySlugs } from "@/lib/seo-data/cities/index";
import { getAllHospitalSlugs } from "@/lib/seo-data/hospitals/index";
import { getAllGuideSlugs } from "@/lib/seo-data/guides/index";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://meditrajet.fr";
  const now = new Date();

  // ─── Static pages ─────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/etablissements`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/patients`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/transporteurs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/politique-de-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/cgu`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    // Hub pages
    { url: `${siteUrl}/taxi-conventionne`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  // ─── Blog articles ────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ─── Guide pages (pages fortes) ───────────────────────────
  const guidePages: MetadataRoute.Sitemap = getAllGuideSlugs().map((slug) => ({
    url: `${siteUrl}/guides/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // ─── City pages ───────────────────────────────────────────
  const citySlugs = getAllCitySlugs();
  const cityPages: MetadataRoute.Sitemap = citySlugs.flatMap((slug) => [
    { url: `${siteUrl}/taxi-conventionne-${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${siteUrl}/taxi-dialyse-${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${siteUrl}/taxi-chimiotherapie-${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
  ]);

  // ─── Hospital pages ───────────────────────────────────────
  const hospitalPages: MetadataRoute.Sitemap = getAllHospitalSlugs().map((slug) => ({
    url: `${siteUrl}/taxi-hopital-${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...guidePages,
    ...blogPages,
    ...cityPages,
    ...hospitalPages,
  ];
}
