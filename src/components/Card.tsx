import type { LucideIcon } from "lucide-react";
import styles from "./Card.module.css";

type CardProps = {
  icon?: LucideIcon;
  step?: string;
  title: string;
  children: React.ReactNode;
};

export default function Card({ icon: Icon, step, title, children }: CardProps) {
  return (
    <div className={styles.card}>
      {Icon && (
        <div className={styles.icon}>
          <Icon size={32} />
        </div>
      )}
      {step && <p className={styles.step}>{step}</p>}
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.text}>{children}</div>
    </div>
  );
}
