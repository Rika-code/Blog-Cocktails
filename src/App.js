import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cocktails from './page/Cocktails';
import CocktailsRandom from './page/CoktailsRandom';
import CocktailsCategories from './page/CocktailsCategories';
import IngredientsPage from './page/IngredientsPage';
import CocktailsDetails from './page/CocktailsDetails';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Cocktails/>}/>
    <Route path ="/random" element = {<CocktailsRandom/>}/>
    <Route path ="/category" element = {<CocktailsCategories/>}/>
    <Route path ="/ingredients" element = {<IngredientsPage/>}/>
    <Route path ="/cocktails/details/:id" element ={<CocktailsDetails/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
