import type { CSSProperties } from "react";
import { clay } from "@/lib/clay";

/** Small clay chip used above section headings ("Selected work", "Process", …). */
export default function Tag({
  label,
  variant = "dark",
  surface,
  className,
  style,
}: {
  label: string;
  variant?: "dark" | "light";
  surface?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const fill = variant === "light" ? "yellow" : "light";
  return (
    <div
      className={`clay-s t-13 ${className ?? ""}`}
      style={{
        ...clay(fill, surface, "pill"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "max-content",
        padding: "8px 16px",
        borderRadius: 999,
        color: variant === "light" ? "var(--dark)" : "var(--muted)",
        whiteSpace: "pre",
        ...style,
      }}
    >
      {label}
    </div>
  );
}
