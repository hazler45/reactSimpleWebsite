import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import styles from "./Header.module.css";
import { getUser, isLoggedIn } from "../../utils/firebaseUtils";
import { userContext } from "../../App";
export default function Header() {
  const user = React.useContext(userContext);
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
        <NavLink
          className={styles.links}
          to="/from"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
          })}
        >
          Contact Us
        </NavLink>
        <div className={styles.linkLogin}>
          {isLoggedIn() ? (
            <img
              onError={(e) =>
                (e.target.src =
                  "https://www.thecocktaildb.com/images/media/drink/tx8ne41582475326.jpg")
              }
              width={40}
              height={40}
              src={user.imageUrl}
              alt=""
            />
          ) : (
            <Link className={styles.linkLogin} to="/login">
              <RxAvatar size={26} />
            </Link>
          )}
        </div>
      
      </div>
    </>
  );
}
