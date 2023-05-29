import React, { useEffect, useState } from "react";
import { getMealsByFirstName } from "../../apis/recipe";
import { letters } from "../../utils/stringUtils";
import styles from "./Recipe.module.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import RecipeCards from "../../components/cards/recipeCard";

export default function RecipesByLetters() {
  const [selectedLetter, setCurrentLetter] = useState("A");
  const [meals, setMeals] = React.useState([]);
  useEffect(() => {
    getMealsByFirstName(selectedLetter).then((res) => {
      setMeals(res);
    });
  }, [selectedLetter]);

  const handleLetterSelection = (letter) => {
    setCurrentLetter(letter.toUpperCase());
  };

  return (
    <>
    <Header/>
      <div className={styles.lettersWrapper}>
        {letters.map((letter) => (
          <div
            style={{
                color: selectedLetter
            }}
            onClick={() => handleLetterSelection(letter)}
            className={styles.letterName}
            key={letter}
          >
            {letter}
          </div>
        ))}
      </div>

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
