import { useEffect, useState } from "react";

function CocktailsRandom () {
    const [randomCocktail, setRandomCocktail] = useState(null); 
   // useEffect est une fonction fournie par React permettant
// d'exécuter du code à des moments spécifiques pendant le cycle de vie du composant,
// tels que le premier chargement, ou à chaque chargement, etc.
// En passant un tableau vide en tant que deuxième paramètre de useEffect,
// nous indiquons que la fonction doit être exécutée une seule fois,
// précisément lors du premier chargement du composant.
// oui j'ai regardée une doc pour faire ces commentaires.
       useEffect(() => { 
       (async () => {
          const randomCocktailApi = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
          const randomCocktailJs = await randomCocktailApi.json();
          setRandomCocktail(randomCocktailJs.drinks[0]);
        })();
    }, []);
 
    return ( 
 
       <main>
         {randomCocktail ? (
             <article>
                <p> {randomCocktail.strDrink} </p>
                <img src={coktailRandom.strDrinkThumb} alt={coktailRandom.strDrink} />
             </article>
         ) : (
          <p>Cocktail en cours de préparation...</p>
         )}
       </main>
 
    )
 
 }
 
export default CocktailsRandom;