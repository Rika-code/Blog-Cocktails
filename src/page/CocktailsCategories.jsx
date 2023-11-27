import {useEffect, useState} from "react"
function CocktailsCategories () {

const [categories, setCategories] = useState(null)

useEffect(() => {
    (async () => {
        const categoriesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?c=list");
        const categoriesInJs = await categoriesResponse.json();

        
        setCategories(categoriesInJs.drinks);
})()
     },[]);


return (
    <main>
{categories ? (
<>
<h1>Voici le liste des cocktails :</h1>
{categories.map((category) => { 
  return (
    <div>
        <h2>{category.strCategory}</h2>  
    </div>
    
     
  )
})}
</>

) : (
<p> Categories en cours de chargement...</p>
)}
</main>
)
}
export default CocktailsCategories;