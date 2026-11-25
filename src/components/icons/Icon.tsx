import type { CSSProperties } from "react";
import { ICONS, type IconName } from "./svgs";

type Props = {
  name: IconName;
  size?: number | string;
  color?: string;
  stroke?: number;
  fillOpacity?: number;
  className?: string;
  style?: CSSProperties;
};

export default function Icon({ name, size = 24, color = "var(--dark)", stroke = 1.5, fillOpacity = 0, className, style }: Props) {
  return (
    <span
      aria-hidden
      className={className}
      style={
        {
          display: "block",
          width: size,
          height: size,
          flex: "none",
          "--21h8s6": color,
          "--pgex8v": stroke,
          "--1m6trwb": fillOpacity,
          "--1m973uw": color,
          "--js9iwy": stroke,
          ...style,
        } as CSSProperties
      }
      dangerouslySetInnerHTML={{ __html: ICONS[name].replace("<svg ", '<svg width="100%" height="100%" style="display:block;overflow:visible" ') }}
    />
  );
}
