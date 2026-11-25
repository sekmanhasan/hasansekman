import type { Project } from "./projects";

export type ProjectDetail = {
  slug: string;
  tag: string;
  title: string;
  intro: string;
  facts: [label: string, value: string][];
  cover: string;
  liveLabel: string | null;
  isNew: boolean;
  ingredients: string[];
  approach: string;
  /** Rich text: h2, h3, p, ol and strong. */
  method: string;
  quote: string;
  quoteBy: string;
  gallery: string[];
  seoTitle: string;
  seoDescription: string;
};

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    slug: "nettle-and-bloom",
    tag: "Brand identity",
    title: "Nettle & Bloom",
    intro:
      "An identity and packaging for a herbal skincare brand that grows half its ingredients in a walled garden.",
    facts: [
      ["Client", "Nettle & Bloom"],
      ["Service", "Brand identity"],
      ["Year", "2024"],
    ],
    cover: "/f/kKiqx6lyGPrLyDGBQKW5vDCPk.jpg",
    liveLabel: "View case study",
    isNew: false,
    ingredients: ["Brand identity", "Packaging", "Print"],
    approach:
      "We kept the bottles dark and plain with a small oval label, and let the lookbook, cards and envelopes carry the colour and the story.",
    method:
      "<h2>From the garden to the shelf</h2><p>Nettle &amp; Bloom grows nettles, calendula and rosemary in a walled garden and turns them into oils and balms. The products sold well in local shops. The brand was a hand-drawn leaf.</p><h3>The problem</h3><p>Herbal brands all reach for the same things: green, a leaf, a script font. Nettle &amp; Bloom needed to look like it knew what it was doing without losing the garden.</p><h3>The process</h3><p>We split the job in two.</p><ol><li><p><strong>Quiet bottles.</strong> Dark glass and a small oval label, so the product looks serious on a bathroom shelf.</p></li><li><p><strong>Loud paper.</strong> The lookbook, cards and envelopes carry the colour, the garden photos and the stories.</p></li><li><p><strong>Pressed, not drawn.</strong> The leaf pattern is printed from real leaves pressed into clay.</p></li></ol><h3>The result</h3><p>The range launched online with a printed lookbook in every first order.</p><p>The hand cream still sells in threes.</p>",
    quote:
      "“We wanted to look serious without losing the garden. The dark bottles did the first part, the pressed leaves did the second.”",
    quoteBy: "Mia Chen, founder of Nettle & Bloom",
    gallery: [
      "/f/kKiqx6lyGPrLyDGBQKW5vDCPk.jpg",
      "/f/ft4Ogq6Lr2njsnnddMtmjv8Q4OA.jpg",
      "/f/py0vITB1AYjLONY9CyToCI35d0.jpg",
      "/f/TQJrkF8GBoswY5tza85omwTlWg.jpg",
      "/f/WqZSOhWt6dxwTHnfenPqewbqyw.jpg",
      "/f/MJsJa0yqu7HNxnKpT3fez4mDE.jpg",
    ],
    seoTitle: "Nettle & Bloom skincare identity",
    seoDescription:
      "An identity, dark-glass packaging and printed lookbook for Nettle & Bloom, a herbal skincare brand grown in a walled garden.",
  },
  {
    slug: "ethe-ceramics",
    tag: "Packaging & identity",
    title: "Ethe Ceramics",
    intro:
      "A quiet label and gift box for a pottery studio whose mugs are already loud enough on their own.",
    facts: [
      ["Client", "Ethe"],
      ["Service", "Packaging & identity"],
      ["Year", "2025"],
    ],
    cover: "/f/TkHVYr9TNx8mrO2SHqoBtceXkvY.webp",
    liveLabel: null,
    isNew: false,
    ingredients: ["Packaging", "Brand identity", "Photography"],
    approach:
      "We left the mugs bare and put the brand on a small round stamped label and a kraft gift box that also does the shipping.",
    method:
      "<h2>Let the clay do the talking</h2><p>Ethe throws every mug by hand, and no two glazes come out the same. They asked us for a brand that would get out of the way.</p><h3>The problem</h3><p>Their first labels were big, glossy and printed in five colours. Next to a matte stoneware mug they looked like price tags.</p><h3>The process</h3><p>We worked from the mug outwards.</p><ol><li><p><strong>Start with the glaze.</strong> We matched the label paper to the unglazed foot of the mug.</p></li><li><p><strong>One round stamp.</strong> The mark is a circle with the name inside, small enough to sit on the side of a cup.</p></li><li><p><strong>A box that does two jobs.</strong> The gift box is also the shipping box, so nothing gets thrown away on arrival.</p></li></ol><h3>The result</h3><p>The mugs now go out in a plain kraft box with a single round label, and the online shop sells out the way the market stall does.</p><p>We shot the product photos too, in the studio’s own window light.</p>",
    quote:
      "“They understood the mugs should do the talking. The box only has to get them there in one piece, and it does.”",
    quoteBy: "Clara Nunes, founder of Ethe",
    gallery: [
      "/f/TkHVYr9TNx8mrO2SHqoBtceXkvY.webp",
      "/f/ACoqHdaoRI1C3jirPcMG45mKTjw.webp",
      "/f/Klecux34n09aAtanRHoJcYLlgM.webp",
      "/f/bexDowaMnEROyl3hSRBEHXQJwEw.webp",
      "/f/mCDmBIvW7I18Sdd66dCj5zyvC4.webp",
      "/f/czB0iCBSWjBsUVokN5PobN6rMYc.webp",
    ],
    seoTitle: "Ethe Ceramics packaging and identity",
    seoDescription:
      "A round stamped label and kraft gift box for Ethe, a two-person pottery studio making stoneware mugs by hand.",
  },
  {
    slug: "slow-burn-candles",
    tag: "Packaging",
    title: "Slow Burn Candles",
    intro:
      "Gift boxes for a candle maker whose candles take two days to set, so the boxes had to look worth the wait.",
    facts: [
      ["Client", "Slow Burn"],
      ["Service", "Packaging"],
      ["Year", "2025"],
    ],
    cover: "/f/BjHRTXwUTltzEKXC5HgFBvhdA3Q.jpg",
    liveLabel: null,
    isNew: false,
    ingredients: ["Packaging", "Brand identity", "Retail display"],
    approach:
      "We gave every scent its own colour and a square box that stacks into a wall, with the candle sitting in a lilac tray inside.",
    method:
      "<h2>A box worth keeping</h2><p>Slow Burn’s candles are poured by hand and cure for two days before they are ready. The packaging was a plain white box with a sticker.</p><h3>The problem</h3><p>In a shop, white boxes disappear. The candles sold to people who already knew them, but nobody new was picking them up.</p><h3>The process</h3><p>We designed for the shop window first.</p><ol><li><p><strong>A colour per hour.</strong> Morning is orange, dusk is lilac, midnight is green.</p></li><li><p><strong>Built to stack.</strong> Square boxes, so a shop can build a whole wall of them in the window.</p></li><li><p><strong>Open it twice.</strong> The lid lifts to show the candle in a tray, and the tray works as a dish afterwards.</p></li></ol><h3>The result</h3><p>The new boxes went into four shops in the first month.</p><p>One of them built a window out of nothing but orange boxes and sold out of the morning scent in a week.</p>",
    quote:
      "“A shop built a whole window out of our boxes without being asked. That told me everything.”",
    quoteBy: "Sam Reyes, founder of Slow Burn",
    gallery: [
      "/f/BjHRTXwUTltzEKXC5HgFBvhdA3Q.jpg",
      "/f/KmaLK9UPvGSfbfTwJ2eigaH0Dk.jpg",
      "/f/swa7gDUfpBuC7XXQzJmQuoaaeDM.jpg",
      "/f/gAHtAlIwfN0rRojVz25PGgHs04.jpg",
      "/f/UNqCfSzrsGAmAqc2qCJfGNeyf3M.jpg",
      "/f/1X71Bknner4AWWenLD3Y7b0t4g.jpg",
    ],
    seoTitle: "Slow Burn Candles packaging",
    seoDescription:
      "Square, colour-coded gift boxes for a small-batch candle maker, built to stack into a shop window.",
  },
  {
    slug: "fomo-collection-launch",
    tag: "Campaign",
    title: "Fomo Collection Launch",
    intro:
      "A launch campaign for a streetwear drop that only lasted two days, so every poster had to work in three seconds.",
    facts: [
      ["Client", "Fomo"],
      ["Service", "Campaign"],
      ["Year", "2026"],
    ],
    cover: "/f/OWOZFLnmpTlZ5LkDbP9K6iQA.webp",
    liveLabel: "View Live Site",
    isNew: true,
    ingredients: ["Campaign", "Art direction", "Motion"],
    approach:
      "We built the campaign on one huge word and a date, then ran it on billboards, airport lightboxes, a subway wall and the screen at the launch party.",
    method:
      "<h2>Two days to make a city look up</h2><p>Fomo’s collections sell out fast, which is good news for the label and bad news for anyone who hears about them late. For the 21-07 drop they wanted a campaign people would see, remember and photograph within a single weekend.</p><h3>The problem</h3><p>A billboard gets about three seconds of attention, and the label had a lot to say: the date, the pieces, the pop-up address. Something had to give.</p><h3>The process</h3><p>We cut the message down until it fitted on the side of a bus.</p><ol><li><p><strong>One word, one date.</strong> FOMO and 21-07, nothing else at first glance.</p></li><li><p><strong>A soft glow.</strong> A blurred gradient that looks lit even on paper, so the posters and the lightboxes read as one campaign.</p></li><li><p><strong>Test at walking pace.</strong> We stuck paper versions up on the studio stairs and asked people what they remembered on the way up.</p></li></ol><h3>The result</h3><p>The posters went up on Thursday and the queue started on Friday night.</p><p>The launch screen ran the same glow in motion, and the photos people took of the billboard did the rest.</p>",
    quote:
      "“One word and a date. I didn’t believe it would be enough until I saw the queue on Friday night.”",
    quoteBy: "Ana Ribeiro, head of brand at Fomo",
    gallery: [
      "/f/OWOZFLnmpTlZ5LkDbP9K6iQA.webp",
      "/f/r2VKz8R9E6Ks2A9Y1iz4rqX52U.webp",
      "/f/eIzIRgCqHxsjquk4D14CVrzLo.webp",
      "/f/D6Sp8Lg2ULPOW8xSi2Z4lJMMus.webp",
      "/f/un9wVPDMax3qOw54LGpJ8H5BNo.webp",
    ],
    seoTitle: "Fomo streetwear launch campaign",
    seoDescription:
      "A billboard, lightbox and launch-screen campaign for a streetwear drop that sold out in a weekend.",
  },
  {
    slug: "larder-and-co",
    tag: "Packaging",
    title: "Larder & Co.",
    intro:
      "A packaging range for a farm shop’s own-label food, from tinned tomatoes to yoghurt, that looks like one family on the shelf.",
    facts: [
      ["Client", "Larder & Co."],
      ["Service", "Packaging"],
      ["Year", "2025"],
    ],
    cover: "/f/W0AFbAhxQqTtea16VTOtUuyWw.jpg",
    liveLabel: null,
    isNew: false,
    ingredients: ["Packaging", "Illustration", "Brand identity"],
    approach:
      "We built one patterned system in bright colours, one colour per product family, so the range looks related from across the shop and each tin is easy to find.",
    method:
      "<h2>Thirty products, one family</h2><p>Larder &amp; Co. sells its own food next to local produce: tinned tomatoes, yoghurt cups, drinking yoghurt and granola. The food was great. The labels were all different.</p><h3>The problem</h3><p>Each product had been designed the week it launched, so the range looked like thirty small brands. Customers didn’t realise the yoghurt and the tomatoes came from the same kitchen.</p><h3>The process</h3><p>We started with the shelf, not the logo.</p><ol><li><p><strong>Colour by family.</strong> Dairy is pink and purple, tins are green and orange, dry goods are kraft.</p></li><li><p><strong>Patterns in clay.</strong> We pressed each pattern into plasticine and scanned it, so the lines wobble like they were made by hand.</p></li><li><p><strong>One layout everywhere.</strong> Name, pattern and one line of copy, on a tin or on a yoghurt lid.</p></li></ol><h3>The result</h3><p>The range now reads as one family from across the shop, and a new product takes a day to design instead of a week.</p><p>The farm shop has since started selling its tins to other delis.</p>",
    quote:
      "“We used to dread new products. Now a new tin is a day’s work and it already looks like it belongs.”",
    quoteBy: "Priya Shah, co-owner of Larder & Co.",
    gallery: [
      "/f/W0AFbAhxQqTtea16VTOtUuyWw.jpg",
      "/f/nB0F89BDhu5QrnmHEvmYzgRAk.jpg",
      "/f/q4ME24DOKJBHGPAPqx7GMTDhIY.jpg",
      "/f/oxsOp3Z8N88R9QDOaFRWlahL8JA.jpg",
      "/f/moUA4NBgk53sHy8QNuD4rVgpPB4.webp",
      "/f/GxntcysCfx3dpLo0vp6lM2ofXHM.jpg",
    ],
    seoTitle: "Larder & Co. packaging range",
    seoDescription:
      "How we turned a farm shop’s thirty own-label products into one bright, patterned packaging family.",
  },
  {
    slug: "loudhouse-records",
    tag: "Website & app",
    title: "Loudhouse Records",
    intro:
      "A website and listening app for an independent record label, designed to feel like flicking through a crate in a shop.",
    facts: [
      ["Client", "Loudhouse"],
      ["Service", "Website & app"],
      ["Year", "2026"],
    ],
    cover: "/f/0ySIY8S9HAYoW6g1vHCMranalE.jpg",
    liveLabel: "View case study",
    isNew: false,
    ingredients: ["Web design", "App design", "Art direction"],
    approach:
      "We designed the website and app around big, bold covers you flip through, with one-tap listening and a weekly pick from the people who run the label.",
    method:
      "<h2>A record shop in your pocket</h2><p>Loudhouse has been releasing records since the eighties and still runs a shop on the ground floor of its studio. They wanted the website and app to feel like the shop: a bit chaotic and very personal.</p><h3>The problem</h3><p>The old site was a list. Every record had the same small thumbnail and the same grey text, so the classics and the new releases looked identical.</p><h3>The process</h3><p>We started by watching people in the shop.</p><ol><li><p><strong>Flip, don’t scroll.</strong> Covers fill the screen and you flip through them like a crate.</p></li><li><p><strong>A person behind every pick.</strong> Each week someone at the label picks a record and writes two lines about it.</p></li><li><p><strong>One tap to listen.</strong> Every cover plays a track the moment you open it.</p></li></ol><h3>The result</h3><p>People now spend twice as long on the site, and the weekly pick has become the label’s most-read email.</p><p>The shop staff use the app behind the counter too.</p>",
    quote:
      "“The app feels like the shop on a good Saturday. Our staff use it behind the counter now.”",
    quoteBy: "Jonah Reid, owner of Loudhouse",
    gallery: [
      "/f/0ySIY8S9HAYoW6g1vHCMranalE.jpg",
      "/f/O2TUiuRbt8GnSaO6wdjut9WLfs.jpg",
      "/f/jEGngM4K6sIeQEO55JOhcy4sQ4.jpg",
      "/f/H2pFnanBrjAos4OhLvhxw2R044.jpg",
      "/f/DFbF7BV55bmmk40LmF40yYflvb8.jpg",
      "/f/EZNsTwMdDoy588lutgw2jpxoDY.jpg",
    ],
    seoTitle: "Loudhouse Records website and app",
    seoDescription:
      "A website and listening app for an independent record label, built around big covers you flip through like a crate.",
  },
  {
    slug: "musse-design-week",
    tag: "Event identity",
    title: "Musse Design Week",
    intro:
      "A loud red identity for a week-long design festival, built to work on a flag across the street and on a notebook in your hand.",
    facts: [
      ["Client", "Musse"],
      ["Service", "Event identity"],
      ["Year", "2026"],
    ],
    cover: "/f/snMgEmRClEP2X7rxckFywACtluE.webp",
    liveLabel: "View case study",
    isNew: true,
    ingredients: ["Brand identity", "Event design", "Print"],
    approach:
      "We drew a stretchy wordmark that fills whatever it lands on, kept it to one red and one black, and printed it on flags, tees, notebooks and a guidelines book the volunteers actually read.",
    method:
      "<h2>A festival with nothing but a name</h2><p>Musse brings together forty studios for one week every spring: open doors, talks and late shows. The organisers came to us four months before the first edition with a date, a list of venues and no visual identity at all.</p><h3>The problem</h3><p>A festival lives in a lot of places at once: flags on lampposts, lanyards, tote bags, a programme, a website. Most of it would be made by volunteers, in a hurry, on whatever printer was nearby.</p><h3>The process</h3><p>We gave ourselves one rule: it has to survive a bad printer.</p><ol><li><p><strong>Clay first.</strong> We pressed the letters out of red plasticine to find a shape that still reads when it gets squashed.</p></li><li><p><strong>One colour, one black.</strong> Red does the shouting; black holds the programme.</p></li><li><p><strong>A book, not a PDF.</strong> The guidelines became a pocket book with every rule on one page.</p></li></ol><h3>The result</h3><p>The wordmark stretches to fill any shape, from a flag to a sticker, and the volunteers made over 300 pieces without asking us a single question.</p><p>That is the best review a design system can get.</p>",
    quote:
      "“Our volunteers made 300 pieces from the guidelines book and never once called the studio. That has never happened before.”",
    quoteBy: "Tom Okafor, festival director at Musse",
    gallery: [
      "/f/snMgEmRClEP2X7rxckFywACtluE.webp",
      "/f/DgFZF1Stp9Sz8x9sRxAUBvkN44.webp",
      "/f/Cr8UBTlv6QRGCjzZEdUtQ3Soto.webp",
      "/f/dk5lXXM17SxYZ0CyTtvR5HYpN10.webp",
      "/f/trNtoU7x0BsOccFTmuRwTGgsfo.webp",
      "/f/n8uh345b18DqdURtnBGAPLyD5k.webp",
    ],
    seoTitle: "Musse Design Week identity",
    seoDescription:
      "How we built a stretchy red identity for a design festival, from flags and tees to a pocket-sized guidelines book.",
  },
  {
    slug: "bramble-flower-studio",
    tag: "Brand identity",
    title: "Bramble Flower Studio",
    intro:
      "An identity for a flower studio that wraps its bouquets in more colour than most florists put in the flowers.",
    facts: [
      ["Client", "Bramble"],
      ["Service", "Brand identity"],
      ["Year", "2025"],
    ],
    cover: "/f/LivKO5OOSECHotjtPokzjfWOic.jpg",
    liveLabel: "Live website",
    isNew: false,
    ingredients: ["Brand identity", "Stationery", "Packaging"],
    approach:
      "We built a palette of four strong colours, an arched mark taken from the shop window, and a kit of stickers, tags, envelopes, folders and bags that can be mixed in any order.",
    method:
      "<h2>Wrapping as loud as the flowers</h2><p>Bramble’s bouquets are known for their wrapping: three papers, a ribbon and a handwritten tag. The owner asked us to turn that habit into an identity.</p><h3>The problem</h3><p>Florist brands tend to go soft: pastel pink, a script font, a single rose. Bramble is none of those things, and the old cream stationery made her look like everyone else on the high street.</p><h3>The process</h3><p>We designed a kit rather than a logo.</p><ol><li><p><strong>Four colours, no favourites.</strong> Orange, green, purple and pink, used in any combination.</p></li><li><p><strong>An arch for a mark.</strong> The shape of the shop’s front window, simple enough to cut out of card.</p></li><li><p><strong>Paper first.</strong> Every piece was mocked up in real paper on the studio table before we drew it on screen.</p></li></ol><h3>The result</h3><p>Every order now goes out in a different mix of the same kit: envelopes, tags, folders and bags.</p><p>No two look the same, and all of them look like Bramble.</p>",
    quote:
      "“I can wrap an order from the kit in two minutes, and every one still looks like us.”",
    quoteBy: "Isla Morgan, founder of Bramble",
    gallery: [
      "/f/LivKO5OOSECHotjtPokzjfWOic.jpg",
      "/f/MZGtw8i6THvdsSzoF2CRbcuQMw.jpg",
      "/f/IptMthw7dhFj0n7v0lWli1GYBJU.jpg",
      "/f/mHqFTGN9ISvBwX8bKJ68L6vuNRs.jpg",
      "/f/efSagICS75LYNNxrGCqtwbAcRTM.jpg",
      "/f/aGfVjJVNLtFcXrcSQaAjTWtfY.jpg",
    ],
    seoTitle: "Bramble Flower Studio identity",
    seoDescription:
      "A colourful identity kit for a flower studio: an arched mark, four strong colours and stationery that mixes in any order.",
  },
  {
    slug: "the-yard-workspace",
    tag: "Signage & wayfinding",
    title: "The Yard Workspace",
    intro:
      "Signs and wayfinding for a co-working space in an old print works, where every corridor looked the same.",
    facts: [
      ["Client", "The Yard"],
      ["Service", "Signage & wayfinding"],
      ["Year", "2024"],
    ],
    cover: "/f/bEw5JNa5ApCNZu8dXWqC6nT4.jpg",
    liveLabel: "View case study",
    isNew: false,
    ingredients: ["Signage", "Wayfinding", "Brand identity"],
    approach:
      "We gave every room a letter and a word, set them big on black, and carried the same system out onto the street with sandwich boards and a hanging sign.",
    method:
      "<h2>Nobody should end up in the boiler room</h2><p>The Yard moved into an old print works and kept its brick walls, steel stairs and long corridors. The building was beautiful. It was also very easy to get lost in.</p><h3>The problem</h3><p>Rooms went by nicknames only the founders understood, and the signs were office paper taped to doors.</p><h3>The process</h3><p>We walked the building with new members and wrote down every wrong turn.</p><ol><li><p><strong>A letter and a word.</strong> Every space gets one of each: A for the conference room, B for the library, C for the office.</p></li><li><p><strong>Big on black.</strong> White type on black panels, readable from the far end of a corridor.</p></li><li><p><strong>Out onto the street.</strong> The same signs, as sandwich boards and a hanging sign, bring people in from the pavement.</p></li></ol><h3>The result</h3><p>New members now find the café on their first day, and the sandwich boards double as a noticeboard for events.</p><p>The founders say the boiler room has been very quiet.</p>",
    quote:
      "“New members stopped knocking on the boiler room door looking for the café. That alone was worth it.”",
    quoteBy: "Dev Patel, community manager at The Yard",
    gallery: [
      "/f/bEw5JNa5ApCNZu8dXWqC6nT4.jpg",
      "/f/JOg4igdvrmiFcv5B5FSzwKKHfvQ.jpg",
      "/f/prSibwDoZAb0GNLSbJlI9OnvT0.jpg",
      "/f/dLlkhWHnGZNtL5LLXEG1AEheco.jpg",
      "/f/J6Qa8PBhhxKwU9CxbEgTtpArM.jpg",
      "/f/O2wv0XOVmlpM6w0Rm28TBWmG0c.jpg",
    ],
    seoTitle: "The Yard Workspace signage and wayfinding",
    seoDescription:
      "A letter-and-word wayfinding system for a co-working space in an old print works, from room signs to sandwich boards.",
  },
];

export const projectDetail = (slug: string) =>
  PROJECT_DETAILS.find((p) => p.slug === slug);

/** Previous and next case study, in the order of the Work wall. */
export function neighbours(slug: string, all: Project[]) {
  const i = all.findIndex((p) => p.slug === slug);
  return { previous: all[i - 1], next: all[i + 1] };
}
