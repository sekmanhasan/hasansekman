"use client";

import { motion } from "motion/react";
import BubbleWrap from "@/components/framer/BubbleWrap";
import Button from "@/components/ui/Button";
import SprinkleText from "@/components/fx/SprinkleText";
import { clay } from "@/lib/clay";
import { bagel, bricolage } from "@/lib/fonts";
import s from "./home.module.css";

const img = (file: string, alt: string) => ({ src: `/f/${file}`, alt });

const ITEMS = [
  { id: "u98B21ib_", kind: "service", label: "We do", link: "/", showLink: false, title: "Brand identity", text: "Names, logos and the whole kit, made for the people who will use it every day." },
  { id: "fmHIf8u1U", kind: "work", image: img("snMgEmRClEP2X7rxckFywACtluE.webp", "Red Musse t-shirt on a dark background"), link: "/projects/musse-design-week", showLink: true, title: "Musse Design Week", text: "A stretchy red identity for a week-long design festival." },
  { id: "Di0VzCr04", kind: "fact", showLink: true, title: "7", text: "people around one big table in London." },
  { id: "NvsrflVpO", kind: "service", label: "We make", link: "/", showLink: false, title: "Websites", text: "Framer sites that load fast and that your team can edit without calling us." },
  { id: "VMSVyuOy_", kind: "fact", link: "/", showLink: true, title: "120+", text: "launches since 2019." },
  { id: "s9e6QIvbV", kind: "service", image: img("W0AFbAhxQqTtea16VTOtUuyWw.jpg", "Stacked patterned tin cans on a green background"), label: "We do", link: "/", showLink: false, title: "Packaging Desings", text: "Boxes, bags and labels people keep long after the product is gone." },
  { id: "QRKNRQYgS", kind: "service", label: "We make", link: "/", showLink: false, title: "Objects and merch", text: "Small runs of things you can hold: totes, pins, the odd lamp." },
  { id: "xC34SEwQi", kind: "image", image: img("swa7gDUfpBuC7XXQzJmQuoaaeDM.jpg", "Stack of orange square gift boxes"), link: "/projects/slow-burn-candles", showLink: true, title: "First boxes off the press.", text: "Square gift boxes for a small-batch candle maker." },
  { id: "zPz7E1K0B", kind: "quote", showLink: true, title: "They made our mugs look as good as they feel.", text: "Ana, Ethe Ceramics" },
  { id: "sbfaBq3Ls", kind: "image", image: img("TkHVYr9TNx8mrO2SHqoBtceXkvY.webp", "Ethe mug and its kraft gift box on a table"), link: "/projects/ethe-ceramics", showLink: true, title: "Mugs that ship in their own box.", text: "A round stamp and a kraft gift box for a pottery studio." },
  { id: "Mfp9RcgNT", kind: "work", image: img("OWOZFLnmpTlZ5LkDbP9K6iQA.webp", "FOMO billboard on a city street corner"), link: "/projects/fomo-collection-launch", showLink: true, title: "Fomo Collection Launch", text: "A billboard campaign for a streetwear drop that sold out in a weekend." },
  { id: "Ypr_CcCzj", kind: "image", image: img("YLPhsRKNWamYdu37zdMdLzwYU.jpg", "Black tote bag hanging in warm sunlight"), link: "/projects/kiln-street-home", showLink: true, title: "A tote that sold out twice.", text: "A heavy black tote for a homeware shop's own range." },
  { id: "GpAKGkw6u", kind: "fact", showLink: true, title: "4 days", text: "a week. We close on Fridays and come back sharper." },
  { id: "NVDliO5DA", kind: "work", image: img("q4ME24DOKJBHGPAPqx7GMTDhIY.jpg", "Colourful yoghurt cups on a green background"), link: "/projects/larder-and-co", showLink: true, title: "Larder & Co.", text: "Thirty own-label products, one bright packaging family." },
  { id: "ZI09pm3yU", kind: "image", image: img("prSibwDoZAb0GNLSbJlI9OnvT0.jpg", "Hanging sign on a wooden wall"), link: "/projects/the-yard-workspace", showLink: true, title: "A sign that waves at passers-by.", text: "Wayfinding for a co-working space in an old print works." },
  { id: "If1VCS2_p", kind: "quote", showLink: false, title: "Fast, funny and frighteningly organised.", text: "Rui, Loudhouse Records" },
  { id: "taymztbvk", kind: "image", image: img("tXMneHbtNGpi2uqjA88GMidz9k.jpg", ""), showLink: false, title: "We are in action", text: "One line about it." },
].map((it) => ({ label: "", linkLabel: "", ...it }));

export default function Opening() {
  return (
    <section className={s.opening} data-framer-name="Section - Opening">
      <div className={s.openingContainer}>
        <div className={`${s.bubblePanel} clay-l`} style={clay("purple")} data-framer-name="Bubble Panel">
          <div className={s.stickerRow}>
            <motion.div
              className={`${s.sticker} clay-s`}
              style={clay("yellow", "purple")}
              initial={{ opacity: 0.001, rotate: 0 }}
              animate={{ opacity: 1, rotate: 13 }}
              transition={{ type: "spring", bounce: 0.4, delay: 1.5, duration: 1 }}
            >
              <p className="t-36" style={{ whiteSpace: "pre" }}>
                Pop the bubbles
              </p>
            </motion.div>
          </div>
          <div className={s.bubbleWrap}>
            <BubbleWrap
              bubbleColour="rgb(255, 255, 255)"
              bubbleSize={62}
              cardFill="#f2f2f2"
              cardText="#2a1d17"
              counterColour="#2a1d17"
              counterFill="#f2f2f2"
              counterText="Popped {n} of {total}"
              description="A sheet of bubble wrap. Click a bubble to pop it and see what we do."
              doneText="All popped. Tap to reset"
              factFill="#ffbb00"
              fallbackLink="/#services"
              font={{ fontFamily: bricolage.style.fontFamily, fontSize: "13px", fontStyle: "normal", fontWeight: 600, letterSpacing: "0.01em", lineHeight: "1.2em" }}
              gap={10}
              hint=""
              hintColour="#2a1d17"
              hintFill="#ffbb00"
              items={ITEMS}
              linkFill="#ff511c"
              linkText="#fbf7f1"
              padding={24}
              popOn="click"
              prePopped={12}
              previewCard
              quoteFill="#ff511c"
              showCounter
              sound
              textFont={{ fontFamily: bricolage.style.fontFamily, fontStyle: "normal", fontWeight: 400, letterSpacing: "0em", lineHeight: "1.45em" }}
              titleFont={{ fontFamily: bagel.style.fontFamily, fontStyle: "normal", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: "1.05em" }}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className={s.copyWrapper}>
          <div className={s.copyTitle}>
            <SprinkleText as="h1" className={`t-96 ${s.balance}`} style={{ maxWidth: 800 }}>
              Brands, websites and things you can hold.
            </SprinkleText>
          </div>
          <div className={s.copyRow}>
            <p className={`t-16 ${s.copyText}`}>A seven-person design studio. We shape identities, build Framer sites and make the odd physical object.</p>
            <div className={s.buttons}>
              <Button label="See the work" href="/projects" />
              <Button label="Book a call" href="/book" variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
