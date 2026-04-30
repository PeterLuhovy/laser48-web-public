import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import JsonLd from "@/components/JsonLd";
import CTASection from "@/components/CTASection";
import { PHONE } from "@/config";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog — Rýchle laserové rezanie kovov",
  description:
    "Články o expresnom laserovom rezaní kovov, rýchlych dodaniach, materiáloch a technológii CO₂ laserov. Praktické rady pre konštruktérov a nákupcov.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | LASER48",
    description:
      "Články o expresnom laserovom rezaní kovov a rýchlych dodaniach. Praktické rady pre konštruktérov a nákupcov.",
    url: "https://www.laser48.sk/blog",
    images: [{ url: "/images/hero-laser.png", width: 1200, height: 630, alt: "LASER48 Blog" }],
  },
};

export const articles = [
  {
    slug: "ako-stihame-laserove-rezanie-do-48-hodin",
    title: "Ako stíhame laserové rezanie do 48 hodín",
    excerpt:
      "Rýchle laserové rezanie kovov nie je o rýchlejšom stroji. Je to o systéme. Pozrite sa, ako vyrobíme diel za 48 hodín, kým konkurencia povie „o týždeň".",
    date: "2026-04-30",
    readTime: "6 min",
    category: "Express výroba",
  },
];

export default function BlogIndexPage() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.laser48.sk/blog",
    name: "LASER48 Blog",
    description:
      "Články o expresnom laserovom rezaní kovov, rýchlych dodaniach a technológii.",
    url: "https://www.laser48.sk/blog",
    publisher: { "@id": "https://www.laser48.sk/#organization" },
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `https://www.laser48.sk/blog/${a.slug}`,
      datePublished: a.date,
      author: { "@type": "Organization", name: "LASER48" },
    })),
  };

  return (
    <>
      <JsonLd data={blogJsonLd} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.laser48.sk" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.laser48.sk/blog" },
          ],
        }}
      />

      <HeroSection
        title="Blog o rýchlom laserovom rezaní"
        perex="Praktické články pre konštruktérov, nákupcov a všetkých, kto rieši rýchle dodanie kovových dielov."
        small
      />

      <section className="section">
        <div className="container">
          <div className={styles.articleList}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className={styles.articleCard}
              >
                <div className={styles.articleMeta}>
                  <span className={styles.category}>{article.category}</span>
                  <span className={styles.metaItem}>
                    <Calendar size={14} />
                    {new Date(article.date).toLocaleDateString("sk-SK", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className={styles.metaItem}>
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                </div>
                <h2 className={styles.articleTitle}>{article.title}</h2>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <span className={styles.readMore}>
                  Čítať článok <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Potrebujete diel rýchlo?"
        text="Pošlite výkres — do 24h máte cenu. Express laserové rezanie 48h alebo urgentné 24h."
        buttonText="Pošlite výkres — do 24h máte cenu"
        note={`Alebo zavolajte: ${PHONE}`}
      />
    </>
  );
}
