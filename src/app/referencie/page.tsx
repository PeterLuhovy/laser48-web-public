import type { Metadata } from "next";
import { PHONE } from "@/config";
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

export const metadata: Metadata = {
  title: "Referencie - Spokojní zákazníci",
  description:
    "Čo hovoria naši zákazníci. Rýchlosť, kvalita, spoľahlivosť. Viac ako 500 spokojných zákazníkov.",
};

const testimonials = [
  { quote: "Keď potrebujem rýchlo, volám LASER48. Vždy stihli termín. Vždy. A keď raz bola komplikácia, riešili to okamžite bez výhovoriek.", name: "Ján Novák", company: "TechAutomation s.r.o. — Automatizácia výroby" },
  { quote: "Cenová ponuka do 24 hodín. Konečne niekto kto ma nenecháva čakať týždeň na ponuku. Presne čo potrebujem pre prototypovú výrobu.", name: "Mária Kováčová", company: "ProtoMech — Prototypová výroba" },
  { quote: "Museli sme zmeniť výkres kým ešte neboli vo výrobe. Zavolal som, vysvetlil situáciu. Žiadny problém. Flexibilita.", name: "Peter Horváth", company: "AutoParts SK — Automobilový dodávateľ" },
  { quote: "Najlepšie na LASER48? Viem na čom som. Ak povedia termín, dodržia ho. Nie 'snáď', 'možno', 'skúsime'. Spoľahlivosť.", name: "Tomáš Lukáč", company: "Machinery Pro — Strojárska výroba" },
  { quote: "Robíme prototypy a diely potrebujeme TERAZ. LASER48 je jediný kto to chápe a dokáže to stihnúť. Už 2 roky spolupracujeme.", name: "Zuzana Beňová", company: "InnoTech Solutions — Robotika" },
  { quote: "Keď som prvýkrát objednával, bol som skeptický — 48 hodín? Naozaj? Áno, naozaj. Dodnes spokojný. Už 15. objednávka za sebou.", name: "Martin Szabó", company: "CZ Engineering — Strojárstvo (CZ)" },
  { quote: "Začali sme s malými objednávkami. Teraz objednávame 100+ kusov mesačne. Vedia čo robia, stíhajú termíny, ceny sú konkurencieschopné.", name: "Andrej Kováč", company: "Industrial Systems" },
  { quote: "Konkurencia ponúka lacnejšie. Ale LASER48 ponúka istotu. Keď máš projekt za 50 000 EUR a čakáš na jeden diel — záleží či príde včas.", name: "Miroslav Varga", company: "MV Automation" },
  { quote: "Potreboval som CAD návrh k náčrtu. Za 2 hodiny som mal výkres, cenu a potvrdenie že to stihnem do piatka. V piatok večer som mal diely.", name: "Lukáš Novotný", company: "Freelancer — Zákazková výroba" },
];

