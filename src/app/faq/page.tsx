import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FAQ - Často kladené otázky",
  description:
    "Odpovede na najčastejšie otázky o laserovaní, cenách, dodaní, platbe. Všetko čo potrebuješ vedieť.",
};

const categories = [
  {
    title: "Objednávanie",
    items: [
      { question: "Ako objednám?", answer: "Email (najrýchlejšie): Pošli výkres na laser@laser48.sk, odpovieme do 24 hodín. Alebo zavolaj: +421 911 132 485 (Po–Pia 7:00–19:00, So 7:00–13:00)." },
      { question: "Aký formát výkresu potrebujete?", answer: "Preferujeme DXF (najlepšie), DWG alebo PDF s rozmermi. Ak máš len náčrt, fotografiu alebo slovný popis — pošli nám to, pomôžeme vytvoriť CAD výkres (zadarmo pre objednávky nad 200 EUR)." },
      { question: "Musím sa registrovať?", answer: "Nie. Registrácia nie je povinná, môžeš objednať ako hosť." },
      { question: "Môžem zmeniť výkres po objednaní?", answer: "Áno, ak ešte nie je vo výrobe. Zmeny sú bez poplatku. Ak už vyrábame, kontaktuj nás — uvidíme čo sa dá robiť." },
      { question: "Môžem objednať bez výkresu?", answer: "Áno. Pošli fotografiu existujúceho dielu, náčrt s rozmermi, alebo slovný popis. My vytvoríme CAD výkres. Zadarmo pre objednávky nad 200 EUR, inak 30–50 EUR podľa zložitosti." },
    ],
  },
  {
    title: "Cena a platba",
    items: [
      { question: "Koľko to stojí?", answer: "Závisí od materiálu, hrúbky, počtu kusov, dĺžky rezu a termínu. Pošli výkres → cenovú ponuku dostaneš do 24 hodín. Orientačne: 10 kusov 100×100mm z nehrdzavky 3mm ≈ 136 EUR s DPH." },
      { question: "Sú v cene zahrnuté materiál a DPH?", answer: "Áno. Cena v ponuke je finálna s DPH. Nie je v cene len doprava (5–10 EUR)." },
      { question: "Ako platím?", answer: "Nový zákazník: predfaktúra, online platba kartou, alebo dobierka. Overený zákazník (po 3+ objednávkach): faktúra so splatnosťou 14 dní." },
      { question: "Môžem platiť kartou?", answer: "Áno. Akceptujeme Visa, Mastercard a Maestro cez bezpečnú platobnú bránu." },
      { question: "Dostávate zľavy pri väčších objednávkach?", answer: "Áno, automatická množstevná zľava: 50–99 ks -5%, 100–499 ks -10%, 500+ ks -15%. Plus vernostný program: po 5. objednávke -5%, po 10. -10%." },
    ],
  },
  {
    title: "Dodanie",
    items: [
      { question: "Kedy dostanem diely?", answer: "Štandardne do 7 pracovných dní od potvrdenia objednávky a platby. Express 48h za +50% príplatok." },
      { question: "Ako počítate 7 dní?", answer: "7 pracovných dní (víkendy a sviatky nepočítame). Počítame od potvrdenia objednávky a prijatia platby." },
      { question: "Čo ak nestihnete 7 dní?", answer: "Dostaneš 20% zľavu automaticky. Žiadne výhovorky. Za 2 roky sme nestihli termín v 2% prípadov." },
      { question: "Ako dodávate diely?", answer: "Kuriér celé Slovensko (5–10 EUR, dodanie nasledujúci deň) alebo osobný odber v Púchove zadarmo (Po–Pia 7:00–19:00, So 7:00–13:00)." },
      { question: "Dodávate aj do Česka?", answer: "Áno. Kuriér do ČR: 10–15 EUR, dodanie 2–3 dni po expedícii. Už 100+ zákazníkov z ČR." },
      { question: "Môžem sledovať stav objednávky?", answer: "Áno. Dostaneš email s potvrdením, keď začneme vyrábať, keď je hotovo, a tracking number po expedícii." },
    ],
  },
  {
    title: "Materiály a technické",
    items: [
      { question: "Aké materiály režete?", answer: "Nerezová oceľ AISI304/316 (0.5–6mm), čierna oceľ DC01/S235/C45 (0.55–8mm), pozinkovaná oceľ DX51D (0.5–3mm), hliník AlMg3 (1.5–4mm). Max rozmer dielu: 1540 × 750 mm." },
      { question: "Režete aj iné materiály?", answer: "Štandardne nie, ale zabezpečíme v kooperácii. Ak máš 10 dielov a z nich 8 režeme my a 2 sú mimo náš rozsah — nemusíš riešiť iného dodávateľa. Vyrobíme všetko, akurát pri kooperácii nevieme garantovať 7-dňový termín." },
      { question: "Aký je maximálny rozmer dielu?", answer: "1540 × 750 mm. Väčší diel? Zabezpečíme v kooperácii. Nemusíš hľadať iného dodávateľa — pošli nám všetko a my to vyriešime. Pri kooperácii sa dodanie môže natiahnuť na 14–28 dní." },
      { question: "Aká je presnosť?", answer: "Laser samotný: ±0.1 mm. Celkové rozmery dielu: ±0.5 mm bežne. Pre presnejšie tolerancie napíš do poznámky." },
      { question: "Ponúkate aj ohýbanie, zváranie?", answer: "Nie. LASER48 sa špecializuje výhradne na laserové rezanie. Pre ohýbanie alebo zváranie odporúčame osloviť špecializované firmy." },
      { question: "Robíte aj povrchové úpravy?", answer: "Nie priamo my, ale spolupracujeme s partnermi na práškové lakovanie, pozinkovanie a eloxovanie. Jeden kontakt, všetko vybavíme." },
    ],
  },
  {
    title: "Zákaznícky servis",
    items: [
      { question: "Ako vás kontaktujem?", answer: "Telefón: +421 911 132 485 (Po–Pia 7:00–19:00, So 7:00–13:00). Email: laser@laser48.sk (odpovieme do 24h). Osobne: Nosice 256, Púchov." },
      { question: "Kedy odpovedáte na emaily?", answer: "Do 24 hodín v pracovné dni. Urgentné? Volaj: +421 911 132 485." },
      { question: "Čo ak mám reklamáciu?", answer: "Kontaktuj nás okamžite. Ak je chyba na našej strane: oprava/výmena zadarmo + kompenzácia. Reklamácií máme < 0.5%." },
      { question: "Máte vernostný program?", answer: "Áno. Po 5. objednávke -5%, po 10. -10%. Plus referenčná zľava: odporuč nás → ty -10%, on -5%." },
      { question: "Môžem dostať faktúru?", answer: "Áno, vždy. PDF emailom + papierová v balíku ak chceš. S QR kódom pre platbu." },
    ],
  },
  {
    title: "Iné",
    items: [
      { question: "Máte certifikáty (ISO)?", answer: "Nie. LASER48 je flexibilná a rýchla služba. Pre certifikovanú výrobu odporúčame LUHOVY INDUSTRIES (www.luhovy-industries.sk)." },
      { question: "Môžem si prísť pozrieť výrobu?", answer: "Áno. Zavolaj vopred, dohodneme termín a prevedieme ťa. Nosice 256, Púchov." },
      { question: "Robíte aj veľké série (1000+ ks)?", answer: "LASER48 je primárne pre 1–500 ks s rýchlym dodaním. Pre 1000+ odporúčame LUHOVY INDUSTRIES — lepšie ceny a certifikáty." },
      { question: "Potrebujem NDA. Idete do toho?", answer: "Áno, bez problémov. Pošli svoju NDA šablónu alebo použijeme našu. Aj bez NDA nezdieľame výkresy zákazníkov." },
      { question: "Fakturujete na Slovensko aj Česko?", answer: "Áno. SK s DPH 20%, CZ s DPH alebo bez DPH (reverse charge možný)." },
    ],
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      }))
    ),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      <HeroSection
        title="Často kladené otázky (FAQ)"
        perex="Máš otázku? Možno sme na ňu už odpovedali nižšie."
        small
      />

      {categories.map((cat, i) => (
        <section key={i} className={i % 2 === 0 ? "section" : "section-alt"}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <SectionHeading title={cat.title} />
            <FAQ items={cat.items} />
          </div>
        </section>
      ))}

      <CTASection
        title="Nenašiel si odpoveď?"
        text="Napíš nám alebo zavolaj. Radi pomôžeme. laser@laser48.sk | +421 911 132 485"
        buttonText="Kontaktuj nás →"
      />
    </>
  );
}
