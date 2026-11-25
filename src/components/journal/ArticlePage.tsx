"use client";

import Link from "next/link";
import { motion } from "motion/react";
import RuledPaper from "@/components/framer/RuledPaper";
import SprinkleText from "@/components/fx/SprinkleText";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { CATEGORY_COLOUR, type Article } from "@/data/journal";
import NotebookCard from "./NotebookCard";
import s from "./ArticlePage.module.css";

export default function ArticlePage({ article, html, more }: { article: Article; html: string; more: Article[] }) {
  return (
    <>
      <section className={s.section} data-framer-name="Section - Article">
        <div className={s.container} data-framer-name="Container">
          <article className={s.page} data-framer-name="Page">
            <div className={s.paper} data-framer-name="Paper">
              <RuledPaper
                accent={`var(--${CATEGORY_COLOUR[article.category]})`}
                band={12}
                firstLine={37}
                lineColour="var(--blue)"
                lineGap={36}
                margin={64}
                marginColour="var(--orange)"
                paper="var(--light)"
                ribbon
                ribbonRight={72}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <Link href="/journal" className={s.back} data-framer-name="Back">
              <p className="t-13">← Journal</p>
            </Link>
            <div className={s.header} data-framer-name="Header Wrapper">
              <div className={s.meta} data-framer-name="Meta Wrapper">
                <Tag label={article.category} />
                <time className="t-13">{article.date}</time>
              </div>
              <h1 className={`t-64 ${s.title}`}>{article.title}</h1>
              <p className={`t-22 ${s.intro}`}>{article.excerpt}</p>
            </div>
            <div className={s.photo} data-framer-name="Photo">
              <div className={s.cover} data-framer-name="Cover">
                <img src={`/f/${article.cover}`} alt="" />
              </div>
              <div className={`${s.tape} ${s.tapeL}`} data-framer-name="Tape" />
              <div className={`${s.tape} ${s.tapeR}`} data-framer-name="Tape" />
            </div>
            <div className={s.body} dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </div>
      </section>
      <section className={s.more} data-framer-name="Section - More Articles">
        <div className={s.moreContainer} data-framer-name="Container">
          <div className={s.moreHeading} data-framer-name="Heading Wrapper">
            <div className={s.titleWrapper} data-framer-name="Title Wrapper">
              <Tag label="Keep reading" />
              <SprinkleText className="t-96">More from the journal</SprinkleText>
            </div>
            <Button label="All articles" href="/journal" />
          </div>
          <div className={s.list} data-framer-name="Article List">
            {more.map((a) => (
              <motion.div
                key={a.slug}
                className={s.item}
                whileHover={{ rotate: -0.6, scale: 1.1, y: -8 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.45 }}
                data-framer-name="Item"
              >
                <NotebookCard a={a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
