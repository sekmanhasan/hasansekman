"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import SprinkleText from "@/components/fx/SprinkleText";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { clay } from "@/lib/clay";
import s from "./faq.module.css";

type State = "Closed" | "Typing" | "Open";

const FAQS = [
  { q: "How much does a project cost?", a: "One fixed price after our first chat, so there are no surprise invoices. Tell us your budget and we’ll say honestly what fits." },
  { q: "How long does it take?", a: "Most brand and website projects take six to ten weeks. We plan every week with you before we start." },
  { q: "Do you work with small businesses?", a: "Mostly. Bakeries, bookshops, swim clubs and new shops make up most of our work." },
  { q: "Can you build our website in Framer?", a: "Yes. We design and build in Framer, then show you how to update it yourself." },
  { q: "What do we need to get started?", a: "A short hello: what you do and what isn’t working. We’ll reply with a time for a free 30-minute call." },
  { q: "Do you help after launch?", a: "Every project includes a month of free tweaks. Many clients then keep us on a small monthly plan." },
];

const SPRING = { Closed: { type: "spring", bounce: 0.2, duration: 0.4 }, Typing: { type: "spring", bounce: 0.35, duration: 0.45 }, Open: { type: "spring", bounce: 0.45, duration: 0.6 } } as const;

function FAQBubble({ q, a, initial }: { q: string; a: string; initial: State }) {
  const [state, setState] = useState<State>(initial);
  const transition = SPRING[state];

  useEffect(() => {
    if (state !== "Typing") return;
    const t = setTimeout(() => setState("Open"), 900);
    return () => clearTimeout(t);
  }, [state]);

  const shown = state !== "Closed";
  return (
    <motion.div layout transition={transition} className={s.bubble} data-framer-name={state}>
      <motion.button
        layout
        transition={transition}
        type="button"
        className={`${s.question} ${shown ? s.pressed : ""}`}
        style={clay("light")}
        aria-expanded={state === "Open"}
        onClick={() => setState(state === "Closed" ? "Typing" : state === "Open" ? "Closed" : state)}
        data-framer-name="Question"
      >
        <h3 className="t-24">{q}</h3>
        {!shown && (
          <span className={s.ask} data-framer-name="Ask">
            <span className="t-13">Ask</span>
          </span>
        )}
      </motion.button>
      <AnimatePresence initial={false}>
        {shown && (
          <motion.div
            key="reply"
            layout
            className={s.replyRow}
            data-framer-name="Reply Row"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92, transition: SPRING.Closed }}
            transition={transition}
            style={{ originX: 1, originY: 1 }}
          >
            <motion.div
              layout
              transition={transition}
              className={`${s.reply} ${state === "Typing" ? s.typing : ""} clay-l`}
              style={{ ...clay(state === "Typing" ? "yellow" : "purple"), borderRadius: "30px 30px 8px 30px" }}
              data-framer-name="Reply"
            >
              {state === "Typing" ? (
                <div className={s.dots} data-framer-name="Dots">
                  {[0, 0.14, 0.28].map((d) => (
                    <motion.span
                      key={d}
                      className={s.dot}
                      initial={{ rotate: 0, y: 0 }}
                      animate={{ rotate: 360, y: -5 }}
                      transition={{ type: "tween", duration: 0.42, delay: d, ease: [0.45, 0, 0.55, 1], repeat: Infinity, repeatType: "mirror" }}
                    />
                  ))}
                </div>
              ) : (
                <motion.p layout="position" className="t-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: 0.05 }}>
                  {a}
                </motion.p>
              )}
            </motion.div>
            <div className={`${s.mark} clay-s`} style={clay("pink")} data-framer-name="Mark">
              <span className={s.dent} data-framer-name="Dent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className={s.section} data-framer-name="Section - FAQ">
      <div className={s.container} data-framer-name="Container">
        <div className={s.heading} data-framer-name="Heading Wrapper">
          <Tag label="FAQ" />
          <SprinkleText className="t-96" style={{ textAlign: "center", width: "100%" }}>
            Things people ask
          </SprinkleText>
          <p className="t-22" style={{ textAlign: "center" }}>
            Tap a question. The answer is on its way.
          </p>
        </div>
        <div className={s.thread} data-framer-name="Thread">
          {FAQS.map((f, i) => (
            <FAQBubble key={f.q} {...f} initial={i === 0 ? "Open" : "Closed"} />
          ))}
          <div className={s.callRow} data-framer-name="Call Row">
            <div className={`${s.callCard} clay-l`} style={clay("yellow")} data-framer-name="Call Card">
              <p className="t-13">Not on the list?</p>
              <h3 className="t-36">Give us a ring</h3>
              <p className="t-16">Monday to Friday, 9 to 6. You’ll talk to a designer, not a switchboard.</p>
              <div className={s.spacer} data-framer-name="Spacer" />
              <Button label="Call the studio" href="tel:+905327425495" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
