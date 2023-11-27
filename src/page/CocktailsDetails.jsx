import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CocktailsDetails () {
    const {id} = useParams();
    const [cocktails, setCocktail] = useState(null)

    useEffect(() => {
        (async () => {
        const DetailsResponse = await fetch ('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17222');
        const DetailsinJs = await DetailsResponse.json();
        setCocktail(DetailsinJs.drinks[0])
        
    })()
    },[id])
    
    return (
        <>
            <h1>Details du Cocktail :</h1>
            {cocktails ? (
          <div>
            <h2>{cocktails.strDrink} </h2>
            <img src={cocktails.strDrinkThumb} alt ={cocktails.strDrink}></img>
            <p>Categorie : {cocktails.strCategory}</p>
            <p> Instructions : {cocktails.strInstructions}</p>
            </div>
            ) : (
                <p> Chargment du cocktail en cours...</p>
)}
  </>
    );   
}
export default CocktailsDetails;