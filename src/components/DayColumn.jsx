import { HOURS } from '../data/rooms.js'
import SlotButton from './SlotButton.jsx'

// 💥 ชั้นกลาง — ส่งต่อเฉย ๆ
// TODO Lab A ขั้น 3: ลบ props ทั้งสองตัวออกจากไฟล์นี้
function DayColumn({ day, slots, toggle }) {
  return (
    <div>
      <p className="mb-2 text-center text-sm font-semibold">{day.label}</p>
      <div className="space-y-1">
        {HOURS.map((hour) => (
          <SlotButton key={hour} dayCode={day.code} hour={hour} slots={slots} toggle={toggle} />
        ))}
      </div>
    </div>
  )
}
export default DayColumn
