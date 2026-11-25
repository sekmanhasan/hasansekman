import Link from "next/link";
import { projectHref, type Project } from "@/data/projects";
import { clay } from "@/lib/clay";
import s from "./ProjectParcel.module.css";

type Props = Pick<Project, "slug" | "title" | "meta" | "cover"> & { variant?: "Default" | "Large" };

/** A parcel on a conveyor belt; on hover the flaps open and the project cover pops out. Opens up on tablet and phone. */
export default function ProjectParcel({ slug, title, meta, cover, variant = "Default" }: Props) {
  return (
    <Link href={projectHref(slug)} className={`${s.root} ${s[variant]}`} data-framer-name={variant}>
      <div className={s.cover} data-framer-name="Cover">
        <img src={cover} alt="" loading="lazy" />
      </div>
      <div className={`${s.parcel} clay-l`} style={clay("beige")} data-framer-name="Parcel">
        <div className={s.tape} data-framer-name="Tape" />
        <div className={s.sticker} data-framer-name="Sticker">
          <p className="t-13">FRAGILE</p>
        </div>
        <div className={`${s.label} clay-s`} style={clay("light", "beige")} data-framer-name="Shipping Label">
          <h3 className="t-24">{title}</h3>
          <p className={`t-14 ${s.meta}`}>{meta}</p>
        </div>
      </div>
      <div className={`${s.flap} ${s.flapL}`} data-framer-name="Flap Left" />
      <div className={`${s.belt} clay-s`} style={clay("blue")} data-framer-name="Belt">
        <div className={s.notches} data-framer-name="Notches">
          {Array.from({ length: 7 }, (_, i) => (
            <span key={i} className={s.notch} />
          ))}
        </div>
      </div>
      <div className={`${s.flap} ${s.flapR}`} data-framer-name="Flap Right" />
    </Link>
  );
}
