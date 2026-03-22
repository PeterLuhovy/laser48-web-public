"use client";

import { useState, useEffect } from "react";
import { Phone, Copy, Check } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/config";
import styles from "./PhoneButton.module.css";

export default function PhoneButton() {
  const [isMobile, setIsMobile] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  if (isMobile) {
    return (
      <a href={PHONE_TEL} className={styles.btn}>
        <Phone size={16} /> Zavolaj nám
      </a>
    );
  }

  if (showNumber) {
    return (
      <div className={styles.numberBox}>
        <Phone size={16} />
        <span className={styles.number}>{PHONE}</span>
        <button
          className={styles.copyBtn}
          onClick={() => {
            navigator.clipboard.writeText(PHONE.replace(/\s/g, ""));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          title="Kopírovať číslo"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
    );
  }

  return (
    <button className={styles.btn} onClick={() => setShowNumber(true)}>
      <Phone size={16} /> Zavolaj nám
    </button>
  );
}
