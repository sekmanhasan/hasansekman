import type { Metadata } from "next";
import Smooth from "@/components/fx/Smooth";
import Articles from "@/components/journal/Articles";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes, tips and behind-the-scenes stories from a small studio that likes making things properly.",
};

export default function Journal() {
  return (
    <main className="page-main" data-framer-name="Main">
      <Smooth />
      <PageHero
        name="Section - Journal Hero"
        title="Journal"
        tag="Studio journal"
        tapeColour="yellow"
        darkLetters
        intro="Notes, tips and behind-the-scenes stories from a small studio that likes making things properly."
      />
      <Articles />
    </main>
  );
}
