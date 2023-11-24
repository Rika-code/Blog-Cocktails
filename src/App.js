import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cocktails from './page/Cocktails';
import CocktailsRandom from './page/CoktailsRandom';
import CocktailsCategories from './page/CocktailsCategories';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Cocktails/>}/>
    <Route path ="/random" element = {<CocktailsRandom/>}/>
    <Route path ="/category" element = {<CocktailsCategories/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
