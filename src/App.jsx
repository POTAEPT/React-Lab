// TODO Lab A: <Routes> ซ้อนใต้ layout route เดียว — /  /recipes  /about  และ * (404 ต้องอยู่ล่างสุด)
// TODO Lab B: เพิ่ม route recipes/:id
// hooks/useFetch.js มีให้แล้ว (ของวันที่ 3) — ใช้ต่อได้เลย ไม่ต้องเขียนใหม่

import { Route } from "react-router-dom";
import Layout from "./components/Layout"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element{<Layout />}>
        <Route path="/" element={<}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
