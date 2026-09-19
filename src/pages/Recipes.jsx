// ว่างไว้ตั้งใจ — Lab A: การ์ดจาก filter.php?c=Dessert + 3 สถานะ · Lab B (B2): ค้นหาด้วย useSearchParams
import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch.js";
import { Link, useSearchParams } from "react-router-dom";

function Recipes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const [input, setInput] = useState(q);


  useEffect(() => {
    setInput(q);
  }, [q]);

  useEffect(() => {
    const id = setTimeout(() => {
      const next = input.trim();
      if (next !== q) {
        setSearchParams(next ? { q: next } : {});
      }
    }, 300);
    return () => clearTimeout(id);
  }, [input, q, setSearchParams]);

  const { data, loading, error } = useFetch(
    q
      ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`
      : "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert",
  );

  const meals = data?.meals ?? [];

  return (
    <>
      <input
        value={q}
        onChange={(e) =>
          setSearchParams(e.target.value ? { q: e.target.value } : {})
        }
        placeholder="ค้นหาเมนู"
        className="border p-2 rounded w-full"
      />
      {loading && <p className="mt-4">กำลังโหลด...</p>}
      {error && <p className="mt-4">เกิดข้อผิดพลาด: {error}</p>}
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 ">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="border rounded-xl overflow-hidden">
            <Link to={`/recipes/${meal.idMeal}`}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-t-lg h-48 w-full object-cover"
              />
              <p className="h-10 text-center">{meal.strMeal}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Recipes;
