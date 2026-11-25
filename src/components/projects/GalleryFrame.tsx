import Link from "next/link";
import { projectHref, type Project } from "@/data/projects";
import { clay } from "@/lib/clay";
import s from "./GalleryFrame.module.css";

/** A framed project picture hung from a nail on the Work wall. */
export default function GalleryFrame({ slug, title, meta, cover, shape, frame, isNew }: Project) {
  return (
    <Link href={projectHref(slug)} className={`${s.frame} ${s[shape]}`} data-framer-name={shape}>
      <div className={s.hanger} data-framer-name="Hanger">
        <div className={s.string} data-framer-name="String">
          <span className={`${s.cord} ${s.cordL}`} data-framer-name="Cord" />
          <span className={`${s.cord} ${s.cordR}`} data-framer-name="Cord" />
          <span className={s.nail} data-framer-name="Nail" />
        </div>
      </div>
      <div className={s.body} data-framer-name="Body">
        <div className={s.picture} style={clay(frame)} data-framer-name="Picture Frame">
          <div className={s.mat} data-framer-name="Mat">
            <div className={s.photo} data-framer-name="Photo">
              <img src={cover} alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <div className={s.labelRow} data-framer-name="Label Row">
          <div className={s.label} data-framer-name="Label">
            <h3 className="t-24">{title}</h3>
            <p className="t-13" style={{ color: "var(--muted)" }}>
              {meta}
            </p>
            {isNew && (
              <div className={s.new} style={clay("yellow")} data-framer-name="New">
                <p className="t-13">New</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
