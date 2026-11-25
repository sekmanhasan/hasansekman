import type { Metadata } from "next";
import { bagel, bricolage } from "@/lib/fonts";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SiteChrome from "@/components/layout/SiteChrome";
import "./tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "hasansekman",
  description: "A small, cheerful design studio making brands, websites and packaging that feel like a lazy Sunday morning.",
  icons: { icon: "/f/fB9ovjuFEKWqS5S6gkOgeQmdTM.png" },
  openGraph: { images: ["/f/VKl5hzGRqpBto84m23rBeGkS6DY.jpg"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bagel.variable} ${bricolage.variable}`}>
      <body>
        <div id="top" className="site">
          <Navigation />
          {children}
          <Footer />
        </div>
        <SiteChrome />
      </body>
    </html>
  );
}
