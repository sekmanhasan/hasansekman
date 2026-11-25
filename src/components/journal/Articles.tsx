"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import Reveal from "@/components/fx/Reveal";
import Icon from "@/components/icons/Icon";
import { ARTICLES, articleHref, type Article, type Category } from "@/data/journal";
import NotebookCard from "./NotebookCard";
import s from "./Articles.module.css";

const CATEGORIES: Category[] = ["Branding", "Websites", "Packaging", "Process"];

function FeaturedArticle({ a }: { a: Article }) {
  return (
    <Link href={articleHref(a.slug)} className={`${s.featured} card-sh`} data-framer-name="Featured Article">
      <div className={s.featuredCopy} data-framer-name="Copy">
        <div className={`${s.badge} card-sh`} data-framer-name="Badge">
          <p className="t-13">Featured</p>
          <p className={`t-13 ${s.muted}`}>{a.category}</p>
        </div>
        <h2 className="t-64">{a.title}</h2>
        <p className="t-16">{a.excerpt}</p>
        <div className={s.footer} data-framer-name="Footer">
          <div className={`${s.read} card-sh`} data-framer-name="Read">
            <h4 className="t-18">Read it</h4>
            <Icon name="ArrowRight" size={20} color="var(--cream)" stroke={2} />
          </div>
          <p className="t-13">{a.date}</p>
        </div>
      </div>
      <div className={s.imageWrapper} data-framer-name="Image Wrapper">
        <div className={s.featuredImage} data-framer-name="Image">
          <img src={`/f/${a.cover}`} alt="" />
        </div>
      </div>
    </Link>
  );
}

export default function Articles() {
  const [category, setCategory] = useState<Category | null>(null);
  const matches = (a: Article) => category === null || a.category === category;
  const featured = ARTICLES.find((a) => a.featured && matches(a));
  const rest = ARTICLES.filter((a) => !a.featured && matches(a));

  return (
    <section className={s.section} data-framer-name="Section - Articles">
      <div className={s.container} data-framer-name="Container">
        <label className={s.filter} data-framer-name="Filter Wrapper">
          <p className="t-13">Filter by</p>
          <div className={s.select} data-framer-name="Category Select">
            <select name="category" value={category ?? "__all__"} onChange={(e) => setCategory(e.target.value === "__all__" ? null : (e.target.value as Category))}>
              <option value="__all__">All</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </label>
        <div className={s.featuredWrap} data-framer-name="Featured">
          {featured && <FeaturedArticle a={featured} />}
        </div>
        <div className={s.grid} data-framer-name="Article Grid">
          {rest.map((a, i) => (
            <Reveal
              key={a.slug}
              from={{ opacity: 0, scale: 0.94, y: 40 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.8, delay: i * 0.06 }}
              amount={0.5}
              className={s.cell}
            >
              <motion.div
                className={s.cellInner}
                whileHover={{ rotate: -0.6, scale: 1.1, y: -8 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.45 }}
              >
                <NotebookCard a={a} />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
