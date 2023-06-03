import React, { useEffect } from "react";
import { getMealDetail } from "../../apis/recipe";
import { useParams } from "react-router-dom";
import { BackIcon } from "../../utils/iconUtils";
import styles from "./Recipe.module.css";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
export default function RecipeDetail() {
  const [recipeDetail, setRecipeDetail] = React.useState("");
  // recipe/:id
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getDetail()
  }, []);
  
  const goBack=()=> 
  {navigate(-1)}
  const getDetail = () => {
    getMealDetail(id).then((res) => {
      setRecipeDetail(res);
    });
  };
  return (
    <>
      <div className="icon-wrapper" onClick={goBack}>
        <BackIcon/>
      </div>
      <div className={styles.recipeDetailWrapper}>
        <h1>{recipeDetail?.strMeal}</h1>
        <br />
        {recipeDetail?.strYoutube ? (
          <ReactPlayer url={recipeDetail?.strYoutube} width="100%" />
        ) : (
          <img
            src={recipeDetail?.strMealThumb}
            idth={200}
            height={200}
            alt=""
          />
        )}
        <h4>Instruction:</h4>
        {recipeDetail?.strInstructions}
      </div>
      <div className={styles.ingredientMeasureWrapper}>
        <div className={styles.ingredientWrapper}>
          <h4>Ingredian</h4>
          {Array.from({ length: 20 }).map((item, index) => (
            <>
              {recipeDetail?.[`strIngredient${index + 1}`] ? (
                <span>{recipeDetail?.[`strIngredient${index + 1}`]}</span>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
        <div className={styles.ingredientWrapper}>
          <h4>Measure</h4>
          {Array.from({ length: 20 }).map((item, index) => (
            <>
              {recipeDetail?.[`strMeasure${index + 1}`] ? (
                <span>{recipeDetail?.[`strMeasure${index + 1}`]}</span>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
