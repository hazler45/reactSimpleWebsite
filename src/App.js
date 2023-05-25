import './App.css';
import { Route, Routes } from 'react-router-dom';
import Recipes from './pages/RecipeApp/Recipes'
import Home from './pages/home/Home'
import Header from './components/Header/Header';
import RecipeDetail from './pages/RecipeApp/RecipeDetail';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Header' element={<Header/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/recipe/:id' element={<RecipeDetail/>}/>
    </Routes>
    </>
  );
}

export default App;
