"use client";

import { motion } from "motion/react";
import StudioClock from "@/components/framer/StudioClock";
import Reveal from "@/components/fx/Reveal";
import SprinkleText from "@/components/fx/SprinkleText";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { clay, color } from "@/lib/clay";
import { bricolage } from "@/lib/fonts";
import s from "./pricing.module.css";

type Plan = {
  number: string;
  name: string;
  prefix?: string;
  price: string;
  per: string;
  features: string[];
  fill: string;
  primary: boolean;
  badge?: string;
  cta: string;
  href: string;
};

const PLANS: Plan[] = [
  { number: "01", name: "Design sprint", prefix: "From", price: "£2,000", per: "per five-day sprint", features: ["Campaigns, landing pages or a brand refresh", "Kick-off workshop on day one", "Final designs and files on day five"], fill: "light", primary: false, cta: "Book a call", href: "/book" },
  { number: "02", name: "Single project", prefix: "From", price: "£3,500", per: "per project", features: ["Brand identity or a Framer website", "Fixed scope and price, agreed up front", "Two rounds of changes"], fill: "light", primary: false, cta: "Book a call", href: "/book" },
  { number: "03", name: "Monthly partner", prefix: "From", price: "£2,500", per: "a month", features: ["Two design days a week", "One shared request board", "Pause or stop with 30 days’ notice"], fill: "yellow", primary: true, badge: "Most picked", cta: "Book a call", href: "/book" },
  { number: "04", name: "Something bigger", price: "Let’s talk", per: "custom quote", features: ["Brand, web, packaging and motion together", "A team shaped around your brief", "One project lead as your contact"], fill: "purple", primary: true, cta: "Tell us about it", href: "/contact" },
];

const HANGERS = [
  { tilt: -3.5, swing: { delay: 0, duration: 2.8 }, appear: 0.1 },
  { tilt: 0, swing: { delay: 0.6, duration: 3.3 }, appear: 0.2 },
  { tilt: -2.5, swing: { delay: 0.3, duration: 2.5 }, appear: 0.3 },
  { tilt: 1, swing: { delay: 0.9, duration: 3 }, appear: 0.4 },
];

function PriceTag({ number, name, prefix, price, per, features, fill, primary, badge, cta, href }: Plan) {
  return (
    <div className={`${s.tag} clay-l`} style={clay(fill)} data-framer-name="Default">
      <div className={s.holeRow} data-framer-name="Hole Row">
        <div className={s.hole} data-framer-name="Hole" />
      </div>
      <p className={`t-13 ${s.number}`}>{number}</p>
      {badge && (
        <div className={`${s.badge} clay-s`} style={clay("orange", fill, "pill")} data-framer-name="Badge">
          <p className="t-13">{badge}</p>
        </div>
      )}
      <h3 className="t-36">{name}</h3>
      <div className={s.price} data-framer-name="Price">
        {prefix && (
          <p className="t-13" style={{ opacity: 0.9 }}>
            {prefix}
          </p>
        )}
        <p className="t-52">{price}</p>
        <p className="t-14" style={{ opacity: 0.9 }}>
          {per}
        </p>
      </div>
      <div className={s.rule} data-framer-name="Rule" />
      <div className={s.features}>
        {features.map((f) => (
          <div key={f} className={s.feature} data-framer-name="Feature">
            <div className={s.dotWrap} data-framer-name="Dot Wrapper">
              <span className={s.dot} data-framer-name="Dot" />
            </div>
            <p className="t-16">{f}</p>
          </div>
        ))}
      </div>
      <Button label={cta} href={href} variant={primary ? "primary" : "light"} />
    </div>
  );
}

function AvailabilityTicket() {
  return (
    <div className={`${s.ticket} clay-l`} style={clay("yellow")} data-framer-name="Desktop">
      <div className={s.main} data-framer-name="Main">
        <p className="t-13" style={{ opacity: 0.7 }}>
          Now booking
        </p>
        <h3 className="t-36">From November</h3>
        <p className="t-16">Two project slots left this season.</p>
      </div>
      <div className={s.stub} data-framer-name="Stub">
        <div className={s.notch} data-framer-name="Notch" />
        <div className={s.clock}>
          <StudioClock
            city="London"
            closedDot={color("muted")}
            closeHour={18}
            font={{ fontFamily: bricolage.style.fontFamily, fontSize: "16px", fontStyle: "normal", fontWeight: 600, letterSpacing: "0em", lineHeight: "1em" }}
            ink={color("dark")}
            inText="We're in the studio"
            labelFont={{ fontFamily: bricolage.style.fontFamily, fontStyle: "normal", fontWeight: 700 }}
            openDot={color("orange")}
            openHour={9}
            outText="We're out for the day"
            replyText="Replies within 24 hours, Monday to Friday."
            timeZone="Europe/London"
            weekends={false}
            style={{ width: "100%" }}
          />
        </div>
        <Button label="Book a call" href="/book" />
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className={s.section} data-framer-name="Section - Pricing">
      <div className={s.container} data-framer-name="Container">
        <div className={s.heading} data-framer-name="Heading Wrapper">
          <div className={s.title} data-framer-name="Title Wrapper">
            <Tag label="Pricing" />
            <SprinkleText className="t-96">What it costs</SprinkleText>
          </div>
          <p className={`t-22 ${s.intro}`}>
            Four ways to work with us, from a single project to a standing partnership. Prices are starting points; yours is fixed after a first
            chat.
          </p>
        </div>
        <div className={s.rail} data-framer-name="Rail">
          <div className={s.tags} data-framer-name="Tags">
            <div className={s.string} data-framer-name="String" />
            <div className={`${s.pin} ${s.pinL} clay-s`} style={clay("orange")} data-framer-name="Pin" />
            <div className={`${s.pin} ${s.pinR} clay-s`} style={clay("orange")} data-framer-name="Pin" />
            {PLANS.map((plan, i) => {
              const h = HANGERS[i];
              return (
                <motion.div
                  key={plan.number}
                  className={s.hanger}
                  data-framer-name="Hanger"
                  style={{ originY: 0 }}
                  whileHover={{ scale: 1.03, transition: { type: "spring", bounce: 0.5, duration: 0.9 } }}
                >
                  <motion.div
                    className={s.swing}
                    data-framer-name="Swing"
                    style={{ originY: 0 }}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 3 }}
                    transition={{ type: "tween", ease: [0.45, 0, 0.55, 1], ...h.swing, repeat: Infinity, repeatType: "mirror" }}
                  >
                    <div className={s.tilt} data-framer-name="Tilt" style={{ transformOrigin: "50% 0", rotate: `${h.tilt}deg` }}>
                      <div className={`${s.hook} clay-s`} style={clay("orange")} data-framer-name="Hook" />
                      <div className={`${s.cord} ${s[`cord${i}`]}`} data-framer-name="Cord" />
                      <PriceTag {...plan} />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className={s.availability} data-framer-name="Availability">
          <Reveal
            className={s.ticketAppear}
            data-framer-name="Ticket Appear"
            from={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", bounce: 0.35, delay: 0.1, duration: 0.9 }}
            amount={0.5}
            once={false}
          >
            <div className={s.ticketBox}>
              <AvailabilityTicket />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
