"use client";

import { motion } from "motion/react";
import Reveal from "@/components/fx/Reveal";
import SprinkleText from "@/components/fx/SprinkleText";
import Tag from "@/components/ui/Tag";
import s from "./Honours.module.css";

type Honour =
  | { kind: "Clipping"; colour: string; label: string; mark: string; image: string; ratio: number; alt: string; name: string; detail: string }
  | { kind: "Rosette" | "Medal" | "Trophy"; colour: string; mark: string; name: string; detail: string };

const HONOURS: Honour[] = [
  { kind: "Clipping", colour: "blue", label: "Featured on", mark: "Behance", image: "/f/XQYYvenu4ZIhTRjUulI0ibqOlI.png", ratio: 800 / 500, alt: "Behance logo", name: "Ethe Ceramics", detail: "Packaging gallery · 2025" },
  { kind: "Clipping", colour: "pink", label: "Site of the Month", mark: "Awwwards", image: "/f/YakyFpJuTVgW9ZU3EP9RZhHKQ7U.png", ratio: 1, alt: "Awwwards logo", name: "Loudhouse Records", detail: "Website · 2026" },
  { kind: "Rosette", colour: "yellow", mark: "WOTD", name: "CSS Design Awards", detail: "Website of the Day · 2026" },
  { kind: "Medal", colour: "bg", mark: "Silver", name: "Pentawards", detail: "Larder & Co. · 2025" },
  { kind: "Clipping", colour: "pink", label: "Popular on", mark: "Dribbble", image: "/f/Uolx0gRbDvylbx7OR5OlZIQsLk.png", ratio: 800 / 500, alt: "Dribbble logo", name: "Slow Burn Candles", detail: "Popular shot · 2025" },
  { kind: "Trophy", colour: "yellow", mark: "FWA", name: "The FWA", detail: "FWA of the Day · 2026" },
];

const PETALS = [
  [47, 0], [71, 6], [88, 24], [94, 47], [88, 70], [71, 88], [47, 94], [24, 88], [6, 71], [0, 47], [6, 24], [23, 6],
];

const sway = (duration: number) => ({
  animate: { rotate: [0, 2] },
  transition: { duration, ease: [0.45, 0, 0.55, 1] as const, repeat: Infinity, repeatType: "mirror" as const },
});

function Shape(h: Honour) {
  const fill = { backgroundColor: `var(--${h.colour})` };
  switch (h.kind) {
    case "Clipping":
      return (
        <div className={s.clipping} data-framer-name="Clipping Shape">
          <div className={s.masthead} style={fill} data-framer-name="Masthead">
            <p className="t-13">{h.label}</p>
            <p className="t-24b">{h.mark}</p>
          </div>
          <div className={s.photo} style={{ aspectRatio: h.ratio }} data-framer-name="Photo">
            <img src={h.image} alt={h.alt} loading="lazy" />
          </div>
          <div className={s.clipTape} data-framer-name="Tape" />
        </div>
      );
    case "Rosette":
      return (
        <motion.div className={s.rosette} style={{ originY: 1 }} {...sway(3.2)} data-framer-name="Rosette Shape">
          <div className={`${s.tail} ${s.tailL}`} style={fill} data-framer-name="Tail" />
          <div className={`${s.tail} ${s.tailR}`} style={fill} data-framer-name="Tail" />
          {PETALS.map(([left, top], i) => (
            <div key={i} className={s.petal} style={{ ...fill, left, top }} data-framer-name="Petal" />
          ))}
          <div className={s.rosetteDisc} style={fill} data-framer-name="Disc" />
          <div className={s.centre} data-framer-name="Centre">
            <p className="t-24b">{h.mark}</p>
          </div>
        </motion.div>
      );
    case "Medal":
      return (
        <motion.div className={s.medal} style={{ originY: 1 }} {...sway(2.6)} data-framer-name="Medal Shape">
          <div className={`${s.ribbon} ${s.ribbonL}`} data-framer-name="Ribbon" />
          <div className={`${s.ribbon} ${s.ribbonR}`} data-framer-name="Ribbon" />
          <div className={s.medalDisc} style={fill} data-framer-name="Disc">
            <p className="t-24b">{h.mark}</p>
          </div>
        </motion.div>
      );
    case "Trophy":
      return (
        <div className={s.trophy} data-framer-name="Trophy Shape">
          <div className={s.cupRow} data-framer-name="Cup Row">
            <div className={`${s.handle} ${s.handleL}`} style={fill} data-framer-name="Handle" />
            <div className={`${s.handle} ${s.handleR}`} style={fill} data-framer-name="Handle" />
            <div className={s.cup} style={fill} data-framer-name="Cup">
              <p className="t-24b">{h.mark}</p>
            </div>
          </div>
          <div className={s.stem} style={fill} data-framer-name="Stem" />
          <div className={s.base} data-framer-name="Base" />
        </div>
      );
  }
}

export default function Honours() {
  return (
    <section className={s.section} data-framer-name="Section - Honours">
      <div className={s.container} data-framer-name="Container">
        <div className={s.headingWrapper} data-framer-name="Heading Wrapper">
          <Tag label="Recognition" />
          <SprinkleText className={`t-96 ${s.dark}`}>Things we’ve been handed</SprinkleText>
          <p className={`t-16 ${s.dark} ${s.intro}`}>Prizes and press for work we made with our clients.</p>
        </div>
        <div className={s.cabinet} data-framer-name="Cabinet">
          {HONOURS.map((h, i) => (
            <div key={i} className={s.honour} data-framer-name={h.kind}>
              <div className={s.shelfSpot} data-framer-name="Shelf Spot">
                <Reveal
                  className={s.object}
                  from={{ opacity: 0, rotate: -6, y: -70 }}
                  transition={{ type: "spring", bounce: 0.45, duration: 0.9 }}
                  amount={0.5}
                  data-framer-name="Object"
                >
                  <Shape {...h} />
                </Reveal>
                <div className={s.plank} data-framer-name="Plank" />
                <div className={s.plankShade} data-framer-name="Plank Shade" />
              </div>
              <div className={s.captionRow} data-framer-name="Caption Row">
                <div className={`${s.caption} card-sh`} data-framer-name="Caption">
                  <p className="t-18">{h.name}</p>
                  <p className={`t-13 ${s.muted}`}>{h.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
