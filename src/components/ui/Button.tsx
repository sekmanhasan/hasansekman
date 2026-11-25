"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useRef, type CSSProperties, type MouseEventHandler } from "react";
import { clay } from "@/lib/clay";
import { FatArrow } from "./Arrow";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "light" | "big";

const spring = { type: "spring", bounce: 0.4, duration: 0.45 } as const;

/** The shine bands slide off to the right, come back in from the left and settle (Clay Shine Button). */
export function sweep(node: HTMLElement | null) {
  if (!node || typeof node.animate !== "function") return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
  const w = node.offsetWidth;
  node.animate(
    [
      { backgroundPosition: "0px 0px" },
      { backgroundPosition: `${w}px 0px`, offset: 0.5 },
      { backgroundPosition: `${-w}px 0px`, offset: 0.5001 },
      { backgroundPosition: "0px 0px" },
    ],
    { duration: 900, easing: "cubic-bezier(.45,0,.2,1)" },
  );
}

type Props = {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  newTab?: boolean;
  onClick?: MouseEventHandler;
  className?: string;
  style?: CSSProperties;
  type?: "button" | "submit";
};

export default function Button({ label, href, variant = "primary", newTab, onClick, className, style, type }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const fill = variant === "light" ? "light" : "orange";
  const content = (
    <>
      <motion.span className={styles.label} variants={{ pressed: { scale: variant === "big" ? 1 : 0.96 } }} transition={spring}>
        <span className={variant === "big" ? `t-64 ${styles.bigText}` : `t-18 ${styles.text}`}>{label}</span>
      </motion.span>
      <motion.span
        className={styles.blob}
        style={{ backgroundColor: variant === "light" ? "var(--orange)" : "var(--black)" }}
        variants={{ hover: { scale: variant === "big" ? 1.1 : 1.12 }, pressed: { scale: 0.92 } }}
        transition={spring}
      >
        <motion.span
          className={styles.arrow}
          variants={{ hover: { rotate: -45 }, pressed: { rotate: -45, scale: variant === "big" ? 1 : 0.9 } }}
          transition={spring}
        >
          <FatArrow color={variant === "light" ? "var(--dark)" : "var(--cream)"} size={variant === "big" ? 36 : 20} />
        </motion.span>
      </motion.span>
    </>
  );

  const shared = {
    className: `${styles.button} ${styles[variant]} clay-sweep ${className ?? ""}`,
    style: { ...clay(fill, undefined, "pill"), ...style },
    initial: "rest",
    whileHover: "hover",
    whileTap: "pressed",
    onPointerEnter: (e: React.PointerEvent) => {
      if (e.pointerType === "mouse" || e.pointerType === "pen") sweep(ref.current);
    },
    "data-variant": variant,
  };

  if (!href) {
    return (
      <motion.button ref={ref as never} type={type ?? "button"} onClick={onClick} {...shared}>
        {content}
      </motion.button>
    );
  }

  const external = /^(https?:|mailto:|tel:)/.test(href);
  if (external || newTab) {
    return (
      <motion.a ref={ref as never} href={href} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener" : undefined} onClick={onClick} {...shared}>
        {content}
      </motion.a>
    );
  }
  return (
    <MotionLink ref={ref as never} href={href} onClick={onClick} {...shared}>
      {content}
    </MotionLink>
  );
}

const MotionLink = motion.create(Link);
