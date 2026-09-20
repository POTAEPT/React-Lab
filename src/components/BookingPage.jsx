import { Link } from "react-router-dom";
import { ROOM, MAX_HOURS } from "../data/rooms.js";
import WeekGrid from "./WeekGrid.jsx";

function BookingPage() {
  return (
    <div className="mx-auto mb-8 max-w-4xl rounded-lg border bg-white p-6 shadow-sm">
      <section>
        <h1 className="text-2xl font-bold">{ROOM.name}</h1>
        <p className="mt-1 text-sm text-gray-500">
          ความจุ {ROOM.capacity} ที่นั่ง · จองได้ครั้งละไม่เกิน {MAX_HOURS}{" "}
          ชั่วโมง และต้องเป็นวันเดียวกัน
        </p>
        <WeekGrid />
      </section>
      <Link
      to="/summary"
        type="submit"
        className="w-full mt-6 rounded bg-blue-600 py-3 text-center font-semibold text-white block"
      >
        สรุปการจอง
      </Link>
    </div>
  );
}
export default BookingPage;
