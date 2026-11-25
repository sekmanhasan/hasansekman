import Button from "@/components/ui/Button";
import s from "./Join.module.css";

export default function Join() {
  return (
    <section className={s.section} data-framer-name="Section - Join">
      <div className={`${s.card} card-sh`} data-framer-name="Card">
        <div className={s.copy} data-framer-name="Copy">
          <h3 className="t-36">Room for one more</h3>
          <p className={`t-16 ${s.text}`}>We’re hiring a mid-weight designer. Send three things you made and one thing you’d change about this site.</p>
        </div>
        <Button label="Send us your work" href="mailto:hello@studiomallow.co?subject=Joining%20Studio%20Mallow" />
      </div>
    </section>
  );
}
