"use client";

import { useEffect, useState } from "react";
import KeyScreen from "@/components/framer/ToyKeyboard";
import CuttingMat from "@/components/framer/CuttingMat";
import ToyKey from "@/components/ui/ToyKey";
import { clay } from "@/lib/clay";
import styles from "./Footer.module.css";

const BIG_KEYS = [
  { legend: "01", label: "Work", fill: "purple", href: "/projects", screen: "Brands, websites and packaging we’ve made." },
  { legend: "02", label: "Services", fill: "yellow", href: "/#services", screen: "Brand identity, websites, packaging and objects." },
  { legend: "03", label: "About", fill: "pink", href: "/about", screen: "Who we are and how we work." },
  { legend: "04", label: "Journal", fill: "blue", href: "/journal", screen: "Notes from the studio." },
  { legend: "05", label: "Contact", fill: "orange", href: "/contact", screen: "Tell us about your project." },
];

const SOCIAL_KEYS = [
  { label: "IG", screenTitle: "Instagram", fill: "pink", href: "https://instagram.com" },
  { label: "IN", screenTitle: "LinkedIn", fill: "light", href: "https://linkedin.com" },
  { label: "DR", screenTitle: "Dribbble", fill: "yellow", href: "https://dribbble.com" },
  { label: "X", screenTitle: "Behance", fill: "purple", href: "https://x.com" },
];

const HOME_KEY = {
  label: "Home",
  screenTitle: "Home",
  screen: "Back to the top of the home page.",
  fill: "pink",
  href: "/#top",
  showIcon: true,
  variant: "small" as const,
};

const MAT_FONT = { fontFamily: "var(--font-body)", fontSize: "11px", fontStyle: "normal", fontWeight: 700, letterSpacing: "0em", lineHeight: "1em" };
const TITLE_FONT = { fontFamily: '"Bagel Fat One", sans-serif', fontStyle: "normal", fontWeight: 400, letterSpacing: "0em", lineHeight: "1em" };
const LINE_FONT = { fontFamily: "var(--font-body)", fontStyle: "normal", fontWeight: 600, letterSpacing: "0em", lineHeight: "1.35em" };

export default function Footer() {
  const [phone, setPhone] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 809.98px)");
    const sync = () => setPhone(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className={styles.outer}>
      <footer className={styles.footer} data-framer-name="Section - Footer">
        <div className={styles.mat}>
          <CuttingMat
            cell={32}
            font={MAT_FONT}
            guide
            lineColour="#ffffff38"
            major={5}
            matColour="#2a1d171a"
            numbers
            radius={28}
            rulerColour="#ffffff80"
            strength={60}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={`${styles.crumb} ${styles.crumb1} clay-s`} style={clay("pink", "purple")} />
        <div className={`${styles.crumb} ${styles.crumb2} clay-s`} style={clay("yellow", "purple")} />
        <div className={`${styles.crumb} ${styles.crumb3} clay-s`} style={clay("light", "purple")} />

        <div className={styles.container}>
          <div className={`${styles.keyboard} clay-l`} style={clay("light", "purple")}>
            <div className={styles.topRow}>
              <div className={styles.speaker} aria-hidden>
                {Array.from({ length: 24 }, (_, i) => (
                  <span key={i} className={styles.hole} />
                ))}
              </div>
              <div className={styles.screen}>
                <KeyScreen
                  idleLine="Each key opens a page. The long one writes to us."
                  idleTitle="Press a key"
                  lineColour="#fbf7f1"
                  lineFont={{ ...LINE_FONT, fontSize: phone ? "14px" : "16px" }}
                  titleColour="#ffbb00"
                  titleFont={{ ...TITLE_FONT, fontSize: phone ? "30px" : "40px" }}
                  typing
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={styles.knobs}>
                <ToyKey {...HOME_KEY} className={styles.homeKey} />
                <div className={`${styles.knob} clay-s`} style={clay("yellow", "light")} />
              </div>
            </div>
            <div className={styles.keys}>
              {BIG_KEYS.map((k) => (
                <ToyKey key={k.label} {...k} screenTitle={k.label} className={styles.bigKey} />
              ))}
              <ToyKey {...HOME_KEY} className={`${styles.bigKey} ${styles.phoneHome}`} />
            </div>
            <div className={styles.bottomRow}>
              <ToyKey
                variant="small"
                legend="Write to us"
                label="hello@studiomallow.co"
                screenTitle="Write to us"
                screen="Opens your email app, addressed to hello@studiomallow.co."
                fill="orange"
                href="mailto:hello@studiomallow.co"
                className={styles.mailKey}
              />
              {SOCIAL_KEYS.map((k) => (
                <ToyKey key={k.label} variant="small" newTab screen="Opens in a new tab." {...k} className={styles.socialKey} />
              ))}
            </div>
          </div>
          <div className={styles.credits}>
            <p className="t-14">
              <a href="https://framer.link/PeIKkaT" target="_blank" rel="noopener" className={styles.footLink}>
                © Real Mehedi
              </a>
            </p>
            <p className="t-14" style={{ color: "var(--cream)" }}>
              London, UK
            </p>
          </div>
        </div>

        <div className={styles.pencil} aria-hidden>
          <div className={`${styles.pencilBody} clay-s`} style={clay("orange", "purple")} />
          <div className={`${styles.pencilTip} clay-s`} style={clay("yellow", "purple")} />
        </div>
      </footer>
    </div>
  );
}
