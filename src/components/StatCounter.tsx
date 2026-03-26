import styles from "./StatCounter.module.css";

type StatCounterProps = {
  value: string;
  label: string;
  dark?: boolean;
};

export default function StatCounter({ value, label, dark }: StatCounterProps) {
  return (
    <div className={`${styles.stat} ${dark ? styles.dark : ""}`}>
      <p className={styles.number}>{value}</p>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
