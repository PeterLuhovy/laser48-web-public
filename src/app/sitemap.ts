import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.laser48.sk";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/sluzby`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/expres`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/cennik`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/ako-to-funguje`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/referencie`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/ochrana-osobnych-udajov`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
