import React, { useEffect } from "react";
import RecipeCards from "../../components/cards/recipeCard";
import styles from "./Recipe.module.css";
import {
  getAllRecipesByCategories,
  getAllRecipesByCategory,
  getMealBySearchTerm
} from "../../apis/recipe";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchField from "../../components/common/searchField";

export default function Recipes() {
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("Chicken");
  const [meals, setMeals] = React.useState([]);
  useEffect(() => {
    getRecipesByCategories();
  }, []);
  useEffect(() => {
    getMealsByCategory();
  }, [selectedCategory]);

  const getRecipesByCategories = () => {
    getAllRecipesByCategories().then((res) => {
      setCategories(res);
    });
  };
  const getMealsByCategory = () => {
    getAllRecipesByCategory(selectedCategory).then((res) => {
      setMeals(res);
    });
  };
 
  const filterByName=(name)=>{
    getMealBySearchTerm(name).then((res) => {
      setMeals(res);
    });
  }

  return (
    <>
      <Header />
      {/* searchbar */}
      <SearchField 
        className={styles.searchFiled}
        onSearchInitiate={(searchTerm) => {
          filterByName(searchTerm)
        }}
      />
      {/* button of the food menu */}
      <div className={styles.categoriesWrapper}>
        {categories?.length > 0 &&
          categories.map((category) => (
            <div
              onClick={() => {
                setSelectedCategory(category.strCategory);
              }}
              className={`${styles.categoryItem} ${
                selectedCategory === category.strCategory
                  ? styles.selectedCategory
                  : ""
              }`}
              key={category.idCategory}
            >
              {category?.strCategory}
            </div>
          ))}
      </div>
      {/* cards */}
      <h3>Click the following cards for required information of the dish:</h3>
      <div className={styles.recipeCardsWrapper}>
        {meals?.map((recipe) => (
          <Link
            to={`/recipe/${recipe.idMeal} `}
            className={styles.recipeCardsWrapper}
            key={recipe.idMeal}
          >
            <RecipeCards recipe={recipe} />
          </Link>
        ))}
      </div>
    </>
  );
}
