"use client";

import { motion } from "motion/react";
import { clay } from "@/lib/clay";
import s from "./LabelMaker.module.css";

const LETTERS = "ABCDEFGHIJKL".split("");
const POS = [
  [61, 10], [85, 16], [103, 34], [109, 58], [103, 82], [85, 100],
  [61, 106], [37, 100], [19, 82], [13, 58], [19, 34], [37, 16],
];

/** The clay label maker that sits on the end of a page-hero tape: the wheel turns and the handle drops on hover. */
export default function LabelMaker({ className }: { className?: string }) {
  return (
    <motion.div className={`${s.maker} ${className ?? ""}`} style={clay("purple")} initial="rest" whileHover="hover" data-framer-name="Large">
      <div className={s.mouth} data-framer-name="Mouth" />
      <motion.div
        className={s.handle}
        style={{ ...clay("orange"), originY: 0 }}
        variants={{ rest: { rotate: 20 }, hover: { rotate: 6 } }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
        data-framer-name="Handle"
      />
      <motion.div
        className={s.wheel}
        style={clay("yellow")}
        variants={{ rest: { rotate: 0 }, hover: { rotate: 60 } }}
        transition={{ type: "spring", bounce: 0.35, duration: 0.8 }}
        data-framer-name="Wheel"
      >
        <div className={s.hub} data-framer-name="Hub" />
        <div className={s.letters} data-framer-name="Letters">
          {LETTERS.map((l, i) => (
            <p
              key={l}
              className="t-13"
              style={{ left: `${(POS[i][0] / 132) * 100}%`, top: `${(POS[i][1] / 132) * 100}%`, rotate: `${i * 30}deg` }}
            >
              {l}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
