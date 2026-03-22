import type { Metadata } from "next";
import { Clock, Zap, CreditCard, Truck } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ako to funguje?",
  description:
    "3 jednoduché kroky: Pošli výkres → Ponuka do 24h → Do 7 dní máš diely. Žiadne zložité procesy.",
};

const faqItems = [
  {
    question: "Kedy začínate vyrábať?",
    answer:
      "Do 2 hodín od potvrdenia objednávky a platby (v pracovných hodinách).",
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
      <HeroSection
        title="Ako to funguje?"
        perex="Objednať u nás je jednoduché. 3 kroky a máš hotovo."
        bgImage="/images/hero-laser.png"
        small
      />

      {/* 3 kroky detailne */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3xl)" }}>
            <div>
              <SectionHeading title="1. Pošli výkres" />
              <p style={{ marginBottom: "var(--space-md)" }}>
                Pošli svoj výkres na email alebo cez kontaktný formulár.
                Spočítame cenu a pošleme ti ponuku.
              </p>
              <h4 style={{ marginBottom: "var(--space-sm)" }}>Čo potrebujeme:</h4>
              <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "var(--space-xs)", marginBottom: "var(--space-md)" }}>
                <li>✓ Výkres: DXF, DWG alebo PDF formát</li>
                <li>✓ Materiál: nerezová oceľ / čierna oceľ / hliník</li>
                <li>✓ Hrúbka: napr. 3 mm</li>
                <li>✓ Počet kusov: napr. 10 ks</li>
              </ul>
              <p style={{ color: "var(--color-text-secondary)", fontStyle: "italic" }}>
                💡 Nemáš hotový výkres? Pošli nám náčrt, fotografiu alebo popis.
                Pomôžeme ti vytvoriť CAD výkres (zadarmo pre objednávky nad 200 EUR).
              </p>
            </div>

            <div>
              <SectionHeading title="2. Ponuka do 24 hodín" />
              <p style={{ marginBottom: "var(--space-md)" }}>
                Spočítame cenu a pošleme ti cenovú ponuku.
                Uvidíš presnú cenu vrátane materiálu, práce a DPH.
                Odpovieme do 24 hodín v pracovné dni.
              </p>
              <div style={{ background: "var(--color-bg-light)", padding: "var(--space-lg)", borderRadius: "var(--radius-md)", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)" }}>
                <p style={{ fontWeight: 600, marginBottom: "var(--space-sm)" }}>Príklad výpočtu:</p>
                <p>10 kusov | nerezová oceľ 3mm | 100×100mm</p>
                <br />
                <p>Materiál: 45 EUR</p>
                <p>Práca: 68 EUR</p>
                <p>Dodanie: 0 EUR (štandard 7 dní)</p>
                <hr style={{ margin: "var(--space-sm) 0", border: "none", borderTop: "1px solid var(--color-border)" }} />
                <p>Spolu bez DPH: 113 EUR</p>
                <p>DPH 20%: 23 EUR</p>
                <p style={{ fontWeight: 700 }}>Celkom: 136 EUR</p>
              </div>
            </div>

            <div>
              <SectionHeading title="3. Do 7 dní máte diely" />
              <p style={{ marginBottom: "var(--space-md)" }}>
                Po potvrdení objednávky a platby začíname vyrábať.
                Do 7 pracovných dní máš diely u teba.
                Potrebuješ rýchlejšie? Express 48h za +50%.
              </p>
              <div style={{ background: "var(--color-bg-light)", padding: "var(--space-lg)", borderRadius: "var(--radius-md)", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)" }}>
                <p style={{ fontWeight: 600, marginBottom: "var(--space-sm)" }}>Timeline:</p>
                <p>Pondelok → Objednávka potvrdená</p>
                <p>Utorok–Štvrtok → Výroba</p>
                <p>Piatok → Expedované kuriérom</p>
                <p style={{ fontWeight: 700 }}>Pondelok → Dodané ✓</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Express */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Potrebuješ rýchlejšie?" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-xl)", maxWidth: "900px", margin: "0 auto" }}>
            <Card icon={Clock} title="Ekonomické 28 dní">
              <p>-10% zľava. Pre projekty bez časového tlaku.</p>
            </Card>
            <Card icon={Zap} title="Štandard 7 dní">
              <p>Bez príplatku. Naša štandardná rýchlosť.</p>
            </Card>
            <Card icon={Zap} title="Express 48h">
              <p>+50% príplatok. Pre urgentné projekty.</p>
            </Card>
            <Card icon={Zap} title="Extra rýchle 24h">
              <p>+100% príplatok. Podľa dohody a dostupnosti.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Platba a doprava */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Platba a doprava" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-xl)", maxWidth: "900px", margin: "0 auto" }}>
            <Card icon={CreditCard} title="Platba">
              <p><strong>Nový zákazník:</strong> Predfaktúra, online platba kartou, alebo dobierka.</p>
              <br />
              <p><strong>Overený zákazník (po 3+ objednávkach):</strong> Faktúra so splatnosťou 14 dní.</p>
            </Card>
            <Card icon={Truck} title="Doprava">
              <p><strong>Kuriér SK:</strong> 5–10 EUR (podľa hmotnosti)</p>
              <p><strong>Kuriér CZ:</strong> 10–15 EUR</p>
              <p><strong>Osobný odber Púchov:</strong> Zadarmo</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: "800px" }}>
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
