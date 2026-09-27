// Lab A a) — สร้างหน้า detail เป็น Server Component ใหม่ทั้งไฟล์
// - ไม่มี "use client" · ไม่มี useEffect/useState · await fetch(...) ตรง ๆ ใน component
// - TheMealDB: https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}
// - ⚠️ Next.js 15: params เป็น Promise → const { id } = await params
// - แสดงรูป ชื่อ หมวดหมู่ และวิธีทำ
// - แสดงรายการวัตถุดิบ + ปริมาณ (เช่น "3/4 cup · soy sauce") และหัวข้อ "วัตถุดิบ (N อย่าง)"
//   ⚠️ API ให้มาเป็น field แบน ๆ strIngredient1..20 + strMeasure1..20 ไม่ใช่ array — แปลงเอง แล้วตัดช่องว่างทิ้ง
// Lab A c) — ไม่พบสูตร → notFound() จาก "next/navigation"
//   ⚠️ ต้องรอดทั้ง /recipes/99999 และ /recipes/xxxxx — เปิด lookup.php?i=99999 กับ ?i=xxxxx เทียบดูก่อน
// Lab B c) — วาง <AddFavoriteButton /> ไว้ในหน้านี้ ส่ง mealId / name / thumb ลงไปเป็น props
import { notFound } from "next/navigation"

export default async function RecipeDetailPage({ params }) {
  const { id } = await params

  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

  if (!res.ok) {
    notFound()
  }

  let data
  try {
    data = await res.json()
  } catch {
    notFound()
  }

  // 99999 → { meals: null } · xxxxx → { meals: "Invalid ID" } ซึ่ง meals?.[0] เป็นตัวอักษร "I"
  const recipe = Array.isArray(data?.meals) ? data.meals[0] : null
  if (!recipe) {
    notFound()
  }

  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure ? measure.trim() : ""} · ${ingredient.trim()}`)
    }
  }

  const instructions = (recipe.strInstructions ?? "").replace(/\u25a2/g, "").trim()

  return (
    <article className="max-w-3xl mx-auto py-8 ">
      <h1 className="text-3xl font-bold">{recipe.strMeal}</h1>
      <p className="text-gray-500 text-sm mb-4">{recipe.strCategory}</p>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-auto rounded-lg mb-6 object-cover aspect-video"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-1 border-r pr-4">
          {/* แสดงจำนวนวัตถุดิบตามที่คัดกรองมาได้ */}
          <h2 className="text-xl font-semibold mb-4">วัตถุดิบ ({ingredients.length} อย่าง)</h2>
          <ul className="space-y-2 text-sm">
            {ingredients.map((item, index) => (
              <li key={index} className="border-b pb-2 last:border-0">{item}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">วิธีทำ</h2>
          <p className="leading-relaxed whitespace-pre-line">{instructions}</p>
        </div>
      </div>
    </article>
  )
}