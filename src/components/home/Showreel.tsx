"use client";

import ReelPlayer from "@/components/framer/ReelPlayer";
import Reveal from "@/components/fx/Reveal";
import { bricolage } from "@/lib/fonts";
import s from "./home.module.css";

export default function Showreel() {
  return (
    <section className={s.showreel} data-framer-name="Section - Showreel A">
      <div className={s.showreelContainer}>
        <Reveal
          className={s.reel}
          from={{ opacity: 0, rotate: -10, scale: 0.72, y: 160 }}
          transition={{ type: "spring", bounce: 0.35, duration: 0.9 }}
        >
          <ReelPlayer
            backdrop="rgba(42, 29, 23, 0.92)"
            blobShape={0}
            bodyFill="#72a7e3"
            chipFill="#f2f2f2"
            duration="1:12"
            font={{ fontFamily: bricolage.style.fontFamily, fontSize: "14px", fontStyle: "normal", fontWeight: 600, letterSpacing: "0.01em", lineHeight: "1.2em" }}
            grow
            knob1="#ffbb00"
            knob2="#e192c7"
            knobs="auto"
            label="Play the reel"
            pillFill="#ffbb00"
            pillText="#2a1d17"
            playFill="#ff511c"
            playIcon="#2a1d17"
            poster={{ src: "/f/i8FrYTrNHjcuPporB63pn4Dkd08.jpg", alt: "Showreel" }}
            preview
            radius={48}
            shade
            shape="tv"
            source="video"
            startHeight={18}
            startWidth={22}
            textColour="rgb(251, 247, 241)"
            title="CH 01 · Reel 2026"
            videoFile="/f/QSyY55PAijvmf39G5uqFEEzGzlU.mp4"
            videoUrl=""
            wobble
            word="Showreel"
            wordFont={{ fontFamily: '"Inter", sans-serif', fontStyle: "normal", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: "0.9em" }}
            youtube=""
            style={{ width: "100%", height: "100%" }}
          />
        </Reveal>
        <Reveal
          className={s.showreelWord}
          from={{ opacity: 0, scale: 0.96, y: 40 }}
          transition={{ type: "spring", bounce: 0.25, duration: 0.7 }}
          centerX
        >
          <p className="t-220c">Showreel</p>
        </Reveal>
      </div>
    </section>
  );
}
