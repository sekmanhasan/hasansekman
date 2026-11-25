"use client";

import { motion } from "motion/react";
import b from "./board.module.css";

export const dragProps = {
  drag: true,
  dragMomentum: false,
  whileTap: { cursor: "grabbing" },
} as const;

/** A round or oval clay sticker with a white rim that can be dragged around the board. */
export default function Sticker({
  label,
  colour,
  oval,
  rotate,
  className,
}: {
  label: string;
  colour: string;
  oval?: boolean;
  rotate: number;
  className?: string;
}) {
  return (
    <motion.div
      {...dragProps}
      className={`${b.paper} ${b.sticker} ${oval ? b.oval : ""} ${className ?? ""}`}
      style={{ rotate, backgroundColor: `var(--${colour})` }}
      data-framer-name={oval ? "Oval" : "Round"}
    >
      <h3 className={`t-24 ${b.stickerText}`}>{label}</h3>
    </motion.div>
  );
}
