import SprinkleText from "@/components/fx/SprinkleText";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { ARTICLES } from "@/data/journal";
import JournalBook from "./JournalBook";
import s from "./journal.module.css";

export default function Journal() {
  return (
    <section className={s.section} data-framer-name="Section - Journal">
      <div className={s.container} data-framer-name="Container">
        <div className={s.heading} data-framer-name="Heading Wrapper">
          <div className={s.title} data-framer-name="Title Wrapper">
            <Tag label="Journal" />
            <SprinkleText className="t-96">Notes from the studio</SprinkleText>
          </div>
          <div className={s.intro} data-framer-name="Intro">
            <p className="t-22" style={{ textWrap: "balance" }}>
              Short reads on brands, websites and packaging, for people who run small businesses.
            </p>
            <Button label="All articles" href="/journal" variant="light" />
          </div>
        </div>
        <div className={s.shelf} data-framer-name="Shelf">
          <div className={s.books} data-framer-name="Books">
            {ARTICLES.slice(0, 6).map((a) => (
              <JournalBook key={a.slug} {...a} />
            ))}
          </div>
          <div className={s.plank} data-framer-name="Plank" />
          <div className={s.legs} data-framer-name="Legs">
            <div className={s.leg} data-framer-name="Leg" />
            <div className={s.leg} data-framer-name="Leg" />
          </div>
        </div>
      </div>
    </section>
  );
}
