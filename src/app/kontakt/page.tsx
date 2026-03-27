import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE, PHONE_TEL, EMAIL, EMAIL_MAILTO, ADDRESS, HOURS_SHORT, COMPANY, PARENT_COMPANY } from "@/config";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kontakt - Telefón, Email, Adresa",
  description:
    `Kontaktujte nás: ${PHONE} | laser@laser48.sk | Nosice 256, Púchov. Odpovieme do 24 hodín.`,
};

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.laser48.sk" },
          { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://www.laser48.sk/kontakt" },
        ],
      }} />
      <HeroSection
        title="Kontakt"
        perex="Máte otázku alebo potrebujete radu? Neváhajte nás kontaktovať. Odpovedáme do 24 hodín (v pracovné dni)."
        small
      />

      {/* Kontaktné údaje */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactBlock}>
              <Phone size={32} />
              <h3>Telefón</h3>
              <a href={PHONE_TEL}>{PHONE}</a>
              <p>{HOURS_SHORT}</p>
            </div>
            <div className={styles.contactBlock}>
              <Mail size={32} />
              <h3>Email</h3>
              <a href={EMAIL_MAILTO}>{EMAIL}</a>
              <p>Odpovieme do 24 hodín</p>
            </div>
            <div className={styles.contactBlock}>
              <MapPin size={32} />
              <h3>Adresa</h3>
              <p style={{ fontWeight: 600, fontSize: "var(--text-lg)", color: "var(--color-black)" }}>
                {ADDRESS}
              </p>
              <p>Osobný odber po dohode</p>
            </div>
          </div>

          {/* Formulár + Info */}
          <div id="formular" className={styles.formSection}>
            <Suspense>
              <ContactForm />
            </Suspense>

            <div className={styles.info}>
              <h3>Otváracie hodiny</h3>
              <table className={styles.hoursTable}>
                <tbody>
                  {[
                    ["Pondelok", "8:00–16:00"],
                    ["Utorok", "8:00–16:00"],
                    ["Streda", "8:00–16:00"],
                    ["Štvrtok", "8:00–16:00"],
                    ["Piatok", "8:00–16:00"],
                  ].map(([day, hours]) => (
                    <tr key={day}>
                      <td>{day}</td>
                      <td>{hours}</td>
                    </tr>
                  ))}
                  {[["Sobota", "Zatvorené"], ["Nedeľa", "Zatvorené"]].map(([day, hours]) => (
                    <tr key={day}>
                      <td>{day}</td>
                      <td className={styles.closed}>{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h3>Fakturačné údaje</h3>
              <div className={styles.billing}>
                <p><strong>Luhovy Industries, s. r. o.</strong></p>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>divízia LASER48</p>
                <p>Nosice 256</p>
                <p>020 01 Púchov</p>
                <p>Slovensko</p>
                <br />
                <p>IČO: 54274061</p>
                <p>DIČ: 2121638189</p>
                <p>IČ DPH: SK2121638189</p>
                <br />
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>OR OS Trenčín, oddiel: Sro, vložka č. 43022/R</p>
                <br />
                <p>Tatra banka, a.s.</p>
                <p>IBAN: SK31 1100 0000 0029 4612 2649</p>
                <p>SWIFT: TATRSKBX</p>
              </div>

              <div style={{ marginTop: "var(--space-xl)" }}>
                <h3>Kto sme?</h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--text-sm)", marginTop: "var(--space-sm)" }}>
                  {COMPANY} je divízia spoločnosti {PARENT_COMPANY} a člen skupiny LRA GROUP.
                  Špecializujeme sa na rýchle laserové rezanie kovov pre malé a stredné firmy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Kde nás nájdeš" center />
          <div className={styles.mapStatic}>
            <a
              href="https://www.google.com/maps/search/Nosice+256,+020+01+Púchov,+Slovensko"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              <Image
                src="/images/mapa.png"
                alt="LASER48 — Nosice 256, 020 01 Púchov, Slovensko"
                width={1200}
                height={600}
                style={{ width: "100%", height: "auto", borderRadius: "var(--radius-md)" }}
              />
            </a>
            <div style={{ textAlign: "center", marginTop: "var(--space-md)" }}>
              <a
                href="https://www.google.com/maps/search/Nosice+256,+020+01+Púchov,+Slovensko"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapButton}
              >
                Otvoriť v Google Maps →
              </a>
            </div>
          </div>
          <div style={{ marginTop: "var(--space-xl)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-lg)", fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>
            <div>
              <p><strong>Z Bratislavy (cca 170 km, 2h):</strong></p>
              <p>Diaľnica D1 smer Žilina → Exit Púchov</p>
            </div>
            <div>
              <p><strong>Z Žiliny (cca 50 km, 40 min):</strong></p>
              <p>Cesta I/11 smer Púchov</p>
            </div>
            <div>
              <p><strong>Z Trenčína (cca 30 km, 30 min):</strong></p>
              <p>Cesta I/61 smer Púchov</p>
            </div>
            <div>
              <p><strong>Parkovanie:</strong></p>
              <p>Priamo pri objekte, zadarmo</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Radšej objednaj online"
        text="Viete presne čo potrebujete? Pošlite výkres a cenovú ponuku dostanete do 24 hodín."
        buttonText="Pošlite dopyt →"
      />
    </>
  );
}
