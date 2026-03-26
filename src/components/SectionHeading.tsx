import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeading({ title, subtitle, center }: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${center ? styles.center : ""}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
