"use client";

import { forwardRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { withSprinkles } from "@/components/framer/Sprinkles";

type Props = { as?: ElementType; className?: string; style?: CSSProperties; children?: ReactNode };

const Text = forwardRef<HTMLElement, Props>(function Text({ as: Tag = "h2", ...rest }, ref) {
  return <Tag ref={ref} {...rest} />;
});

/** A heading whose letters ripple through the brand colours on scroll and squash under the pointer. */
const SprinkleText = withSprinkles(Text) as typeof Text;
export default SprinkleText;
