"use client";

import Link from "next/link";
import { LayoutGroup, motion, type Transition } from "motion/react";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import SprinkleText from "@/components/fx/SprinkleText";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import s from "./BriefDesk.module.css";

type Size = "L" | "M" | "S";
type Spot = { left?: number; right?: number; top: number };
type Placed = { L: Spot; M: Spot; S: Spot; rotate: number; rotateS: number; order: number };

const NOTES: (Placed & { label: string; text: string; colour: string })[] = [
  { label: "Brief 01", text: "Make it pop, but calm.", colour: "yellow", L: { left: 420, top: 380 }, M: { left: 284, top: 357 }, S: { right: 40, top: 120 }, rotate: -8, rotateS: 12, order: 0 },
  { label: "Brief 02", text: "Our nan should get it.", colour: "pink", L: { right: 64, top: 360 }, M: { right: 43, top: 338 }, S: { left: 18, top: 250 }, rotate: 18, rotateS: -16, order: 1 },
  { label: "Brief 03", text: "A festival, but for chairs.", colour: "purple", L: { right: 274, top: 26 }, M: { right: 185, top: 24 }, S: { right: 32, top: 440 }, rotate: 13, rotateS: -6, order: 4 },
  { label: "Brief 04", text: "Can the box be the ad?", colour: "blue", L: { left: 300, top: 100 }, M: { left: 203, top: 94 }, S: { left: 30, top: 630 }, rotate: -24, rotateS: 20, order: 5 },
];

const RESULTS: (Placed & { name: string; slug: string; image: string })[] = [
  { name: "Ethe Ceramics", slug: "ethe-ceramics", image: "TkHVYr9TNx8mrO2SHqoBtceXkvY.webp", L: { left: 230, top: 320 }, M: { left: 155, top: 300 }, S: { left: 14, top: 70 }, rotate: -14, rotateS: -12, order: 2 },
  { name: "Larder & Co.", slug: "larder-and-co", image: "W0AFbAhxQqTtea16VTOtUuyWw.jpg", L: { right: 304, top: 250 }, M: { right: 205, top: 235 }, S: { right: 20, top: 300 }, rotate: 9, rotateS: 10, order: 3 },
  { name: "Musse Design Week", slug: "musse-design-week", image: "snMgEmRClEP2X7rxckFywACtluE.webp", L: { left: 24, top: 40 }, M: { left: 16, top: 38 }, S: { left: 24, top: 470 }, rotate: 20, rotateS: 16, order: 6 },
  { name: "Slow Burn Candles", slug: "slow-burn-candles", image: "BjHRTXwUTltzEKXC5HgFBvhdA3Q.jpg", L: { right: 84, top: 70 }, M: { right: 57, top: 66 }, S: { right: 24, top: 620 }, rotate: -11, rotateS: -9, order: 7 },
];

type Tool = { name: string; L: Spot; M: Spot; S: Spot; rotate: number; rotateS: number };

const PENCIL: Tool = { name: "Pencil", L: { left: 500, top: 300 }, M: { left: 338, top: 282 }, S: { left: 100, top: 36 }, rotate: 38, rotateS: -28 };
const TAPE: Tool = { name: "Tape Roll", L: { left: 520, top: 160 }, M: { left: 351, top: 150 }, S: { right: 32, top: 26 }, rotate: 0, rotateS: 0 };
const LUMPS: (Tool & { colour: string; size: [number, number]; small: [number, number] })[] = [
  { name: "Lump", colour: "orange", size: [98, 76], small: [70, 54], L: { left: 110, top: 520 }, M: { left: 74, top: 489 }, S: { right: 60, top: 730 }, rotate: -20, rotateS: -15 },
  { name: "Lump", colour: "purple", size: [74, 58], small: [52, 42], L: { right: 40, top: 40 }, M: { right: 27, top: 38 }, S: { left: 12, top: 410 }, rotate: 30, rotateS: 25 },
  { name: "Lump", colour: "yellow", size: [52, 42], small: [38, 30], L: { left: 470, top: 570 }, M: { left: 318, top: 536 }, S: { right: 22, top: 560 }, rotate: 10, rotateS: 0 },
];
const BALL: Tool = { name: "Paper Ball", L: { left: 320, top: 520 }, M: { left: 216, top: 489 }, S: { left: 140, top: 390 }, rotate: 0, rotateS: 0 };

const settle = (delay: number): Transition => ({ type: "spring", bounce: 0.3, duration: 0.9, delay });
const scatter: Transition = { type: "spring", bounce: 0.3, duration: 0.9 };

function useSize(): Size {
  const [size, setSize] = useState<Size>("L");
  useEffect(() => {
    const m = window.matchMedia("(min-width: 1200px)");
    const t = window.matchMedia("(min-width: 810px)");
    const update = () => setSize(m.matches ? "L" : t.matches ? "M" : "S");
    update();
    m.addEventListener("change", update);
    t.addEventListener("change", update);
    return () => {
      m.removeEventListener("change", update);
      t.removeEventListener("change", update);
    };
  }, []);
  return size;
}

