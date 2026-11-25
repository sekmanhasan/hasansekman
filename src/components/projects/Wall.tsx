"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/fx/Reveal";
import { PROJECTS } from "@/data/projects";
import GalleryFrame from "./GalleryFrame";
import s from "./wall.module.css";

const columnsFor = (w: number) => (w >= 1200 ? 3 : w >= 810 ? 2 : 1);

/** The Work wall: frames dealt across the columns in order, each settling in as it scrolls into view. */
export default function Wall() {
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const update = () => setCols(columnsFor(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const columns = Array.from({ length: cols }, (_, c) => PROJECTS.map((p, i) => ({ p, i })).filter(({ i }) => i % cols === c));

  return (
    <section className={s.section} data-framer-name="Section - Projects">
      <div className={s.container} data-framer-name="Container">
        <div className={s.wall} data-framer-name="Wall">
          {columns.map((col, c) => (
            <div key={c} className={s.column}>
              {col.map(({ p, i }) => (
                <Reveal
                  key={p.slug}
                  from={{ opacity: 0, rotate: 3, scale: 0.94, y: 40 }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.8, delay: i * 0.07 }}
                  amount={0.5}
                >
                  <GalleryFrame {...p} />
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
