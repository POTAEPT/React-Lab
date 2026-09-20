import { createContext, useContext, useState } from 'react'
import { BOOKED, MAX_HOURS, dayOf } from '../data/rooms.js'

const BookingContext = createContext(null)

export function BookingProvider({ children }) {
  const [slots, setSlots] = useState([])

  const toggle = (id) => {
    setSlots((prev) => {
      if (prev.includes(id)) return prev.filter((s) => s !== id)
      if (BOOKED.includes(id)) return prev
      if (prev.length >= MAX_HOURS) return prev
      if (prev.length > 0 && dayOf(prev[0]) !== dayOf(id)) return prev
      return [...prev, id]
    })
  }

  const remove = (id) => {
    setSlots((prev) => prev.filter((s) => s !== id))
  }

  const clear = () => {
    setSlots([])
  }

  return (
    <BookingContext.Provider value={{ slots, toggle, remove, clear }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return ctx
}
