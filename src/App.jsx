// TODO Lab A: <Routes> ซ้อนใต้ layout route เดียว — /  /recipes  /about  และ * (404 ต้องอยู่ล่างสุด)
// TODO Lab B: เพิ่ม route recipes/:id
// hooks/useFetch.js มีให้แล้ว (ของวันที่ 3) — ใช้ต่อได้เลย ไม่ต้องเขียนใหม่

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes";
import About from "./pages/Home";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/recipes" element={<Recipes />}/>

        <Route path="/about" element={<About />}/>
        <Route path="*" element={<NotFound/>}/>


      </Route>
    </Routes>
    </>
  )
}

export default App
