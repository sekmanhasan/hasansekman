import type { Metadata } from "next";
import BookBoard from "@/components/book/BookBoard";
import Smooth from "@/components/fx/Smooth";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Pick a time for a 30-minute video call with one of our designers.",
};

export default function Book() {
  return (
    <main className="page-main" data-framer-name="Main">
      <Smooth />
      <PageHero
        name="Section - Book Hero"
        title="Pick a time."
        tag="30-minute call"
        tapeColour="orange"
        intro="A video call with a designer, not a salesperson. Bring the idea, a rough budget and your questions, and you’ll leave with an honest next step, even if it isn’t us."
        link={{ label: "Rather write? Leave a note", href: "/contact" }}
      />
      <BookBoard />
    </main>
  );
}
