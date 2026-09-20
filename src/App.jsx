import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import BookingPage from './components/BookingPage.jsx'
import { MAX_HOURS, dayOf } from './data/rooms.js'

// 💥 starter: state อยู่ที่ App แล้วส่ง props ลง 4 ชั้น (prop drilling โดยจงใจ)
//    App → BookingPage → WeekGrid → DayColumn → SlotButton  (3 ชั้นกลางไม่ได้ใช้เอง แค่ส่งต่อ)
// TODO Lab A ขั้น 1: ทำให้ Header โชว์จำนวนชั่วโมงที่เลือก โดยใช้ prop drilling ก่อน — นับว่าแก้กี่ไฟล์ (ใส่ README)
// TODO Lab A ขั้น 2–4: ย้าย state ไป BookingContext แล้วลบ slots/toggle ออกจากไฟล์นี้ให้หมด
function App() {
  const [slots, setSlots] = useState([])

  const toggle = (id) => {
    setSlots((prev) => {
      if (prev.includes(id)) return prev.filter((s) => s !== id)
      if (prev.length >= MAX_HOURS) return prev
      if (prev.length > 0 && dayOf(prev[0]) !== dayOf(id)) return prev
      return [...prev, id]
    })
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl p-6">
        <Routes>
          <Route path="/" element={<BookingPage slots={slots} toggle={toggle} />} />
          {/* TODO Lab A ขั้น 4: <Route path="/summary" element={<Summary />} /> */}
          {/* TODO Lab B:        <Route path="/confirm" element={<Confirm />} /> */}
        </Routes>
      </main>
    </>
  )
}
export default App
