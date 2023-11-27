import { useEffect, useState } from "react";

function IngredientsPage () {

    const [ingredients, setIngredients] = useState(null)
    useEffect(() => {
    (async () => {
    const ingredientsResponse = await fetch("https://thecocktaildb.com/api/json/v1/1/list.php?i=list");
    const ingredientsInJs = await ingredientsResponse.json();
    console.log(ingredientsInJs)
    setIngredients(ingredientsInJs.drinks)
    

   })()
},[])
    return (
      <main>
      {ingredients ? (
     <>
     <h1> Voici la liste des ingrédients : </h1>
     {ingredients.map((ingredient) =>{
        return (
            <div>
               <h1> {ingredient.strIngredient1}</h1>
            </div>  
      )
     })}
      </>
      ) : (
        <p> Chargement des ingrédients en cours...</p>
      )
    }
    </main>
    )
}
 
export default IngredientsPage;