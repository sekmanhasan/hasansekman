"use client";

import BeadSlides from "@/components/framer/BeadSlides";
import ReelPlayer from "@/components/framer/ReelPlayer";
import SprinkleText from "@/components/fx/SprinkleText";
import Tag from "@/components/ui/Tag";
import { useEffect, useState } from "react";
import { clay, color } from "@/lib/clay";
import { bagel, bricolage } from "@/lib/fonts";
import s from "./testimonials.module.css";

const photo = (file: string, alt = "") => ({ src: `/f/${file}`, srcSet: "", alt });

const QUOTES = [
  { colour: color("yellow"), name: "Tom Okafor", photo: photo("WOq379HBOIgVV2sFNLJzhsTPA.jpg"), quote: "Three rounds in clay before a single pixel. Weird. Worked.", role: "Musse Design Week" },
  { colour: color("light"), name: "Priya Shah", quote: "They made our farm shop feel like a hug. People take photos of the tins.", role: "Larder & Co." },
  { colour: color("orange"), name: "Sam Reyes", photo: photo("M45Mg8AXtNfXU0V5LQ9tHVg8w10.jpg", "man in green crew neck shirt smiling"), quote: "On time, under budget, and they remembered our dog’s name.", role: "Slow Burn Candles" },
  { colour: color("pink"), name: "Mia Chen", quote: "The packaging sells the balms before anyone reads the label.", role: "Nettle & Bloom" },
  { colour: color("bg"), name: "Jonah Reid", photo: photo("GZn1Swn35Ii43O8ddlq0KpCJKzs.jpg", "a man in a red shirt holding two fingers up"), quote: "Every meeting felt like a craft afternoon. Every deadline was met.", role: "Loudhouse Records" },
  { colour: "rgb(255, 212, 92)", name: "Tom Okafor", quote: "Three rounds in clay before a single pixel. Weird. Worked.", role: "Musse Design Week" },
  { colour: color("yellow"), name: "Lena Fischer", quote: "We asked for a logo and left with a whole personality. The good kind.", role: "Pocket Pasta" },
  { colour: color("light"), name: "Ade Bello", photo: photo("OgEPeecKl8ZS8vXxYo4dUxecQ.jpg"), quote: "They made a pin badge so good our customers started collecting them.", role: "Night Owl Books" },
  { colour: color("orange"), name: "Rosa Lima", quote: "Clear prices, a clear plan, and a Thursday call I actually looked forward to.", role: "Rosa’s Garden Shop" },
  { colour: color("pink"), name: "Kenji Mori", quote: "The site went live on time and our bookings doubled within a month.", role: "Daybreak Yoga" },
  { colour: color("bg"), name: "Hannah Cole", quote: "They tested our packaging on a real shop shelf before printing a single box.", role: "Oat & Honey" },
].map((q, i) => ({ id: `q${i}`, ...q }));

const VIDEOS = [
  { quote: "“The tees sold out before the festival opened.”", name: "Tom Okafor", role: "Musse Design Week", duration: "0:58", shape: 0, body: "orange", knob: "yellow", poster: "ksdmR00VgaqCayn3dSg8nATe5yg.jpeg" },
  { quote: "“Our boxes finally look like the candles smell.”", name: "Sam Reyes", role: "Slow Burn Candles", duration: "1:12", shape: 1, body: "yellow", knob: "orange", poster: "Opsk8Ema65MiWFbpRicOQFTaRM.jpeg" },
  { quote: "“They made the record shop feel like a record.”", name: "Jonah Reid", role: "Loudhouse Records", duration: "0:47", shape: 2, body: "pink", knob: "yellow", poster: "O4O5ajklN5RixHa8CWR49OwxmNw.jpeg" },
];

