import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import BookingPage from './components/BookingPage.jsx'

import Summary from './pages/Summary.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl p-6">
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<BookingPage slots={slots} toggle={toggle} />} />
          {/* <Route path="/summary" element={<Summary />} /> */}
          <Route path="/confirm" element={<Confirm />} />
=======
          <Route path="/" element={<BookingPage />} />
>>>>>>> 08b345a30292081129492f69907f699bacfe78e7
          {/* TODO Lab A ขั้น 4: <Route path="/summary" element={<Summary />} /> */}
          <Route path="/summary" element={<Summary />} />
          {/* TODO Lab B:        <Route path="/confirm" element={<Confirm />} /> */}
        </Routes>
      </main>
    </>
  )
}
export default App
