import SprinkleText from "@/components/fx/SprinkleText";
import Button from "@/components/ui/Button";
import DotLink from "@/components/ui/DotLink";
import LabelMaker from "@/components/ui/LabelMaker";
import Tag from "@/components/ui/Tag";
import s from "./PageHero.module.css";

type Props = {
  name: string;
  title: string;
  tag: string;
  intro?: string;
  tapeColour: string;
  darkLetters?: boolean;
  button?: { label: string; href: string };
  link?: { label: string; href: string };
};

/** The page header shared by Work, Journal and Book: a clay tape with the page name, a label maker and an intro. */
export default function PageHero({ name, title, tag, intro, tapeColour, darkLetters = false, button, link }: Props) {
  return (
    <section className={s.hero} data-framer-name={name}>
      <div className={s.titleBlock} data-framer-name="Title Block">
        <div className={s.tapeRow} data-framer-name="Tape Row">
          <div className={s.tapeWrap} data-framer-name="Tape Wrap">
            <div className={s.tape} style={{ backgroundColor: `var(--${tapeColour})` }} data-framer-name="Tape">
              <div className={s.tag}>
                <Tag label={tag} surface={tapeColour} />
              </div>
              <SprinkleText as="h1" className="t-113" style={darkLetters ? { color: "var(--dark)" } : undefined}>
                {title}
              </SprinkleText>
            </div>
            <div className={s.makerRail} data-framer-name="Maker Rail">
              <LabelMaker />
            </div>
          </div>
        </div>
      </div>
      <div className={s.container} data-framer-name="Container">
        <div className={s.headingWrapper} data-framer-name="Heading Wrapper">
          {intro && <p className={`t-22 ${s.intro}`}>{intro}</p>}
          {button && <Button label={button.label} href={button.href} />}
          {link && <DotLink label={link.label} href={link.href} arrow />}
        </div>
      </div>
    </section>
  );
}
