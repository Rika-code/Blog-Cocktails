import { useEffect, useState } from "react";

function Cocktails () {
    const [cocktails, setCocktails] = useState(null);

   useEffect(() => {
        (async () => {
            const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
            const cocktailsInJs = await cocktailsResponse.json();
            setCocktails(cocktailsInJs.drinks);
})
         })([]);
    

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