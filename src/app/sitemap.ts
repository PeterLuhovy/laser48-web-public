import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.laser48.sk";

  return [
    { url: baseUrl, lastModified: "2026-03-25", changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/sluzby`, lastModified: "2026-03-25", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ako-to-funguje`, lastModified: "2026-03-25", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/cennik`, lastModified: "2026-03-25", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/referencie`, lastModified: "2026-03-25", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: "2026-03-25", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: "2026-03-25", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ochrana-osobnych-udajov`, lastModified: "2026-03-26", changeFrequency: "yearly", priority: 0.3 },
  ];
}
