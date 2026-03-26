import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "secondaryLight";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  href = "/kontakt",
  variant = "primary",
  size = "lg",
  children,
  className,
  ...rest
}: ButtonProps) {
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${className || ""}`;

  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
