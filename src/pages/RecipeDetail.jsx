// ว่างไว้ตั้งใจ — Lab B (B1): /recipes/:id อ่าน id ด้วย useParams + กรณีไม่พบสูตร
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";

function RecipeDetail() {
  const param = useParams();
  const { id } = param; // ⌨️ พิมพ์ตาม #4 (2.1): เปลี่ยนเป็น const { id } = useParams()
  // ⌨️ พิมพ์ตาม #6 (2.3): const navigate = useNavigate()

  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );

  async function handleRandom() {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php",
    );
    const json = await res.json();
    const newId = json.meals[0].idMeal;
    console.log("สุ่มได้", newId);
    navigate(`/recipes/${newId}`); // ⌨️ พิมพ์ตาม #6 (2.3): เปลี่ยนเป็น navigate(`/recipes/${newId}`)
  }

  if (loading) return <p>กำลังโหลด...</p>;
  if (error) return <p>{error}</p>;

  const meal = data?.meals?.[0]; // ⚠️ TheMealDB คืน 3 ชั้น
  if (!meal)
    return (
      <div>
        <p>ไม่พบเมนูนี้</p>
        <Link to="/recipes">← กลับไปหน้ารายการ</Link>
      </div>
    );

  return (
    <article>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-64 rounded"
      />
      <h1 className="text-2xl font-bold">{meal.strMeal}</h1>
      <p>{meal.strInstructions}</p>
      <div className="flex gap-4 mt-4">
        <button onClick={handleRandom} className="border px-3 py-1 rounded">
          🎲 สุ่มเมนูใหม่
        </button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          {" "}
          กลับ
        </button>
      </div>
    </article>
  );
}
export default RecipeDetail;
