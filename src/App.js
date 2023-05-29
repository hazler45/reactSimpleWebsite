import './App.css';
import { Route, Routes } from 'react-router-dom';
import Recipes from './pages/RecipeApp/Recipes'
import Home from './pages/home/Home'
import Header from './components/Header/Header';
import RecipeDetail from './pages/RecipeApp/RecipeDetail';
import RecipesByLetter from './pages/RecipeApp/RecipesByLetters';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Header' element={<Header/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/recipe/:id' element={<RecipeDetail/>}/>
      <Route path='/recipe/by-letter' element={<RecipesByLetter/>}/>
    </Routes>
    </>
  );
}

export default App;
