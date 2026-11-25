"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { clayVars, OVER_ANYTHING } from "@/lib/clay";
import styles from "./Navigation.module.css";

export const NAV_LINKS = [
  { label: "Work", href: "/projects" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

const pillVars = clayVars("#f2f2f2", OVER_ANYTHING);
const spring = { type: "spring", bounce: 0, duration: 0.55 } as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 256 256" width={24} height={24} fill="none" stroke="var(--cream)" strokeWidth={16} strokeLinecap="round" aria-hidden>
      {open ? (
        <>
          <line x1="200" y1="56" x2="56" y2="200" />
          <line x1="200" y1="200" x2="56" y2="56" />
        </>
      ) : (
        <>
          <line x1="40" y1="128" x2="216" y2="128" />
          <line x1="40" y1="64" x2="216" y2="64" />
          <line x1="40" y1="192" x2="216" y2="192" />
        </>
      )}
    </svg>
  );
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className={styles.wrap}>
      <motion.nav
        className={`${styles.pill} ${open ? styles.open : ""}`}
        style={pillVars}
        layout
        transition={spring}
        data-framer-name="Pill"
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logo} aria-label="Studio Mallow home">
            <Image src="/f/S4Fxl3suNqSbsss5PpgWAY69kMs.png" alt="" width={128} height={54} priority className={styles.logoImg} />
          </Link>
          <div className={styles.links}>
            {NAV_LINKS.map((l) => (
              <Link key={l.label} href={l.href} className={styles.navLink}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className={styles.actions}>
            <Button label="Let’s talk" href="/contact" className={styles.cta} />
            <button
              type="button"
              className={styles.menuButton}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className={styles.phoneLinks}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={spring}
            >
              <div className={styles.phoneList}>
                {NAV_LINKS.map((l) => (
                  <Link key={l.label} href={l.href} className={`t-64 ${styles.phoneLink}`} onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
              <Button label="Let’s talk" href="/contact" className={styles.phoneCta} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
