"use client";

import SprinkleText from "@/components/fx/SprinkleText";
import Ticker from "@/components/fx/Ticker";
import Tag from "@/components/ui/Tag";
import s from "./Studio.module.css";

type Frame = [caption: string, image: string];

const STRIP_ONE: Frame[] = [
  ["The big table", "1l5ivOYyjAR4PJKTzB7s9Dfioc8.jpg"],
  ["The type drawer", "kGdPiXYKnnIOZRFXSadgLGkkmo.jpg"],
  ["Site reviews on the orange desk", "jEGngM4K6sIeQEO55JOhcy4sQ4.jpg"],
  ["The quiet corner", "Klecux34n09aAtanRHoJcYLlgM.webp"],
  ["The photo corner", "py0vITB1AYjLONY9CyToCI35d0.jpg"],
  ["Samples waiting in the corner", "gAHtAlIwfN0rRojVz25PGgHs04.jpg"],
  ["Tote on the door hook", "YLPhsRKNWamYdu37zdMdLzwYU.jpg"],
];

const STRIP_TWO: Frame[] = [
  ["Sticker test prints", "IptMthw7dhFj0n7v0lWli1GYBJU.jpg"],
  ["Lookbook proofs", "TQJrkF8GBoswY5tza85omwTlWg.jpg"],
  ["Notebook dummy", "trNtoU7x0BsOccFTmuRwTGgsfo.webp"],
  ["Tin can mock-ups", "W0AFbAhxQqTtea16VTOtUuyWw.jpg"],
  ["Packing a sample", "TkHVYr9TNx8mrO2SHqoBtceXkvY.webp"],
  ["Gift box fittings", "KmaLK9UPvGSfbfTwJ2eigaH0Dk.jpg"],
  ["Envelope colour tests", "MZGtw8i6THvdsSzoF2CRbcuQMw.jpg"],
];

function Holes() {
  return (
    <div className={s.holes} data-framer-name="Holes">
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className={s.hole} />
      ))}
    </div>
  );
}

/** One frame of a film strip: sprocket holes, a photo and its caption. */
function FilmFrame({ caption, image, colour }: { caption: string; image: string; colour: string }) {
  return (
    <div className={s.frame} data-framer-name="Film Frame">
      <Holes />
      <div className={s.photo} data-framer-name="Photo">
        <img src={`/f/${image}`} alt="" loading="lazy" draggable={false} />
      </div>
      <p className={`t-14 ${s.caption}`} style={{ color: `var(--${colour})` }}>
        {caption}
      </p>
      <Holes />
    </div>
  );
}

export default function Studio() {
  return (
    <section className={s.section} data-framer-name="Section - Studio">
      <div className={s.container} data-framer-name="Container">
        <div className={s.headingWrapper} data-framer-name="Heading Wrapper">
          <Tag label="The studio" />
          <SprinkleText className={`t-96 ${s.dark}`}>Inside the ground floor</SprinkleText>
          <p className={`t-16 ${s.dark} ${s.intro}`}>
            A ground-floor shopfront in London: one long table, a drawer of old type and a corner for photographing what we make.
          </p>
        </div>
      </div>
      <div className={s.strips} data-framer-name="Strips">
        <div className={`${s.strip} ${s.stripOne}`} data-framer-name="Strip">
          <Ticker velocity={40} hoverSpeed={25} gap={2} draggable>
            {STRIP_ONE.map(([caption, image]) => (
              <FilmFrame key={caption} caption={caption} image={image} colour="cream" />
            ))}
          </Ticker>
        </div>
        <div className={`${s.strip} ${s.stripTwo}`} data-framer-name="Strip">
          <Ticker velocity={40} hoverSpeed={25} gap={2} draggable reverse>
            {STRIP_TWO.map(([caption, image]) => (
              <FilmFrame key={caption} caption={caption} image={image} colour="dark" />
            ))}
          </Ticker>
        </div>
      </div>
      <div className={s.hintRow} data-framer-name="Hint Row" />
    </section>
  );
}
