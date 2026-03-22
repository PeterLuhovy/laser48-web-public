import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { PHONE, PHONE_TEL, EMAIL, EMAIL_MAILTO, HOURS_SHORT } from "@/config";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Služby - Laserové rezanie kovov",
  description:
    "Laserové rezanie do 7 dní. Nerezová oceľ, čierna oceľ, hliník. Cenová ponuka do 24h.",
};

const faqItems = [
  {
    question: "Ktoré materiály režete?",
    answer:
      "Nerezová oceľ (0.5–6mm), čierna oceľ (0.55–8mm), hliník (1.5–4mm).",
  },
  {
    question: "Aký je maximálny rozmer?",
    answer: "1540 × 750 mm.",
  },
  {
    question: "Koľko to stojí?",
    answer:
      "Závisí od materiálu, hrúbky a dĺžky rezu. Pošli výkres — cenovú ponuku dostaneš do 24h.",
  },
  {
    question: "Ako dlho čakám na diely?",
    answer:
      "Štandard 7 dní. Express 48h (+50%), extra rýchle 24h (+100%), ekonomické 28 dní (-10%).",
  },
];

export default function SluzbyPage() {
  return (
    <>
      <HeroSection
        title="Čo robíme?"
        perex="Špecializujeme sa na rýchle dodanie laserových dielov pre malé a stredné firmy."
        bgImage="/images/stroj-byvention.jpg"
        small
      />

      {/* Hlavná služba */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Laserové rezanie kovov"
            subtitle="Naša hlavná služba. Nerezová oceľ, čierna oceľ, hliník. Štandardné dodanie do 7 dní."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-xl)" }}>
            <div>
              <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "var(--space-md)" }}>
                <CheckCircle size={20} color="var(--color-primary)" /> Materiály
              </h3>
              <ul style={{ paddingLeft: "1.75rem", display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
                <li>Nerezová oceľ (hrúbka 0.5 – 6 mm)</li>
                <li>Čierna oceľ (hrúbka 0.55 – 8 mm)</li>
                <li>Hliník (hrúbka 1.5 – 4 mm)</li>
              </ul>
            </div>

            <div>
              <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "var(--space-md)" }}>
                <CheckCircle size={20} color="var(--color-primary)" /> Formát
              </h3>
              <ul style={{ paddingLeft: "1.75rem", display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
                <li>Maximálny rozmer: 1540 × 750 mm</li>
                <li>Presnosť: ±0.1 mm</li>
              </ul>
            </div>

            <div>
              <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "var(--space-md)" }}>
                <CheckCircle size={20} color="var(--color-primary)" /> Dodanie
              </h3>
              <ul style={{ paddingLeft: "1.75rem", display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
                <li>Štandard: 7 dní</li>
                <li>Express: 48 hodín (+50%)</li>
                <li>Extra rýchle: 24 hodín (+100%)</li>
                <li>Ekonomické: 28 dní (-10%)</li>
              </ul>
            </div>

            <div>
              <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "var(--space-md)" }}>
                <CheckCircle size={20} color="var(--color-primary)" /> Cena
              </h3>
              <ul style={{ paddingLeft: "1.75rem", display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
                <li>Cenová ponuka do 24 hodín</li>
                <li>Transparentne, bez skrytých poplatkov</li>
              </ul>
            </div>

            <div>
              <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "var(--space-md)" }}>
                <CheckCircle size={20} color="var(--color-primary)" /> Kvalita
              </h3>
              <ul style={{ paddingLeft: "1.75rem", display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
                <li>Kontrola každého kusu pred odoslaním</li>
                <li>Otrepy a okuje? Odstránené pred odoslaním</li>
                <li>Čisté diely pripravené na použitie</li>
                <li>Aj pri 5 000 kusoch — každý skontrolovaný</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: "var(--space-2xl)", textAlign: "center" }}>
            <Button href="/kontakt#formular">Pošli dopyt →</Button>
          </div>
        </div>
      </section>

      {/* Ako objednať */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Ako objednať?" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-xl)", maxWidth: "700px", margin: "0 auto" }}>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ marginBottom: "var(--space-sm)" }}>1. Email</h3>
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-md)" }}>
                Pošli výkres na <a href={EMAIL_MAILTO}>{EMAIL}</a>.
                Odpovieme do 24 hodín.
              </p>
              <Button href="/kontakt" size="md">Pošli dopyt →</Button>
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ marginBottom: "var(--space-sm)" }}>2. Telefón</h3>
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-md)" }}>
                Zavolaj na <a href={PHONE_TEL}>{PHONE}</a>.
                {HOURS_SHORT}.
              </p>
              <Button href={PHONE_TEL} variant="secondary" size="md">Zavolaj →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <SectionHeading title="Často kladené otázky" center />
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTASection
        title="Pripravený objednať?"
        text="Pošli výkres a cenovú ponuku dostaneš do 24 hodín. Do 7 dní máš diely u teba."
        buttonText="Objednaj teraz →"
      />
    </>
  );
}
