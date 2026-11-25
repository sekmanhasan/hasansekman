"use client";

import { forwardRef, type ComponentProps } from "react";
import Rope, { withWashingLine } from "@/components/framer/WashingLine";
import Tag from "@/components/ui/Tag";
import SprinkleText from "@/components/fx/SprinkleText";
import HangingCard, { type Service } from "./HangingCard";
import s from "./services.module.css";

const Track = withWashingLine(
  forwardRef<HTMLDivElement, ComponentProps<"div">>(function Track(props, ref) {
    return <div ref={ref} {...props} />;
  }),
) as React.ForwardRefExoticComponent<ComponentProps<"div"> & React.RefAttributes<HTMLDivElement>>;

const SERVICES: Service[] = [
  { number: "01", name: "Brand identity", icon: "Sparkle", colour: "yellow", subs: ["Strategy", "Naming", "Logo", "Type and colour", "Guidelines"], line: "Names, logos and the small rules that keep a brand looking like itself." },
  { number: "02", name: "Websites", icon: "Browser", colour: "orange", subs: ["UX and wireframes", "Web design", "Framer build", "CMS set-up", "Care and updates"], line: "Framer sites your team can update without calling us at midnight." },
  { number: "03", name: "Packaging", icon: "Package", colour: "pink", subs: ["Structure", "Labels and tags", "Illustration", "Print"], line: "Boxes, bags and labels that look as good on a kitchen counter as on a shelf." },
  { number: "04", name: "Objects and merch", icon: "Coffee", colour: "purple", subs: ["Product design", "Clay prototypes", "Makers and sourcing", "Production"], line: "Totes, pins and the odd ceramic, shaped in clay before they are made." },
  { number: "05", name: "Campaigns", icon: "Megaphone", colour: "blue", subs: ["Concept", "Posters", "Social", "Shoots", "Launch kits"], line: "Posters, launches and social, built around one idea and shot in the studio." },
];

export default function Services() {
  return (
    <section id="services" className={s.section} data-framer-name="Section - Services">
      <div className={s.container}>
        <div className={s.headingRow} data-framer-name="Heading Row">
          <div className={s.headingWrapper} data-framer-name="Heading Wrapper">
            <Tag label="Services" />
            <SprinkleText className="t-96">What we make</SprinkleText>
            <p className="t-16" style={{ maxWidth: 380, textWrap: "balance" }}>
              Five things, done properly. Most clients start with one and come back for a second.
            </p>
          </div>
        </div>
      </div>
      <div className={s.line} data-framer-name="Line">
        <div className={s.rope}>
          <Rope colour="#c9a574" inset={32} nailColour="#2a1d17" nails sag={70} thickness={6} style={{ width: "100%", height: "100%" }} />
        </div>
        <Track className={s.track} data-framer-name="Track">
          {SERVICES.map((sv) => (
            <div key={sv.number} className={s.cardBox}>
              <HangingCard {...sv} />
            </div>
          ))}
        </Track>
      </div>
    </section>
  );
}
