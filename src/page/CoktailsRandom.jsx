import { useState } from "react";

function CocktailsRandom () {
    const [randomCocktail, setRandomCocktail] = useState(null); // On utilise UseState pour garder l'état de ma constante

    if (!randomCocktail) { // le if va permettre de récupérer les données, les transformer en json et enfin en Javascript et enfin le setRandom mdifie ma valeur de randomCocktail
       (async () => {
          const randomCocktailApi = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
          const randomCocktailJs = await randomCocktailApi.json();
          setRandomCocktail(randomCocktailJs.drinks[0]);
 
       })();
    }
 
    return ( //Ici, On affiche le cocktail aléatoire.
 
       <main>
         {randomCocktail ? (
             <article>
                <p> {randomCocktail.strDrink} </p>
             </article>
         ) : (
          <p>Cocktail en cours de préparation...</p>
         )}
       </main>
 
    )
 
 }
 
export default CocktailsRandom;