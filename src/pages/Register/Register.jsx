import initializeFirebase from '../../utils/firebaseUtils';
import { useEffect, useState } from "react";
import Login from "../Login/login";
import { Hero } from '../Logout/Logout';
import { getUser, isLoggedIn, loginWithGoogle } from '../../utils/firebaseUtils';
function Register() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleSignup = () => {
    clearErrors();
    initializeFirebase()
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  const handleLogout = () => {
    initializeFirebase().auth().signOut();
  }

  const authListener = () => {
    initializeFirebase().auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  }

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      <div className="login">
        <div className="container">
          {user ? (
            <Hero handleLogout={handleLogout} />
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
