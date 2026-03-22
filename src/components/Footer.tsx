import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Image
              src="/images/logo-dark.png"
              alt="LASER48"
              width={140}
              height={36}
              className={styles.logoImg}
            />
            <p>
              Laserové rezanie kovov do 7 dní. Garantované.
              Nerezová oceľ, čierna oceľ, hliník.
            </p>
          </div>

          <div>
            <h4 className={styles.heading}>Navigácia</h4>
            <div className={styles.links}>
              <Link href="/sluzby">Služby</Link>
              <Link href="/ako-to-funguje">Ako to funguje</Link>
              <Link href="/cennik">Cenník</Link>
              <Link href="/referencie">Referencie</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/kontakt">Kontakt</Link>
            </div>
          </div>

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
              <a href="tel:+421911132485">+421 911 132 485</a>
            </div>
            <div className={styles.contactItem}>
              <Mail size={14} />
              <a href="mailto:laser@laser48.sk">laser@laser48.sk</a>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={14} />
              <span>Nosice 256, 020 01 Púchov</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} LASER48. Všetky práva vyhradené.
          </p>
          <p className={styles.group}>
            Divízia{" "}
            <a href="https://www.luhovy-industries.sk" target="_blank" rel="noopener noreferrer">
              Luhovy Industries
            </a>
            {" | Člen "}
            <a href="https://lra.group" target="_blank" rel="noopener noreferrer">
              LRA GROUP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
