"use client";

import { motion } from "motion/react";
import { forwardRef } from "react";
import Scribble from "@/components/framer/Scribble";
import { withTickOnScroll } from "@/components/framer/TickOnScroll";
import SprinkleText from "@/components/fx/SprinkleText";
import Icon from "@/components/icons/Icon";
import Tag from "@/components/ui/Tag";
import { clay, color } from "@/lib/clay";
import s from "./process.module.css";

type StepProps = { title: string; weeks: string; text: string; variant?: string };

const Step = withTickOnScroll(
  forwardRef<HTMLDivElement, StepProps>(function RecipeStep({ title, weeks, text, variant }, ref) {
    const done = variant === "Done";
    return (
      <div ref={ref} className={s.step} data-framer-name={done ? "Done" : "To do"}>
        <div className={`${s.check} ${done ? `${s.checkDone} clay-s` : ""}`} style={done ? clay("orange", "bg") : undefined} data-framer-name="Check">
          {done && (
            <motion.span initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", bounce: 0.35, duration: 0.5 }}>
              <Icon name="Check" size={24} stroke={2} color="#000" />
            </motion.span>
          )}
        </div>
        <div className={s.body} data-framer-name="Body">
          <div className={s.titleRow} data-framer-name="Title Row">
            <div className={s.title} data-framer-name="Title">
              <h3 className="t-36">{title}</h3>
              <div className={s.strike} data-framer-name="Strike">
                <div className={s.scribble}>
                  <Scribble
                    color={color("orange")}
                    delay={done ? 0.4 : 0.2}
                    drawn={done}
                    duration={1.2}
                    seed={0}
                    shape="Zigzag"
                    thickness={3.5}
                    wobble={2.2}
                    zigWidth={18}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className={s.weeks} data-framer-name="Weeks">
              <p className="t-13">{weeks}</p>
            </div>
          </div>
          <p className="t-16">{text}</p>
        </div>
      </div>
    );
  }),
) as React.ForwardRefExoticComponent<StepProps & React.RefAttributes<HTMLDivElement>>;

const BRING = ["A rough idea, even a scribble", "A budget, roughly", "One person who can say yes", "A deadline, if there is one"];

const STEPS = [
  { title: "Say hello", weeks: "Week 1", text: "A call or a coffee. We tell you honestly if we’re the right studio." },
  { title: "Rough it out", weeks: "Weeks 2–3", text: "Sketches and a first rough in clay or Figma. Cheap to change, so we change it a lot." },
  { title: "Shape it", weeks: "Weeks 4–8", text: "The real thing, built with you and checked every Thursday." },
  { title: "Hand it over", weeks: "Weeks 9–10", text: "Files, guidelines and a site your team can run. We stay on call for a month." },
];

export default function Process() {
  return (
    <div className={s.wrap} data-framer-name="Section - Process Wrap">
      <section className={`${s.section} clay-l`} style={clay("purple")} data-framer-name="Section - Process">
        <div className={s.container} data-framer-name="Container">
          <div className={s.heading} data-framer-name="Heading Wrapper">
            <div className={s.titleWrap} data-framer-name="Title Wrapper">
              <Tag label="Process" surface="purple" />
              <SprinkleText className="t-96" style={{ textAlign: "center" }}>
                Here’s how it goes
              </SprinkleText>
            </div>
            <p className={`t-22 ${s.intro}`}>Our recipe for a project. The steps tick themselves off as you scroll.</p>
          </div>
          <div className={`${s.card} clay-l`} style={clay("bg", "purple")} data-framer-name="Recipe Card">
            <div className={`${s.tape} ${s.tapeL}`} data-framer-name="Tape" />
            <div className={`${s.tape} ${s.tapeR}`} data-framer-name="Tape" />
            <h2 className="t-64" style={{ textAlign: "center" }}>
              One brand, done properly
            </h2>
            <div className={s.meta} data-framer-name="Meta">
              {["Serves: you and your team", "Prep: 1 week", "Cook: 6–10 weeks"].map((m) => (
                <div key={m} className={s.pill} data-framer-name="Pill">
                  <p className="t-13">{m}</p>
                </div>
              ))}
            </div>
            <div className={s.columns} data-framer-name="Columns">
              <div className={s.bring} data-framer-name="You Bring">
                <h3 className="t-36">You bring</h3>
                <div className={s.items} data-framer-name="Items">
                  {BRING.map((b) => (
                    <div key={b} className={s.item} data-framer-name="Default">
                      <span className={s.dot} data-framer-name="Dot" />
                      <p className="t-16">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={s.method} data-framer-name="Method">
                <div className={s.steps} data-framer-name="Steps">
                  {STEPS.map((st) => (
                    <Step key={st.title} {...st} variant="To do" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
