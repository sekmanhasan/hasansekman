"use client";

import { motion } from "motion/react";
import SprinkleText from "@/components/fx/SprinkleText";
import Icon from "@/components/icons/Icon";
import type { IconName } from "@/components/icons/svgs";
import Tag from "@/components/ui/Tag";
import s from "./AboutHero.module.css";

const INES = "/f/AqfNDAgZpGpdOtqbpaYtIOudV9A.png";
const THEO = "/f/l0wW16vHVhflnlpGUBD6mNKC85Y.png";
const RITA = "/f/G9AwUAbq3cmLWsrQtDNmJA1uAU.png";
const PAO = "/f/jWNgAC3MXCvGFWhZLO76dvIKr0.jpeg";

type Seek = { spot: string; rotate: number; name: string; title: string; colour: string; photo: string; icon: IconName; left?: boolean; phoneHidden?: boolean };

const OBJECTS: Seek[] = [
  { spot: "a", rotate: -10, name: "Inês", title: "Keeps every tram ticket", colour: "orange", photo: INES, icon: "Ticket" },
  { spot: "b", rotate: 8, name: "Theo", title: "Owns a stamp that says ‘no’", colour: "purple", photo: THEO, icon: "Stamp", left: true },
  { spot: "c", rotate: 6, name: "Rita", title: "Has labelled the label maker", colour: "yellow", photo: RITA, icon: "Tag" },
  { spot: "d", rotate: -6, name: "Pão", title: "Mostly naps, sometimes ball", colour: "pink", photo: PAO, icon: "Volleyball", left: true },
  { spot: "e", rotate: 12, name: "Inês", title: "Thinks with a 2B pencil", colour: "blue", photo: INES, icon: "Pencil", phoneHidden: true },
  { spot: "f", rotate: -8, name: "Rita", title: "Bica at 11, no exceptions", colour: "beige", photo: RITA, icon: "Coffee", left: true },
  { spot: "g", rotate: 10, name: "Theo", title: "Cuts every mock-up by hand", colour: "yellow", photo: THEO, icon: "Scissors", left: true, phoneHidden: true },
  { spot: "h", rotate: -4, name: "Rita", title: "Shoots every project on film", colour: "orange", photo: RITA, icon: "Camera" },
  { spot: "i", rotate: -12, name: "Inês", title: "Paints the clay mock-ups", colour: "pink", photo: INES, icon: "Paintbrush", left: true, phoneHidden: true },
  { spot: "j", rotate: 8, name: "Pão", title: "Head of morale (dog)", colour: "blue", photo: PAO, icon: "Bone", phoneHidden: true },
];

const spring = { type: "spring", bounce: 0.4, duration: 0.45 } as const;

/** A clay object that shows whose it is in a speech bubble on hover. */
function SeekObject({ name, title, colour, photo, icon, left }: Seek) {
  return (
    <motion.div className={s.object} initial="rest" whileHover="hover" animate="rest" data-framer-name={left ? "Left Bubble" : "Seek Object"}>
      <motion.div
        className={s.blob}
        style={{ backgroundColor: `var(--${colour})` }}
        variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: left ? -6 : 6, scale: 1.1 } }}
        transition={spring}
        data-framer-name="Blob"
      >
        <Icon name={icon} size={44} color="var(--dark)" stroke={2} />
      </motion.div>
      <motion.div
        className={`${s.bubble} ${left ? s.bubbleLeft : ""}`}
        style={{ originX: left ? 0.8 : 0.3, originY: 1 }}
        variants={{ rest: { opacity: 0, scale: 0.6 }, hover: { opacity: 1, scale: 1 } }}
        transition={spring}
        data-framer-name="Bubble"
      >
        <div className={s.face} data-framer-name="Face">
          <img src={photo} alt="" />
        </div>
        <div className={s.copy} data-framer-name="Copy">
          <h3 className="t-24">{name}</h3>
          <p className={`t-13 ${s.muted}`}>{title}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AboutHero() {
  return (
    <section className={s.hero} data-framer-name="Section - About Hero">
      <div className={s.field} data-framer-name="Field">
        <div className={s.headingWrapper} data-framer-name="Heading Wrapper">
          <Tag label="About us" />
          <SprinkleText as="h1" className={`t-160 ${s.title}`}>
            Hello, we’re hasansekman.
          </SprinkleText>
          <p className={`t-22 ${s.intro}`}>
            Seven people in a ground-floor studio in Mersin-TR, making brands, websites, packaging and the odd object since 2019.
          </p>
        </div>
        {OBJECTS.map((o, i) => (
          <div key={i} className={`${s.spot} ${s[o.spot]} ${o.phoneHidden ? s.phoneHidden : ""}`} style={{ rotate: `${o.rotate}deg` }}>
            <SeekObject {...o} />
          </div>
        ))}
        <div className={s.hintRow} data-framer-name="Hint Row">
          <div className={`${s.hint} card-sh`} data-framer-name="Hint">
            <p className="t-13">Everything here belongs to someone. Find them.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
