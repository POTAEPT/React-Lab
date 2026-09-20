import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// TODO Lab A ขั้น 2: import { BookingProvider } แล้วครอบ <App />
//   ⚠️ ต้องครอบสูงกว่าทั้ง <Header /> และ <Routes> ไม่งั้น Header เรียก useBooking() แล้วพัง

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
