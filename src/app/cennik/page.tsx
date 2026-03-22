import type { Metadata } from "next";
import { Gift, Star, Users, GraduationCap } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Cenník laserového rezania",
  description:
    "Transparentný cenník. Cenová ponuka do 24 hodín. Nerezová oceľ, hliník. Štandard 7 dní, express 48h.",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-sm)",
  marginBottom: "var(--space-xl)",
};

const thStyle: React.CSSProperties = {
  background: "var(--color-dark)",
  color: "var(--color-white)",
  padding: "0.75rem 1rem",
  textAlign: "left",
  fontWeight: 600,
};

const tdStyle: React.CSSProperties = {
  padding: "0.75rem 1rem",
  borderBottom: "1px solid var(--color-border)",
};

const tdAltStyle: React.CSSProperties = {
  ...tdStyle,
  background: "var(--color-bg-light)",
};

function TableRow({ cells, alt }: { cells: string[]; alt: boolean }) {
  const s = alt ? tdAltStyle : tdStyle;
  return (
    <tr>
      {cells.map((c, i) => (
        <td key={i} style={s}>{c}</td>
      ))}
    </tr>
  );
}

const faqItems = [
  {
    question: "Prečo nemôžem vidieť cenu bez poslania výkresu?",
    answer:
      "Každý výkres je jedinečný. Cena závisí od dĺžky rezu, počtu dier, zložitosti. Pošli nám výkres a ponuku dostaneš do 24 hodín.",
  },
  {
    question: "Sú v cene zahrnuté materiál a DPH?",
    answer:
      "Áno. Cena v ponuke je finálna s DPH. Žiadne skryté poplatky.",
  },
  {
    question: "Môžem dostať individuálnu cenu pre veľkú sériu?",
    answer:
      "Áno. Ak potrebuješ viac ako 500 kusov mesačne, napíš nám. Dohodneme individuálnu cenu.",
  },
  {
    question: "Dajú sa kombinovať zľavy?",
    answer:
      "Množstevná + vernostná zľava = áno. Referenčná zľava sa nedá kombinovať s inými.",
  },
];

export default function CennikPage() {
  return (
    <>
      <HeroSection
        title="Cenník laserového rezania"
        perex="Naša cena závisí od materiálu, hrúbky, počtu kusov a dĺžky rezu. Pošli nám výkres a cenovú ponuku dostaneš do 24 hodín."
        small
      />

      {/* Hlavný CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <SectionHeading
            title="Cenová ponuka do 24 hodín"
            subtitle="Pošli nám výkres a my ti pošleme cenovú ponuku vrátane materiálu, práce a DPH. Transparentne a bez záväzkov."
            center
          />
          <Button href="/kontakt#formular" size="lg">Pošli dopyt →</Button>
          <div style={{ display: "flex", justifyContent: "center", gap: "var(--space-xl)", marginTop: "var(--space-lg)", flexWrap: "wrap" }}>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>✓ Odpovieme do 24 hodín</span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>✓ Vrátane materiálu a DPH</span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>✓ Žiadne skryté poplatky</span>
          </div>
        </div>
      </section>

      {/* Tabuľky materiálov */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Orientačný cenník" subtitle="Materiály na sklade. Presná cena závisí od zložitosti výkresu." />

          <h3 style={{ marginBottom: "var(--space-md)" }}>Nerezová oceľ AISI304</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Hrúbka</th>
                <th style={thStyle}>Max rozmer</th>
                <th style={thStyle}>Poznámka</th>
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
                <TableRow key={i} cells={row} alt={i % 2 === 1} />
              ))}
            </tbody>
          </table>

          <h3 style={{ marginBottom: "var(--space-md)" }}>Čierna oceľ</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Hrúbka</th>
                <th style={thStyle}>Materiál</th>
                <th style={thStyle}>Max rozmer</th>
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
                <TableRow key={i} cells={row} alt={i % 2 === 1} />
              ))}
            </tbody>
          </table>

          <h3 style={{ marginBottom: "var(--space-md)" }}>Hliník (AlMg3)</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Hrúbka</th>
                <th style={thStyle}>Max rozmer</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1.5 mm", "1540×750mm"],
                ["2 mm", "1540×750mm"],
                ["4 mm", "1540×750mm"],
              ].map((row, i) => (
                <TableRow key={i} cells={row} alt={i % 2 === 1} />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ako sa cena počíta */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <SectionHeading title="Ako sa cena počíta?" />
          <p style={{ marginBottom: "var(--space-lg)", color: "var(--color-text-secondary)" }}>
            Celková cena = Materiál + Práca + Dodanie
          </p>

          <div style={{ background: "var(--color-bg-light)", padding: "var(--space-lg)", borderRadius: "var(--radius-md)", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", marginBottom: "var(--space-xl)" }}>
            <p style={{ fontWeight: 700, marginBottom: "var(--space-sm)" }}>Príklad 1: Štandard 7 dní</p>
            <p>10 kusov | nerezová oceľ 3mm | 100×100mm</p>
            <br />
            <p>Materiál: 45 EUR | Práca: 68 EUR | Dodanie: 0 EUR</p>
            <hr style={{ margin: "var(--space-sm) 0", border: "none", borderTop: "1px solid var(--color-border)" }} />
            <p style={{ fontWeight: 700 }}>Celkom s DPH: 136 EUR</p>
          </div>

          <div style={{ background: "var(--color-bg-light)", padding: "var(--space-lg)", borderRadius: "var(--radius-md)", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)" }}>
            <p style={{ fontWeight: 700, marginBottom: "var(--space-sm)" }}>Príklad 2: Express 48h</p>
            <p>50 kusov | oceľ 5mm | 200×150mm</p>
            <br />
            <p>Materiál: 30 EUR | Práca: 525 EUR | Express +50%: 333 EUR</p>
            <hr style={{ margin: "var(--space-sm) 0", border: "none", borderTop: "1px solid var(--color-border)" }} />
            <p style={{ fontWeight: 700 }}>Celkom s DPH: 1 066 EUR</p>
          </div>
        </div>
      </section>

      {/* Zľavy */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Zľavy a vernostný program" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-xl)" }}>
            <Card icon={Gift} title="Množstevná zľava">
              <p>50–99 ks: -5%</p>
              <p>100–499 ks: -10%</p>
              <p>500+ ks: -15%</p>
              <p style={{ marginTop: "0.5rem", fontStyle: "italic" }}>Automatická, platí pre jednu objednávku.</p>
            </Card>
            <Card icon={Star} title="Vernostný program">
              <p>Po 5. objednávke: -5%</p>
              <p>Po 10. objednávke: -10%</p>
              <p>Stály zákazník: individuálne ceny</p>
            </Card>
            <Card icon={Users} title="Referenčná zľava">
              <p>Odporuč nás priateľovi.</p>
              <p>Ty: -10% na ďalšiu objednávku</p>
              <p>On: -5% na prvú objednávku</p>
            </Card>
            <Card icon={GraduationCap} title="Študentská zľava">
              <p>Študent alebo startup? Prvá objednávka -10%.</p>
              <p style={{ marginTop: "0.5rem", fontStyle: "italic" }}>Max 1× použitie, písať pred objednaním.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <SectionHeading title="Otázky o cene?" center />
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTASection
        title="Pripravený zistiť presnú cenu?"
        text="Pošli výkres. Ponuka do 24 hodín. Žiadne prekvapenia."
        buttonText="Pošli dopyt →"
        note="Alebo pošli výkres na laser@laser48.sk"
      />
    </>
  );
}
