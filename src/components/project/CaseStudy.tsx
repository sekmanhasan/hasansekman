"use client";

import Link from "next/link";
import GalleryLightbox from "@/components/framer/GalleryLightbox";
import RuledPaper from "@/components/framer/RuledPaper";
import Reveal from "@/components/fx/Reveal";
import SprinkleText from "@/components/fx/SprinkleText";
import Icon from "@/components/icons/Icon";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import type { ProjectDetail } from "@/data/projectDetails";
import type { Project } from "@/data/projects";
import { projectHref } from "@/data/projects";
import { bricolage } from "@/lib/fonts";
import ProjectParcel from "./ProjectParcel";
import s from "./case-study.module.css";

type Props = { project: ProjectDetail; previous?: Project; next?: Project };

export default function CaseStudy({ project: p, previous, next }: Props) {
  return (
    <>
      <section className={s.hero} data-framer-name="Section - Recipe Hero">
        <div className={s.heroContainer} data-framer-name="Container">
          <Link href="/projects" className={`${s.back} t-13`} data-framer-name="Default">
            ← Work
          </Link>
          <div className={s.titleWrapper} data-framer-name="Title Wrapper">
            <Tag label={p.tag} />
            <h1 className={`t-160 ${s.title}`}>{p.title}</h1>
          </div>
          <div className={s.heroRow} data-framer-name="Hero Row">
            <div className={s.intro} data-framer-name="Intro">
              <p className={`t-22 ${s.introText}`}>{p.intro}</p>
              <div className={s.facts} data-framer-name="Facts">
                {p.facts.map(([label, value]) => (
                  <div key={label} className={`${s.fact} card-sh`} data-framer-name="Recipe Fact">
                    <p className={`t-13 ${s.muted}`}>{label}</p>
                    <p className="t-18">{value}</p>
                  </div>
                ))}
              </div>
              {p.liveLabel && (
                <div className={s.liveLink} data-framer-name="Live Link">
                  <Button label={p.liveLabel} />
                </div>
              )}
            </div>
            <div className={s.plate} data-framer-name="Plate">
              <div className={s.rim} data-framer-name="Rim" />
              <div className={s.cover} data-framer-name="Cover">
                <img src={p.cover} alt="" />
              </div>
              {p.isNew && (
                <div className={`${s.newBadge} card-sh`} data-framer-name="New">
                  <p className="t-13">Fresh out of the studio</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={s.recipe} data-framer-name="Section - Recipe">
        <div className={s.container} data-framer-name="Container">
          <Reveal
            className={s.card}
            from={{ opacity: 0, y: 48 }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.8 }}
            amount={0.5}
            data-framer-name="Recipe Card"
          >
            <div className={s.paper}>
              <RuledPaper
                accent="var(--orange)"
                band={0}
                firstLine={64}
                lineColour="var(--sh-faint)"
                lineGap={40}
                margin={72}
                marginColour="var(--orange)"
                paper="var(--white)"
                ribbon={false}
                ribbonRight={72}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={s.pantry} data-framer-name="Pantry">
              <div className={s.ingredients} data-framer-name="Ingredients">
                <p className={`t-13 ${s.orange}`}>Ingredients</p>
                <div className={s.list} data-framer-name="List">
                  {p.ingredients.map((item) => (
                    <div key={item} className={s.item} data-framer-name="Default">
                      <span className={s.dot} data-framer-name="Dot" />
                      <p className="t-16">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              {p.approach && (
                <div className={`${s.chefNote} card-sh`} data-framer-name="Chef’s Note">
                  <h3 className="t-24">Approach</h3>
                  <p className="t-16">{p.approach}</p>
                </div>
              )}
            </div>
            <div className={s.method} data-framer-name="Method">
              <p className={`t-13 ${s.orange}`}>Method</p>
              <div className={s.rich}>
                <div className={s.body} dangerouslySetInnerHTML={{ __html: p.method }} />
                <div className={s.noteWrap} data-framer-name="Default">
                  <div className={s.note} data-framer-name="Note">
                    <h3 className="t-24">{p.quote}</h3>
                    <p className="t-13">{p.quoteBy}</p>
                    <div className={s.tapeRow} data-framer-name="Tape Row">
                      <div className={s.tape} data-framer-name="Tape" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={s.gallery} data-framer-name="Section - Gallery">
        <div className={s.galleryContainer} data-framer-name="Container">
          <div className={s.headingWrapper} data-framer-name="Heading Wrapper">
            <Tag label="Gallery" />
            <SprinkleText className={`t-96 ${s.heading}`}>The finished dish</SprinkleText>
            <p className={`t-16 ${s.heading}`}>Tap a photo to see it full size.</p>
          </div>
          <GalleryLightbox
            photos={p.gallery.map((src) => ({ src, alt: "" }))}
            accent="var(--yellow)"
            backdrop="rgba(42, 29, 23, 0.92)"
            buttonColor="var(--light)"
            caption
            columns={3}
            fontFamily={bricolage.style.fontFamily}
            gap={20}
            layout="Masonry"
            minWidth={120}
            radius={24}
            ratio="4/3"
            shadow
            textColor="var(--cream)"
            thumbnails
            tilt={1.5}
            iconColor="var(--dark)"
            style={{ width: "100%" }}
          />
        </div>
      </section>

      <section className={s.nextSection} data-framer-name="Section - Next Project">
        <div className={s.nextContainer} data-framer-name="Container">
          <div className={s.cards} data-framer-name="Cards">
            <div className={s.nextHeading} data-framer-name="Heading Wrapper">
              <Tag label="More work" />
              <SprinkleText className={`t-64 ${s.heading}`}>Keep unpacking</SprinkleText>
              <Button label="All projects" href="/projects" />
            </div>
            {previous && (
              <div className={s.previous} data-framer-name="Previous">
                <ProjectParcel {...previous} />
                <Button label="Previous project" href={projectHref(previous.slug)} variant="light" />
              </div>
            )}
            <div className={s.spacer} data-framer-name="Spacer" />
            {next && (
              <div className={s.next} data-framer-name="Next">
                <ProjectParcel {...next} variant="Large" />
                <Button label="Next project" href={projectHref(next.slug)} variant="light" />
              </div>
            )}
          </div>
          {!next && (
            <Link href="/" className={s.endLink} data-framer-name="End Link">
              <p className="t-96">That’s the lot! Back to the front page</p>
              <Icon name="ArrowUpRight" className={s.endArrow} color="var(--orange)" stroke={1.5} size={48} />
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
