import { Link } from 'react-router-dom'

// TODO Lab A ขั้น 1: ให้ Header โชว์จำนวนชั่วโมงที่เลือกด้วย prop drilling ก่อน — นับว่าต้องแก้กี่ไฟล์
// TODO Lab A ขั้น 4: เปลี่ยนมาอ่านจาก useBooking() เอง ห้ามรับ prop จาก App
function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-4 py-3">
      <Link to="/" className="text-lg font-bold">
        🏢 จองห้องประชุม
      </Link>
      <Link to="/summary" className="text-sm text-blue-600 hover:underline">
        ดูรายการที่เลือก
      </Link>
    </header>
  )
}
export default Header
