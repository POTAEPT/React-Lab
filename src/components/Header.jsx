import { Link } from 'react-router-dom'
import { useBooking } from '../context/BookingContext.jsx'
import { MAX_HOURS } from '../data/rooms.js'

function Header() {
  const { slots } = useBooking()

  return (
    <header className="flex items-center justify-between border-b bg-white px-4 py-3">
      <Link to="/" className="text-lg font-bold">
        🏢 จองห้องประชุม
      </Link>
      <Link to="/summary" className="text-sm text-blue-600 hover:underline">
        จองแล้ว {slots.length} ชม. / สูงสุด {MAX_HOURS} ชม.
      </Link>
    </header>
  )
}
export default Header
