import type { Metadata } from "next";
import DrawHomeSection from "@/components/notfound/DrawHomeSection";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="page-main" data-framer-name="Main">
      <DrawHomeSection />
    </main>
  );
}
