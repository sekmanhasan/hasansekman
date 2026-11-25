export type Category = "Branding" | "Websites" | "Packaging" | "Process";

export type Article = {
  slug: string;
  title: string;
  category: Category;
  date: string;
  excerpt: string;
  cover: string;
  featured?: boolean;
};

export const CATEGORY_COLOUR: Record<Category, string> = {
  Branding: "orange",
  Websites: "pink",
  Packaging: "yellow",
  Process: "purple",
};

export const ARTICLES: Article[] = [
  { slug: "why-your-logo-doesnt-need-to-explain-everything", title: "Why your logo doesn’t need to explain everything", category: "Branding", date: "Sep 18, 2026", excerpt: "The best logos are a little mysterious. Here’s why we talk clients out of cramming the whole business into one tiny mark.", cover: "EWT3ZFWxmKAvVZIHMjynAfGwlA.webp", featured: true },
  { slug: "our-favourite-framer-tricks-for-small-business-sites", title: "Our favourite Framer tricks for small business sites", category: "Websites", date: "Sep 4, 2026", excerpt: "Five little things that make a Framer site feel hand-made, from CMS-powered menus to scroll effects that don’t make anyone seasick.", cover: "V2NeiMLe5OszH8D19JOABOkzyQ.webp" },
  { slug: "packaging-people-keep-on-the-shelf", title: "Packaging people keep on the shelf", category: "Packaging", date: "Aug 21, 2026", excerpt: "The secret to packaging that never makes it to the recycling bin, plus a few boxes we’re still secretly proud of.", cover: "98NbEG6bYUj7gWiQ2fQxpD8K5Y.jpg" },
  { slug: "what-a-brand-sprint-actually-looks-like", title: "What a brand sprint actually looks like", category: "Process", date: "Aug 7, 2026", excerpt: "Two days, one big wall, a lot of sticky notes and exactly the right number of biscuits. A peek behind the curtain.", cover: "VezO3MB6Xjepjo92AktxGAp4JU.webp" },
  { slug: "naming-your-business-without-losing-your-mind", title: "Naming your business without losing your mind", category: "Branding", date: "Jul 24, 2026", excerpt: "A friendly, step-by-step way to find a name you’ll still like in ten years, even if every good domain seems taken.", cover: "bXISDH08TUEyPKL8NSowtviX3NE.webp" },
  { slug: "the-case-for-a-slower-launch", title: "The case for a slower launch", category: "Process", date: "Jul 10, 2026", excerpt: "Why we sometimes suggest launching quietly first, and how a soft opening can make the big day a lot less scary.", cover: "DhtNzC4oXOjnA5b4JpbUftB0.webp" },
  { slug: "how-many-colours-does-a-brand-really-need", title: "How many colours does a brand really need?", category: "Branding", date: "Jun 26, 2026", excerpt: "Most small brands need three colours, not nine. Here’s how to choose them, when to add more and a squint test that settles arguments.", cover: "7TdYWcwx1JGZQbsQkRaWk9Hk.jpg" },
  { slug: "what-to-put-on-your-homepage", title: "What to put on your homepage, and what to leave off", category: "Websites", date: "Jun 12, 2026", excerpt: "A homepage has five seconds to answer three questions. What to keep, what to cut and a quick test to run on yours.", cover: "Sd5gmbEthl21n5p6aVEivQGQBs.jpg" },
  { slug: "your-about-page-is-not-about-you", title: "Your About page is not about you", category: "Websites", date: "May 29, 2026", excerpt: "Nobody reads an About page to learn about you. They read it to decide whether to trust you. Here’s how to help them.", cover: "rfIR33fHCEMw9OCm6JiOjZu3wd4.jpg" },
  { slug: "what-a-good-unboxing-feels-like", title: "What a good unboxing feels like", category: "Packaging", date: "May 15, 2026", excerpt: "The best ten seconds of buying online happen before the product appears. How to plan the outside, the reveal and the keepsake.", cover: "smNr6r6m1sShmz60jWbNy85LVUY.jpg" },
  { slug: "lovely-packaging-on-a-small-budget", title: "Lovely packaging on a small budget", category: "Packaging", date: "May 1, 2026", excerpt: "Custom boxes need big orders. A rubber stamp, a roll of stickers and a paper band can do the same job for pennies.", cover: "342u437WshEeDKnpnidnCzTvDo.jpg" },
  { slug: "how-to-give-feedback-your-designer-can-use", title: "How to give feedback your designer can use", category: "Process", date: "Apr 17, 2026", excerpt: "“Make it pop” helps nobody. Four simple habits that turn vague reactions into notes a designer can act on the same day.", cover: "MJraEhNrhcwnFHw1fYSnNEO9I.jpg" },
];

export const articleHref = (slug: string) => `/journal/${slug}`;
