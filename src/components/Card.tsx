import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import styles from "./Card.module.css";

type CardProps = {
  icon?: LucideIcon;
  step?: string;
  title: string;
  href?: string;
  children: React.ReactNode;
};

export default function Card({ icon: Icon, step, title, href, children }: CardProps) {
  const content = (
    <>
      {Icon && (
        <div className={styles.icon}>
          <Icon size={32} />
        </div>
      )}
      {step && <p className={styles.step}>{step}</p>}
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.text}>{children}</div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${styles.card} ${styles.cardLink}`}>
        {content}
      </Link>
    );
  }

  return <div className={styles.card}>{content}</div>;
}
