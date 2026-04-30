import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import JsonLd from "@/components/JsonLd";
import CTASection from "@/components/CTASection";
import { PHONE } from "@/config";
import styles from "./page.module.css";

const ARTICLE = {
  slug: "ako-stihame-laserove-rezanie-do-48-hodin",
  title: "Ako stíhame laserové rezanie do 48 hodín",
  description:
    "Rýchle laserové rezanie kovov nie je o rýchlejšom stroji. Je to o systéme — rezervovaná kapacita, prioritné radenie, vlastný CO₂ laser. Ako vyrobíme diel za 48 hodín.",
  date: "2026-04-30",
  readTime: "6 min",
  category: "Express výroba",
  url: "https://www.laser48.sk/blog/ako-stihame-laserove-rezanie-do-48-hodin",
};

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: { canonical: `/blog/${ARTICLE.slug}` },
  openGraph: {
    title: ARTICLE.title,
    description: ARTICLE.description,
    url: ARTICLE.url,
    type: "article",
    publishedTime: ARTICLE.date,
    authors: ["LASER48"],
    images: [{ url: "/images/hero-laser.png", width: 1200, height: 630, alt: ARTICLE.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE.title,
    description: ARTICLE.description,
  },
};

export default function ArticlePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: ARTICLE.title,
    description: ARTICLE.description,
    image: "https://www.laser48.sk/images/hero-laser.png",
    datePublished: ARTICLE.date,
    dateModified: ARTICLE.date,
    author: {
      "@type": "Organization",
      name: "LASER48",
      url: "https://www.laser48.sk",
    },
    publisher: { "@id": "https://www.laser48.sk/#organization" },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE.url },
    articleSection: ARTICLE.category,
    keywords: [
      "rýchle laserové rezanie",
      "rezanie laserom rýchlo",
      "expresné laserové rezanie",
      "rezanie laserom do 48 hodín",
      "rezanie laserom do 24 hodín",
      "urgentné laserové rezanie",
      "express laser cutting",
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.laser48.sk" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.laser48.sk/blog" },
            { "@type": "ListItem", position: 3, name: ARTICLE.title, item: ARTICLE.url },
          ],
        }}
      />

      <HeroSection title={ARTICLE.title} small />

      <article className="section">
        <div className={`container ${styles.article}`}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={16} /> Späť na blog
          </Link>

          <div className={styles.meta}>
            <span className={styles.category}>{ARTICLE.category}</span>
            <span className={styles.metaItem}>
              <Calendar size={14} />
              {new Date(ARTICLE.date).toLocaleDateString("sk-SK", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className={styles.metaItem}>
              <Clock size={14} />
              {ARTICLE.readTime} čítania
            </span>
          </div>

          <p className={styles.lead}>
            Pýtate sa, ako je možné vyrobiť diel laserovým rezaním za 48 hodín, keď
            iní stíhajú za 7–14 dní? <strong>Rýchle laserové rezanie kovov</strong>{" "}
            nie je o rýchlejšom stroji. Je to o systéme. V tomto článku vysvetlíme
            presne, ako stíhame <strong>rezanie laserom rýchlo</strong> — od
            prijatia výkresu po expedíciu — a prečo bežní dodávatelia nestíhajú.
          </p>

          <h2>Prečo bežní laseroví dodávatelia stíhajú 7–14 dní</h2>
          <p>
            Bežná SK laserovňa pracuje na FIFO (first-in-first-out) princípe.
            Príde výkres, zaradí sa do fronty, vyrobí sa keď je kapacita.
            Pri 5–10 zákazkách týždenne to znamená dodanie 1–2 týždne. Ak
            v zákazke chýba diel, zákazník čaká.
          </p>
          <p>
            Tento systém má jednu výhodu — predvídateľnosť pre dodávateľa.
            A jednu obrovskú nevýhodu — <strong>žiadnu flexibilitu</strong> pre
            zákazníka. Keď vám stojí montáž a chýba jeden diel, &bdquo;najskôr
            o týždeň&ldquo; nie je odpoveď.
          </p>

          <h2>Rýchle laserové rezanie — ako to robíme inak</h2>
          <p>
            <strong>Rýchle laserové rezanie</strong> v LASER48 stojí na štyroch
            pilieroch:
          </p>

          <h3>1. Rezervovaná kapacita pre urgentné zákazky</h3>
          <p>
            Plánujeme výrobu tak, aby sme mali každý deň rezervu na urgentné
            zákazky. Nie je to magické — je to plánovanie. Bežný dodávateľ má
            stroj zaplnený na 100% a urgentná zákazka znamená posunúť niečo iné.
            My máme každý deň 20–30% kapacity vyhradenej na expres prípady.
          </p>

          <h3>2. Prioritné radenie — nie FIFO</h3>
          <p>
            Express a urgentné zákazky idú na začiatok výroby. Bežné zákazky
            čakajú o pár hodín dlhšie — väčšine zákazníkov to nevadí. Tým, ktorí
            potrebujú diel zajtra, to zachráni projekt.
          </p>

          <h3>3. Vlastný CO₂ laser Bystronic ByVention 3015</h3>
          <p>
            Žiadna outsourcovaná výroba. Žiadne &bdquo;dodá nám partner&ldquo;.
            CO₂ laser Bystronic 2.2 kW máme priamo v Púchove. Presnosť ±0,1 mm,
            max rozmer dielu 1540 × 750 mm. Keď povieme &bdquo;vyrobíme do
            zajtra&ldquo;, vyrobíme do zajtra.
          </p>

          <h3>4. Kontrola každého kusu pred expedíciou</h3>
          <p>
            Rýchlo neznamená nedbalo. Každý diel kontrolujeme pred zabalením —
            otrepy, okuje, rozmery, počet kusov. Reklamácií máme menej než 0,5 %.
            Rýchly diel s otrepmi nie je rýchly — je to extra práca pre zákazníka.
          </p>

          <h2>Express 48 hodín vs urgentné 24 hodín — aký je rozdiel</h2>
          <p>
            <strong>Express 48h</strong> je naša štandardná rýchla služba. Diel
            dodáme do 48 hodín od potvrdenia objednávky. Bez problémov, väčšina
            urgentných zákaziek spadá sem. Cena: príplatok ~30 % oproti
            7-dňovému štandardu.
          </p>
          <p>
            <strong>Urgentné 24h</strong> je pre kritické prípady — výroba stojí,
            zákazník čaká, projekt sa rúca. Vyrobíme do 24 hodín od potvrdenia.
            Vyžaduje aktívnu kapacitu — ozvite sa najprv telefonicky:{" "}
            <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>.
          </p>

          <h2>Doručenie kuriérom do 24 hodín</h2>
          <p>
            Výroba je len polovica práce. Druhá polovica je doručenie. Po
            ukončení výroby zásielku okamžite expedujeme — kuriér DPD, GLS alebo
            TopTrans doručí do 24 hodín na celé Slovensko. Do Českej republiky
            štandardne 1 pracovný deň, pri urgentných zákazkách aj do 24 hodín
            od expedície.
          </p>
          <p>
            <strong>Express 24h výroba + 24h kuriér = diel u vás do 48 hodín od
            objednávky.</strong> Pre Trenčiansky a Žilinský kraj máme aj vlastný
            rozvoz priamo k zákazníkovi.
          </p>

          <h2>Pre koho je rýchle laserové rezanie kľúčové</h2>
          <p>
            Naši typickí zákazníci sú firmy, ktoré <strong>nemôžu čakať</strong>:
          </p>
          <ul>
            <li>
              <strong>Automotive Tier 2/3 dodávatelia</strong> — chýba jeden diel,
              celá zostava stojí
            </li>
            <li>
              <strong>Strojárske firmy s prototypovou výrobou</strong> —
              konštruktér si overuje koncept, potrebuje diel zajtra
            </li>
            <li>
              <strong>Údržba a servis</strong> — zariadenie stojí, treba ho
              spustiť do týždňa
            </li>
            <li>
              <strong>Malé série pre stavebníctvo</strong> — termín stavby sa
              nedá posunúť
            </li>
          </ul>
          <p>
            Pre koho LASER48 nie je: ak rozhoduje len cena a termín nehrá rolu.
            Pri 7-dňovom termíne nájdete lacnejších dodávateľov. Náš zmysel je
            rýchlosť a spoľahlivosť.
          </p>

          <h2>Ako začať</h2>
          <p>
            Pošlite výkres v DXF, DWG, STEP alebo PDF formáte na{" "}
            <a href="mailto:laser@laser48.sk">laser@laser48.sk</a> alebo cez{" "}
            <Link href="/kontakt#formular">kontaktný formulár</Link>. Do 24 hodín
            dostanete cenovú ponuku s pevným termínom dodania. Bez registrácie,
            bez záväzku.
          </p>
          <p>
            Pri urgentnej zákazke zavolajte priamo:{" "}
            <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>. Rezervujeme
            kapacitu do hodiny.
          </p>

          <p className={styles.summary}>
            <strong>Zhrnutie:</strong> Rýchle laserové rezanie nie je magia. Je to
            kombinácia rezervovanej kapacity, prioritného radenia, vlastného
            laseru a dôslednej kontroly. Preto stíhame 48 hodín, kým konkurencia
            povie &bdquo;o týždeň&ldquo;.
          </p>
        </div>
      </article>

      <CTASection
        title="Máte výkres? Máte riešenie."
        text="Pošlite výkres — do 24h máte cenu. Express laserové rezanie do 48h, urgentné do 24h."
        buttonText="Pošlite výkres — do 24h máte cenu"
        note={`Alebo zavolajte: ${PHONE}`}
      />
    </>
  );
}
