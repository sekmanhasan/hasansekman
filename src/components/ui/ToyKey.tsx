"use client";

import Link from "next/link";
import { forwardRef, type CSSProperties } from "react";
import { withToyKey } from "@/components/framer/ToyKeyboard";
import { clay } from "@/lib/clay";
import styles from "./ToyKey.module.css";

type Props = {
  label: string;
  legend?: string;
  screenTitle?: string;
  screen?: string;
  fill?: string;
  surface?: string;
  href: string;
  newTab?: boolean;
  variant?: "big" | "small";
  showIcon?: boolean;
  className?: string;
  style?: CSSProperties;
};

function House() {
  return (
    <svg viewBox="0 0 256 256" width="100%" height="100%" fill="none" stroke="var(--dark)" strokeWidth={20.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54a8,8,0,0,1,2.62,5.92V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" />
    </svg>
  );
}

const ToyKeyBase = forwardRef<HTMLAnchorElement, Props>(function ToyKeyBase(
  { label, legend, screenTitle, screen, fill = "yellow", surface = "light", href, newTab, variant = "big", showIcon, className, style },
  ref,
) {
  const inner = (
    <span className={styles.cap} style={clay(fill, surface)}>
      {legend ? <span className={`t-13 ${styles.legend}`}>{legend}</span> : null}
      <span className={styles.spacer} />
      {showIcon ? (
        <span className={styles.icon}>
          <House />
        </span>
      ) : (
        <span className={`${variant === "big" ? "t-36" : "t-24"} ${styles.label}`}>{label}</span>
      )}
    </span>
  );
  const cls = `${styles.key} ${variant === "small" ? styles.small : styles.big} ${className ?? ""}`;
  const external = /^(https?:|mailto:)/.test(href) || newTab;
  const shared = { ref, className: cls, style, "data-framer-name": variant === "small" ? "Small" : "Big", "aria-label": screenTitle || label };
  return external ? (
    <a href={/^(https?:|mailto:)/.test(href) ? href : `https://${href}`} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener" : undefined} {...shared}>
      {inner}
    </a>
  ) : (
    <Link href={href} {...shared}>
      {inner}
    </Link>
  );
});

const ToyKey = withToyKey(ToyKeyBase) as typeof ToyKeyBase;
export default ToyKey;
