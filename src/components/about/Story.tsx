"use client";

import ClayRope from "@/components/framer/ClayRope";
import Reveal from "@/components/fx/Reveal";
import SprinkleText from "@/components/fx/SprinkleText";
import Tag from "@/components/ui/Tag";
import s from "./Story.module.css";

const ROWS = [
  {
    year: "2019",
    title: "A table in Hackney",
    text: "Two designers, one borrowed table and a bag of plasticine.",
    colour: "orange",
    image: "/f/1l5ivOYyjAR4PJKTzB7s9Dfioc8.jpg",
    ratio: 4928 / 3280,
  },
  {
    year: "2021",
    title: "Websites join in",
    text: "Clients asked who would build the site. So we learned.",
    colour: "pink",
    image: "/f/jEGngM4K6sIeQEO55JOhcy4sQ4.jpg",
    ratio: 2500 / 1669,
  },
  {
    year: "2023",
    title: "The clay shelf",
    text: "Objects and merch, made with the small makers we brand.",
    colour: "yellow",
    image: "/f/babRccYsLPwtiFf1FacFSyQRqI.webp",
    ratio: 3500 / 3169,
  },
  {
    year: "2025",
    title: "Prizes on the shelf",
    text: "A Pentawards silver for Larder & Co. and a Behance feature for Ethe Ceramics.",
    colour: "blue",
    image: "/f/W0AFbAhxQqTtea16VTOtUuyWw.jpg",
    ratio: 2500 / 1668,
    alt: "Stacked patterned tin cans on a green background",
  },
  {
    year: "2026",
    title: "Sixty launches",
    text: "Seven people, one dog and a studio with its own front door.",
    colour: "purple",
    image: "/f/kGdPiXYKnnIOZRFXSadgLGkkmo.jpg",
    ratio: 4256 / 2832,
  },
];

export default function Story() {
  return (
    <section className={s.section} data-framer-name="Section - Story">
      <div className={s.container} data-framer-name="Container">
        <div className={s.headingWrapper} data-framer-name="Heading Wrapper">
          <Tag label="Our story" />
          <SprinkleText className={`t-96 ${s.heading}`}>
            How we got here
          </SprinkleText>
        </div>
        <div className={s.road} data-framer-name="Road">
          <div className={s.rope}>
            <ClayRope
              colour="var(--rope)"
              drawOnScroll
              highlight="var(--beige)"
              swing={0.55}
              thickness={25}
              turns={4}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          {ROWS.map((r, i) => (
            <div
              key={r.year}
              className={`${s.row} ${i % 2 ? s.right : ""}`}
              data-framer-name={i % 2 ? "Right" : "Left"}
            >
              <Reveal
                className={s.reveal}
                from={{ opacity: 0, scale: 0.94, y: 40 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.8 }}
                amount={0.5}
              >
                <div
                  className={s.card}
                  style={{ backgroundColor: `var(--${r.colour})` }}
                  data-framer-name="Card"
                >
                  <div
                    className={s.image}
                    style={{ aspectRatio: r.ratio }}
                    data-framer-name="Image"
                  >
                    <img src={r.image} alt={r.alt ?? ""} loading="lazy" />
                  </div>
                  <div className={s.copy} data-framer-name="Copy">
                    <h2 className="t-64">{r.year}</h2>
                    <h3 className="t-24">{r.title}</h3>
                    <p className="t-14" style={{ textWrap: "balance" }}>
                      {r.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
