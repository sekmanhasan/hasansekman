"use client";

import SmoothScroll from "@/components/framer/SmoothScroll";

/** Smooth wheel scrolling, as on every page of the site (intensity 50). */
export default function Smooth() {
  return (
    <div style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", pointerEvents: "none" }} aria-hidden>
      <SmoothScroll enabled intensity={50} />
    </div>
  );
}
