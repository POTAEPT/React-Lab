import RecipeCard from "./RecipeCard";
import SearchBox from "./SearchBox";

const RecipePage = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const data = await res.json();
    const recipes = data.meals;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">สูตรอาหาร</h1>
            <SearchBox initialQuery="" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
export default RecipePage;