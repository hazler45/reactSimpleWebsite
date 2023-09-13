import './App.css';
import { Route, Routes } from 'react-router-dom';
import Recipes from './pages/RecipeApp/Recipes'
import Home from './pages/home/Home'
import Header from './components/Header/Header';
import RecipeDetail from './pages/RecipeApp/RecipeDetail';
import RecipesByLetter from './pages/RecipeApp/RecipesByLetters';
import StudentFrom from './pages/From/From'
import Login from './pages/Login/login'
import React, { useEffect } from 'react';
import initializeFirebase from './utils/firebaseUtils';
import { getUser } from './utils/firebaseUtils';
import Register from './pages/Register/Register';
const user= getUser();
export const userContext =React.createContext({});
function App() {
  useEffect(()=>{
    initializeFirebase();
    //loginWithGoogle();
  },[])
  return (
    <>
    <userContext.Provider value ={user}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Header' element={<Header/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/recipe/:id' element={<RecipeDetail/>}/>
      <Route path='/recipe/by-letter' element={<RecipesByLetter/>}/>
      <Route path='/from' element={<StudentFrom/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}></Route>
      
    </Routes>
    </userContext.Provider>
    </>
  );
}

export default App;
