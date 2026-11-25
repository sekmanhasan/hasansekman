import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import BriefDesk from "@/components/about/BriefDesk";
import Honours from "@/components/about/Honours";
import Join from "@/components/about/Join";
import Story from "@/components/about/Story";
import Studio from "@/components/about/Studio";
import Team from "@/components/about/Team";
import Smooth from "@/components/fx/Smooth";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main className="page-main" data-framer-name="Main">
      <Smooth />
      <AboutHero />
      <Story />
      <Honours />
      <Studio />
      <Team />
      <Join />
      <BriefDesk />
    </main>
  );
}
