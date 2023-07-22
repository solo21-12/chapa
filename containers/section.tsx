import styles from "@/utils/styles";
import React from "react";

type Props = {
  children: React.ReactNode;
  id: string;
};

export default function Section({ children, id }: Props) {
  return (
    <section id={id} className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>{children}</div>
    </section>
  );
}
