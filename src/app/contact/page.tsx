import type { Metadata } from "next";
import ContactBoard from "@/components/contact/ContactBoard";
import NextSteps from "@/components/contact/NextSteps";
import Smooth from "@/components/fx/Smooth";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main className="page-main" data-framer-name="Main">
      <Smooth />
      <ContactBoard />
      <NextSteps />
    </main>
  );
}
