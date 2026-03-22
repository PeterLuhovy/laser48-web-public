"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { PHONE, PHONE_TEL, COMPANY } from "@/config";
import styles from "./Header.module.css";

const navItems = [
  { href: "/sluzby", label: "Služby" },
  { href: "/ako-to-funguje", label: "Ako to funguje" },
  { href: "/cennik", label: "Cenník" },
  { href: "/referencie", label: "Referencie" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo-light.png"
              alt={COMPANY}
              width={160}
              height={40}
              className={styles.logoImg}
              priority
            />
          </Link>

          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
            <Link href="/kontakt#formular" className={styles.cta}>
              Pošli dopyt
            </Link>
          </nav>

          <a href={PHONE_TEL} className={styles.phoneMobile}>
            <Phone size={16} />
            {PHONE}
          </a>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Zavrieť menu" : "Otvoriť menu"}
            aria-expanded={menuOpen}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </header>

      <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/kontakt"
          className={styles.cta}
          onClick={() => setMenuOpen(false)}
        >
          Pošli dopyt
        </Link>
      </nav>
    </>
  );
}
