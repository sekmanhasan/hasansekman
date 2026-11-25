import { Bagel_Fat_One } from "next/font/google";
import localFont from "next/font/local";

export const bagel = Bagel_Fat_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bagel",
  display: "swap",
});

/** The full Bricolage files (not the latin subset) so arrows and other symbols render in the brand font. */
export const bricolage = localFont({
  src: [
    { path: "../fonts/bricolage-400.woff2", weight: "400" },
    { path: "../fonts/bricolage-500.woff2", weight: "500" },
    { path: "../fonts/bricolage-600.woff2", weight: "600" },
    { path: "../fonts/bricolage-700.woff2", weight: "700" },
    { path: "../fonts/bricolage-800.woff2", weight: "800" },
  ],
  variable: "--font-bricolage",
  display: "swap",
});

/** Font objects in the shape the ported Framer code components expect. */
export function displayFont(size: number, lineHeight = "1em", letterSpacing = "0em") {
  return { fontFamily: bagel.style.fontFamily, fontSize: `${size}px`, fontStyle: "normal", fontWeight: 400, letterSpacing, lineHeight };
}

export function bodyFont(size: number, weight = 600, lineHeight = "1em", letterSpacing = "0em") {
  return { fontFamily: bricolage.style.fontFamily, fontSize: `${size}px`, fontStyle: "normal", fontWeight: weight, letterSpacing, lineHeight };
}
