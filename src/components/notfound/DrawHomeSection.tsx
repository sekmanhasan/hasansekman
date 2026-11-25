"use client";

import { useEffect, useState } from "react";
import DrawHome from "@/components/framer/DrawHome";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import s from "./DrawHomeSection.module.css";

/** The 404: a drawing game filling the screen, with the copy floating above it. */
export default function DrawHomeSection() {
  const [phone, setPhone] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 809.98px)");
    const sync = () => setPhone(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section className={s.section} data-framer-name="Section - Draw Home">
      <div className={s.game}>
        <DrawHome
          background="var(--yellow)"
          door="var(--dark)"
          line="var(--dark)"
          lineWidth={10}
          mallow="var(--pink)"
          roof="var(--orange)"
          walls="var(--light)"
          window="var(--blue)"
          ghost
          homeLink="/"
          houseY={phone ? 62 : 46}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className={s.container} data-framer-name="Container">
        <Tag label="Error 404" />
        <h1 className={`t-96 ${s.title}`}>Lost? Draw yourself a way out.</h1>
        <p className={`t-22 ${s.text}`}>Draw a line from Mallow to the little house. Any route works, the sillier the better.</p>
        <div className={s.button}>
          <Button label="Take me home" href="/" />
        </div>
      </div>
    </section>
  );
}
