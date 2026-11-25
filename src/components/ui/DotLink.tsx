import Link from "next/link";
import Icon from "@/components/icons/Icon";
import s from "./DotLink.module.css";

type Props = { label: string; href: string; arrow?: boolean; newTab?: boolean; variant?: "default" | "light"; className?: string };

/** A text link led by a dot that stretches into a dash on hover (Framer "Footer Link"). */
export default function DotLink({ label, href, arrow = false, newTab = false, variant = "default", className }: Props) {
  const light = variant === "light";
  const inner = (
    <span className={s.row} data-framer-name="Label Row">
      <span className={s.dot} data-framer-name="Dot" />
      <span className="t-22">{label}</span>
      {arrow && (
        <span className={s.arrowWrap} data-framer-name="Arrow Wrap">
          <Icon name="ArrowUpRight" size={14} stroke={1.5} color={light ? "var(--cream)" : "var(--dark)"} />
        </span>
      )}
    </span>
  );
  const cls = `${s.link} ${light ? s.light : ""} ${className ?? ""}`;
  return newTab || !href.startsWith("/") ? (
    <a href={href} className={cls} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener" : undefined}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
