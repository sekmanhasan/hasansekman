import PinnedNote from "@/components/board/PinnedNote";
import Sticker from "@/components/board/Sticker";
import b from "@/components/board/board.module.css";
import BookCalendar from "./BookCalendar";
import s from "./BookBoard.module.css";

export default function BookBoard() {
  return (
    <section className={s.section} data-framer-name="Section - Calendar">
      <div className={`${b.board} ${s.board}`} data-framer-name="Board">
        <div
          className={`${b.paper} ${s.sheet}`}
          data-framer-name="Calendar Sheet"
        >
          <div className={b.pinRow} data-framer-name="Pin Row">
            <div className={b.pin} data-framer-name="Pin" />
          </div>
          <div className={s.calendar}>
            <BookCalendar />
          </div>
          <p className={`t-14 ${s.note}`}>
            Slots show in your own time zone. Nothing that works? Email
            hasansekman@outlook.com and we’ll find a time.
          </p>
        </div>
        <div className={s.notes} data-framer-name="Notes">
          <PinnedNote
            className={s.pinned}
            label="Before the call"
            value="Bring three things"
            detail="The idea, a rough budget and your questions. We bring the coffee and an honest view."
            fill="yellow"
            pin="orange"
            rotate={-2.5}
          />
          <PinnedNote
            className={s.pinned}
            label="Rather write?"
            value="Leave us a note"
            detail="We reply within a day, Monday to Friday."
            fill="pink"
            pin="blue"
            rotate={2}
            button={{ label: "Write to us", href: "/contact" }}
          />
          <Sticker
            label="30 min"
            colour="purple"
            rotate={-10}
            className={s.sticker}
          />
        </div>
      </div>
    </section>
  );
}
