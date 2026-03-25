import { PHONE, EMAIL, ADDRESS, WEB, HOURS_WEEKDAY } from "@/config";

const content = `# LASER48 — Laserové rezanie kovov

> Laserové rezanie kovov. Štandard 7 dní, express 48h alebo 24h. Cenová ponuka do 24 hodín.

LASER48 je divízia spoločnosti Luhovy Industries a člen skupiny LRA GROUP.
B2B služba na rýchle laserové rezanie kovov sídliaca v Púchove, Slovensko.

## Služby

Špecializujeme sa na laserové rezanie plechov pomocou CO₂ laseru Bystronic ByVention 3015 (2.2 kW).

**Materiály na sklade:**
- Nerezová oceľ AISI304/316: hrúbka 0.5–6 mm
- Čierna oceľ DC01/S235/C45: hrúbka 0.5–8 mm
- Pozinkovaná oceľ DX51D: hrúbka 0.5–3 mm
- Hliník AlMg3: hrúbka 0.5–4 mm

**Parametre:**
- Max rozmer dielu: 1540 × 750 mm
- Presnosť laseru: ±0.1 mm
- Kontrola kvality: každý kus kontrolovaný pred odoslaním, otrepy a okuje odstránené

**Termíny dodania:**
- Štandard: 7 pracovných dní
- Express: 48 hodín (za príplatok)
- Extra rýchle: 24 hodín (za príplatok)
- Ekonomické: 28 dní (-10% zľava)

**Cenová ponuka:** do 24 hodín po prijatí výkresu

## Kontakt

- Telefón: ${PHONE} (Po–Pia ${HOURS_WEEKDAY})
- Email: ${EMAIL}
- Adresa: ${ADDRESS}, Slovensko
- Web: ${WEB}

## Formáty výkresov

Prijímame: DXF (preferovaný), DWG, PDF s rozmermi.
Ak nemáte výkres: pošlite náčrt, fotografiu alebo popis — vytvoríme CAD výkres.

## Stránky

- [Domov](${WEB}/): Hlavná stránka s prehľadom služieb
- [Služby](${WEB}/sluzby): Detailné informácie o laserovaní
- [Ako to funguje](${WEB}/ako-to-funguje): 3 kroky objednávky
- [Cenník](${WEB}/cennik): Orientačné ceny a materiály na sklade
- [Referencie](${WEB}/referencie): Zákaznícke hodnotenia a case studies
- [FAQ](${WEB}/faq): 32 často kladených otázok
- [Kontakt](${WEB}/kontakt): Kontaktný formulár, adresa, mapa

## Doprava

- Kuriér Slovensko
- Kuriér Česko
- Trenčiansky a Žilinský kraj: vlastný rozvoz ~1× týždenne
- Osobný odber Púchov: zadarmo

## Platba

- Predfaktúra alebo faktúra podľa dohody
- Pri urgentných objednávkach platba vopred

## Zľavy

Pri väčších objemoch alebo pravidelných objednávkach dohodneme individuálnu cenu.
`;

export function GET() {
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
