import React from 'react'
import styles from './RecipeCard.module.css'
export default function RecipeCard(props) {
  return (
    <div className={styles.recipeCardWrapper}>
        <img alt="" src={props?.recipe?.strMealThumb}></img>
        <div className={styles.contentWrapper}>
          {/* <span className={styles.mealTitle}>Spicy Arrabiata Penne</span>
          <span className={styles.mealSubtitle}> <span/>*/}
            <span className={styles.cardTitle}>{props?.recipe?.strMeal}</span>
        </div>
      </div>
  )
}
