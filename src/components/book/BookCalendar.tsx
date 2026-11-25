"use client";

import { useEffect, useState } from "react";
import s from "./BookCalendar.module.css";

const DAY = 86400000;
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const startOfDay = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate());
const startOfWeek = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate() - d.getDay());
const addDays = (d: Date, n: number) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const same = (a: Date, b: Date) => a.getTime() === b.getTime();
const ordinal = (n: number) =>
  n +
  (n % 10 === 1 && n !== 11
    ? "st"
    : n % 10 === 2 && n !== 12
      ? "nd"
      : n % 10 === 3 && n !== 13
        ? "rd"
        : "th");

/** The visible weeks: the current month opens two weeks before today's week, other months on the week of the 1st. */
function weeksFor(year: number, month: number, today: Date) {
  const first = new Date(year, month, 1);
  const isCurrent = year === today.getFullYear() && month === today.getMonth();
  let start = startOfWeek(first);
  if (isCurrent) {
    const back = addDays(startOfWeek(today), -14);
    if (back > start) start = back;
  }
  const last = new Date(year, month + 1, 0);
  const rows = isCurrent
    ? 5
    : Math.ceil((Math.round((last.getTime() - start.getTime()) / DAY) + 1) / 7);
  return Array.from({ length: rows * 7 }, (_, i) => addDays(start, i));
}

function slotsFor(day: Date, today: Date) {
  const from = same(day, today) ? 13 * 60 + 30 : 9 * 60;
  const out: number[] = [];
  for (let m = from, i = 0; m <= 17 * 60 + 50; m += 10, i++) {
    if ((i + day.getDate()) % 9 === 4) continue;
    out.push(m);
  }
  return out;
}

function formatSlot(min: number, hour12: boolean) {
  const h = Math.floor(min / 60);
  const mm = String(min % 60).padStart(2, "0");
  if (!hour12) return `${String(h).padStart(2, "0")}:${mm}`;
  return `${((h + 11) % 12) + 1}:${mm}${h < 12 ? "am" : "pm"}`;
}

/** A booking calendar laid out like the Cal.com month view; visual only, nothing is sent anywhere. */
export default function BookCalendar() {
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => setToday(startOfDay(new Date())), []);
  return (
    <div className={s.frame} data-framer-name="Cal Booking">
      {today && <Calendar today={today} />}
    </div>
  );
}

function Calendar({ today }: { today: Date }) {
  const [view, setView] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [selected, setSelected] = useState(today);
  const [hour12, setHour12] = useState(true);
  const [slot, setSlot] = useState<number | null>(null);

  const days = weeksFor(view.year, view.month, today);
  const slots = slotsFor(selected, today);
  const atStart =
    view.year === today.getFullYear() && view.month === today.getMonth();
  const shift = (n: number) => {
    const d = new Date(view.year, view.month + n, 1);
    setView({ year: d.getFullYear(), month: d.getMonth() });
  };

  return (
    <div className={s.card}>
      <div className={s.month}>
        <div className={s.monthHead}>
          <p className={s.monthTitle}>
            {MONTHS[view.month]} <span className={s.muted}>{view.year}</span>
          </p>
          <div className={s.nav}>
            <button
              type="button"
              aria-label="Previous month"
              disabled={atStart}
              onClick={() => shift(-1)}
            >
              <Chevron flip />
            </button>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => shift(1)}
            >
              <Chevron />
            </button>
          </div>
        </div>
        <div className={s.weekdays}>
          {WEEKDAYS.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className={s.grid}>
          {days.map((d) => {
            const open = d >= today;
            const isSel = same(d, selected);
            const otherMonth = d.getMonth() !== view.month;
            return (
              <button
                key={d.getTime()}
                type="button"
                disabled={!open}
                className={`${s.day} ${open ? s.open : ""} ${isSel ? s.selected : ""}`}
                onClick={() => {
                  setSelected(d);
                  setSlot(null);
                }}
              >
                {otherMonth && d.getDate() === 1 && (
                  <span className={s.monthTag}>
                    {MONTHS[d.getMonth()].slice(0, 3)}
                  </span>
                )}
                {d.getDate()}
                {same(d, today) && <span className={s.todayDot} />}
              </button>
            );
          })}
          {Array.from({ length: 42 - days.length }, (_, k) => (
            <span
              key={`filler-${k}`}
              className={`${s.day} ${s.filler}`}
              aria-hidden
            />
          ))}
        </div>
      </div>
      <div className={s.slots}>
        <div className={s.slotsHead}>
          <p className={s.slotsTitle}>
            {WEEKDAYS[selected.getDay()]}{" "}
            <span className={s.muted}>{ordinal(selected.getDate())}</span>
          </p>
          <div className={s.toggle}>
            <button
              type="button"
              className={hour12 ? s.on : ""}
              onClick={() => setHour12(true)}
            >
              12h
            </button>
            <button
              type="button"
              className={hour12 ? "" : s.on}
              onClick={() => setHour12(false)}
            >
              24h
            </button>
          </div>
        </div>
        <div className={s.slotList}>
          {slots.map((m) => (
            <button
              key={m}
              type="button"
              className={`${s.slot} ${slot === m ? s.slotOn : ""}`}
              onClick={() => setSlot(slot === m ? null : m)}
            >
              {formatSlot(m, hour12)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Chevron({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
