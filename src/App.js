import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cocktails from './components/Cocktails';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Cocktails/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
