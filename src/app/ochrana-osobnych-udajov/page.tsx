import type { Metadata } from "next";
import { PHONE, PHONE_TEL, EMAIL, EMAIL_MAILTO, ADDRESS, COMPANY, PARENT_COMPANY } from "@/config";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description:
    "Zásady ochrany osobných údajov spoločnosti Luhovy Industries, s. r. o. — divízia LASER48.",
};

export default function OchranaOsobnychUdajovPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.laser48.sk" },
          { "@type": "ListItem", position: 2, name: "Ochrana osobných údajov", item: "https://www.laser48.sk/ochrana-osobnych-udajov" },
        ],
      }} />
      <HeroSection title="Ochrana osobných údajov" small />

      <section className="section">
        <div className={`container ${styles.container}`}>
          <SectionHeading title="1. Prevádzkovateľ" />
          <p className={styles.paragraph}>
            <strong>{PARENT_COMPANY}, s. r. o.</strong> (divízia {COMPANY})<br />
            {ADDRESS}<br />
            Slovenská republika<br />
            IČO: 54274061, DIČ: 2121638189<br />
            Email: <a href={EMAIL_MAILTO}>{EMAIL}</a><br />
            Telefón: <a href={PHONE_TEL}>{PHONE}</a>
          </p>

          <SectionHeading title="2. Aké údaje spracúvame" />
          <p className={styles.paragraphSmall}>
            Spracúvame len údaje, ktoré nám dobrovoľne poskytnete prostredníctvom kontaktného formulára na našej webovej stránke:
          </p>
          <ul className={styles.list}>
            <li>Meno a priezvisko</li>
            <li>Emailová adresa</li>
            <li>Telefónne číslo (voliteľné)</li>
            <li>Typ dopytu</li>
            <li>Obsah správy</li>
            <li>Priložené súbory (výkresy)</li>
          </ul>

          <SectionHeading title="3. Účel spracúvania" />
          <ul className={styles.list}>
            <li>Odpoveď na váš dopyt alebo otázku</li>
            <li>Vypracovanie cenovej ponuky</li>
            <li>Komunikácia súvisiaca s objednávkou</li>
          </ul>

          <SectionHeading title="4. Právny základ" />
          <p className={styles.paragraph}>
            Vaše osobné údaje spracúvame na základe vášho súhlasu (čl. 6 ods. 1 písm. a) GDPR),
            ktorý udelíte odoslaním kontaktného formulára. Ak dôjde k uzavretiu zmluvy,
            spracúvanie je nevyhnutné na plnenie zmluvy (čl. 6 ods. 1 písm. b) GDPR).
          </p>

          <SectionHeading title="5. Doba uchovávania" />
          <p className={styles.paragraph}>
            Vaše údaje uchovávame po dobu nevyhnutnú na vybavenie vášho dopytu, najviac však 3 roky
            od poslednej komunikácie. Účtovné doklady uchovávame 10 rokov v súlade so zákonom o účtovníctve.
          </p>

          <SectionHeading title="6. Tretie strany" />
          <p className={styles.paragraphSmall}>
            Na doručenie správ z kontaktného formulára využívame službu FormSubmit.co.
            Vaše údaje nepredávame, neprenajímame ani neposkytujeme tretím stranám na marketingové účely.
          </p>
          <p className={styles.paragraph}>
            Webová stránka je prevádzkovaná na platforme Vercel, Inc. (USA), ktorá spracúva
            technické údaje (IP adresa, typ prehliadača) na zabezpečenie fungovania stránky.
          </p>

          <SectionHeading title="7. Vaše práva" />
          <p className={styles.paragraphSmall}>
            Podľa GDPR máte právo:
          </p>
          <ul className={styles.list}>
            <li>Na prístup k vašim osobným údajom</li>
            <li>Na opravu nesprávnych údajov</li>
            <li>Na vymazanie údajov (právo byť zabudnutý)</li>
            <li>Na obmedzenie spracúvania</li>
            <li>Na prenosnosť údajov</li>
            <li>Namietať proti spracúvaniu</li>
            <li>Kedykoľvek odvolať súhlas</li>
            <li>Podať sťažnosť na Úrad na ochranu osobných údajov SR</li>
          </ul>

          <SectionHeading title="8. Cookies" />
          <p className={styles.paragraph}>
            Naša webová stránka nepoužíva sledovacie cookies ani analytické nástroje tretích strán.
            Používame len technicky nevyhnutné cookies na zabezpečenie správneho fungovania stránky.
          </p>

          <SectionHeading title="9. Kontakt" />
          <p className={styles.paragraph}>
            Ak máte otázky k spracúvaniu osobných údajov alebo si chcete uplatniť niektoré z vyššie
            uvedených práv, kontaktujte nás na <a href={EMAIL_MAILTO}>{EMAIL}</a> alebo
            na <a href={PHONE_TEL}>{PHONE}</a>.
          </p>

          <p className={styles.meta}>
            Posledná aktualizácia: 26. marca 2026
          </p>
        </div>
      </section>
    </>
  );
}
