import React from 'react'
import styles from './Home.module.css'
import RecipeCard from '../../components/cards/RecipeCard.module.css'
export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <RecipeCard/>
    </div>
  )
}
