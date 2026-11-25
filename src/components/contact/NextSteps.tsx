import SprinkleText from "@/components/fx/SprinkleText";
import s from "./NextSteps.module.css";

const STEPS = [
  [
    "We read it the same day",
    "A real person on the team reads every note and replies within a day, Monday to Friday.",
  ],
  [
    "A 30-minute call",
    "We talk about the goal, the timing and the budget. You’ll leave with an honest view, even if we’re not the right fit.",
  ],
  [
    "A clear proposal",
    "Within a week: the scope, the timeline and the price, rolled into one plain page.",
  ],
];

export default function NextSteps() {
  return (
    <section className={s.section} data-framer-name="Section - Next Steps">
      <div className={s.container} data-framer-name="Container">
        <SprinkleText as="h2" className="t-96">
          What happens next
        </SprinkleText>
        <div className={s.steps} data-framer-name="Steps">
          {STEPS.map(([title, text], i) => (
            <div key={title} className={s.step} data-framer-name="Step">
              <p className="t-13">{i + 1}</p>
              <h3 className="t-36">{title}</h3>
              <p className={`t-16 ${s.text}`}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
