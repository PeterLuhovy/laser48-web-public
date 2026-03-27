import Image from "next/image";
import Link from "next/link";
import {
  Upload,
  Euro,
  Package,
  Zap,
  Clock,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Car,
  Wrench,
  Lightbulb,
} from "lucide-react";
import { PHONE, PHONE_TEL, YEARS_ON_MARKET } from "@/config";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import PhoneButton from "@/components/PhoneButton";
import StatCounter from "@/components/StatCounter";
import CTASection from "@/components/CTASection";
import styles from "./page.module.css";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.laser48.sk/#organization",
  name: "LASER48",
  description:
    "Laserové rezanie kovov. Štandard 7 dní, express 48h alebo 24h. Nerezová oceľ AISI 304/316 (0.5–6mm), čierna oceľ DC01/S235/C45 (0.5–8mm), pozinkovaná oceľ DX51D (0.5–3mm), hliník AlMg3 (0.5–4mm). Cenová ponuka do 24 hodín.",
  url: "https://www.laser48.sk",
  logo: "https://www.laser48.sk/images/logo-light.png",
  image: "https://www.laser48.sk/images/hero-laser.png",
  telephone: PHONE_TEL.replace("tel:", ""),
  email: "laser@laser48.sk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nosice 256",
    addressLocality: "Púchov",
    postalCode: "020 01",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.117,
    longitude: 18.324,
  },
  areaServed: [
    { "@type": "Country", name: "Slovakia" },
    { "@type": "Country", name: "Czech Republic" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "EUR",
  paymentAccepted: "Bank Transfer, Invoice, Card",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Laserové rezanie kovov",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laserové rezanie nerezovej ocele",
          description:
            "CO₂ laser rezanie nerezovej ocele AISI304/316, hrúbka 0.5–6mm, max rozmer 1540×750mm, presnosť ±0.1mm.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laserové rezanie čiernej ocele",
          description:
            "CO₂ laser rezanie čiernej ocele DC01/S235/C45, hrúbka 0.5–8mm, max rozmer 1540×750mm.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laserové rezanie pozinkovanej ocele",
          description:
            "CO₂ laser rezanie pozinkovanej ocele DX51D, hrúbka 0.5–3mm, max rozmer 1540×750mm.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laserové rezanie hliníka",
          description:
            "CO₂ laser rezanie hliníka AlMg3, hrúbka 0.5–4mm, max rozmer 1540×750mm.",
        },
      },
    ],
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Luhovy Industries",
    url: "https://www.luhovy-industries.sk",
    memberOf: {
      "@type": "Organization",
      name: "LRA GROUP",
      url: "https://lra.group",
    },
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />

      {/* HERO */}
      <HeroSection
        title="Keď vám chýba diel, stojí výroba."
        perex="My ho dodáme do 48 hodín — bez problémov. Laserové rezanie kovov pre firmy, ktoré nemajú čas na chyby. Cena do 24h. Expres už od 24–48h."
        bgImage="/images/hero-laser.png"
      >
        <Button href="/kontakt#formular">Pošli výkres — do 24h máš cenu</Button>
        <PhoneButton />
      </HeroSection>

      {/* PREČO MY */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Nejde o rezanie. Ide o to, či vám projekt ide alebo stojí."
          />
          <div className={styles.whyGrid}>
            <div className={styles.whyBad}>
              <h3 className={styles.whyTitle}>Keď diel:</h3>
              <ul className={styles.whyList}>
                <li><XCircle size={20} /> nesedí</li>
                <li><XCircle size={20} /> má otrepy</li>
                <li><XCircle size={20} /> príde neskoro</li>
              </ul>
              <p className={styles.whyResult}>Neplatíte za diel. Platíte za problém.</p>
            </div>
            <div className={styles.whyGood}>
              <h3 className={styles.whyTitle}>LASER48:</h3>
              <ul className={styles.whyList}>
                <li><CheckCircle size={20} /> diel sedí na prvýkrát</li>
                <li><CheckCircle size={20} /> termín platí</li>
                <li><CheckCircle size={20} /> komunikácia je rýchla</li>
              </ul>
              <p className={styles.whyResult}>Výsledok: žiadne zdržanie, žiadne opravy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ČO ZÍSKATE */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Čo získate" center />
          <div className={styles.benefits}>
            <div className={styles.benefitCard}>
              <Package size={32} className={styles.benefitIcon} />
              <h3>Diel pripravený na montáž</h3>
              <p>Žiadne brúsenie. Žiadne dorábky. Vyberiete z krabice a montujete.</p>
            </div>
            <div className={styles.benefitCard}>
              <Clock size={32} className={styles.benefitIcon} />
              <h3>Termín, ktorý platí</h3>
              <p>Keď povieme 48 hodín, tak to nie je marketing. Je to záväzok.</p>
            </div>
            <div className={styles.benefitCard}>
              <Zap size={32} className={styles.benefitIcon} />
              <h3>Rýchlosť ako poistka</h3>
              <p>Expres nie je luxus. Je to spôsob, ako zachrániť projekt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AKO TO FUNGUJE */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Ako to funguje" center />
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Pošlete výkres</h3>
              <p>DXF / DWG / STEP — alebo aj náčrt</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Do 24h máte cenu</h3>
              <p>Jasná ponuka. Bez skrytých vecí.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Diel máte hotový</h3>
              <p>Štandard do 7 dní. Expres 48h / 24h. Pripravený na montáž.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPRES */}
      <section className={styles.expresSection}>
        <div className="container">
          <SectionHeading title="Keď to horí, riešite čas. Nie cenu." center />
          <div className={styles.expresGrid}>
            <div className={styles.expresItem}>
              <Zap size={24} />
              <span>48h výroba</span>
            </div>
            <div className={styles.expresItem}>
              <Zap size={24} />
              <span>24h kritické prípady</span>
            </div>
            <div className={styles.expresItem}>
              <ShieldCheck size={24} />
              <span>Prioritné spracovanie</span>
            </div>
          </div>
          <p className={styles.expresNote}>Lacnejšie než zastavená výroba.</p>
          <div className={styles.expresCta}>
            <Button href="/expres">Viac o expres výrobe →</Button>
          </div>
        </div>
      </section>

      {/* REALITA */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Koľko vás stojí zlý diel?" />
          <div className={styles.realityGrid}>
            <div className={styles.realityProblem}>
              <ul className={styles.realityList}>
                <li><AlertTriangle size={20} /> prestoj výroby</li>
                <li><AlertTriangle size={20} /> oneskorený projekt</li>
                <li><AlertTriangle size={20} /> stres a opravy</li>
              </ul>
              <p className={styles.realityEmphasis}>Toto sú reálne náklady.</p>
            </div>
            <div className={styles.realitySolution}>
              <h3>Preto robíme veci inak:</h3>
              <ul className={styles.realityList}>
                <li><CheckCircle size={20} /> kontrola každého kusu</li>
                <li><CheckCircle size={20} /> čisté rezy bez otrepov</li>
                <li><CheckCircle size={20} /> dôraz na presnosť</li>
              </ul>
              <p className={styles.realityEmphasis}>Aby ste to nemuseli riešiť dvakrát.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROZDIEL */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Rozdiel medzi dielom a problémom" center />
          <div className={styles.comparison}>
            <div className={styles.comparisonBad}>
              <h3 className={styles.comparisonTitle}>
                <XCircle size={24} /> Lacný dodávateľ
              </h3>
              <ul className={styles.comparisonList}>
                <li>otrepy</li>
                <li>nepresnosti</li>
                <li>meškanie</li>
              </ul>
            </div>
            <div className={styles.comparisonGood}>
              <h3 className={styles.comparisonTitle}>
                <CheckCircle size={24} /> LASER48
              </h3>
              <ul className={styles.comparisonList}>
                <li>čisté diely</li>
                <li>presnosť</li>
                <li>spoľahlivý termín</li>
              </ul>
            </div>
          </div>
          <p className={styles.comparisonResult}>
            Výsledok: diel, ktorý funguje — nie problém, ktorý riešite.
          </p>
        </div>
      </section>

      {/* KVALITA - Porovnanie fotiek */}
      <section className="section">
        <div className="container">
          <div className={styles.photoComparison}>
            <div className={styles.photoBad}>
              <div className={styles.photoImg}>
                <Image
                  src="/images/otrepy-konkurencia.webp"
                  alt="Diel s otrepmi od bežného dodávateľa"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.photoLabel}>
                <span className={styles.labelBad}>Bežný dodávateľ</span>
                <p>Otrepy a okuje. Musíte dodatočne opracovávať.</p>
              </div>
            </div>
            <div className={styles.photoGood}>
              <div className={styles.photoImg}>
                <Image
                  src="/images/rezne-hrany.jpg"
                  alt="Čistý diel od LASER48"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.photoLabel}>
                <span className={styles.labelGood}>LASER48</span>
                <p>Čistý rez. Pripravené na montáž.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRE KOHO SME */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Pre koho sme" />
          <p className={styles.targetText}>
            Pre firmy, ktoré riešia zákazkovú výrobu, potrebujú rýchle dodanie
            a nemôžu si dovoliť chyby.
          </p>
          <div className={styles.targetGrid}>
            <div className={styles.targetItem}>
              <Car size={24} />
              <span>Automotive</span>
            </div>
            <div className={styles.targetItem}>
              <Wrench size={24} />
              <span>Strojárstvo</span>
            </div>
            <div className={styles.targetItem}>
              <Lightbulb size={24} />
              <span>Prototypy</span>
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCIE */}
      <section className="section">
        <div className="container">
          <div className={styles.testimonials}>
            <blockquote className={styles.quote}>
              &ldquo;Keď povieme termín, platí.&rdquo;
            </blockquote>
            <blockquote className={styles.quote}>
              &ldquo;48 hodín bez výhovoriek.&rdquo;
            </blockquote>
            <blockquote className={styles.quote}>
              &ldquo;Diely prišli pripravené na montáž.&rdquo;
            </blockquote>
          </div>
          <p className={styles.refLink}>
            <Link href="/referencie">Viac hodnotení od zákazníkov →</Link>
          </p>
        </div>
      </section>

      {/* V ČÍSLACH */}
      <section className="section-dark">
        <div className="container">
          <div className={styles.stats}>
            <StatCounter value="500 000+" label="Dodaných dielov" dark />
            <StatCounter value={YEARS_ON_MARKET} label="Na trhu" dark />
            <StatCounter value="98%" label="Termíny stihnuté" dark />
            <StatCounter value="48h" label="Expres dodanie" dark />
          </div>
        </div>
      </section>

      {/* FINÁLNA CTA */}
      <CTASection
        title="Máte výkres? Máte riešenie."
        text="Pošlite výkres — do 24h máte cenu. Expres 48h. Bez otrepov. Bez problémov."
        buttonText="Pošli výkres — do 24h máš cenu"
        note={`Alebo zavolaj: ${PHONE}`}
      />
    </>
  );
}
