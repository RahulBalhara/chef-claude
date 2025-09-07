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
      <ul>{ingredientListItem}</ul>
    </main>
  )
}

export default Main
