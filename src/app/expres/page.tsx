import type { Metadata } from "next";
import {
  Zap,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  ShieldCheck,
  Upload,
  Truck,
} from "lucide-react";
import { PHONE, PHONE_TEL } from "@/config";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import PhoneButton from "@/components/PhoneButton";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Expresné laserové rezanie kovov — dodanie do 24h / 48h",
  description:
    "Urgentné laserové rezanie kovov — express dodanie do 24 alebo 48 hodín. Rýchle laserové rezanie pre urgentné zákazky, chýbajúce diely a prototypy. LASER48 Púchov.",
  alternates: { canonical: "/expres" },
  openGraph: {
    title: "Expresné laserové rezanie kovov — dodanie do 24h / 48h",
    description:
      "Urgentné laserové rezanie — diel do 24 alebo 48 hodín. Pre firmy, ktoré nemajú čas čakať.",
    url: "https://www.laser48.sk/expres",
    images: [{ url: "/images/hero-laser.png", width: 1200, height: 630, alt: "LASER48 Express laserové rezanie" }],
  },
};

export default function ExpresPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.laser48.sk" },
          { "@type": "ListItem", position: 2, name: "Expres výroba", item: "https://www.laser48.sk/expres" },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Expresné laserové rezanie kovov",
        alternateName: [
          "Rýchle laserové rezanie",
          "Rýchle rezanie laserom",
          "Rezanie laserom rýchlo",
          "Urgentné laserové rezanie",
          "Express laser cutting",
          "Rapid laser cutting",
          "Rezanie laserom do 24 hodín",
          "Rezanie laserom do 48 hodín",
          "Laserové rezanie 24h",
          "Laserové rezanie 48h",
        ],
        description: "Urgentné laserové rezanie kovov s dodaním do 24 alebo 48 hodín. CO₂ laser Bystronic ByVention 3015, presnosť ±0.1mm. Nerezová oceľ, čierna oceľ, hliník.",
        provider: { "@id": "https://www.laser48.sk/#organization" },
        serviceType: "Expresné laserové rezanie",
        areaServed: [
          { "@type": "Country", name: "Slovakia" },
          { "@type": "Country", name: "Czech Republic" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Express termíny",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Express 48h laserové rezanie",
              description: "Laserové rezanie kovov s dodaním do 48 hodín od potvrdenia objednávky.",
              eligibleDuration: { "@type": "QuantitativeValue", value: 48, unitCode: "HUR" },
            },
            {
              "@type": "Offer",
              name: "Urgentné 24h laserové rezanie",
              description: "Kritické zákazky s dodaním do 24 hodín. Prioritné spracovanie.",
              eligibleDuration: { "@type": "QuantitativeValue", value: 24, unitCode: "HUR" },
            },
          ],
        },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Ako objednať expresné laserové rezanie",
        description: "Rýchle laserové rezanie kovov v 4 krokoch s dodaním do 24 alebo 48 hodín od potvrdenia objednávky.",
        totalTime: "PT48H",
        supply: [
          { "@type": "HowToSupply", name: "DXF, DWG alebo STEP výkres" },
        ],
        tool: [
          { "@type": "HowToTool", name: "CO₂ laser Bystronic ByVention 3015" },
        ],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Pošlite výkres",
            text: "Pošlite DXF, DWG, STEP alebo PDF výkres na laser@laser48.sk alebo cez kontaktný formulár. Stačí aj náčrt s rozmermi.",
            url: "https://www.laser48.sk/kontakt#formular",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Do 24 hodín máte cenu",
            text: "Expresnú cenovú ponuku s pevným termínom dodania pošleme do 24 hodín. Bez skrytých nákladov, finálna cena s DPH.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Výroba ide okamžite",
            text: "Po potvrdení objednávky preraďujeme zákazku na začiatok výroby. Priorita pred bežnými zákazkami, rezervovaná kapacita pre urgentné prípady.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Diel u vás do 24 alebo 48 hodín",
            text: "Express 48 hodín alebo urgentné 24 hodín od potvrdenia. Doručenie kuriérom (DPD, GLS, TopTrans) štandardne do 24 hodín v rámci SR a ČR od expedície.",
          },
        ],
      }} />

      {/* HERO */}
      <HeroSection
        title="Expresné laserové rezanie — diel do 24 alebo 48 hodín"
        perex="Keď vám stojí projekt, neriešite cenu. Riešite čas. Urgentné laserové rezanie kovov pre situácie, keď sa nedá čakať."
        bgImage="/images/hero-laser.png"
      >
        <Button href="/kontakt#formular">Pošlite výkres — do 24h máte cenu</Button>
        <PhoneButton />
      </HeroSection>

      {/* RYCHLE LASEROVE REZANIE - keyword targeting */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Rýchle laserové rezanie pre slovenské firmy" />
          <div className={styles.keywordIntro}>
            <p>
              Hľadáte <strong>rýchle laserové rezanie</strong> pre urgentnú zákazku?
              LASER48 je špecializovaná služba na rýchle rezanie laserom s dodaním
              do 24 alebo 48 hodín od potvrdenia objednávky.
            </p>
            <p>
              <strong>Rezanie laserom rýchlo</strong> nie je marketingový sľub — je
              to systém. Rezervovaná kapacita CO₂ laseru Bystronic, prioritné radenie
              urgentných zákaziek, kontrola každého kusu pred expedíciou. Preto vieme
              držať termín aj keď ostatní povedia &bdquo;najskôr o týždeň&ldquo;.
            </p>
            <p>
              <strong>Rýchle rezanie laserom kovov</strong> robíme pre nerezovú oceľ
              (0,5–6 mm), čiernu oceľ (0,5–8 mm), pozinkovanú oceľ (0,5–3 mm)
              a hliník (0,5–4 mm). Presnosť ±0,1 mm, max rozmer dielu 1540 × 750 mm.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLÉM */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Poznáte tú situáciu:" />
          <div className={styles.problemGrid}>
            <div className={styles.problemItem}>
              <AlertTriangle size={24} />
              <span>chýba jeden diel</span>
            </div>
            <div className={styles.problemItem}>
              <AlertTriangle size={24} />
              <span>montáž stojí</span>
            </div>
            <div className={styles.problemItem}>
              <AlertTriangle size={24} />
              <span>zákazník čaká</span>
            </div>
          </div>
          <p className={styles.problemText}>A všetci sa pozerajú na vás.</p>
          <div className={styles.problemConclusion}>
            <p>V tej chvíli nepotrebujete &bdquo;dodávateľa&ldquo;.</p>
            <p><strong>Potrebujete niekoho, kto to vyrieši rýchlo a bez chýb.</strong></p>
          </div>
        </div>
      </section>

      {/* RIEŠENIE */}
      <section className={styles.solutionSection}>
        <div className="container">
          <SectionHeading title="LASER48 EXPRES = priorita vo výrobe" center />
          <div className={styles.solutionGrid}>
            <div className={styles.solutionItem}>
              <Zap size={28} />
              <span>Okamžité spracovanie dopytu</span>
            </div>
            <div className={styles.solutionItem}>
              <Zap size={28} />
              <span>Presun na začiatok výroby</span>
            </div>
            <div className={styles.solutionItem}>
              <ShieldCheck size={28} />
              <span>Kontrola pred expedíciou</span>
            </div>
          </div>
          <p className={styles.solutionResult}>
            Výsledok: diel pripravený na montáž do 24–48h.
          </p>
        </div>
      </section>

      {/* PREČO TO FUNGUJE */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title={`Nie je to len \u201Erýchlejšie rezanie\u201C`}
            subtitle="Máme to nastavené systémovo."
          />
          <div className={styles.systemGrid}>
            <div className={styles.systemItem}>
              <CheckCircle size={20} />
              <span>Rezervovaná kapacita pre urgentné zákazky</span>
            </div>
            <div className={styles.systemItem}>
              <CheckCircle size={20} />
              <span>Rýchle rozhodovanie — žiadna byrokracia</span>
            </div>
            <div className={styles.systemItem}>
              <CheckCircle size={20} />
              <span>Kontrola každého kusu</span>
            </div>
          </div>
          <p className={styles.systemNote}>Preto vieme držať termíny.</p>
        </div>
      </section>

      {/* REALITA */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Koľko vás stojí 1 deň meškania?" />
          <div className={styles.costGrid}>
            <div className={styles.costItem}>
              <AlertTriangle size={20} />
              <span>zastavená výroba</span>
            </div>
            <div className={styles.costItem}>
              <AlertTriangle size={20} />
              <span>prestoje ľudí</span>
            </div>
            <div className={styles.costItem}>
              <AlertTriangle size={20} />
              <span>posunutý projekt</span>
            </div>
          </div>
          <p className={styles.costConclusion}>
            Často viac než celý diel.
          </p>
          <p className={styles.costEmphasis}>
            Preto expres nie je drahý. Je lacnejší než problém.
          </p>
        </div>
      </section>

      {/* ČO ZÍSKATE */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Čo získate" center />
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <CheckCircle size={28} className={styles.benefitIcon} />
              <h3>Diel bez kompromisov</h3>
              <p>Rýchlo ≠ zle. Kvalita ostáva.</p>
            </div>
            <div className={styles.benefitCard}>
              <Clock size={28} className={styles.benefitIcon} />
              <h3>Termín, ktorý platí</h3>
              <p>Nie &bdquo;skúsime&ldquo;. Ale dodáme.</p>
            </div>
            <div className={styles.benefitCard}>
              <Upload size={28} className={styles.benefitIcon} />
              <h3>Minimum komunikácie</h3>
              <p>Pošlete výkres. My riešime zvyšok.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AKO TO FUNGUJE */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Ako to funguje" center />
          <div className={styles.stepsGrid}>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>1</div>
              <h3>Pošlite výkres</h3>
              <p>DXF / DWG / STEP</p>
            </div>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>2</div>
              <h3>Do 24h máte cenu</h3>
              <p>Expresná ponuka + termín</p>
            </div>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>3</div>
              <h3>Výroba ide okamžite</h3>
              <p>Priorita pred bežnými zákazkami</p>
            </div>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>4</div>
              <h3>Diel máte hotový</h3>
              <p>24h / 48h — pripravený na montáž</p>
            </div>
          </div>
        </div>
      </section>

      {/* DORUCENIE KURIEROM 24H - capture courier-related AI Overview */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Doručenie kuriérom do 24 hodín" />
          <div className={styles.deliveryGrid}>
            <div className={styles.deliveryCard}>
              <Truck size={32} className={styles.deliveryIcon} />
              <h3>Slovensko</h3>
              <p>
                DPD, GLS, TopTrans — doručenie <strong>do 24 hodín</strong> od
                expedície na celé územie SR.
              </p>
            </div>
            <div className={styles.deliveryCard}>
              <Truck size={32} className={styles.deliveryIcon} />
              <h3>Česká republika</h3>
              <p>
                Kuriér do ČR — štandardne <strong>1 pracovný deň</strong> po
                expedícii. Pri urgentných express zákazkách aj do 24 hodín.
              </p>
            </div>
            <div className={styles.deliveryCard}>
              <Truck size={32} className={styles.deliveryIcon} />
              <h3>Vlastný rozvoz</h3>
              <p>
                Trenčiansky a Žilinský kraj — vlastný rozvoz priamo k zákazníkovi
                ~1× týždenne. Osobný odber Púchov zadarmo.
              </p>
            </div>
          </div>
          <p className={styles.deliveryNote}>
            <strong>Express 24h výroba + 24h kuriér = diel u vás do 48 hodín od objednávky.</strong>
          </p>
        </div>
      </section>

      {/* PRE KOHO / NIE PRE KOHO */}
      <section className="section-alt">
        <div className="container">
          <div className={styles.filterGrid}>
            <div className={styles.filterYes}>
              <h3><CheckCircle size={24} /> Pre koho:</h3>
              <ul>
                <li>urgentné zákazky</li>
                <li>chýbajúce diely</li>
                <li>prototypy</li>
              </ul>
            </div>
            <div className={styles.filterNo}>
              <h3><XCircle size={24} /> Pre koho NIE:</h3>
              <ul>
                <li>keď rozhoduje len cena</li>
                <li>keď nevadí čakať mesiac</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCIE */}
      <section className="section">
        <div className="container">
          <div className={styles.quotes}>
            <blockquote className={styles.quoteItem}>
              &ldquo;Zachránili nám projekt za 48 hodín.&rdquo;
            </blockquote>
            <blockquote className={styles.quoteItem}>
              &ldquo;Rýchlosť bez výhovoriek.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* TECHNICKÉ PARAMETRE */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Technické parametre expresnej výroby" center />
          <table className={styles.techTable}>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Hodnota</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Express dodanie</td><td>48 hodín od potvrdenia</td></tr>
              <tr><td>Urgentné dodanie</td><td>24 hodín (kritické prípady)</td></tr>
              <tr><td>Materiály</td><td>Nerezová oceľ, čierna oceľ, hliník, pozinkovaná oceľ</td></tr>
              <tr><td>Hrúbky</td><td>0.5 – 8 mm (podľa materiálu)</td></tr>
              <tr><td>Max rozmer dielu</td><td>1540 × 750 mm</td></tr>
              <tr><td>Presnosť</td><td>±0.1 mm</td></tr>
              <tr><td>Laser</td><td>CO₂ laser Bystronic ByVention 3015, 2.2 kW</td></tr>
              <tr><td>Formáty výkresu</td><td>DXF, DWG, STEP, PDF</td></tr>
              <tr><td>Cenová ponuka</td><td>Do 24 hodín</td></tr>
              <tr><td>Minimálna objednávka</td><td>1 kus</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Máte problém dnes? Riešime ho dnes."
        text="Pošlite výkres — do 24h máte cenu. Expres do 48h. Kritické prípady do 24h."
        buttonText="Pošlite výkres — do 24h máte cenu"
        note={`Alebo zavolajte: ${PHONE}`}
      />
    </>
  );
}
