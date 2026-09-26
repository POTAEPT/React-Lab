// ว่างไว้ตั้งใจ — Lab A: การ์ดหนึ่งใบ (รูป + ชื่อ + ลิงก์ไป /recipes/<idMeal>) + <FavoriteButton /> ข้างใน
// 🔴 Twist ข้อ 1: การ์ดทั้งใบไม่จำเป็นต้องเป็น Client — คิดก่อนว่าไฟล์นี้เองมี hook/event handler ไหม
import FavoriteButton from './FavoriteButton';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="border rounded p-4 flex flex-col items-center gap-4">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-auto rounded" />
      <h2 className="text-lg font-bold">{recipe.strMeal}</h2>
      <a href={`/recipes/${recipe.idMeal}`} className="text-blue-500 hover:underline">
        ดูรายละเอียด
      </a>
      <FavoriteButton />
    </div>
  );
}

export default RecipeCard;