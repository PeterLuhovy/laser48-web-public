import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { PHONE, PHONE_TEL, EMAIL, EMAIL_MAILTO, HOURS_SHORT } from "@/config";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Služby - Laserové rezanie kovov",
  description:
    "Laserové rezanie do 7 dní. Nerezová oceľ, čierna oceľ, hliník. Cenová ponuka do 24h.",
};

const faqItems = [
  {
    question: "Ktoré materiály režete?",
    answer:
      "Nerezová oceľ AISI 304/316 (0.5–6mm), čierna oceľ DC01/S235/C45 (0.5–8mm), pozinkovaná oceľ DX51D (0.5–3mm), hliník AlMg3 (0.5–4mm).",
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
      "Štandard 7 dní. Express 48h alebo 24h za príplatok. Ekonomické 28 dní so zľavou.",
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
            subtitle="Nerezová oceľ, čierna oceľ, hliník. Do 7 dní štandard. Do 48 hodín keď treba. Do 24 hodín keď to horí."
          />

          <div className={styles.specGrid}>
            <div>
              <h3 className={styles.specSection}>
                <CheckCircle size={20} color="var(--color-primary)" /> Materiály
              </h3>
              <ul className={styles.specList}>
                <li><strong>Nerezová oceľ (0.5–6 mm)</strong><br /><span className={styles.specSubtext}>AISI 304 / 1.4301 · AISI 316 / 1.4401</span></li>
                <li><strong>Čierna oceľ (0.5–8 mm)</strong><br /><span className={styles.specSubtext}>DC01 / 1.0330 · S235 / 1.0038 · C45 / 1.0503</span></li>
                <li><strong>Pozinkovaná oceľ (0.5–3 mm)</strong><br /><span className={styles.specSubtext}>DX51D / 1.0226</span></li>
                <li><strong>Hliník (0.5–4 mm)</strong><br /><span className={styles.specSubtext}>AlMg3 / 3.3535</span></li>
              </ul>
            </div>

            <div>
              <h3 className={styles.specSection}>
                <CheckCircle size={20} color="var(--color-primary)" /> Formát
              </h3>
              <ul className={styles.specList}>
                <li>Maximálny rozmer: 1540 × 750 mm</li>
                <li>Presnosť: ±0.1 mm</li>
              </ul>
            </div>

            <div>
              <h3 className={styles.specSection}>
                <CheckCircle size={20} color="var(--color-primary)" /> Dodanie
              </h3>
              <ul className={styles.specList}>
                <li>Štandard: 7 dní</li>
                <li>Express: 48 hodín (za príplatok)</li>
                <li>Extra rýchle: 24 hodín (za príplatok)</li>
                <li>Ekonomické: 28 dní (so zľavou)</li>
              </ul>
            </div>

            <div>
              <h3 className={styles.specSection}>
                <CheckCircle size={20} color="var(--color-primary)" /> Cena
              </h3>
              <ul className={styles.specList}>
                <li>Cenová ponuka do 24 hodín</li>
                <li>Transparentne, bez skrytých poplatkov</li>
              </ul>
            </div>

            <div>
              <h3 className={styles.specSection}>
                <CheckCircle size={20} color="var(--color-primary)" /> Kvalita
              </h3>
              <ul className={styles.specList}>
                <li>Kontrola každého kusu pred odoslaním</li>
                <li>Otrepy a okuje? Odstránené pred odoslaním</li>
                <li>Čisté diely pripravené na použitie</li>
                <li>Aj pri 5 000 kusoch — každý skontrolovaný</li>
              </ul>
            </div>
          </div>

          <div className={styles.specCta}>
            <Button href="/kontakt#formular">Pošli dopyt →</Button>
          </div>
        </div>
      </section>

      {/* Ako objednať */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Ako objednať?" center />
          <div className={styles.orderGrid}>
            <div className={styles.orderOption}>
              <h3>1. Email</h3>
              <p className={styles.orderText}>
                Pošli výkres na <a href={EMAIL_MAILTO}>{EMAIL}</a>.
                Odpovieme do 24 hodín.
              </p>
              <Button href="/kontakt" size="md">Pošli dopyt →</Button>
            </div>
            <div className={styles.orderOption}>
              <h3>2. Telefón</h3>
              <p className={styles.orderText}>
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
        <div className={`container ${styles.faqContainer}`}>
          <SectionHeading title="Často kladené otázky" center />
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTASection
        title="Pripravený objednať?"
        text="Pošli výkres a cenovú ponuku dostaneš do 24 hodín. Štandard 7 dní, express 48h alebo 24h za príplatok."
        buttonText="Objednaj teraz →"
      />
    </>
  );
}
