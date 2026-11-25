"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  forwardRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type ReactNode,
} from "react";
import PinnedNote from "@/components/board/PinnedNote";
import Sticker, { dragProps } from "@/components/board/Sticker";
import bs from "@/components/board/board.module.css";
import { withSentNote } from "@/components/framer/SentNote";
import { FatArrow } from "@/components/ui/Arrow";
import Button from "@/components/ui/Button";
import DotLink from "@/components/ui/DotLink";
import SocialKey from "@/components/ui/SocialKey";
import Tag from "@/components/ui/Tag";
import b from "@/components/ui/Button.module.css";
import s from "./ContactBoard.module.css";

const Sheet = withSentNote(
  forwardRef<HTMLDivElement, { className?: string; children?: ReactNode }>(
    function Sheet(props, ref) {
      return <div ref={ref} {...props} />;
    },
  ),
) as React.ForwardRefExoticComponent<{
  className?: string;
  "data-framer-name"?: string;
  children?: ReactNode;
}>;

function BoardPhoto({
  src,
  caption,
  rotate,
  className,
}: {
  src: string;
  caption: string;
  rotate: number;
  className: string;
}) {
  return (
    <motion.div
      {...dragProps}
      className={`${bs.paper} ${s.photoCard} ${className}`}
      style={{ rotate }}
      data-framer-name="Default"
    >
      <div className={s.photoTape} data-framer-name="Tape" />
      <div className={s.photo} data-framer-name="Photo">
        <Image src={src} alt="" fill sizes="190px" draggable={false} />
      </div>
      <p className="t-13">{caption}</p>
    </motion.div>
  );
}

function Field({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`${s.field} ${className ?? ""}`}>
      <p className="t-13">{label}</p>
      {children}
    </label>
  );
}

