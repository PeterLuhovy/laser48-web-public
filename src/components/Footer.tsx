import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE, PHONE_TEL, EMAIL, EMAIL_MAILTO, ADDRESS, COMPANY, PARENT_COMPANY, PARENT_URL, GROUP, GROUP_URL } from "@/config";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Image
              src="/images/logo-dark.png"
              alt={COMPANY}
              width={140}
              height={36}
              className={styles.logoImg}
            />
            <p>
              Laserové rezanie kovov. Štandard 7 dní, express 48h alebo 24h.
              Nerezová oceľ, čierna oceľ, pozinkovaná oceľ, hliník.
            </p>
          </div>

          <nav aria-label="Pätička">
            <h4 className={styles.heading}>Navigácia</h4>
            <div className={styles.links}>
              <Link href="/sluzby">Služby</Link>
              <Link href="/ako-to-funguje">Ako to funguje</Link>
              <Link href="/cennik">Cenník</Link>
              <Link href="/referencie">Referencie</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/kontakt">Kontakt</Link>
            </div>
          </nav>

          <div>
            <h4 className={styles.heading}>Služby</h4>
            <div className={styles.links}>
              <Link href="/sluzby">Laserové rezanie</Link>
              <Link href="/cennik">Cenník</Link>
              <Link href="/ako-to-funguje">Ako objednať</Link>
            </div>
          </div>

          <div>
            <h4 className={styles.heading}>Kontakt</h4>
            <div className={styles.contactItem}>
              <Phone size={14} />
              <a href={PHONE_TEL}>{PHONE}</a>
            </div>
            <div className={styles.contactItem}>
              <Mail size={14} />
              <a href={EMAIL_MAILTO}>{EMAIL}</a>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={14} />
              <span>{ADDRESS}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} {COMPANY}. Všetky práva vyhradené.
          </p>
          <p className={styles.group}>
            <Link href="/ochrana-osobnych-udajov">Ochrana osobných údajov</Link>
            {" | "}Divízia {PARENT_COMPANY} | Člen {GROUP}
          </p>
        </div>
      </div>
    </footer>
  );
}
