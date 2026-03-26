"use client";

import { useState } from "react";
import { Phone, Copy, Check } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/config";
import styles from "./PhoneButton.module.css";

export default function PhoneButton() {
  const [showNumber, setShowNumber] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <>
      {/* Mobile: tel link (shown via CSS) */}
      <a href={PHONE_TEL} className={`${styles.btn} ${styles.mobileOnly}`}>
        <Phone size={16} /> Zavolaj nám
      </a>

      {/* Desktop: show number on click (shown via CSS) */}
      {showNumber ? (
        <div className={`${styles.numberBox} ${styles.desktopOnly}`}>
          <Phone size={16} />
          <span className={styles.number}>{PHONE}</span>
          <button
            className={styles.copyBtn}
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(PHONE.replace(/\s/g, ""));
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              } catch {
                /* clipboard API unavailable */
              }
            }}
            aria-label="Kopírovať číslo"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      ) : (
        <button
          className={`${styles.btn} ${styles.desktopOnly}`}
          onClick={() => setShowNumber(true)}
        >
          <Phone size={16} /> Zavolaj nám
        </button>
      )}
    </>
  );
}
