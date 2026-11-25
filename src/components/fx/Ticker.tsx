"use client";

import { Children, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Pixels per second. */
  velocity?: number;
  /** Speed while hovered, as a percentage of the normal speed. */
  hoverSpeed?: number;
  reverse?: boolean;
  gap?: number;
  draggable?: boolean;
  className?: string;
  style?: CSSProperties;
};

/** An endless row that drifts sideways, slows under the pointer and can be dragged (Framer's Ticker effect). */
export default function Ticker({ children, velocity = 40, hoverSpeed = 25, reverse, gap = 0, draggable, className, style }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const row = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(2);
  const state = useRef({ x: 0, hover: false, drag: null as null | { start: number; x: number }, period: 0 });

  useEffect(() => {
    const el = row.current;
    const box = wrap.current;
    if (!el || !box) return;
    const measure = () => {
      const first = el.children[0] as HTMLElement | undefined;
      const n = Children.count(children);
      const last = el.children[n - 1] as HTMLElement | undefined;
      if (!first || !last) return;
      const period = last.offsetLeft + last.offsetWidth - first.offsetLeft + gap;
      state.current.period = period;
      setCopies(Math.max(2, Math.ceil(box.offsetWidth / Math.max(period, 1)) + 1));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(box);
    return () => ro.disconnect();
  }, [children, gap]);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();
    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    if (wrap.current) io.observe(wrap.current);
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const s = state.current;
      if (!s.drag && visible && !reduce) {
        const speed = velocity * (s.hover ? hoverSpeed / 100 : 1);
        s.x += (reverse ? 1 : -1) * speed * dt;
      }
      if (s.period > 0) s.x = ((s.x % s.period) - s.period) % s.period;
      if (row.current) row.current.style.transform = `translateX(${s.x}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [velocity, hoverSpeed, reverse]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!draggable) return;
    state.current.drag = { start: e.clientX, x: state.current.x };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = state.current.drag;
    if (d) state.current.x = d.x + (e.clientX - d.start);
  };
  const endDrag = () => (state.current.drag = null);

  return (
    <div
      ref={wrap}
      className={className}
      style={{ overflow: "clip", touchAction: draggable ? "pan-y" : undefined, cursor: draggable ? "grab" : undefined, ...style }}
      onPointerEnter={(e) => e.pointerType === "mouse" && (state.current.hover = true)}
      onPointerLeave={() => (state.current.hover = false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div ref={row} style={{ display: "flex", gap, width: "max-content", willChange: "transform" }}>
        {Array.from({ length: copies }, (_, c) =>
          Children.map(children, (child, i) => (
            <div key={`${c}-${i}`} style={{ flex: "none" }} aria-hidden={c > 0 || undefined}>
              {child}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
