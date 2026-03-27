"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { EMAIL, PHONE, PHONE_TEL } from "@/config";
import SectionHeading from "@/components/SectionHeading";
import styles from "@/app/kontakt/page.module.css";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileSizeError, setFileSizeError] = useState("");

  if (searchParams.get("odoslane") === "true") {
    return (
      <div className={styles.successMessage}>
        <SectionHeading
          title="Správa odoslaná ✓"
          subtitle="Ďakujeme za váš dopyt. Odpovieme do 24 hodín v pracovné dni."
        />
        <p style={{ color: "var(--color-text-secondary)", marginTop: "var(--space-md)" }}>
          Urgentné? Zavolajte nám: <a href={PHONE_TEL}>{PHONE}</a>
        </p>
      </div>
    );
  }

  function validateFiles(form: HTMLFormElement) {
    let totalSize = 0;
    for (let i = 1; i <= 3; i++) {
      const input = form.querySelector<HTMLInputElement>(`[name="attachment${i}"]`);
      if (input?.files?.[0]) {
        totalSize += input.files[0].size;
      }
    }
    if (totalSize > MAX_FILE_SIZE) {
      setFileSizeError(`Celková veľkosť súborov (${(totalSize / 1024 / 1024).toFixed(1)} MB) prekračuje limit 10 MB.`);
      return false;
    }
    setFileSizeError("");
    return true;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (isSubmitting) {
      e.preventDefault();
      return;
    }
    if (!validateFiles(e.currentTarget)) {
      e.preventDefault();
      return;
    }
    setIsSubmitting(true);
  }

  return (
    <div>
      <SectionHeading title="Pošlite nám správu" subtitle="Vyplňte formulár a odpovieme do 24 hodín." />
      <form
        className={styles.form}
        action={`https://formsubmit.co/${EMAIL}`}
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        {/* FormSubmit config */}
        <input type="hidden" name="_subject" value="Nový dopyt z webu laser48.sk" />
        <input type="hidden" name="_captcha" value="true" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://www.laser48.sk/kontakt?odoslane=true" />
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
            placeholder="Napíšte sem svoju otázku alebo požiadavku..."
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="attachment1">Nahrať výkresy (DXF, DWG, PDF — max 10MB spolu)</label>
          <input
            type="file"
            id="attachment1"
            name="attachment1"
            accept=".dxf,.dwg,.pdf,.jpg,.jpeg,.png,.zip"
            onChange={() => setFileSizeError("")}
          />
          <input
            type="file"
            id="attachment2"
            name="attachment2"
            accept=".dxf,.dwg,.pdf,.jpg,.jpeg,.png,.zip"
            style={{ marginTop: "var(--space-xs)" }}
            onChange={() => setFileSizeError("")}
          />
          <input
            type="file"
            id="attachment3"
            name="attachment3"
            accept=".dxf,.dwg,.pdf,.jpg,.jpeg,.png,.zip"
            style={{ marginTop: "var(--space-xs)" }}
            onChange={() => setFileSizeError("")}
          />
          {fileSizeError && (
            <p style={{ fontSize: "var(--text-xs)", color: "#dc3545", marginTop: "var(--space-xs)" }}>
              {fileSizeError}
            </p>
          )}
          <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-secondary)", marginTop: "var(--space-xs)" }}>
            Viac ako 3 súbory? Zbaľte ich do ZIP alebo pošlite na laser@laser48.sk
          </p>
        </div>

        <div className={styles.checkbox}>
          <input type="checkbox" id="gdpr" name="gdpr" required />
          <label htmlFor="gdpr">
            Súhlasím so spracovaním osobných údajov podľa{" "}
            <Link href="/ochrana-osobnych-udajov">zásad ochrany osobných údajov</Link>. *
          </label>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
          {isSubmitting ? "Odosielam..." : "Získať cenu do 24h →"}
        </button>

        <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-secondary)" }}>
          Odpovieme do 24 hodín v pracovné dni. Urgentné? Radšej zavolajte:{" "}
          <a href={PHONE_TEL}>{PHONE}</a>
        </p>
      </form>
    </div>
  );
}
