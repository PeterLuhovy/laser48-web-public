import type { Metadata } from "next";
import { Clock, Zap, CreditCard, Truck } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Ako to funguje?",
  description:
    "3 jednoduché kroky: Pošli výkres → Ponuka do 24h → Do 7 dní máš diely. Žiadne zložité procesy.",
};

const faqItems = [
  {
    question: "Kedy začínate vyrábať?",
    answer:
      "Urgentné do 24h — okamžite. Express 48h — zvyčajne na druhý deň. Ostatné podľa kapacity.",
  },
  {
    question: "Môžem zmeniť výkres po objednaní?",
    answer: "Áno, ak ešte nie je vo výrobe. Zmeny sú bez poplatku.",
  },
  {
    question: "Ako viem že diely sú hotové?",
    answer:
      "Pošleme ti email keď budú diely hotové a odoslané.",
  },
  {
    question: "Čo ak si to rozmyslím?",
    answer:
      "Ak sme ešte nezačali vyrábať, vrátime peniaze. Ak už vyrábame, bohužiaľ nie.",
  },
];

export default function AkoToFungujePage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.laser48.sk" },
          { "@type": "ListItem", position: 2, name: "Ako to funguje", item: "https://www.laser48.sk/ako-to-funguje" },
        ],
      }} />
      <HeroSection
        title="Ako to funguje?"
        perex="Objednať u nás je jednoduché. 3 kroky a máš hotovo."
        bgImage="/images/hero-laser.png"
        small
      />

      {/* 3 kroky detailne */}
      <section className="section">
        <div className={`container ${styles.stepsContainer}`}>
          <div className={styles.stepsList}>
            <div>
              <SectionHeading title="1. Pošli výkres" />
              <p className={styles.stepText}>
                Pošli svoj výkres na email alebo cez kontaktný formulár.
                Spočítame cenu a pošleme ti ponuku.
              </p>
              <h4 className={styles.stepSubheading}>Čo potrebujeme:</h4>
              <ul className={styles.checkList}>
                <li>✓ Výkres: DXF, DWG alebo PDF formát</li>
                <li>✓ Materiál: nerezová oceľ / čierna oceľ / hliník</li>
                <li>✓ Hrúbka: napr. 3 mm</li>
                <li>✓ Počet kusov: napr. 10 ks</li>
                <li>✓ Termín: kedy diely potrebuješ</li>
              </ul>
              <p className={styles.tipNote}>
                Nemáš hotový výkres? Pošli nám náčrt, fotografiu alebo popis.
                Pomôžeme ti vytvoriť CAD výkres.
              </p>
            </div>

            <div>
              <SectionHeading title="2. Ponuka do 24 hodín" />
              <p className={styles.stepText}>
                Spočítame cenu a pošleme ti cenovú ponuku.
                Uvidíš presnú cenu vrátane DPH.
                Odpovieme do 24 hodín v pracovné dni.
              </p>
            </div>

            <div>
              <SectionHeading title="3. Do 7 dní máte diely" />
              <p className={styles.stepText}>
                Po potvrdení objednávky a platby začíname vyrábať.
                Do 7 pracovných dní máš diely u seba.
                Potrebuješ rýchlejšie? Express 48h alebo 24h za príplatok.
              </p>
              <div className={styles.timeline}>
                <p className={styles.timelineBold}>Timeline:</p>
                <p>Pondelok → Objednávka potvrdená</p>
                <p>Utorok–Štvrtok → Výroba</p>
                <p>Piatok → Expedované kuriérom</p>
                <p className={styles.timelineResult}>Pondelok → Dodané ✓</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Express */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Kedy to potrebuješ?" center />
          <div className={styles.deliveryGrid}>
            <Card icon={Zap} title="24 hodín">
              <p>Keď to horí. Za príplatok, podľa dostupnosti.</p>
            </Card>
            <Card icon={Zap} title="48 hodín">
              <p>Express. Za príplatok.</p>
            </Card>
            <Card icon={Clock} title="7 dní">
              <p>Štandard. Bez príplatku.</p>
            </Card>
            <Card icon={Clock} title="28 dní">
              <p>Ekonomické. So zľavou.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Platba a doprava */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Platba a doprava" center />
          <div className={styles.paymentGrid}>
            <Card icon={CreditCard} title="Platba">
              <p>Predfaktúra alebo faktúra podľa dohody. Pri urgentných objednávkach platba vopred.</p>
            </Card>
            <Card icon={Truck} title="Doprava">
              <p><strong>Kuriér SK a CZ:</strong> Podľa hmotnosti</p>
              <p><strong>Trenčiansky a Žilinský kraj:</strong> Vlastný rozvoz ~1× týždenne</p>
              <p><strong>Osobný odber Púchov:</strong> Zadarmo</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt">
        <div className={`container ${styles.faqContainer}`}>
          <SectionHeading title="Máš otázky?" center />
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTASection
        title="Pripravený začať?"
        text="3 kroky. Ponuka do 24h. Diely do 7 dní. Jednoducho a rýchlo."
        buttonText="Objednaj teraz →"
      />
    </>
  );
}
