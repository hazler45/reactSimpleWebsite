import React from "react";
import styles from "./login.module.css";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";
import { loginWithGoogle } from "../../utils/firebaseUtils";
import Headers from "../../components/Header/Header";
export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    console.log(username,password);
  };

  return (
    <>
      <Headers />
      <div className={styles.loginWrapper}>
        <h2>Log in </h2>
        <form
          className={styles.Wrapper}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div style={{display:'grid'}}>
          <label style={{marginRight:'auto'}}  htmlFor="username">Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>
          <div style={{display:'grid'}}>
          <label  style={{marginRight:'auto'}}  htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <button>Log in</button>
          <span>OR</span>
          <h4>Log in with Google</h4>
          <Button
            style={{ gap: 20 }}
            variant="contained"
            onClick={() => {
              loginWithGoogle();
            }}
          >
            LOG IN WITH GOOGLE <FcGoogle size={20} />
          </Button>
          <p style={{ fontSize: "14px" }}>
            Don't have an account?
            <span className={styles.signinLink}>Create an account</span>
            <br /> It takes less than a minute
          </p>
        </form>
      </div>
    </>
  );
}
