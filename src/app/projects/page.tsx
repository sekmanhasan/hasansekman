import type { Metadata } from "next";
import Smooth from "@/components/fx/Smooth";
import PageHero from "@/components/layout/PageHero";
import Wall from "@/components/projects/Wall";

export const metadata: Metadata = {
  title: "Work",
  description: "Identities, packaging, campaigns and websites we have made for shops, studios, labels and festivals.",
};

export default function Work() {
  return (
    <main className="page-main" data-framer-name="Main">
      <Smooth />
      <PageHero
        name="Section - Work Hero"
        title="Work"
        tag="Case studies"
        tapeColour="orange"
        intro="Identities, packaging, campaigns and websites for shops, studios, labels and festivals. Open a project for the brief, how we approached it and the full gallery."
      />
      <Wall />
    </main>
  );
}
