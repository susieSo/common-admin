import React from "react";
import styles from "./Typography.module.css";

interface TypographyProps {
  children: React.ReactNode;
}

export function H1({ children }: TypographyProps) {
  return <h1 className={styles.h1}>{children}</h1>;
}

export function H2({ children }: TypographyProps) {
  return <h2 className={styles.h2}>{children}</h2>;
}

export function H3({ children }: TypographyProps) {
  return <h3 className={styles.h3}>{children}</h3>;
}

export function SubTitle01({ children }: TypographyProps) {
  return <p className={styles.subTitle01}>{children}</p>;
}

export function SubTitle02({ children }: TypographyProps) {
  return <p className={styles.subTitle02}>{children}</p>;
}

export function SubTitle03({ children }: TypographyProps) {
  return <p className={styles.subTitle03}>{children}</p>;
}

export function SubTitleLabel({ children }: TypographyProps) {
  return <label className={styles.subTitleLabel}>{children}</label>;
}
