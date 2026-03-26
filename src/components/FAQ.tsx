"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

function FAQItemComponent({ question, answer, index }: FAQItem & { index: number }) {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${index}`;

  return (
    <div className={styles.item}>
      <button
        className={styles.question}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={answerId}
      >
        {question}
        <ChevronDown
          size={20}
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
        />
      </button>
      <div
        id={answerId}
        role="region"
        aria-hidden={!open}
        className={`${styles.answer} ${open ? styles.answerOpen : ""}`}
      >
        {answer}
      </div>
    </div>
  );
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div>
      {items.map((item, i) => (
        <FAQItemComponent key={i} index={i} {...item} />
      ))}
    </div>
  );
}
