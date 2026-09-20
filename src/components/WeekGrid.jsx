import { DAYS } from '../data/rooms.js'
import DayColumn from './DayColumn.jsx'

// 💥 ชั้นกลาง — ส่งต่อเฉย ๆ
// TODO Lab A ขั้น 3: ลบ props ทั้งสองตัวออกจากไฟล์นี้
function WeekGrid({ slots, toggle }) {
  return (
    <div className="mt-6 grid grid-cols-5 gap-2">
      {DAYS.map((day) => (
        <DayColumn key={day.code} day={day} slots={slots} toggle={toggle} />
      ))}
    </div>
  )
}
export default WeekGrid
