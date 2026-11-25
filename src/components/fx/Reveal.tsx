"use client";

import { motion, type Transition } from "motion/react";
import type { CSSProperties, ElementType, ReactNode } from "react";

export type From = { opacity?: number; x?: number; y?: number; scale?: number; rotate?: number };

type Props = {
  from: From;
  transition: Transition;
  amount?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  /** Framer's "appear" effect: animate on mount instead of when scrolled into view. */
  onMount?: boolean;
  to?: From;
  centerX?: boolean;
  /** Play every time the layer comes into view, not just the first. */
  once?: boolean;
} & Record<string, unknown>;

const REST = { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 };

const cache = new Map<ElementType, typeof motion.div>();
function motionFor(as: ElementType) {
  if (typeof as === "string" && as in motion) return (motion as unknown as Record<string, typeof motion.div>)[as];
  let m = cache.get(as);
  if (!m) {
    m = motion.create(as) as typeof motion.div;
    cache.set(as, m);
  }
  return m;
}

/** Framer's scroll appear effect: start from `from`, settle at rest once the layer is `amount` in view. */
export default function Reveal({ from, transition, amount = 0.3, as = "div", className, style, children, onMount, to, centerX, once = true, ...rest }: Props) {
  const M = motionFor(as);
  const target = { ...REST, ...to };
  return (
    <M
      className={className}
      style={style}
      initial={{ ...REST, ...from }}
      {...(onMount ? { animate: target } : { whileInView: target, viewport: { once, amount } })}
      transition={transition}
      transformTemplate={centerX ? (_: unknown, t: string) => `translateX(-50%) ${t}` : undefined}
      {...rest}
    >
      {children}
    </M>
  );
}
