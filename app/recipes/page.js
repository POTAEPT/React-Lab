import RecipeCard from "./RecipeCard";
import SearchBox from "./SearchBox";

const RecipePage = async ({ searchParams }) => {
    // Next.js 15: searchParams เป็น Promise ต้อง await เสมอ
    const params = await searchParams;
    const q = params?.q || '';

    // ถ้ามีคำค้นหาให้ใช้ search.php ถ้าไม่มีให้ใช้ filter.php หมวด Dessert (ตามโจทย์)
    const apiUrl = q 
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`
        : `https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`;

    const res = await fetch(apiUrl);
    const data = await res.json();
    
    // ถ้าหาไม่เจอ data.meals จะเป็น null ดังนั้นต้องใส่ || [] เพื่อป้องกัน error
    const recipes = data.meals || [];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">สูตรอาหาร</h1>
            <SearchBox />
            
            {recipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.idMeal} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <p className="mt-4 text-gray-500">ไม่พบสูตรอาหารที่ค้นหา</p>
            )}
        </div>
    );
}

export default RecipePage;