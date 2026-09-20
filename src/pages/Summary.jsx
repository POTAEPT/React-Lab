// ว่างไว้ตั้งใจ — Lab A ขั้น 4: สรุปช่องที่เลือก · ลบทีละช่อง · ล้างทั้งหมด · รวมกี่ชั่วโมง
// ว่างไว้ตั้งใจ — Lab A ขั้น 4: สรุปช่องที่เลือก · ลบทีละช่อง · ล้างทั้งหมด · รวมกี่ชั่วโมง
import { Link } from 'react-router-dom'
import { useBooking } from '../context/BookingContext.jsx'
import { MAX_HOURS, slotLabel } from '../data/rooms.js'

function Summary() {
    const { slots, removeSlot, clearSlots, totalHours } = useBooking()

    if (slots.length === 0) {
        return (
            <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h1 className="text-2xl font-bold">ยังไม่มีรายการที่เลือก</h1>
                <p className="mt-2 text-sm text-gray-500">กรุณาเลือกช่วงเวลาจากตารางก่อน</p>
                <Link to="/" className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 font-semibold text-white">
                    กลับไปเลือกเวลา
                </Link>
            </div>
        )
    }

    return (
        <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    รายการที่เลือก ({totalHours}/{MAX_HOURS} ชม.)
                </h1>
                <button
                    type="button"
                    onClick={clearSlots}
                    className="text-sm text-red-600 underline hover:text-red-800"
                >
                    ล้างทั้งหมด
                </button>
            </div>
            <ul className="mt-4 divide-y rounded border">
                {slots.map((id) => (
                    <li key={id} className="flex items-center justify-between px-4 py-3">
                        <span>{slotLabel(id)}</span>
                        <button
                            type="button"
                            onClick={() => removeSlot(id)}
                            className="rounded border border-red-600 px-3 py-1 text-sm text-red-600 hover:bg-red-50">
                            เอาออก
                        </button>
                    </li>
                ))}
            </ul>
            <Link
                to="/confirm"
                className="mt-6 inline-block rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
                ยืนยันการจอง
            </Link>
        </div>
    )
}
export default Summary