import type { CSSProperties } from "react";

/** The fat arrow used on every button (Arrow Fat Line Right). */
export function FatArrow({ color = "var(--cream)", size = 20, style }: { color?: string; size?: number; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={{ display: "block", overflow: "visible", ...style }} aria-hidden>
      <path d="M 6 0 L 15 9 L 6 18 L 6 13.5 L 0 13.5 L 0 4.5 L 6 4.5 Z" fill={color} transform="translate(6.75 3)" />
      <path
        d="M 6 0 L 15 9 L 6 18 L 6 13.5 L 0 13.5 L 0 4.5 L 6 4.5 Z"
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(6.75 3)"
      />
      <path d="M 0 9 L 0 0" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" transform="translate(3.75 7.5)" />
    </svg>
  );
}

export function ArrowLeft({ color = "var(--dark)", size = 24 }: { color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 256 256" width={size} height={size} fill={color} aria-hidden>
      <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
    </svg>
  );
}

export function ArrowRight({ color = "var(--dark)", size = 24 }: { color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 256 256" width={size} height={size} fill={color} aria-hidden>
      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
    </svg>
  );
}

export function ArrowUpRight({ color = "var(--dark)", size = 24 }: { color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 256 256" width={size} height={size} fill={color} aria-hidden>
      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
    </svg>
  );
}
