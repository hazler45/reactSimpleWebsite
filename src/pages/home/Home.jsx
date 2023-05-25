import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div>
        <h1 className={styles.title}>
          ENJOY &
          <br />
          DISCOVER <br /> The great meal
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          consequatur quisquam voluptates at,{" "}
        </p>
        <button className={styles.btn} onClick={() => navigate("/recipes")}>
          Explore
        </button>
      </div>
    </>
  );
}
