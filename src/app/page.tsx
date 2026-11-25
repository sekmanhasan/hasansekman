import Opening from "@/components/home/Opening";
import Showreel from "@/components/home/Showreel";
import WorkTurntable from "@/components/home/WorkTurntable";
import StatementLine from "@/components/home/StatementLine";
import Clients from "@/components/home/Clients";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import Process from "@/components/home/Process";
import Journal from "@/components/home/Journal";
import FAQ from "@/components/home/FAQ";
import Smooth from "@/components/fx/Smooth";

export default function Home() {
  return (
    <main className="page-main" data-framer-name="Main">
      <Smooth />
      <Opening />
      <Showreel />
      <WorkTurntable />
      <StatementLine />
      <Clients />
      <Services />
      <Testimonials />
      <Pricing />
      <Process />
      <Journal />
      <FAQ />
    </main>
  );
}
