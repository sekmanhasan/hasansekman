import type { CSSProperties } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/icons/Icon";
import type { IconName } from "@/components/icons/svgs";
import s from "./HangingCard.module.css";

export type Service = { number: string; name: string; icon: IconName; colour: string; subs: string[]; line: string };

export default function HangingCard({ number, name, icon, colour, subs, line }: Service) {
  return (
    <div className={s.card} style={{ "--c": `var(--${colour})` } as CSSProperties} data-framer-name="Default">
      <div className={s.peg} data-framer-name="Peg" />
      <div className={s.head} data-framer-name="Head">
        <p className="t-13" style={{ opacity: 0.75 }}>
          {number}
        </p>
        <h3 className="t-36">{name}</h3>
      </div>
      <div className={s.iconBlob} data-framer-name="Icon Blob">
        <Icon name={icon} size={30} stroke={2.4} color="var(--dark)" />
      </div>
      <div className={s.subs} data-framer-name="Sub-services">
        {subs.map((sub) => (
          <div key={sub} className={s.sub}>
            <span className={s.dot} data-framer-name="Dot" />
            <p className="t-16">{sub}</p>
          </div>
        ))}
      </div>
      <div className={s.line} data-framer-name="Line">
        <p className="t-14">{line}</p>
      </div>
      <Button label="Start a Project" href="/contact" />
    </div>
  );
}
