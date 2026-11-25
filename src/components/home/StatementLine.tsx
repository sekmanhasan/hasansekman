"use client";

import { forwardRef, type ComponentProps } from "react";
import { withScrollLine } from "@/components/framer/ScrollLine";
import Reveal from "@/components/fx/Reveal";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { clay } from "@/lib/clay";
import s from "./statement.module.css";

const Line = withScrollLine(
  forwardRef<HTMLDivElement, ComponentProps<"div">>(function Line(props, ref) {
    return <div ref={ref} {...props} />;
  }),
) as React.ForwardRefExoticComponent<ComponentProps<"div"> & React.RefAttributes<HTMLDivElement>>;

const RECEIPT = [
  { label: "Projects since 2019", value: "60" },
  { label: "Clients who came back", value: "68%" },
  { label: "Awards and features", value: "6", note: "Awwwards, FWA, CSS Design Awards, Pentawards, Behance, Dribbble" },
  { label: "Clutch rating", value: "4.9", note: "from 32 verified reviews" },
];

const KEYS = ["light", "light", "light", "yellow", "light", "light", "light", "yellow"];

const WORDS: { chip: string; rotate: number; text: string }[] = [
  { chip: "T7YJQvJERzXF1U7qchj8HmyFiQ.png", rotate: -3, text: "We make brands," },
  { chip: "LivKO5OOSECHotjtPokzjfWOic.jpg", rotate: -3, text: "websites" },
  { chip: "jEGngM4K6sIeQEO55JOhcy4sQ4.jpg", rotate: 3, text: "and objects," },
  { chip: "Klecux34n09aAtanRHoJcYLlgM.webp", rotate: -2, text: "and we try every idea in clay" },
  { chip: "q4ME24DOKJBHGPAPqx7GMTDhIY.jpg", rotate: 2, text: "first." },
];

export function ReceiptLine({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className={s.receiptLine} data-framer-name="Receipt Line">
      <div className={s.row} data-framer-name="Row">
        <p className="t-14" style={{ whiteSpace: "pre" }}>
          {label}
        </p>
        <div className={s.leader} data-framer-name="Leader" />
        <p className="t-24b" style={{ whiteSpace: "pre" }}>
          {value}
        </p>
      </div>
      {note ? (
        <p className="t-13" style={{ color: "var(--muted)" }}>
          {note}
        </p>
      ) : null}
    </div>
  );
}

export default function StatementLine() {
  return (
    <div className={s.section} data-framer-name="Section - Statement Line">
      <div className={s.sticky} data-framer-name="Sticky">
        <div className={`${s.container} clay-l`} style={clay("black")} data-framer-name="Container">
          <div className={s.tag}>
            <Tag label="The studio" surface="black" />
          </div>
          <Line className={s.line} data-framer-name="Line">
            <div className={s.till} data-framer-name="Till">
              <div className={s.display} data-framer-name="Display">
                <div className={s.screen} data-framer-name="Screen">
                  <p className="t-24b" style={{ color: "var(--yellow)", whiteSpace: "pre" }}>
                    Thank you
                  </p>
                </div>
              </div>
              <div className={s.body} data-framer-name="Body">
                {KEYS.map((k, i) => (
                  <div key={i} className={s.key} style={{ backgroundColor: `var(--${k})` }} data-framer-name="Key" />
                ))}
                <div className={s.slot} data-framer-name="Slot" />
              </div>
              <div className={s.paperFeed} data-framer-name="Paper Feed">
                <Reveal
                  className={s.paper}
                  from={{ y: -240 }}
                  transition={{ type: "tween", delay: 0.2, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  amount={0.05}
                  data-framer-name="Paper"
                >
                  <div className={s.receipt} data-framer-name="Receipt">
                    <div className={s.shop} data-framer-name="Shop">
                      <p className="t-24b" style={{ textAlign: "center" }}>
                        hasansekman
                      </p>
                      <p className="t-13" style={{ textAlign: "center", color: "var(--muted)" }}>
                        Ground floor, Mersin-TR · since 2019
                      </p>
                    </div>
                    <div className={s.rule} data-framer-name="Rule" />
                    <div className={s.lines} data-framer-name="Lines">
                      {RECEIPT.map((r) => (
                        <ReceiptLine key={r.label} {...r} />
                      ))}
                    </div>
                    <div className={s.rule} data-framer-name="Rule" />
                    <p className="t-13" style={{ textAlign: "center", color: "var(--muted)" }}>
                      Mon–Fri, 9 to 6 · hasansekman@outlook.com
                    </p>
                    <div className={s.tear} data-framer-name="Tear">
                      {Array.from({ length: 24 }, (_, i) => (
                        <div key={i} className={s.tooth} data-framer-name="Tooth" />
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
            {WORDS.map((w) => (
              <WordGroup key={w.text} {...w} />
            ))}
            <Button label="More about us" href="/about" />
          </Line>
        </div>
      </div>
    </div>
  );
}

function WordGroup({ chip, rotate, text }: { chip: string; rotate: number; text: string }) {
  return (
    <>
      <div className={`${s.chip} clay-flat`} style={{ rotate: `${rotate}deg` }} data-framer-name="Image Chip">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/f/${chip}`} alt="" draggable={false} />
      </div>
      <p className={`t-220 ${s.word}`}>{text}</p>
    </>
  );
}
