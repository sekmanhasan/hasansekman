"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Tag from "@/components/ui/Tag";
import SprinkleText from "@/components/fx/SprinkleText";
import { clay } from "@/lib/clay";
import s from "./clients.module.css";

const CLIENTS = [
  { name: "Musse", tags: ["Brand identity", "Event design", "Print"], slug: "musse-design-week", logo: "D6jY2EzEdpLasVOSs88HVRrAyWg.svg", image: "snMgEmRClEP2X7rxckFywACtluE.webp" },
  { name: "Fomo", tags: ["Campaign", "Art direction", "Motion"], slug: "fomo-collection-launch", logo: "pgemXfShKsYvGeYuSjvG3itMEpk.svg", image: "OWOZFLnmpTlZ5LkDbP9K6iQA.webp" },
  { name: "Ethe", tags: ["Packaging", "Brand identity", "Photography"], slug: "ethe-ceramics", logo: "n81Tzcwuc5BGWys74RJFcngzM.svg", image: "TkHVYr9TNx8mrO2SHqoBtceXkvY.webp" },
  { name: "Larder & Co.", tags: ["Packaging", "Illustration", "Brand identity"], slug: "larder-and-co", logo: "5qKyaM7E5soV60fmieMOnNQnQ.svg", image: "W0AFbAhxQqTtea16VTOtUuyWw.jpg" },
  { name: "Bramble", tags: ["Brand identity", "Stationery", "Packaging"], slug: "bramble-flower-studio", logo: "9pfNo2yAw78Yu2NbldtFqefZrao.svg", image: "LivKO5OOSECHotjtPokzjfWOic.jpg" },
  { name: "Slow Burn", tags: ["Packaging", "Brand identity", "Retail display"], slug: "slow-burn-candles", logo: "lKtkP5s6cK2OeTcGF1Xwi1F28mk.svg", image: "BjHRTXwUTltzEKXC5HgFBvhdA3Q.jpg" },
  { name: "Loudhouse", tags: ["Web design", "App design", "Art direction"], slug: "loudhouse-records", logo: "FalZm6rBdceRXpIlz0kZVPCeJQ.svg", image: "0ySIY8S9HAYoW6g1vHCMranalE.jpg" },
  { name: "Nettle & Bloom", tags: ["Brand identity", "Packaging", "Print"], slug: "nettle-and-bloom", logo: "GIxZQD1Rm8o5iUtbbQaMUNBZtU.svg", image: "kKiqx6lyGPrLyDGBQKW5vDCPk.jpg" },
  { name: "The Yard", tags: ["Signage", "Wayfinding", "Brand identity"], slug: "the-yard-workspace", logo: "2lqyFw78vSHeRIPz5NOqx9QAkLo.svg", image: "bEw5JNa5ApCNZu8dXWqC6nT4.jpg" },
  { name: "Kiln Street", tags: ["Packaging", "Brand identity", "Retail"], slug: "kiln-street-home", logo: "RNSiliVmxmGuoOnfvAaRr9OXcBc.svg", image: "Npmb91XtIGKXOaLmdteIRoDVrY.jpg" },
];

const spring = { type: "spring", bounce: 0.35, duration: 0.5 } as const;
const MotionLink = motion.create(Link);

function ClientRow({ name, tags, slug, logo, image }: (typeof CLIENTS)[number]) {
  return (
    <MotionLink href={`/projects/${slug}`} className={s.row} initial="rest" whileHover="hover" whileTap="pressed" data-framer-name="Default">
      <div className={s.previewSlot} data-framer-name="Preview Slot">
        <motion.div
          className={`${s.preview} clay-flat`}
          variants={{ rest: { opacity: 0, rotate: 0, scale: 0.6 }, hover: { opacity: 0.99, rotate: -4, scale: 1 }, pressed: { rotate: 0 } }}
          transition={spring}
          data-framer-name="Preview"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/f/${image}`} alt="" />
        </motion.div>
      </div>
      <div className={s.nameArea} data-framer-name="Name Area">
        <div className={s.info} data-framer-name="Info">
          <motion.div
            className={s.title}
            style={clay("light", undefined, "pill")}
            variants={{
              rest: { backgroundColor: "rgba(242, 242, 242, 0)", boxShadow: "none", opacity: 0.75, paddingLeft: 0 },
              hover: { backgroundColor: "rgba(242, 242, 242, 1)", boxShadow: "var(--clay-s)", opacity: 0.99, paddingLeft: 18 },
              pressed: { backgroundColor: "rgba(242, 242, 242, 0)", boxShadow: "none" },
            }}
            transition={spring}
            data-framer-name="Title"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={s.logo} src={`/f/${logo}`} alt="" />
            <h3 className={`t-36 ${s.name}`}>{name}</h3>
          </motion.div>
          <div className={s.tags} data-framer-name="Tags">
            {tags.map((t) => (
              <Tag key={t} label={t} variant="light" />
            ))}
          </div>
        </div>
      </div>
    </MotionLink>
  );
}

export default function Clients() {
  return (
    <section className={s.section} data-framer-name="Section - Clients">
      <div className={s.container}>
        <div className={s.heading} data-framer-name="Heading Wrapper">
          <div className={s.intro} data-framer-name="Intro">
            <Tag label="Clients" />
            <p className="t-22" style={{ maxWidth: 420 }}>
              Shops, cafés and clubs we’ve made things for since 2019.
            </p>
          </div>
          <SprinkleText className={`t-64 ${s.h2}`}>Clients keep coming back for seconds.</SprinkleText>
        </div>
        <div className={s.list} data-framer-name="List">
          {CLIENTS.map((c) => (
            <ClientRow key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
