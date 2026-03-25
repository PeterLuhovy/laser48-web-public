import styles from "./TestimonialCard.module.css";

type TestimonialCardProps = {
  quote: string;
  name?: string;
  company?: string;
};

export default function TestimonialCard({ quote, name, company }: TestimonialCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.quote}>{quote}</p>
      {(name || company) && (
        <div className={styles.author}>
          {name && <p className={styles.name}>{name}</p>}
          {company && <p className={styles.company}>{company}</p>}
        </div>
      )}
    </div>
  );
}
