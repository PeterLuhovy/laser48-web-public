import Image from "next/image";
import Link from "next/link";
import {
  Upload,
  Euro,
  Clock,
  Zap,
  Phone,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import StatCounter from "@/components/StatCounter";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Laserové rezanie do 7 dní. Garantované."
        perex="Potrebuješ laserové diely rýchlo? Pošli výkres, cenovú ponuku dostaneš do 24 hodín a do 7 dní máš hotovo. Potrebuješ rýchlejšie? Express 48h za +50%."
        bgImage="/images/hero-laser.png"
      >
        <Button href="/kontakt">Pošli dopyt →</Button>
        <Button href="tel:+421911132485" variant="secondaryLight">
          <Phone size={16} /> Zavolaj nám
        </Button>
      </HeroSection>

      {/* AKO TO FUNGUJE - 3 kroky */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Ako to funguje?" center />
          <div className={styles.steps}>
            <Card icon={Upload} step="Krok 1" title="Pošli výkres">
              <p>Pošli DXF, DWG alebo PDF výkres. Vyber materiál a hrúbku.</p>
            </Card>
            <Card icon={Euro} step="Krok 2" title="Ponuka do 24 hodín">
              <p>Spočítame cenu a pošleme ti ponuku. Odpovieme do 24 hodín.</p>
            </Card>
            <Card icon={Clock} step="Krok 3" title="Do 7 dní máte diely">
              <p>
                Začíname vyrábať po potvrdení. Do 7 dní máš diely u teba.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* PREČO LASER48 - 4 dôvody */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Prečo LASER48?" center />
          <div className={styles.reasons}>
            <Card icon={Zap} title="7 dní štandard">
              <p>
                Štandardné dodanie do 7 dní. Express 48h za +50%.
                Spoľahlivé termíny.
              </p>
            </Card>
            <Card icon={Euro} title="Ponuka do 24 hodín">
              <p>
                Pošli výkres, cenovú ponuku dostaneš do 24 hodín. Transparentne.
              </p>
            </Card>
            <Card icon={Phone} title="Priama komunikácia">
              <p>
                Telefón, email — reálni ľudia. Nie chatboty. Nie automaty.
                Pomôžeme vždy.
              </p>
            </Card>
            <Card icon={CheckCircle} title="Flexibilita">
              <p>
                Zmena výkresu kým nie je vo výrobe? Žiadny problém. Sme
                flexibilní.
              </p>
            </Card>
            <Card icon={ShieldCheck} title="Kontrola každého kusu">
              <p>
                Každý diel kontrolujeme. Okuje a otrepy odstraňujeme ručne.
                Dostaneš čisté diely, pripravené na použitie.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* KVALITA - Porovnanie */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Prišli vám takéto diely?"
            subtitle="Od iných dodávateľov? U nás sa to nestane."
            center
          />
          <div className={styles.comparison}>
            <div className={styles.comparisonBad}>
              <div className={styles.comparisonImg}>
                <Image
                  src="/images/otrepy-konkurencia.webp"
                  alt="Diel s otrepmi od bežného dodávateľa"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.comparisonLabel}>
                <span className={styles.labelBad}>✗ Bežný dodávateľ</span>
                <p>Otrepy, okuje, špatné hrany. Musíš dodatočne opracovávať.</p>
              </div>
            </div>
            <div className={styles.comparisonGood}>
              <div className={styles.comparisonImg}>
                <Image
                  src="/images/rezne-hrany.jpg"
                  alt="Čistý diel od LASER48"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.comparisonLabel}>
                <span className={styles.labelGood}>✓ LASER48</span>
                <p>Každý kus skontrolovaný. Okuje a otrepy odstránené ručne. Pripravené na použitie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ČO REŽEME - Materiály */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading
            title="Čo režeme?"
            subtitle="Laserové rezanie kovov. Nerezová oceľ, čierna oceľ, hliník."
            center
          />
          <div className={styles.materials}>
            <div className={styles.materialCard}>
              <div className={styles.materialImg}>
                <Image
                  src="/images/rezne-hrany.jpg"
                  alt="Nerezová oceľ"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.materialBody}>
                <h3>Nerezová oceľ</h3>
                <p>Hrúbka: 0.5 – 6 mm</p>
                <p>Max rozmer: 1540 × 750 mm</p>
              </div>
            </div>

            <div className={styles.materialCard}>
              <div className={styles.materialImg}>
                <Image
                  src="/images/diel-nerez.jpg"
                  alt="Čierna oceľ"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.materialBody}>
                <h3>Čierna oceľ</h3>
                <p>Hrúbka: 0.55 – 8 mm</p>
                <p>Max rozmer: 1540 × 750 mm</p>
              </div>
            </div>

            <div className={styles.materialCard}>
              <div className={styles.materialImg}>
                <Image
                  src="/images/stroj-byvention.jpg"
                  alt="Hliník"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.materialBody}>
                <h3>Hliník</h3>
                <p>Hrúbka: 1.5 – 4 mm</p>
                <p>Max rozmer: 1540 × 750 mm</p>
              </div>
            </div>
          </div>
          <p className={styles.materialNote}>
            Potrebuješ iný materiál alebo veľkosť?{" "}
            <Link href="/kontakt">Kontaktuj nás →</Link>
          </p>
        </div>
      </section>

      {/* REFERENCIE */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Čo hovoria naši zákazníci" center />
          <div className={styles.testimonials}>
            <TestimonialCard
              quote="Keď potrebujem rýchlo, volám LASER48. Vždy stihli termín. Vždy."
              name="Ján Novák"
              company="TechAutomation s.r.o."
            />
            <TestimonialCard
              quote="Cenová ponuka do 24 hodín. Konečne niekto kto ma nenecháva čakať týždeň."
              name="Mária Kováčová"
              company="ProtoMech"
            />
            <TestimonialCard
              quote="Museli sme zmeniť výkres kým ešte neboli vo výrobe. Žiadny problém. Flexibilita."
              name="Peter Horváth"
              company="AutoParts SK"
            />
          </div>
        </div>
      </section>

      {/* V ČÍSLACH */}
      <section className="section-dark">
        <div className="container">
          <SectionHeading title="LASER48 v číslach" center />
          <div className={styles.stats}>
            <StatCounter value="5 000+" label="Objednávok dodaných" dark />
            <StatCounter value="500+" label="Spokojných zákazníkov" dark />
            <StatCounter value="98%" label="Termíny stihnuté" dark />
            <StatCounter value="7 dní" label="Štandardná dodacia lehota" dark />
          </div>
        </div>
      </section>

      {/* FINÁLNA CTA */}
      <CTASection
        title="Potrebuješ laserové diely?"
        text="Pošli výkres, cenovú ponuku dostaneš do 24 hodín a do 7 dní máš hotovo. Express 48h za +50% ak potrebuješ rýchlejšie."
        buttonText="Pošli dopyt →"
        note="Odpovieme do 24 hodín v pracovné dni."
      />
    </>
  );
}
