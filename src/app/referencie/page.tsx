import type { Metadata } from "next";
import { PHONE, YEARS_ON_MARKET, FOUNDED_YEAR } from "@/config";
import {
  Bot, Car, Wrench, Lightbulb, Building, Megaphone,
  AlertTriangle, CheckCircle,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import StatCounter from "@/components/StatCounter";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Referencie - Spokojní zákazníci",
  description:
    "Čo hovoria naši zákazníci. Rýchlosť, kvalita, spoľahlivosť. Viac ako 500 000 dodaných dielov.",
};

const testimonials = [
  { quote: "Vy ste super. Keď to objednám od vás, príde vždy na čas. Ani nie skôr, ani nie neskôr. Presne v ten deň ako poviete." },
  { quote: "Páči sa mi ako dodávate. Faktúry, balenie — máte to také pekné, profesionálne." },
  { quote: "Poslali sme zlé podklady, zákazka už bola vyrobená a dodaná. Poslali sme nové výkresy a za 24 hodín sme mali novú zákazku. Bez problémov." },
  { quote: "Predchádzajúci dodávateľ dodával stovky kusov a vždy sa desiatky percent vracali kvôli okujám. Od LASER48 sú všetky diely perfektné, pripravené rovno na montáž." },
  { quote: "Keď potrebujeme diely rýchlo, rovno hovoríme — dajte to LASER48, ani sa o tom nebavme." },
  { quote: "Keď inde chcem diely do 48 hodín, je to vždy 'no, možno, uvidíme, opýtam sa vo výrobe'. Tu? Nech sa páči, máte to do 48 hodín." },
  { quote: "Keď objednávam inde, chcú presné špecifikácie, materiálové normy, pomaly zloženie plechu. Ja chcem len vyrezať pár dielov. Tu poviem že chcem oceľ, opýtajú sa či stačí bežná, a režeme." },
  { quote: "Diely do 24 hodín od objednávky. Ako že dnes pošlem a zajtra ráno to mám pripravené? To vážne? Áno, vážne." },
  { quote: "Ako údržbár pri odstávke nemám pri sebe konštruktéra a diely potrebujem hneď. Načiariam to na kus A4-ky a kľudne na druhý deň mám hotový diel v ruke." },
  { quote: "Keď potrebujem rýchlo jeden kus, inde mám stres už len z toho ako so mnou budú jednať. Tu zavolám, chcem jeden kus, a správajú sa ku mne akoby som objednával 1 000." },
  { quote: "Keď potrebujem rýchlo, volám LASER48. Vždy stihli termín. Vždy. A keď raz bola komplikácia, riešili to okamžite bez výhovoriek." },
  { quote: "Cenová ponuka do 24 hodín. Konečne niekto kto ma nenecháva čakať týždeň na ponuku. Presne čo potrebujem pre prototypovú výrobu." },
  { quote: "Museli sme zmeniť výkres kým ešte neboli vo výrobe. Zavolal som, vysvetlil situáciu. Žiadny problém. Flexibilita." },
  { quote: "Najlepšie na LASER48? Viem na čom som. Ak povedia termín, dodržia ho. Nie 'snáď', 'možno', 'skúsime'. Spoľahlivosť." },
  { quote: "Robíme prototypy a diely potrebujeme TERAZ. LASER48 je jediný kto to chápe a dokáže to stihnúť." },
  { quote: "Keď som prvýkrát objednával, bol som skeptický — 48 hodín? Naozaj? Áno, naozaj. Dodnes spokojný." },
  { quote: "Začali sme s malými objednávkami. Teraz objednávame 100+ kusov mesačne. Vedia čo robia, stíhajú termíny, ceny sú konkurencieschopné." },
  { quote: "Konkurencia ponúka lacnejšie. Ale LASER48 ponúka istotu. Keď máš projekt za 50 000 EUR a čakáš na jeden diel — záleží či príde včas." },
  { quote: "Potreboval som CAD návrh k náčrtu. Za 2 hodiny som mal výkres, cenu a potvrdenie že to stihnem do piatka. V piatok večer som mal diely." },
];

const painPoints = [
  { title: "Netransparentné ceny", text: "Nikdy neviem, koľko to bude stáť. Cenu sa dozviem až po týždni čakania na ponuku." },
  { title: "Vysoké minimálne objednávky", text: "Potrebujem 5 kusov, ale chcú minimum 50. Musím objednať viac, než potrebujem." },
  { title: "Nespoľahlivé dodacie lehoty", text: "Sľubujú týždeň, dodajú za mesiac. Zastavia mi vlastnú výrobu." },
  { title: "Slabá komunikácia", text: "Neberú telefón, neodpovedajú na emaily. Neviem čo sa deje s mojou objednávkou." },
  { title: "Otrepy, okuje, zlé hrany", text: "Diely prídu s otrepmi a okujami. Musím ich dodatočne opracovávať — stojí to čas a peniaze." },
];

