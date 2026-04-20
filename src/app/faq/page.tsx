import type { Metadata } from "next";
import { PHONE } from "@/config";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FAQ - Často kladené otázky",
  description:
    "Odpovede na najčastejšie otázky o laserovaní, cenách, dodaní, platbe. Všetko čo potrebujete vedieť.",
  alternates: { canonical: "/faq" },
};

const categories = [
  {
    title: "Objednávanie",
    items: [
      { question: "Ako objednám?", answer: `Email (najrýchlejšie): Pošlite výkres na laser@laser48.sk, odpovieme do 24 hodín. Alebo zavolajte: ${PHONE} (Po–Pia 8:00–16:00).` },
      { question: "Aký formát výkresu potrebujete?", answer: "Preferujeme DXF (najlepšie), DWG alebo PDF s rozmermi. Ak máte len náčrt, fotografiu alebo slovný popis — pošlite nám to, pomôžeme vytvoriť CAD výkres." },
      { question: "Musím sa registrovať?", answer: "Nie. Žiadna registrácia. Pošlite výkres a my sa ozveme." },
      { question: "Môžem zmeniť výkres po objednaní?", answer: "Áno, ak ešte nie je vo výrobe. Zmeny sú bez poplatku. Ak už vyrábame, kontaktujte nás — uvidíme čo sa dá robiť." },
      { question: "Môžem objednať bez výkresu?", answer: "Áno. Pošlite fotografiu existujúceho dielu, náčrt s rozmermi, alebo slovný popis. My vytvoríme CAD výkres." },
    ],
  },
  {
    title: "Cena a platba",
    items: [
      { question: "Koľko to stojí?", answer: "Závisí od materiálu, hrúbky, počtu kusov, dĺžky rezu a termínu. Pošlite výkres → cenovú ponuku dostanete do 24 hodín." },
      { question: "Sú v cene zahrnuté materiál a DPH?", answer: "Áno. Cena v ponuke je finálna s DPH. Doprava sa účtuje zvlášť." },
      { question: "Ako platím?", answer: "Predfaktúra alebo faktúra podľa dohody. Pri urgentných objednávkach platba vopred." },
      { question: "Máte zľavy pri väčších objednávkach?", answer: "Áno. Pri väčších objemoch alebo pravidelných objednávkach dohodneme individuálnu cenu. Napíšte nám." },
    ],
  },
  {
    title: "Dodanie",
    items: [
      { question: "Ponúkate expresné laserové rezanie?", answer: "Áno. Expresné laserové rezanie s dodaním do 48 hodín alebo urgentné do 24 hodín. Riešime urgentné zákazky, chýbajúce diely a prototypy. Za príplatok, podľa dostupnosti kapacity." },
      { question: "Ako rýchlo viete vyrobiť urgentnú zákazku?", answer: "Urgentné zákazky vieme dodať do 24 hodín od potvrdenia objednávky. Express zákazky do 48 hodín. Prioritné spracovanie — zákazka ide na začiatok výroby." },
      { question: "Kedy dostanem diely?", answer: "Štandardne do 7 pracovných dní od potvrdenia objednávky a platby. Potrebujete rýchlejšie? Express 48h alebo 24h za príplatok." },
      { question: "Ako počítate 7 dní?", answer: "7 pracovných dní (víkendy a sviatky nepočítame). Počítame od potvrdenia objednávky a prijatia platby." },
      { question: "Čo ak nestihnete termín?", answer: "Vždy dodávame na čas. Ak nastane problém, okamžite komunikujeme a hľadáme riešenie — nie otáľame." },
      { question: "Ako dodávate diely?", answer: "Kuriér celé Slovensko, osobný odber v Púchove zadarmo (Po–Pia 8:00–16:00). Trenčiansky a Žilinský kraj — vlastný rozvoz priamo k zákazníkovi, cca 1× týždenne." },
      { question: "Dodávate aj do Česka?", answer: "Áno. Kuriér do ČR, dodanie 2–3 dni po expedícii." },
      { question: "Môžem sledovať stav objednávky?", answer: "Áno. Dostanete email s potvrdením, keď začneme vyrábať, keď je hotovo, a tracking number po expedícii." },
    ],
  },
  {
    title: "Materiály a technické",
    items: [
      { question: "Aké materiály režete?", answer: "Nerezová oceľ AISI304/316 (0.5–6mm), čierna oceľ DC01/S235/C45 (0.5–8mm), pozinkovaná oceľ DX51D (0.5–3mm), hliník AlMg3 (0.5–4mm). Max rozmer dielu: 1540 × 750 mm." },
      { question: "Režete aj iné materiály?", answer: "Napíšte nám a uvidíme čo sa dá spraviť. Ak máte 10 dielov a z nich 8 režeme my a 2 sú mimo náš rozsah — nemusíte riešiť iného dodávateľa. Vyrobíme všetko, akurát pri kooperácii nemôžeme garantovať zrýchlené dodanie." },
      { question: "Aký je maximálny rozmer dielu?", answer: "1540 × 750 mm. Väčší diel? Zabezpečíme v kooperácii. Nemusíte hľadať iného dodávateľa — pošlite nám všetko a my to vyriešime. Pri kooperácii sa dodanie môže natiahnuť na 14–28 dní." },
      { question: "Aká je presnosť?", answer: "Laser samotný: ±0.1 mm. Celkové rozmery dielu: ±0.5 mm bežne. Pre presnejšie tolerancie napíšte do poznámky." },
      { question: "Ponúkate aj ohýbanie, zváranie, lakovanie?", answer: "Áno. Ohýbanie, zváranie aj lakovanie zabezpečujeme cez našu materskú firmu. Napíšte nám a dohodneme sa." },
      { question: "Robíte aj povrchové úpravy?", answer: "Áno. Mokré aj práškové lakovanie zabezpečujeme interne. Napíšte nám a dohodneme sa." },
    ],
  },
  {
    title: "Zákaznícky servis",
    items: [
      { question: "Ako vás kontaktujem?", answer: `Telefón: ${PHONE} (Po–Pia 8:00–16:00). Email: laser@laser48.sk (odpovieme do 24h). Osobne: Nosice 256, Púchov.` },
      { question: "Kedy odpovedáte na emaily?", answer: `Do 24 hodín v pracovné dni. Urgentné? Volajte: ${PHONE}.` },
      { question: "Čo ak mám reklamáciu?", answer: "Kontaktujte nás okamžite. Ak je chyba na našej strane: oprava/výmena zadarmo. Reklamácií máme < 0.5%." },
      { question: "Máte zľavy pre stálych zákazníkov?", answer: "Áno. Pre pravidelných zákazníkov dohodneme individuálne podmienky. Napíšte nám alebo sa opýtajte pri objednávke." },
      { question: "Môžem dostať faktúru?", answer: "Áno, vždy. PDF emailom + papierová v balíku ak chcete. S QR kódom pre platbu." },
    ],
  },
  {
    title: "Iné",
    items: [
      { question: "Máte certifikáty (ISO)?", answer: "Nie. LASER48 je flexibilná a rýchla služba zameraná na malé a stredné série." },

      { question: "Robíte aj veľké série (1000+ ks)?", answer: "Áno. Bežne vyrábame desiatky tisíc kusov ročne. Od 1 kusu po veľké série — žiadny problém." },
      { question: "Potrebujem NDA. Idete do toho?", answer: "Áno, bez problémov. Pošlite svoju NDA šablónu alebo použijeme našu. Aj bez NDA nezdieľame výkresy zákazníkov." },
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
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.laser48.sk" },
          { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.laser48.sk/faq" },
        ],
      }} />

      <HeroSection
        title="Často kladené otázky (FAQ)"
        perex="Máte otázku? Možno sme na ňu už odpovedali nižšie."
        small
      />

      {categories.map((cat, i) => (
        <section key={i} className={i % 2 === 0 ? "section" : "section-alt"}>
          <div className={`container ${styles.faqContainer}`}>
            <SectionHeading title={cat.title} />
            <FAQ items={cat.items} />
          </div>
        </section>
      ))}

      <CTASection
        title="Nenašli ste odpoveď?"
        text="Napíšte nám alebo zavolajte. Radi pomôžeme."
        buttonText="Kontaktujte nás →"
        note={`laser@laser48.sk | ${PHONE}`}
      />
    </>
  );
}
