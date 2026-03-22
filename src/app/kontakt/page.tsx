import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kontakt - Telefón, Email, Adresa",
  description:
    "Kontaktuj nás: +421 911 132 485 | laser@laser48.sk | Nosice 256, Púchov. Odpovieme do 24 hodín.",
};

export default function KontaktPage() {
  return (
    <>
      <HeroSection
        title="Kontakt"
        perex="Máš otázku alebo potrebuješ radu? Neváhaj nás kontaktovať. Odpovedáme do 24 hodín (v pracovné dni)."
        small
      />

      {/* Kontaktné údaje */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactBlock}>
              <Phone size={32} />
              <h3>Telefón</h3>
              <a href="tel:+421911132485">+421 911 132 485</a>
              <p>Po–Pia: 8:00–17:00</p>
            </div>
            <div className={styles.contactBlock}>
              <Mail size={32} />
              <h3>Email</h3>
              <a href="mailto:laser@laser48.sk">laser@laser48.sk</a>
              <p>Odpovieme do 24 hodín</p>
            </div>
            <div className={styles.contactBlock}>
              <MapPin size={32} />
              <h3>Adresa</h3>
              <p style={{ fontWeight: 600, fontSize: "var(--text-lg)", color: "var(--color-black)" }}>
                Nosice 256, Púchov
              </p>
              <p>Osobný odber po dohode</p>
            </div>
          </div>

          {/* Formulár + Info */}
          <div className={styles.formSection}>
            <div>
              <SectionHeading title="Pošli nám správu" subtitle="Vyplň formulár a odpovieme do 24 hodín." />
              <form
                className={styles.form}
                action="https://formsubmit.co/laser@laser48.sk"
                method="POST"
                encType="multipart/form-data"
              >
                {/* FormSubmit config */}
                <input type="hidden" name="_subject" value="Nový dopyt z webu laser48.sk" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="name">Meno a priezvisko *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Napr. Ján Novák"
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Napr. jan.novak@firma.sk"
                      required
                    />
                  </div>
                </div>

                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="phone">Telefón</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Napr. +421 912 345 678"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="type">Typ dopytu *</label>
                    <select id="type" name="type" required>
                      <option value="">Vyber...</option>
                      <option value="cenova-ponuka">Cenová ponuka</option>
                      <option value="technicka-otazka">Technická otázka</option>
                      <option value="reklamacia">Reklamácia</option>
                      <option value="ine">Iné</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Správa *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Napíš sem svoju otázku alebo požiadavku..."
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="attachment">Nahrať výkres (DXF, DWG, PDF, max 10MB)</label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    accept=".dxf,.dwg,.pdf,.jpg,.jpeg,.png,.zip"
                  />
                </div>

                <div className={styles.checkbox}>
                  <input type="checkbox" id="gdpr" name="gdpr" required />
                  <label htmlFor="gdpr">
                    Súhlasím so spracovaním osobných údajov podľa zásad ochrany osobných údajov. *
                  </label>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Odoslať správu →
                </button>

                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-secondary)" }}>
                  Odpovieme do 24 hodín v pracovné dni. Urgentné? Radšej zavolaj:{" "}
                  <a href="tel:+421911132485">+421 911 132 485</a>
                </p>
              </form>
            </div>

            <div className={styles.info}>
              <h3>Otváracie hodiny</h3>
              <table className={styles.hoursTable}>
                <tbody>
                  {[
                    ["Pondelok", "8:00–17:00"],
                    ["Utorok", "8:00–17:00"],
                    ["Streda", "8:00–17:00"],
                    ["Štvrtok", "8:00–17:00"],
                    ["Piatok", "8:00–17:00"],
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
                <p><strong>LASER48</strong></p>
                <p>Nosice 256</p>
                <p>020 01 Púchov</p>
                <p>Slovensko</p>
                <br />
                <p>IČO: [doplniť]</p>
                <p>DIČ: [doplniť]</p>
                <p>IČ DPH: [doplniť]</p>
              </div>

              <div style={{ marginTop: "var(--space-xl)" }}>
                <h3>Kto sme?</h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--text-sm)", marginTop: "var(--space-sm)" }}>
                  LASER48 je súčasťou LRA GROUP (Luhovy Research & Aerospace Group).
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
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.5!2d18.324!3d49.117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA3JzAxLjIiTiAxOMKwMTknMjYuNCJF!5e0!3m2!1ssk!2ssk!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LASER48 - Nosice 256, Púchov"
          />
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
        text="Vieš presne čo potrebuješ? Pošli výkres a cenovú ponuku dostaneš do 24 hodín."
        buttonText="Pošli dopyt →"
      />
    </>
  );
}