function Select({ name, options }: { name: string; options: string[] }) {
  const [value, setValue] = useState("");
  return (
    <div className={`${s.input} ${s.select}`}>
      <select
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((o, i) => (
          <option key={o} value={i === 0 ? "" : o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

type SendState = "idle" | "sending" | "sent";
const SEND_LABEL: Record<SendState, string> = {
  idle: "Send it",
  sending: "Sending…",
  sent: "Sent. Talk soon.",
};
const SEND_NAME: Record<SendState, string> = {
  idle: "Default",
  sending: "Sending",
  sent: "Sent",
};

function SendButton({ state }: { state: SendState }) {
  const sent = state === "sent";
  return (
    <motion.button
      type="submit"
      className={`${b.button} ${s.send}`}
      style={{
        backgroundColor: sent ? "var(--purple)" : "var(--orange)",
        opacity: state === "sending" ? 0.85 : 1,
      }}
      disabled={state !== "idle"}
      data-framer-name={SEND_NAME[state]}
    >
      <span className={b.label}>
        <span
          className="t-18"
          style={{
            color: sent ? "var(--dark)" : "var(--cream)",
            whiteSpace: "pre",
          }}
        >
          {SEND_LABEL[state]}
        </span>
      </span>
      <span
        className={b.blob}
        style={{ backgroundColor: "var(--black)" }}
        data-framer-name="Icon Blob"
      >
        <FatArrow />
      </span>
    </motion.button>
  );
}

function Mallow() {
  return (
    <div className={s.mallow} data-framer-name="Mallow">
      <span className={s.dent} />
      <span className={s.eye} style={{ left: 26 }} />
      <span className={s.eye} style={{ left: 54 }} />
      <span className={s.cheek} style={{ left: 13 }} />
      <span className={s.cheek} style={{ left: 64 }} />
    </div>
  );
}

const pinStyle = (left: number): CSSProperties => ({ left });

export default function ContactBoard() {
  const [state, setState] = useState<SendState>("idle");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (state !== "idle") return;
    setState("sending");
    window.setTimeout(() => setState("sent"), 700);
  };

  return (
    <section className={s.section} data-framer-name="Section - Board">
      <div className={`${bs.board} ${s.board}`} data-framer-name="Board">
        <div
          className={`${bs.paper} ${s.title}`}
          style={{ rotate: "-1.5deg" }}
          data-framer-name="Title Scrap"
        >
          <div className={s.titleTape} data-framer-name="Tape" />
          <Tag label="Contact" />
          <h1 className={`t-96 ${s.titleText}`}>Got a rough idea?</h1>
          <p className={`t-16 ${s.titleText} ${s.intro}`}>
            Tell us what you’re making and we’ll help shape it. Leave a note and
            we’ll reply within a day, or book a 30-minute call and talk it
            through.
          </p>
          <p className={`t-13 ${s.psst}`}>
            Psst: anything that isn’t pinned down can be moved.
          </p>
        </div>

        <div className={s.columns} data-framer-name="Columns">
          <Sheet
            className={`${bs.paper} ${s.sheet}`}
            data-framer-name="Form Sheet"
          >
            <div
              className={bs.pin}
              style={pinStyle(288)}
              data-framer-name="Pin"
            />
            <form className={s.form} onSubmit={submit} data-framer-name="Form">
              <div className={s.head} data-framer-name="Head">
                <h3 className="t-36">What are we making?</h3>
                <p className="t-14">We reply within a day, Monday to Friday.</p>
              </div>
              <div className={s.row} data-framer-name="Row">
                <Field label="Your name" className={s.half}>
                  <input
                    className={s.input}
                    name="name"
                    type="text"
                    placeholder="Jo Carvalho"
                    required
                  />
                </Field>
                <Field label="Email" className={s.half}>
                  <input
                    className={s.input}
                    name="email"
                    type="email"
                    placeholder="jo@shop.co"
                    required
                  />
                </Field>
              </div>
              <Field label="Company (optional)">
                <input
                  className={s.input}
                  name="company"
                  type="text"
                  placeholder="Shop, studio, label…"
                />
              </Field>
              <div className={s.row} data-framer-name="Row">
                <Field label="Kind of project" className={s.half}>
                  <Select
                    name="making"
                    options={[
                      "Pick one",
                      "Brand identity",
                      "Website",
                      "Packaging",
                      "Objects and merch",
                      "Campaign",
                      "Not sure yet",
                    ]}
                  />
                </Field>
                <Field label="Budget" className={s.half}>
                  <Select
                    name="budget"
                    options={[
                      "Pick one",
                      "Under £5k",
                      "£5k to £10k",
                      "£10k to £25k",
                      "Over £25k",
                      "Not sure yet",
                    ]}
                  />
                </Field>
              </div>
              <Field label="Tell us about it">
                <textarea
                  className={`${s.input} ${s.textarea}`}
                  name="message"
                  placeholder="What it is, who it’s for and when you need it."
                  required
                />
              </Field>
              <div className={s.foot} data-framer-name="Foot">
                <SendButton state={state} />
              </div>
            </form>
            <div className={s.thanks} data-framer-name="Thanks">
              <Mallow />
              <h2 className={`t-64 ${s.thanksTitle}`}>Got it. Thank you.</h2>
              <p className={`t-16 ${s.thanksText}`}>
                Your note is pinned to our board now. Someone from the studio
                replies within a day, Monday to Friday.
              </p>
              <div className={s.buttons} data-framer-name="Buttons">
                <Button label="Back to home" href="/" />
                <DotLink label="Send another" href="/contact" arrow />
              </div>
            </div>
          </Sheet>

          <div className={s.notes} data-framer-name="Notes">
            <PinnedNote
              className={`${s.note} ${s.noteWrite}`}
              label="Write to us"
              value="hasansekman@outlook.com"
              href="mailto:hasansekman@outlook.com"
              detail="Replies within a day, Monday to Friday."
              fill="yellow"
              pin="orange"
              rotate={-3}
            />
            <PinnedNote
              className={`${s.note} ${s.noteCall}`}
              label="Call us"
              value="+44 20 7946 0018"
              href="tel:+442079460018"
              detail="Monday to Friday, 9am to 6pm, London time."
              fill="purple"
              pin="yellow"
              rotate={2}
            />
            <PinnedNote
              className={`${s.note} ${s.noteTalk}`}
              label="Rather talk?"
              value="Book a 30-minute call"
              detail="Half an hour with a designer, on video."
              fill="orange"
              pin="yellow"
              rotate={-2}
              button={{ label: "Pick a time", href: "/book" }}
            />
            <div
              className={`${bs.paper} ${s.socials}`}
              style={{ rotate: "3deg" }}
              data-framer-name="Socials Strip"
            >
              <div
                className={bs.pin}
                style={{ ...pinStyle(131), backgroundColor: "var(--purple)" }}
                data-framer-name="Pin"
              />
              <SocialKey
                label="Instagram"
                icon="InstagramLogo"
                href="https://www.instagram.com/hasansekman"
                colour="orange"
              />
            </div>
            <PinnedNote
              className={`${s.note} ${s.noteStudio}`}
              label="Studio"
              value="82 Columbia Road, London"
              detail="Monday to Friday, 9am to 6pm. Ring the bell, the coffee’s usually on."
              fill="pink"
              pin="blue"
              rotate={-2}
            />
          </div>
        </div>

        <BoardPhoto
          className={s.larder}
          src="/f/W0AFbAhxQqTtea16VTOtUuyWw.jpg"
          caption="Larder & Co."
          rotate={7}
        />
        <BoardPhoto
          className={s.musse}
          src="/f/snMgEmRClEP2X7rxckFywACtluE.webp"
          caption="Musse Design Week"
          rotate={-6}
        />
        <BoardPhoto
          className={s.ethe}
          src="/f/TkHVYr9TNx8mrO2SHqoBtceXkvY.webp"
          caption="Ethe Ceramics"
          rotate={10}
        />
        <Sticker
          className={`${s.sticker} ${s.sayHi}`}
          label="Say hi"
          colour="orange"
          rotate={-14}
        />
        <Sticker
          className={`${s.sticker} ${s.madeIn}`}
          label="Made in London"
          colour="purple"
          oval
          rotate={9}
        />
        <motion.div
          {...dragProps}
          className={s.lump}
          style={{ rotate: 12 }}
          data-framer-name="Clay Lump"
        />
      </div>
    </section>
  );
}
