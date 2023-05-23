import React, { useEffect } from 'react'
import RecipeCards from '../../components/cards/RecipeCard'
import styles from './Recipe.module.css'
import { getAllRecipesByCategories,getAllRecipesByCategory } from '../../apis/recipe'

export default function Recipes() {
  const [categories, setCategories]= React.useState([])
  const [selectedCategory, setSelectedCategory]= React.useState('Chicken')
  const [meals,setMeals] =React.useState([])
  useEffect(()=>{
    getRecipesByCategories()
  
  },[])
  useEffect(()=>{
    
    getMealsByCategory()
  },[selectedCategory])

  const getRecipesByCategories=()=>{
    getAllRecipesByCategories().then((res)=>{
      setCategories(res);
    })
  }
  const getMealsByCategory=()=>{
    getAllRecipesByCategory(selectedCategory).then((res)=>{
      setMeals(res)
    })

  }
  return (
    <>
    <div className={styles.categoriesWrapper}>
    {categories?.length>0 &&
    categories.map((category)=>
    <div className={styles.categoryItem} key={category.idCategory}>
      {category?.strCategory}
    </div>
    )}
    </div>
    <div className={styles.recipeCardsWrapper}>
      {meals.map((recipe) => (
        <div>
          <RecipeCards recipe={recipe}/>
        </div>
      
      ))
      }
      
    </div>
    </>
    
  )
}