import { useState } from "react";

function Cocktails () {
    const [cocktails, setCocktails] = useState(null); 

    if (!cocktails) {                                                 
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=") 
    .then((cocktailsResponse) => {  
        return cocktailsResponse.json(); 
    })

    .then((cocktailsInJs) => {  
        console.log(cocktailsInJs); 
        setCocktails(cocktailsInJs.drinks) 
    })}

    return (
        <main>
   {cocktails ? (
    <>
    <h1>Voici le liste des cocktails :</h1>
    {cocktails.map((cocktail) => { 
      return (
        <div>
            <h2>{cocktail.strDrink}</h2>  
             <img src={cocktail.strDrinkThumb}/>
        </div>
        
         
      );
    })}
    </>

   ) : (
    <p> Cocktails en cours de chargement...</p>
   )}
</main>
)
}
export default Cocktails