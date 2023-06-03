import axios from "axios";
import React from "react";

export default function createUser(user) {
  return new Promise((resolve, reject) => {
    axios({
      url: "https://reqres.in/api/users",
      method: "POST",
      data: user,
      // headers helps for authorization here it authorize who can access data and who cant using token
      // headers:{
      //     'Authorization':`some secret`
      // },
    }).then((res) => {
      resolve(res.data);
    }).catch((error)=>{
      reject(error)
    });
  });
}
