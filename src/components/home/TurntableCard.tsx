import Link from "next/link";
import { clay } from "@/lib/clay";
import type { Project } from "@/data/projects";
import s from "./TurntableCard.module.css";

export default function TurntableCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={s.card} data-framer-name="Turntable Card">
      <div className={`${s.imageWrapper} clay-l`} style={clay("cream", "light")} data-framer-name="Image Wrapper">
        <div className={s.cover} data-framer-name="Cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.cover} alt={project.title} draggable={false} />
        </div>
      </div>
      <div className={s.caption} data-framer-name="Caption">
        <h3 className="t-24" style={{ textAlign: "center" }}>
          {project.title}
        </h3>
        <p className="t-13" style={{ textAlign: "center", opacity: 0.75 }}>
          {project.meta}
        </p>
      </div>
    </Link>
  );
}
