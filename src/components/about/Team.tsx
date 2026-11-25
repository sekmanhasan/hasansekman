"use client";

import { motion } from "motion/react";
import { useState } from "react";
import DuotonePhoto from "@/components/framer/DuotonePhoto";
import Reveal from "@/components/fx/Reveal";
import SprinkleText from "@/components/fx/SprinkleText";
import type { IconName } from "@/components/icons/svgs";
import SocialKey from "@/components/ui/SocialKey";
import Tag from "@/components/ui/Tag";
import s from "./Team.module.css";

type Social = [label: string, icon: IconName, href: string];

const LINKEDIN: Social = [
  "LinkedIn",
  "LinkedinLogo",
  "https://www.linkedin.com/",
];
const INSTAGRAM: Social = [
  "Instagram",
  "InstagramLogo",
  "https://www.instagram.com/",
];
const DRIBBBLE: Social = ["Dribbble", "DribbbleLogo", "https://dribbble.com/"];

const TEAM = [
  {
    name: "Inês Duarte",
    role: "Founder, creative director",
    line: "Keeps every tram ticket",
    colour: "orange",
    photo: "9ALO5N9Ndbkh7MpY7mlgU4U3o.png",
    socials: [LINKEDIN, INSTAGRAM],
  },
  {
    name: "Theo Marsh",
    role: "Design director",
    line: "Owns a stamp that says ‘no’",
    colour: "purple",
    photo: "bmERGwGGl0UIXAlvKahAax0Mu5U.png",
    socials: [LINKEDIN, DRIBBBLE],
  },
  {
    name: "Rita Sousa",
    role: "Studio manager",
    line: "Has labelled the label maker",
    colour: "yellow",
    photo: "gdL9JlVEgd3I8oWFriDNR9lvFy0.png",
    socials: [LINKEDIN, INSTAGRAM],
  },
  {
    name: "Pão",
    role: "Head of morale",
    line: "Mostly naps, sometimes ball",
    colour: "pink",
    photo: "Jf4louaDG77ZbyY2MxR0S1zU7PQ.png",
    socials: [INSTAGRAM],
  },
];

const TILT = [4, -3, 6, -4];

function TeamCard({
  name,
  role,
  line,
  colour,
  photo,
  socials,
}: (typeof TEAM)[number]) {
  const [hover, setHover] = useState(false);
  const tint = `var(--${colour})`;
  return (
    <div
      className={`${s.card} ${hover ? s.cardHover : ""}`}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHover(true)}
      onPointerLeave={() => setHover(false)}
      data-framer-name="Team Card"
    >
      <div
        className={s.portrait}
        style={{ backgroundColor: tint }}
        data-framer-name="Portrait"
      >
        <div className={s.photoClip} data-framer-name="Photo Clip">
          <motion.div
            className={s.photo}
            style={{ originY: 1 }}
            animate={{ scale: hover ? 1.05 : 1 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
          >
            <DuotonePhoto
              image={{ src: `/f/${photo}` }}
              tint={tint}
              duotone={!hover}
              contrast={1.15}
              popOut
              overflow={80}
              radius={22}
              wave
              waveColor="var(--sh-l)"
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>
        </div>
      </div>
      <div className={s.copy} data-framer-name="Copy">
        <h3 className="t-24">{name}</h3>
        <p className="t-13">{role}</p>
        <p className={`t-14 ${s.muted}`}>{line}</p>
        <div className={s.socials} data-framer-name="Socials">
          {socials.map(([label, icon, href]) => (
            <SocialKey
              key={label}
              label={label}
              icon={icon}
              href={href}
              colour={colour}
              size="small"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className={s.section} data-framer-name="Section - Team">
      <div className={s.container} data-framer-name="Container">
        <div className={s.headingWrapper} data-framer-name="Heading Wrapper">
          <Tag label="The people" />
          <SprinkleText className={`t-96 ${s.dark}`}>
            The people you’ll meet
          </SprinkleText>
        </div>
        <div className={s.grid} data-framer-name="Grid">
          {TEAM.map((m, i) => (
            <div key={m.name} style={{ rotate: `${TILT[i]}deg` }}>
              <Reveal
                from={{ opacity: 0, scale: 0.94, y: 40 }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  duration: 0.8,
                  delay: i * 0.07,
                }}
                amount={0.5}
              >
                <TeamCard {...m} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
