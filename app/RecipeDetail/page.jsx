
const RecipeDetail = ()=> {
  return (
    <article>
      <Link to="/recipes" className="text-sm text-gray-500">← กลับ</Link>
      <h1 className="text-3xl font-bold my-3">{meal.strMeal}</h1>
      <p className="text-sm text-gray-500 mb-4">{meal.strCategory} · {meal.strArea}</p>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full max-w-md rounded mb-6" />

      <h2 className="text-xl font-bold mb-2">ส่วนผสม</h2>
      <ul className="mb-6 space-y-1">
        {ingredients.map(x => <li key={x.name}>• {x.measure} {x.name}</li>)}
      </ul>

      <h2 className="text-xl font-bold mb-2">วิธีทำ</h2>
      <p className="whitespace-pre-line leading-relaxed">{meal.strInstructions}</p>
    </article>
  )
}
export default RecipeDetail
