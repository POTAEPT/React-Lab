import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import BookingPage from './components/BookingPage.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl p-6">
        <Routes>
          <Route path="/" element={<BookingPage />} />
          {/* TODO Lab A ขั้น 4: <Route path="/summary" element={<Summary />} /> */}
          {/* TODO Lab B:        <Route path="/confirm" element={<Confirm />} /> */}
        </Routes>
      </main>
    </>
  )
}
export default App
