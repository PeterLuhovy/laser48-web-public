import Image from "next/image";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  title: string;
  perex?: string;
  bgImage?: string;
  small?: boolean;
  children?: React.ReactNode;
};

export default function HeroSection({
  title,
  perex,
  bgImage,
  small,
  children,
}: HeroSectionProps) {
  return (
    <section className={`${styles.hero} ${small ? styles.heroSmall : ""}`}>
      {bgImage && (
        <div className={styles.bgImage}>
          <Image src={bgImage} alt="" fill priority sizes="100vw" />
        </div>
      )}
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <h1 className={styles.h1}>{title}</h1>
        {perex && <p className={styles.perex}>{perex}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </section>
  );
}
