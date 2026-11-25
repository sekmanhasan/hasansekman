export type Project = {
  slug: string;
  title: string;
  meta: string;
  cover: string;
  shape: "Portrait" | "Square" | "Landscape";
  frame: string;
  isNew?: boolean;
};

export const PROJECTS: Project[] = [
  { slug: "nettle-and-bloom", frame: "pink", title: "Nettle & Bloom", meta: "Identity · Packaging · 2024", cover: "/f/kKiqx6lyGPrLyDGBQKW5vDCPk.jpg", shape: "Portrait" },
  { slug: "fomo-collection-launch", frame: "purple", title: "Fomo Collection Launch", meta: "Campaign · Art direction · 2026", cover: "/f/OWOZFLnmpTlZ5LkDbP9K6iQA.webp", shape: "Landscape", isNew: true },
  { slug: "musse-design-week", frame: "orange", title: "Musse Design Week", meta: "Identity · Print · 2026", cover: "/f/snMgEmRClEP2X7rxckFywACtluE.webp", shape: "Square", isNew: true },
  { slug: "ethe-ceramics", frame: "beige", title: "Ethe Ceramics", meta: "Packaging · Identity · 2025", cover: "/f/TkHVYr9TNx8mrO2SHqoBtceXkvY.webp", shape: "Square" },
  { slug: "larder-and-co", frame: "yellow", title: "Larder & Co.", meta: "Packaging · Illustration · 2025", cover: "/f/W0AFbAhxQqTtea16VTOtUuyWw.jpg", shape: "Portrait" },
  { slug: "bramble-flower-studio", frame: "pink", title: "Bramble Flower Studio", meta: "Identity · Stationery · 2025", cover: "/f/LivKO5OOSECHotjtPokzjfWOic.jpg", shape: "Landscape" },
  { slug: "slow-burn-candles", frame: "blue", title: "Slow Burn Candles", meta: "Packaging · Retail display · 2025", cover: "/f/BjHRTXwUTltzEKXC5HgFBvhdA3Q.jpg", shape: "Square" },
  { slug: "loudhouse-records", frame: "yellow", title: "Loudhouse Records", meta: "Website · App · 2026", cover: "/f/0ySIY8S9HAYoW6g1vHCMranalE.jpg", shape: "Landscape" },
  { slug: "the-yard-workspace", frame: "purple", title: "The Yard Workspace", meta: "Signage · Wayfinding · 2024", cover: "/f/bEw5JNa5ApCNZu8dXWqC6nT4.jpg", shape: "Portrait" },
];

export const projectHref = (slug: string) => `/projects/${slug}`;
