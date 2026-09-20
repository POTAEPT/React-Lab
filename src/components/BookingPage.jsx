import { ROOM, MAX_HOURS } from '../data/rooms.js'
import WeekGrid from './WeekGrid.jsx'

// 💥 ชั้นกลาง — รับ slots/toggle มาแล้วส่งต่อเฉย ๆ ไม่ได้ใช้เอง
// TODO Lab A ขั้น 3: ลบ props ทั้งสองตัวออกจากไฟล์นี้
function BookingPage({ slots, toggle }) {
  return (
    <section>
      <h1 className="text-2xl font-bold">{ROOM.name}</h1>
      <p className="mt-1 text-sm text-gray-500">
        ความจุ {ROOM.capacity} ที่นั่ง · จองได้ครั้งละไม่เกิน {MAX_HOURS} ชั่วโมง และต้องเป็นวันเดียวกัน
      </p>
      <WeekGrid slots={slots} toggle={toggle} />
    </section>
  )
}
export default BookingPage
