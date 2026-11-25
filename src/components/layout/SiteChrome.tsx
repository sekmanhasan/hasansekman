"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import BlobCursor from "@/components/framer/BlobCursor";
import PageTransition from "@/components/framer/PageTransition";
import { bodyFont } from "@/lib/fonts";

const RULES = [
  { id: "view", label: "View", match: "/projects/" },
  { id: "hi", label: "Say hi", match: "mailto:" },
];

const PAGES = [
  { id: "home", colour: "#d9b98c", path: "/" },
  { id: "projects", colour: "#ff511c", path: "/projects" },
  { id: "about", colour: "#e192c7", path: "/about" },
  { id: "journal", colour: "#ffbb00", path: "/journal" },
  { id: "contact", colour: "#9a89e3", path: "/contact" },
  { id: "book", colour: "#ff511c", path: "/book" },
];

/** Site-wide effects that live outside the page flow: the blob cursor and the page-to-page wipe. */
/** Plain anchors rendered by the ported code components route client-side instead of reloading the page. */
function useInternalLinks() {
  const router = useRouter();
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname && url.hash) return;
      e.preventDefault();
      router.push(url.pathname + url.search + url.hash);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);
}

export default function SiteChrome() {
  useInternalLinks();
  return (
    <>
      <div style={{ position: "fixed", left: 26, bottom: 714, width: 160, height: 60, pointerEvents: "none", zIndex: 10 }}>
        <BlobCursor
          amount={5}
          fill="#ff511c"
          font={bodyFont(14, 600, "1em", "0.01em")}
          labelFill="#ff511c"
          labelText="#2a1d17"
          lag={0.22}
          linkFill="#e192c7"
          linkSize={44}
          offset={30}
          ring="#f2f2f2"
          rules={RULES}
          size={16}
          sprinkle1="#ff511c"
          sprinkle2="#e192c7"
          sprinkle3="#ffbb00"
          sprinkles
          stretch={2}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ position: "absolute", left: 0, top: 0, width: 1, height: 1, pointerEvents: "none" }}>
        <PageTransition leadColour="#8ab50e" otherColour="#ffbb00" pages={PAGES} style={{ width: "100%", height: "100%" }} />
      </div>
    </>
  );
}
