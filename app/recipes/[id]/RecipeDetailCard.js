// ว่างไว้ตั้งใจ — Lab A: แสดงรายละเอียดสูตร (ลิงก์กลับ / รูป / ชื่อ / หมวด·ประเทศ / ส่วนผสม / วิธีทำ)
// รับ { meal } จาก app/recipes/[id]/page.js · ส่วนผสมใช้ getIngredients จาก '@/lib/getIngredients'
// ⚠️ Lab B (14:00) TA จะแจกไฟล์นี้เวอร์ชันพังมาให้วางทับ — เก็บเวอร์ชันของตัวเองไว้ก่อน (commit หรือก็อปสำรอง)

import { getIngredients } from '@/lib/getIngredients';

const RecipeDetailCard = ({ meal }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded mb-4" />
      <p className="text-gray-500 mb-2">
        {meal.strCategory} · {meal.strArea}
      </p>
      <h2 className="text-lg font-semibold mb-2">ส่วนผสม</h2>
      <ul className="list-disc list-inside mb-4">
        {getIngredients(meal).map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} - {ingredient.measure}
          </li>
        ))}
      </ul>
      <h2 className="text-lg font-semibold mb-2">วิธีทำ</h2>
      <p className="text-gray-700">{meal.strInstructions}</p>
    </div>
  );
};

export default RecipeDetailCard;