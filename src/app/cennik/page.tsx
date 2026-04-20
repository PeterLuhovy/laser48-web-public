import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cenník laserového rezania 2026 — Ponuka do 24 h",
  description:
    "Transparentný cenník laserového rezania kovov 2026. Cenová ponuka vrátane materiálu a DPH do 24 hodín. Nerez, hliník, čierna oceľ. Púchov, Slovensko.",
  alternates: { canonical: "/cennik" },
  openGraph: {
    title: "Cenník laserového rezania 2026 — Ponuka do 24 h | LASER48",
    description:
      "Transparentný cenník. Cenová ponuka do 24 hodín vrátane materiálu a DPH. Nerez, hliník, čierna oceľ.",
    url: "https://www.laser48.sk/cennik",
  },
};

const faqItems = [
  {
    question: "Prečo nemôžem vidieť cenu bez poslania výkresu?",
    answer:
      "Každý výkres je jedinečný. Cena závisí od dĺžky rezu, počtu dier, zložitosti a termínu dodania. Pošlite nám výkres a ponuku dostanete do 24 hodín.",
  },
  {
    question: "Sú v cene zahrnuté materiál a DPH?",
    answer:
      "Áno. Cena v ponuke je finálna s DPH. Žiadne skryté poplatky.",
  },
  {
    question: "Môžem dostať individuálnu cenu pre veľkú sériu?",
    answer:
      "Áno. Ak potrebujete viac ako 500 kusov mesačne, napíšte nám. Dohodneme individuálnu cenu.",
  },
  {
    question: "Máte zľavy pri väčších objednávkach?",
    answer:
      "Áno. Pri väčších objemoch alebo pravidelných objednávkach dohodneme individuálnu cenu. Napíšte nám.",
  },
];

export default function CennikPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.laser48.sk" },
          { "@type": "ListItem", position: 2, name: "Cenník", item: "https://www.laser48.sk/cennik" },
        ],
      }} />
      <HeroSection
        title="Cenník laserového rezania"
        perex="Naša cena závisí od materiálu, hrúbky, počtu kusov, dĺžky rezu a termínu dodania. Pošlite nám výkres a cenovú ponuku dostanete do 24 hodín."
        small
      />

      {/* Hlavný CTA */}
      <section className={`section ${styles.mainCta}`}>
        <div className="container">
          <SectionHeading
            title="Cenová ponuka do 24 hodín"
            subtitle="Pošlite nám výkres a my vám pošleme cenovú ponuku vrátane materiálu, práce a DPH. Transparentne a bez záväzkov."
            center
          />
          <Button href="/kontakt#formular" size="lg">Pošlite dopyt →</Button>
          <div className={styles.ctaFeatures}>
            <span className={styles.ctaFeature}>✓ Odpovieme do 24 hodín</span>
            <span className={styles.ctaFeature}>✓ Vrátane materiálu a DPH</span>
            <span className={styles.ctaFeature}>✓ Žiadne skryté poplatky</span>
          </div>
        </div>
      </section>

      {/* Tabuľky materiálov */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Orientačný cenník" subtitle="Materiály na sklade. Presná cena závisí od zložitosti výkresu." />

          <h3 className={styles.tableHeading}>Nerezová oceľ AISI 304 / AISI 316</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Hrúbka</th>
                <th>Max rozmer</th>
                <th>Poznámka</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["0.5 mm", "1540×750mm", "Valcované za studena"],
                ["1 mm", "1540×750mm", "Valcované za studena"],
                ["1.5 mm", "1540×750mm", "Valcované za studena"],
                ["2 mm", "1540×750mm", "Valcované za studena"],
                ["3 mm", "1540×750mm", "Valcované za tepla"],
                ["4 mm", "1540×750mm", "Valcované za tepla"],
                ["5 mm", "1540×750mm", "Valcované za tepla"],
                ["6 mm", "1540×750mm", "Valcované za tepla"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((c, j) => (
                    <td key={j}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className={styles.tableHeading}>Čierna oceľ DC01 / S235 / C45</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Hrúbka</th>
                <th>Materiál</th>
                <th>Max rozmer</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["0.5 mm", "DX51D+Z200NAC (zinkovaný)", "1540×750mm"],
                ["1 mm", "DC01", "1540×750mm"],
                ["1.5 mm", "DC01", "1540×750mm"],
                ["2 mm", "DC01", "1540×750mm"],
                ["3 mm", "DC01 / C45", "1540×750mm"],
                ["4 mm", "S235", "1540×750mm"],
                ["5 mm", "S235", "1540×750mm"],
                ["6 mm", "S235 / C45", "1540×750mm"],
                ["8 mm", "S235", "1540×750mm"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((c, j) => (
                    <td key={j}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className={styles.tableHeading}>Hliník (AlMg3)</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Hrúbka</th>
                <th>Max rozmer</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1.5 mm", "1540×750mm"],
                ["2 mm", "1540×750mm"],
                ["4 mm", "1540×750mm"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((c, j) => (
                    <td key={j}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }} />
      <section className="section">
        <div className={`container ${styles.faqContainer}`}>
          <SectionHeading title="Otázky o cene?" center />
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTASection
        title="Pripravený zistiť presnú cenu?"
        text="Pošlite výkres. Ponuka do 24 hodín. Žiadne prekvapenia."
        buttonText="Pošlite dopyt →"
        note="Alebo pošlite výkres na laser@laser48.sk"
      />
    </>
  );
}
