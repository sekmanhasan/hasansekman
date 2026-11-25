"use client";

import { forwardRef, type ComponentProps } from "react";
import { motion } from "motion/react";
import { withTurntable } from "@/components/framer/Turntable";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import SprinkleText from "@/components/fx/SprinkleText";
import Icon from "@/components/icons/Icon";
import { clay } from "@/lib/clay";
import { PROJECTS } from "@/data/projects";
import TurntableCard from "./TurntableCard";
import s from "./home.module.css";

const Stage = withTurntable(
  forwardRef<HTMLDivElement, ComponentProps<"div">>(function Stage(props, ref) {
    return <div ref={ref} {...props} />;
  }),
) as React.ForwardRefExoticComponent<ComponentProps<"div"> & React.RefAttributes<HTMLDivElement>>;

const hover = { scale: 1.08, transition: { type: "spring", bounce: 0.4, duration: 0.45 } } as const;

export default function WorkTurntable() {
  return (
    <section className={s.work} data-framer-name="Section - Work">
      <div className={s.workContainer}>
        <div className={s.headingWrapper}>
          <div className={s.titleWrapper}>
            <Tag label="Selected work" />
            <SprinkleText className={`t-96 ${s.balance}`}>Give it a spin.</SprinkleText>
          </div>
          <div className={s.intro}>
            <p className={`t-16 ${s.balance}`}>Our latest projects on the turntable. Drag to spin it, then open the one in front.</p>
            <Button label="All projects" href="/projects" variant="light" />
          </div>
        </div>
        <Stage className={`${s.turntable} clay-l`} style={clay("light")} data-framer-name="Turntable">
          <div className={s.projectsList} data-framer-name="Projects List">
            {PROJECTS.slice(0, 8).map((p) => (
              <div key={p.slug} className={s.cardBox}>
                <TurntableCard project={p} />
              </div>
            ))}
          </div>
          <div className={s.hintRow} data-framer-name="Hint Row">
            <div className={`${s.hint} clay-s`} style={{ ...clay("yellow", "light", "pill"), rotate: "-3deg" }} data-framer-name="Hint">
              <p className="t-13" style={{ whiteSpace: "pre" }}>
                Drag to spin
              </p>
            </div>
          </div>
          <div className={s.arrows} data-framer-name="Arrows">
            <motion.div className={`${s.spin} clay-s clay-sweep`} style={clay("light", "light", "round")} whileHover={hover} data-framer-name="Spin Left">
              <Icon name="ArrowLeft" size={26} stroke={2} />
            </motion.div>
            <motion.div className={`${s.spin} clay-s clay-sweep`} style={clay("light", "light", "round")} whileHover={hover} data-framer-name="Spin Right">
              <Icon name="ArrowRight" size={26} stroke={2} />
            </motion.div>
          </div>
        </Stage>
      </div>
    </section>
  );
}
