import type { CSSProperties, ReactNode } from "react";
import Button from "@/components/ui/Button";
import b from "./board.module.css";

/** A coloured card pinned to the board: label, a big line (often a link), a detail and an optional button. */
export default function PinnedNote({
  label,
  value,
  href,
  detail,
  fill,
  pin,
  rotate = 0,
  button,
  className,
  style,
}: {
  label: string;
  value: string;
  href?: string;
  detail: string;
  fill: string;
  pin: string;
  rotate?: number;
  button?: { label: string; href: string };
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`${b.paper} ${b.note} ${className ?? ""}`}
      style={{
        rotate: `${rotate}deg`,
        backgroundColor: `var(--${fill})`,
        ...style,
      }}
      data-framer-name="Default"
    >
      <div className={b.pinRow} data-framer-name="Pin Row">
        <div
          className={b.pin}
          style={{ backgroundColor: `var(--${pin})` }}
          data-framer-name="Pin"
        />
      </div>
      <p className="t-13">{label}</p>
      <p className="t-24">
        <a className={b.noteLink} href={href}>
          {value}
        </a>
      </p>
      <p className="t-14">{detail}</p>
      {button && (
        <div className={b.buttonWrap} data-framer-name="Button Wrap">
          <Button label={button.label} href={button.href} variant="light" />
        </div>
      )}
    </div>
  );
}