/** A desk item that sits at its messy spot and slides into the grid when tidied. */
function Item({
  tidy,
  size,
  spot,
  rotate,
  delay,
  className,
  style,
  name,
  children,
}: {
  tidy: boolean;
  size: Size;
  spot: Placed | Tool;
  rotate: number;
  delay: number;
  className?: string;
  style?: CSSProperties;
  name: string;
  children?: ReactNode;
}) {
  const at = spot[size];
  const transition = tidy ? settle(delay) : scatter;
  return (
    <motion.div
      layout
      className={className}
      data-framer-name={name}
      style={{
        ...style,
        ...(tidy ? { position: "relative" } : { position: "absolute", left: at.left, right: at.right, top: at.top }),
        order: "order" in spot && size === "S" ? spot.order : undefined,
      }}
      initial={false}
      animate={{ rotate: tidy ? 0 : rotate }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export default function BriefDesk() {
  const [tidy, setTidy] = useState(false);
  const size = useSize();
  const small = size !== "L";
  const rot = (p: { rotate: number; rotateS: number }) => (size === "S" ? p.rotateS : p.rotate);

  return (
    <section className={s.section} data-framer-name="Section - Brief Desk">
      <div className={s.container} data-framer-name="Container">
        <div className={`${s.root} ${tidy ? s.isTidy : ""}`} data-framer-name={tidy ? "Tidy" : "Mess"}>
          <div className={s.headingRow} data-framer-name="Heading Row">
            <div className={s.headingWrapper} data-framer-name="Heading Wrapper">
              <Tag label="How briefs land" />
              <div className={s.headingSwap} data-framer-name="Heading Swap">
                <motion.div initial={false} animate={{ opacity: tidy ? 0 : 1 }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}>
                  <SprinkleText className={`t-96 ${s.heading}`}>Every brief lands like this.</SprinkleText>
                </motion.div>
                <motion.h2
                  className={`t-96 ${s.heading} ${s.headingBack}`}
                  initial={false}
                  animate={{ opacity: tidy ? 0.99 : 0, top: tidy ? 0 : 28 }}
                  transition={{ type: "spring", bounce: 0.3, duration: 0.7, delay: 0.15 }}
                  aria-hidden={!tidy}
                >
                  We hand it back like this.
                </motion.h2>
              </div>
            </div>
            <div className={s.buttons} data-framer-name="Buttons">
              {tidy ? <Button label="Make a mess" onClick={() => setTidy(false)} /> : <Button label="Tidy up" onClick={() => setTidy(true)} />}
            </div>
          </div>
          <LayoutGroup>
            <motion.div layout className={s.desk} data-framer-name="Desk" transition={tidy ? settle(0) : scatter}>
              {NOTES.map((n, i) => (
                <Item key={n.label} tidy={tidy} size={size} spot={n} rotate={rot(n)} delay={i * 0.05} className={s.noteSpot} name="Brief Note">
                  <div className={`${s.note} ${small ? s.noteSmall : ""}`} style={{ backgroundColor: `var(--${n.colour})` }}>
                    <div className={`${s.noteTape} ${small ? s.noteTapeSmall : ""}`} data-framer-name="Tape" />
                    <p className="t-13">{n.label}</p>
                    <p className="t-24">{n.text}</p>
                  </div>
                </Item>
              ))}
              {RESULTS.map((r, i) => (
                <Item key={r.slug} tidy={tidy} size={size} spot={r} rotate={rot(r)} delay={0.2 + i * 0.05} className={s.resultSpot} name="Brief Result">
                  <Link href={`/projects/${r.slug}`} className={`${s.result} ${small ? s.resultSmall : ""}`}>
                    <div className={s.well} data-framer-name="Photo Well">
                      <img src={`/f/${r.image}`} alt="" loading="lazy" />
                    </div>
                    <div className={s.caption} data-framer-name="Caption">
                      <p className="t-13">→</p>
                      <p className="t-13">{r.name}</p>
                    </div>
                  </Link>
                </Item>
              ))}
              <motion.div layout className={`${s.tools} ${small ? s.toolsSmall : ""}`} style={{ order: size === "S" ? 8 : undefined }} transition={tidy ? settle(0.35) : scatter} data-framer-name="Tools">
                <Item tidy={tidy} size={size} spot={PENCIL} rotate={rot(PENCIL)} delay={0.4} className={s.pencil} name="Pencil">
                  <div className={s.eraser} data-framer-name="Eraser" />
                  <div className={s.body} data-framer-name="Body" />
                  <div className={s.tip} data-framer-name="Tip">
                    <div className={s.lead} data-framer-name="Lead" />
                  </div>
                </Item>
                <Item tidy={tidy} size={size} spot={TAPE} rotate={0} delay={0.44} className={s.tapeRoll} name="Tape Roll">
                  <div className={s.core} data-framer-name="Core" />
                </Item>
                {LUMPS.map((l, i) => (
                  <Item
                    key={i}
                    tidy={tidy}
                    size={size}
                    spot={l}
                    rotate={rot(l)}
                    delay={0.48 + i * 0.04}
                    className={s.lump}
                    style={{ backgroundColor: `var(--${l.colour})`, width: (small ? l.small : l.size)[0], height: (small ? l.small : l.size)[1] }}
                    name="Lump"
                  />
                ))}
                <Item tidy={tidy} size={size} spot={BALL} rotate={0} delay={0.6} className={s.paperBall} name="Paper Ball" />
              </motion.div>
            </motion.div>
          </LayoutGroup>
        </div>
      </div>
    </section>
  );
}