const solutions = [
  { title: "Ponuka do 24 hodín", text: "Pošli výkres — presná cena vrátane materiálu, práce a DPH do 24 hodín. Žiadne čakanie." },
  { title: "Od 1 kusu", text: "Žiadne minimálne objednávky. Potrebuješ 1 kus? 5 kusov? Žiadny problém." },
  { title: "Vždy dodané na čas", text: "Keď povieme termín, dodržíme ho. Ak nastane problém — okamžitá komunikácia a riešenie, nie otáľanie." },
  { title: "Reálni ľudia, nie automaty", text: "Zdvíhame telefón. Odpovedáme na emaily. Informujeme o priebehu objednávky." },
  { title: "Čisté diely, pripravené na použitie", text: "Každý diel kontrolujeme. Otrepy a okuje? Odstránené pred odoslaním." },
];

export default function ReferenciePage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.laser48.sk" },
          { "@type": "ListItem", position: 2, name: "Referencie", item: "https://www.laser48.sk/referencie" },
        ],
      }} />
      <HeroSection
        title="Čo hovoria naši zákazníci"
        perex={`Viac ako 500 000 dodaných dielov za ${YEARS_ON_MARKET}. 98% objednávok dodaných na čas. Tu je pár príbehov našich zákazníkov.`}
        bgImage="/images/diel-nerez.jpg"
        small
      />

      {/* Pain pointy z prieskumu */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="S čím sa stretávate u iných dodávateľov?"
            subtitle="Prieskum medzi 500+ firmami ukázal 5 najčastejších problémov pri objednávaní laserového rezania."
            center
          />
          <div className={styles.painGrid}>
            {painPoints.map((p) => (
              <div key={p.title} className={styles.painItem}>
                <AlertTriangle size={24} color="#dc3545" className={styles.painIcon} />
                <div>
                  <h3 className={styles.painTitle}>{p.title}</h3>
                  <p className={styles.painText}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          <SectionHeading
            title="Ako to riešime my?"
            center
          />
          <div className={styles.solutionGrid}>
            {solutions.map((s) => (
              <div key={s.title} className={styles.painItem}>
                <CheckCircle size={24} color="#28a745" className={styles.painIcon} />
                <div>
                  <h3 className={styles.painTitle}>{s.title}</h3>
                  <p className={styles.painText}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citáty */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Prečo nás zákazníci odporúčajú?" center />
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* V číslach */}
      <section className="section-dark">
        <div className="container">
          <SectionHeading title="LASER48 v číslach" center />
          <div className={styles.statsGrid}>
            <StatCounter value="500 000+" label="Dodaných dielov" dark />
            <StatCounter value={YEARS_ON_MARKET} label="Na trhu" dark />
            <StatCounter value="98%" label="Termíny stihnuté" dark />
            <StatCounter value="7 dní" label="Štandardná dodacia lehota" dark />
          </div>
        </div>
      </section>

      {/* Pre koho pracujeme */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Pre koho pracujeme?"
            subtitle="Dodávame pre firmy z rôznych odvetví. Od automatizácie po dizajn."
            center
          />
          <div className={styles.industriesGrid}>
            <Card icon={Bot} title="Automatizácia a robotika">
              <p>Robotické bunky, výrobné linky, manipulačné systémy. Prototypy + malé série.</p>
            </Card>
            <Card icon={Car} title="Automotive">
              <p>Súčiastky do vozidiel, testovacie zariadenia, špeciálne nástroje.</p>
            </Card>
            <Card icon={Wrench} title="Strojárstvo">
              <p>Výroba strojov, zákazková výroba, držiaky, upínače, ochranné kryty.</p>
            </Card>
            <Card icon={Lightbulb} title="Prototypová výroba">
              <p>R&D projekty, prototypy, testovacie vzorky, jedno-kusová výroba.</p>
            </Card>
            <Card icon={Building} title="Architektúra a interiér">
              <p>Kovové prvky do interiéru, zábradlia, madlá, dekoračné panely.</p>
            </Card>
            <Card icon={Megaphone} title="Dizajn a reklama">
              <p>Reklamné konštrukcie, 3D logá a nápisy, kovové dekorácie.</p>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Chceš byť ďalší spokojný zákazník?"
        text={`Viac ako 500 000 dodaných dielov za ${YEARS_ON_MARKET}. Pripoj sa k nim.`}
        buttonText="Objednaj teraz →"
        note={`Alebo sa nás opýtaj: ${PHONE}`}
      />
    </>
  );
}
