import type { CSSProperties } from "react";

// Clay Light, computed up front: the light, shade and cast shadow of a clay surface are tinted from its own fill
// (and the cast is kept darker than the surface it falls on). Mirrors the ClayLight override from the Framer site.

export const COLORS = {
  dark: "#2a1d17",
  bg: "#eaeaea",
  light: "#f2f2f2",
  white: "#ffffff",
  cream: "#fbf7f1",
  orange: "#ff511c",
  yellow: "#ffbb00",
  purple: "#9a89e3",
  pink: "#e192c7",
  blue: "#72a7e3",
  green: "#8ab50e",
  beige: "#d9b98c",
  rope: "#c9a574",
  muted: "#6f6358",
  black: "#000000",
} as const;

export type ColorName = keyof typeof COLORS;

type RGB = [number, number, number];

function toRgb(c: string): RGB {
  const named = (COLORS as Record<string, string>)[c];
  const hex = (named ?? c).replace("#", "");
  const full = hex.length === 3 ? hex.split("").map((x) => x + x).join("") : hex.slice(0, 6);
  return [parseInt(full.slice(0, 2), 16), parseInt(full.slice(2, 4), 16), parseInt(full.slice(4, 6), 16)];
}

function toHsl([r, g, b]: RGB): RGB {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [h * 60, s, l];
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const hsla = (h: number, s: number, l: number, a: number) =>
  `hsla(${h.toFixed(1)}, ${(s * 100).toFixed(1)}%, ${(l * 100).toFixed(1)}%, ${a})`;

function lightOf(c: RGB, alpha: number) {
  const [h, s, l] = toHsl(c);
  return hsla(h, clamp(s * 0.9, 0, 1), l + (1 - l) * 0.6, alpha);
}

function deepOf(c: RGB) {
  const [h, s, l] = toHsl(c);
  if (l > 0.85) return hsla(h, clamp(s, 0.25, 0.45), 0.55, 0.3);
  if (l < 0.22) return hsla(h, s, l * 0.5, 0.45);
  return hsla(h, clamp(s * 1.05, 0.3, 0.8), l * 0.62, 0.36);
}

function castOf(fill: RGB, surface?: RGB) {
  const [h, s] = toHsl(fill);
  const under = surface ? toHsl(surface)[2] : 0.85;
  return hsla(h, clamp(s * 0.8, 0.15, 0.7), clamp(under * 0.55, 0.04, 0.5), 0.45);
}

/** A surface that floats over everything (the fixed nav) is treated as over a dark one. */
export const OVER_ANYTHING = "#18100c";

export function clayVars(fill: string, surface: string = COLORS.bg): CSSProperties {
  const f = toRgb(fill);
  const dark = toHsl(f)[2] < 0.22;
  return {
    "--clay-rim": lightOf(f, dark ? 0.22 : 0.55),
    "--clay-glow": lightOf(f, dark ? 0.08 : 0.26),
    "--clay-shade": deepOf(f),
    "--clay-cast": castOf(f, toRgb(surface)),
  } as CSSProperties;
}

const BANDS = { pill: [7, 14, 17, 20], round: [24, 40, 47, 54], card: [16, 27, 31, 35] };

/** The two glossy bands painted across chips, beads and buttons (Clay Shine). */
export function shineImage(fill: string, shape: keyof typeof BANDS = "pill") {
  const [a, b, c2, d] = BANDS[shape];
  const [h, s, l] = toHsl(toRgb(fill));
  const tint = hsla(h, clamp(s * 0.9, 0, 1), l + (1 - l) * 0.7, l > 0.85 ? 0.55 : 0.3);
  return `linear-gradient(115deg, transparent ${a}%, ${tint} ${a}% ${b}%, transparent ${b}% ${c2}%, ${tint} ${c2}% ${d}%, transparent ${d}%)`;
}

export function shineStyle(fill: string, shape: keyof typeof BANDS = "pill"): CSSProperties {
  return {
    backgroundImage: shineImage(fill, shape),
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };
}

/** Fill colour + clay variables in one go. */
export function clay(fill: string, surface?: string, shine?: keyof typeof BANDS): CSSProperties {
  const c = (COLORS as Record<string, string>)[fill] ?? fill;
  return {
    backgroundColor: c,
    ...clayVars(c, surface ? ((COLORS as Record<string, string>)[surface] ?? surface) : undefined),
    ...(shine ? shineStyle(c, shine) : null),
  };
}

export function color(name: string) {
  return (COLORS as Record<string, string>)[name] ?? name;
}
