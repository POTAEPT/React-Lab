// TODO Lab A: <Routes> ซ้อนใต้ layout route เดียว — /  /recipes  /about  และ * (404 ต้องอยู่ล่างสุด)
// TODO Lab B: เพิ่ม route recipes/:id
// hooks/useFetch.js มีให้แล้ว (ของวันที่ 3) — ใช้ต่อได้เลย ไม่ต้องเขียนใหม่

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import About from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route
            path="/recipes/:id"
            element={
              <Suspense fallback={<p>...กำลังโหลด...</p>}>
                <RecipeDetail />
              </Suspense>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
