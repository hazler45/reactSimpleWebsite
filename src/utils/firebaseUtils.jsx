import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBz8tllJq87lLLQ3zmmmstoL7-li_0nLK0",

  authDomain: "react-csit-bb905.firebaseapp.com",

  projectId: "react-csit-bb905",

  storageBucket: "react-csit-bb905.appspot.com",

  messagingSenderId: "532358249372",

  appId: "1:532358249372:web:5964ae638f0754423e6659",

  measurementId: "G-5Q3E61C4S3",
};

export default function initializeFirebase() {
  const app = initializeApp(firebaseConfig);
}
export function loginWithGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      console.log(user);
      let userobj = {
        name: user?.displayName,
        email: user?.email,
        imageUrl: user?.photoURL,
        accessToken: user?.accessToken,
      };
      localStorage.setItem("user", JSON.stringify(userobj));
    //   after login go home page
      window.location.href='/'
    })
    .catch((error) => {
      
    });
}

export const isLoggedIn =()=>{
    let userStr =localStorage.getItem('user')
    if(userStr){
        return true
    }else {
        return false
    }
}

export const getUser =()=>{
    let userStr =localStorage.getItem('user')
    if (userStr){
        return JSON.parse(userStr)
    }
}