function VideoTestimonial({ quote, name, role, duration, shape, body, knob, poster }: (typeof VIDEOS)[number]) {
  return (
    <div className={s.video} data-framer-name="Default">
      <div className={s.player}>
        <ReelPlayer
          backdrop="rgba(42, 29, 23, 0.92)"
          blobShape={shape}
          bodyFill={color(body)}
          chipFill={color("light")}
          duration={duration}
          font={{ fontFamily: bricolage.style.fontFamily, fontSize: "14px", fontStyle: "normal", fontWeight: 700, letterSpacing: "0.01em", lineHeight: "1.2em" }}
          grow
          knob1={color(knob)}
          knob2={color("light")}
          knobs="side"
          label="Watch"
          pillFill={color("light")}
          pillText={color("dark")}
          playFill={color("light")}
          playIcon={color("dark")}
          poster={{ src: `/f/${poster}`, alt: name }}
          preview={false}
          radius={48}
          shade
          shape="tv"
          source="video"
          startHeight={18}
          startWidth={22}
          textColour="rgb(251, 247, 241)"
          title=" "
          videoFile="/f/aFy7nvGc2KqONgC83IcEZJ6v1i8.mp4"
          videoUrl=""
          wobble
          word="Showreel"
          wordFont={{ fontFamily: '"Inter", sans-serif', fontStyle: "normal", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: "0.9em" }}
          youtube=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h3 className="t-24">{quote}</h3>
      <div className={s.who} data-framer-name="Who">
        <h4 className="t-18">{name}</h4>
        <p className="t-14">{role}</p>
      </div>
    </div>
  );
}

function useBead() {
  const [mode, setMode] = useState<"desktop" | "tablet" | "phone">("desktop");
  useEffect(() => {
    const tablet = window.matchMedia("(min-width: 810px) and (max-width: 1199.98px)");
    const phone = window.matchMedia("(max-width: 809.98px)");
    const sync = () => setMode(phone.matches ? "phone" : tablet.matches ? "tablet" : "desktop");
    sync();
    tablet.addEventListener("change", sync);
    phone.addEventListener("change", sync);
    return () => {
      tablet.removeEventListener("change", sync);
      phone.removeEventListener("change", sync);
    };
  }, []);
  if (mode === "phone") return { beadSize: 48, bubbleWidth: 300, gap: 10, quoteSize: 22, showDots: false };
  if (mode === "tablet") return { beadSize: 72, bubbleWidth: 520, gap: 16, quoteSize: 30, showDots: true };
  return { beadSize: 86, bubbleWidth: 600, gap: 18, quoteSize: 34, showDots: true };
}

export default function Testimonials() {
  const bead = useBead();
  return (
    <div className={s.wrap} data-framer-name="Section - Testimonials Wrap">
      <section className={`${s.section} clay-l`} style={clay("blue")} data-framer-name="Section - Testimonials">
        <div className={s.container} data-framer-name="Container">
          <div className={s.heading} data-framer-name="Heading Wrapper">
            <div className={s.title} data-framer-name="Title Wrapper">
              <Tag label="Kind words" surface="blue" />
              <SprinkleText className="t-96" style={{ textAlign: "center" }}>
                They said it, not us
              </SprinkleText>
            </div>
          </div>
          <div className={s.slides}>
            <BeadSlides
              arrowColour={color("dark")}
              arrowFill={color("light")}
              autoplay
              beadSize={bead.beadSize}
              bubbleWidth={bead.bubbleWidth}
              dotColour={color("cream")}
              gap={bead.gap}
              interval={4}
              items={QUOTES}
              label="What clients say"
              quoteFont={{ fontFamily: bagel.style.fontFamily, fontStyle: "normal", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: "1.12em" }}
              quoteSize={bead.quoteSize}
              roundness={40}
              showArrows
              showDots={bead.showDots}
              stringColour={color("muted")}
              textColour={color("dark")}
              textFont={{ fontFamily: bricolage.style.fontFamily, fontStyle: "normal", fontWeight: 400, letterSpacing: "0em", lineHeight: "1.3em" }}
              style={{ width: "100%" }}
            />
          </div>
          <div className={s.videos} data-framer-name="Videos">
            <div className={s.videoRow} data-framer-name="Video Row">
              <VideoTestimonial {...VIDEOS[0]} />
              <div className={s.nudge} data-framer-name="Nudge">
                <VideoTestimonial {...VIDEOS[1]} />
              </div>
              <VideoTestimonial {...VIDEOS[2]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
