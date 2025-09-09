import React from "react"

const Main = () => {
  const [ingredients,setIngredient]=React.useState([])
  const ingredientListItem=ingredients.map(ingredient=>(
    
    <li key={ingredient}>{ingredient}</li>
    
  ))
  function addIngredient(formData){
   
    const newIngredient=formData.get("ingredient")
  
    setIngredient(prevIngredient=>[...prevIngredient,newIngredient])
    console.log(ingredients);
  }

  return (
    <main>

      <form action={addIngredient}  className="add-ingrediant-form">
        <input  
         type="text"
        placeholder =" e.g. oregano"
        aria-label="Add ingredient"
        name="ingredient"
        />
        <button> + Add ingredient</button>
      </form>
      {ingredients.length >0 && <section>
        <h2>Ingredients on hand: </h2>
        <ul className="ingredient-list" areia-live="polite">{ingredientListItem}</ul>
        {ingredients.length>3 && <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe ?</h3>
            <p>Generste a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>}
      </section>}
       
    </main>
  )
}

export default Main
