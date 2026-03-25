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
    "Čo hovoria naši zákazníci. Rýchlosť, kvalita, spoľahlivosť. Viac ako 500 000 dodaných dielov.",
};

const testimonials = [
  { quote: "Vy ste super. Keď to objednám od vás, príde vždy na čas. Ani nie skôr, ani nie neskôr. Presne v ten deň ako poviete.", name: "Zákazník", company: "Leoni Trenčín" },
  { quote: "Páči sa mi ako dodávate. Faktúry, balenie — máte to také pekné, profesionálne.", name: "Zákazník", company: "Leoni Trenčín" },
  { quote: "Poslali sme zlé podklady, zákazka už bola vyrobená a dodaná. Poslali sme nové výkresy a za 24 hodín sme mali novú zákazku. Bez problémov.", name: "Zákazník", company: "SDS Dubnica" },
  { quote: "Predchádzajúci dodávateľ dodával stovky kusov a vždy sa desiatky percent vracali kvôli okujám. Od LASER48 sú všetky diely perfektné, pripravené rovno na montáž.", name: "Zákazník", company: "SDS Dubnica" },
  { quote: "Keď potrebujeme diely rýchlo, rovno hovoríme — dajte to LASER48, ani sa o tom nebavme.", name: "Zákazník", company: "Goms Púchov" },
  { quote: "Keď inde chcem diely do 48 hodín, je to vždy 'no, možno, uvidíme, opýtam sa'. Tu? Nech sa páči, máte to do 48 hodín.", name: "Zákazník", company: "Strojárska výroba" },
  { quote: "Keď objednávam inde, chcú presné špecifikácie, materiálové normy, pomaly zloženie plechu. Ja chcem len vyrezať pár dielov. Tu poviem že chcem oceľ, opýtajú sa či stačí bežná, a režeme.", name: "Zákazník", company: "Zákazková výroba" },
  { quote: "Diely do 24 hodín od objednávky. Ako že dnes pošlem a zajtra ráno to mám pripravené? To vážne? Áno, vážne.", name: "Zákazník", company: "Strojárska výroba" },
  { quote: "Ako údržbár pri odstávke nemám pri sebe konštruktéra a diely potrebujem hneď. Načiariam to na kus A4-ky a za pár dní mám hotový diel v ruke.", name: "Údržbár", company: "Priemyselná výroba" },
  { quote: "Keď potrebujem rýchlo jeden kus, inde mám stres už len z toho ako so mnou budú jednať. Tu zavolám, chcem jeden kus, a správajú sa ku mne akoby som objednával 500 000.", name: "Zákazníčka", company: "Zákazková výroba" },
  { quote: "Keď potrebujem rýchlo, volám LASER48. Vždy stihli termín. Vždy. A keď raz bola komplikácia, riešili to okamžite bez výhovoriek.", name: "Zákazník", company: "Prieskum trhu — Automatizácia" },
  { quote: "Cenová ponuka do 24 hodín. Konečne niekto kto ma nenecháva čakať týždeň na ponuku. Presne čo potrebujem pre prototypovú výrobu.", name: "Zákazník", company: "Prieskum trhu — Prototypová výroba" },
  { quote: "Museli sme zmeniť výkres kým ešte neboli vo výrobe. Zavolal som, vysvetlil situáciu. Žiadny problém. Flexibilita.", name: "Zákazník", company: "Prieskum trhu — Automotive" },
  { quote: "Najlepšie na LASER48? Viem na čom som. Ak povedia termín, dodržia ho. Nie 'snáď', 'možno', 'skúsime'. Spoľahlivosť.", name: "Zákazník", company: "Prieskum trhu — Strojárska výroba" },
  { quote: "Robíme prototypy a diely potrebujeme TERAZ. LASER48 je jediný kto to chápe a dokáže to stihnúť. Už 2 roky spolupracujeme.", name: "Zákazník", company: "Prieskum trhu — Robotika" },
  { quote: "Keď som prvýkrát objednával, bol som skeptický — 48 hodín? Naozaj? Áno, naozaj. Dodnes spokojný. Už 15. objednávka za sebou.", name: "Zákazník", company: "Prieskum trhu — Strojárstvo (CZ)" },
  { quote: "Začali sme s malými objednávkami. Teraz objednávame 100+ kusov mesačne. Vedia čo robia, stíhajú termíny, ceny sú konkurencieschopné.", name: "Zákazník", company: "Prieskum trhu — Priemysel" },
  { quote: "Konkurencia ponúka lacnejšie. Ale LASER48 ponúka istotu. Keď máš projekt za 50 000 EUR a čakáš na jeden diel — záleží či príde včas.", name: "Zákazník", company: "Prieskum trhu — Automatizácia" },
  { quote: "Potreboval som CAD návrh k náčrtu. Za 2 hodiny som mal výkres, cenu a potvrdenie že to stihnem do piatka. V piatok večer som mal diely.", name: "Zákazník", company: "Prieskum trhu — Zákazková výroba" },
];

export default function ReferenciePage() {
  return (
    <>
      <HeroSection
        title="Čo hovoria naši zákazníci"
        perex="Dodali sme stovky objednávok za 4 roky. Tu je pár príbehov našich zákazníkov."
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
            <StatCounter value="500 000+" label="Dodaných dielov" dark />
            <StatCounter value="4 roky" label="Na trhu" dark />
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

      <CTASection
        title="Chceš byť ďalší spokojný zákazník?"
        text="Viac ako 500 000 dodaných dielov za 4 roky. Pripoj sa k nim."
        buttonText="Objednaj teraz →"
        note={`Alebo sa nás opýtaj: ${PHONE}`}
      />
    </>
  );
}
