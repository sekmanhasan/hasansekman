import Link from "next/link";
import { CATEGORY_COLOUR, articleHref, type Article } from "@/data/journal";
import { clay } from "@/lib/clay";
import s from "./JournalBook.module.css";

export default function JournalBook({ slug, title, category, date, excerpt, cover }: Article) {
  const fill = CATEGORY_COLOUR[category];
  return (
    <Link href={articleHref(slug)} className={s.book} data-framer-name="Spine">
      <div className={`${s.card} clay-l`} style={clay(fill)} data-framer-name="Card">
        <div className={s.strip} data-framer-name="Spine Strip">
          <div className={s.band} data-framer-name="Band" />
          <p className={`t-13 ${s.category}`}>{category}</p>
          <div className={s.titleBox} data-framer-name="Title Box">
            <h3 className="t-24">{title}</h3>
          </div>
        </div>
        <div className={s.page} data-framer-name="Page">
          <div className={s.cover} data-framer-name="Cover">
            <img src={`/f/${cover}`} alt="" loading="lazy" />
          </div>
          <div className={s.meta} data-framer-name="Meta">
            <div className={`${s.chip} clay-s`} style={clay(fill, "cream", "pill")} data-framer-name="Chip">
              <p className="t-13">{category}</p>
            </div>
            <p className="t-13">{date}</p>
          </div>
          <h3 className={`t-24 ${s.balance}`}>{title}</h3>
          <p className={`t-14 ${s.balance}`}>{excerpt}</p>
          <div className={`${s.read} clay-s`} style={clay("orange", "cream", "pill")} data-framer-name="Read">
            <p className="t-13">Read it →</p>
          </div>
        </div>
        <div className={s.row} data-framer-name="Row Content">
          <h3>{title}</h3>
          <p className="t-13">{category}</p>
          <span className={s.pages} data-framer-name="Pages" />
        </div>
      </div>
    </Link>
  );
}
