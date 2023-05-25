import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <>
      <div className={styles.navLinks}>
        <NavLink
          className={styles.links}
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
          })}
        >
          Home
        </NavLink>
        <NavLink
          className={styles.links}
          to="/recipes"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
          })}
        >
          Recipe
        </NavLink>
      </div>
    </>
  );
}
