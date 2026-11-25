import Link from "next/link";
import { CATEGORY_COLOUR, articleHref, type Article } from "@/data/journal";
import s from "./Articles.module.css";

/** A journal entry as a notebook page: category band, title, taped photo and excerpt. */
export default function NotebookCard({ a }: { a: Article }) {
  return (
    <Link href={articleHref(a.slug)} className={`${s.card} card-sh`} data-framer-name="Notebook Card">
      <div className={s.band} style={{ backgroundColor: `var(--${CATEGORY_COLOUR[a.category]})` }} data-framer-name="Band" />
      <div className={s.meta} data-framer-name="Meta">
        <p className="t-13">{a.date}</p>
        <p className="t-13">·</p>
        <p className="t-13">{a.category}</p>
      </div>
      <h3 className="t-24">{a.title}</h3>
      <div className={s.photo} data-framer-name="Photo">
        <div className={s.photoImage} data-framer-name="Image">
          <img src={`/f/${a.cover}`} alt="" loading="lazy" />
        </div>
        <div className={s.tapeRow} data-framer-name="Tape Row">
          <div className={s.tape} data-framer-name="Tape" />
        </div>
      </div>
      <p className="t-14">{a.excerpt}</p>
    </Link>
  );
}
