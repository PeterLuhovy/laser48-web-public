import Button from "./Button";
import styles from "./CTASection.module.css";

type CTASectionProps = {
  title: string;
  text: string;
  buttonText?: string;
  buttonHref?: string;
  note?: string;
};

export default function CTASection({
  title,
  text,
  buttonText = "Pošli dopyt →",
  buttonHref = "/kontakt",
  note,
}: CTASectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Button href={buttonHref}>{buttonText}</Button>
        {note && <p className={styles.note}>{note}</p>}
      </div>
    </section>
  );
}
