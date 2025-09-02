const Main = () => {
  const ingredients=["Tomatoes", "Onion","Potato","Paneer"]
  const ingredientListItem=ingredients.map(ingredient=>(
    
    <li key={ingredient}>{ingredient}</li>
    
  ))
  function handleSubmit(event){
    event.preventDefault();
    const formData=new FormData(event.currentTarget)
    const newIngredient=formData.get("ingredient")
    console.log(newIngredient)
    ingredients.push(newIngredient);
    console.log(ingredients)
  }

  return (
    <main>

      <form onSubmit={handleSubmit}  className="add-ingrediant-form">
        <input  
        type="text"
        placeholder =" e.g. oregano"
        aria-label="Add ingredient"
        name="ingredient"
        />
        <button> + Add ingredient</button>
      </form>
      <ul>{ingredientListItem}</ul>
    </main>
  )
}

export default Main
