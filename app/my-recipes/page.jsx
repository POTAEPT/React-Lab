// Lab B d) — แก้หน้านี้ให้ fetch จาก /api/my-recipes ของกลุ่มเอง (ไม่ใช่ /api/recipes ของเช้า)
//           + ใส่ { next: { revalidate: N } } อย่างชัดเจน แล้วพิสูจน์ผ่าน Network tab
// app/my-recipes/page.jsx
import { connection } from "next/server"   // ⚠️ ไม่มีในสคริปต์ — ดู README หัวข้อ "ต่างจากสคริปต์"

export default async function MyRecipesPage() {
  await connection()   // ⚠️ ไม่มีในสคริปต์ — กัน `npm run build` พัง (ตอน build ยังไม่มี server ที่ localhost:3000 ให้ fetch)
  
  // 🔴 ต้องใส่ { next: { revalidate: N } } อย่างชัดเจน (ใช้ N = 15 วินาที)
  const res = await fetch("http://localhost:3000/api/my-recipes", {
    next: { revalidate: 15 }
  })
  const recipes = await res.json()

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">เมนูสูตรโปรดของฉัน</h1>
      
      {recipes.length === 0 ? (
        <p className="text-gray-500">ไม่พบสูตรโปรดนี้</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map(recipe => (
            <div key={recipe.mealId} className="border rounded-lg overflow-hidden shadow-sm">
              <img 
                src={recipe.thumb} 
                alt={recipe.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg">{recipe.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
