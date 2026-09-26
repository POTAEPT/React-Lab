import Link from 'next/link';
import RecipeDetailCard from './RecipeDetailCard';

const RecipeDetalPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const data = await res.json();
  const meal = data.meals?.[0];

  if (!meal) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 mb-4">ไม่พบสูตรอาหารนี้ (id: {id})</p>
        <Link href="/recipes" className="border px-4 py-2 rounded inline-block">
          กลับหน้าหลัก
        </Link>
      </div>
    );
  }

  return <RecipeDetailCard meal={meal} />;
};

export default RecipeDetalPage;