export default function ReferenciePage() {
  return (
    <>
      <HeroSection
        title="Čo hovoria naši zákazníci"
        perex="Dodali sme viac ako 5 000 objednávok pre stovky firiem. Tu je pár príbehov našich zákazníkov."
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-xl)", marginBottom: "var(--space-3xl)" }}>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              <AlertTriangle size={24} color="#dc3545" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 style={{ fontSize: "var(--text-body)", marginBottom: "var(--space-xs)" }}>Netransparentné ceny</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>{`Nikdy neviem, koľko to bude stáť. Cenu sa dozviem až po týždni čakania na ponuku.`}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              <AlertTriangle size={24} color="#dc3545" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 style={{ fontSize: "var(--text-body)", marginBottom: "var(--space-xs)" }}>Vysoké minimálne objednávky</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>{`Potrebujem 5 kusov, ale chcú minimum 50. Musím objednať viac, než potrebujem.`}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              <AlertTriangle size={24} color="#dc3545" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 style={{ fontSize: "var(--text-body)", marginBottom: "var(--space-xs)" }}>Nespoľahlivé dodacie lehoty</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>{`Sľubujú týždeň, dodajú za mesiac. Zastavia mi vlastnú výrobu.`}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              <AlertTriangle size={24} color="#dc3545" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 style={{ fontSize: "var(--text-body)", marginBottom: "var(--space-xs)" }}>Slabá komunikácia</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>{`Neberú telefón, neodpovedajú na emaily. Neviem čo sa deje s mojou objednávkou.`}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              <AlertTriangle size={24} color="#dc3545" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 style={{ fontSize: "var(--text-body)", marginBottom: "var(--space-xs)" }}>Otrepy, okuje, zlé hrany</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>{`Diely prídu s otrepmi a okujami. Musím ich dodatočne opracovávať — stojí to čas a peniaze.`}</p>
              </div>
            </div>
          </div>

          <SectionHeading
            title="Ako to riešime my?"
            center
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-xl)" }}>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              <CheckCircle size={24} color="#28a745" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 style={{ fontSize: "var(--text-body)", marginBottom: "var(--space-xs)" }}>Ponuka do 24 hodín</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>Pošli výkres — presná cena vrátane materiálu, práce a DPH do 24 hodín. Žiadne čakanie.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              <CheckCircle size={24} color="#28a745" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 style={{ fontSize: "var(--text-body)", marginBottom: "var(--space-xs)" }}>Od 1 kusu</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>Žiadne minimálne objednávky. Potrebuješ 1 kus? 5 kusov? Žiadny problém.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              <CheckCircle size={24} color="#28a745" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 style={{ fontSize: "var(--text-body)", marginBottom: "var(--space-xs)" }}>7 dní alebo 20% zľava</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>Ak nestihneme, dostaneš 20% automaticky. Za 2 roky sme nestihli v 2% prípadov.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              <CheckCircle size={24} color="#28a745" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 style={{ fontSize: "var(--text-body)", marginBottom: "var(--space-xs)" }}>Reálni ľudia, nie automaty</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>Zdvíhame telefón. Odpovedáme na emaily. Informujeme o priebehu objednávky.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              <CheckCircle size={24} color="#28a745" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 style={{ fontSize: "var(--text-body)", marginBottom: "var(--space-xs)" }}>Čisté diely, pripravené na použitie</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>Každý diel kontrolujeme. Otrepy a okuje? Odstránené pred odoslaním.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citáty */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Prečo nás zákazníci odporúčajú?" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "var(--space-xl)" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "var(--space-xl)" }}>
            <StatCounter value="5 000+" label="Objednávok dodaných" dark />
            <StatCounter value="500+" label="Spokojných zákazníkov" dark />
            <StatCounter value="98%" label="Termíny stihnuté" dark />
            <StatCounter value="120 000 kg" label="Materiálu spracovaného" dark />
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-xl)" }}>
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

      {/* Hodnotenia */}
      <section className="section-alt">
        <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
          <SectionHeading title="Hodnotenia zákazníkov" center />
          <p style={{ fontSize: "var(--text-h1)", fontWeight: 700, color: "var(--color-primary)", marginBottom: "var(--space-sm)" }}>
            ⭐ 4.8 / 5.0
          </p>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-xl)" }}>
            Na základe 150+ hodnotení
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)" }}>
            <p>Rýchlosť dodania: ⭐ 4.9/5</p>
            <p>Kvalita dielov: ⭐ 4.8/5</p>
            <p>Komunikácia: ⭐ 4.9/5</p>
            <p>Cena / výkon: ⭐ 4.6/5</p>
            <p>Flexibilita: ⭐ 4.8/5</p>
          </div>
        </div>
      </section>

      <CTASection
        title="Chceš byť ďalší spokojný zákazník?"
        text="Viac ako 500 firiem nám dôveruje. Pripoj sa k nim."
        buttonText="Objednaj teraz →"
        note={`Alebo sa nás opýtaj: ${PHONE}`}
      />
    </>
  );
}
