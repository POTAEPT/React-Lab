import { Link } from 'react-router-dom'
import { useBooking } from '../context/BookingContext.jsx'

function Header() {
  const { slots } = useBooking()

  return (
    <header className="flex items-center justify-between border-b bg-white px-4 py-3">
      <Link to="/" className="text-lg font-bold">
        🏢 จองห้องประชุม
      </Link>
      <Link to="/summary" className="text-sm text-blue-600 hover:underline">
        ดูรายการที่เลือก ({slots.length} ชม.)
      </Link>
    </header>
  )
}
export default Header
