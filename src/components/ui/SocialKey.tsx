"use client";

import { motion } from "motion/react";
import Icon from "@/components/icons/Icon";
import type { IconName } from "@/components/icons/svgs";

const spring = { type: "spring", bounce: 0.4, duration: 0.4 } as const;

/** Pressed-in square key with a platform logo; tilts on hover (Framer "Social Key"). */
export default function SocialKey({
  label,
  icon,
  href,
  colour,
  size = "default",
}: {
  label: string;
  icon: IconName;
  href: string;
  colour: string;
  size?: "default" | "small";
}) {
  const small = size === "small";
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={label}
      style={{
        display: "flex",
        flex: "none",
        alignItems: "center",
        justifyContent: "center",
        width: small ? 40 : 56,
        height: small ? 40 : 56,
        borderRadius: small ? 12 : 14,
        boxShadow: "var(--pressed-in)",
        backgroundColor: `var(--${colour})`,
      }}
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{ rest: { rotate: 0 }, hover: { rotate: -6 } }}
      transition={spring}
      data-framer-name={small ? "Small" : "Default"}
    >
      <motion.span
        variants={{ rest: { scale: 1 }, hover: { scale: 1.15 } }}
        transition={spring}
      >
        <Icon name={icon} size={small ? 20 : 26} stroke={2} fillOpacity={0.3} />
      </motion.span>
    </motion.a>
  );
}
