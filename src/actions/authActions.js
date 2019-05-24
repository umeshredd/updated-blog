import axios from "axios";
import { ENDPOINT } from "../api/api";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Login - Get User Token
export const loginUser = userData => dispatch => {
  console.log(`${ENDPOINT}api/users/login`, userData);
  if (userData === null) {
    userData = 1;
  }
  axios
    .get(`${ENDPOINT}api/users/login/${userData}`)
    .then(res => {
      const token = {
        id: res.data._id,
        name: res.data.name,
        avatar: res.data.avatar,
        email: res.data.email
      };

      // Set token to ls
      if (localStorage.getItem("currentUser") === "undefined") {
        localStorage.removeItem("currentUser");
      }
      localStorage.setItem("currentUser", JSON.stringify(token));
      // Set current user
      console.log("dispatch Current User");

      dispatch(setCurrentUser(token));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

  // let token = [
  //   {
  //     id: "5ce303afd1f51432d01f168e",
  //     name: "Preetham ",
  //     email: "veigasbros@gmail.com",
  //     avatar:
  //       "www.gravatar.com/avatar/587862811db6de901f9bbe7ea5344a1e?s=200&r=pg&d=mm"
  //   },
  //   {
  //     id: "5ce303afd1f51432d01f168e",
  //     name: "Preetham ",
  //     email: "veigasbros1@gmail.com",
  //     avatar:
  //       "www.gravatar.com/avatar/587862811db6de901f9bbe7ea5344a1e?s=200&r=pg&d=mm"
  //   },
  //   {
  //     id: "5ce303afd1f51432d01f168e",
  //     name: "Preetham ",
  //     email: "veigasbros3@gmail.com",
  //     avatar:
  //       "www.gravatar.com/avatar/587862811db6de901f9bbe7ea5344a1e?s=200&r=pg&d=mm"
  //   }
  // ];

  // if(userData === 1){
  //   console.log("1")
  //   localStorage.removeItem("currentUser");
  //   localStorage.setItem("currentUser", JSON.stringify(token[0]));
  //   dispatch(setCurrentUser(token));

  // }
  // else if(userData === 2){
  //   console.log("2")
  //   localStorage.removeItem("currentUser");
  //   localStorage.setItem("currentUser", JSON.stringify(token[1]));
  //   dispatch(setCurrentUser(token));

  // }
  // else  {
  //   console.log("3")
  //   localStorage.removeItem("currentUser");
  //   localStorage.setItem("currentUser", JSON.stringify(token[2]));
  //   dispatch(setCurrentUser(token));

  // }

  // const usertoken =
  //   userData === "1"
  //     ? token[0]
  //     : userData === "2"
  //     ? token[1]
  //     : userData === "3"
  //     ? token[3]
  //     : null;
  // localStorage.setItem("currentUser", JSON.stringify(usertoken));
  // // Set current user
  // dispatch(setCurrentUser(token));
};

// Set logged in user
export const setCurrentUser = decoded => {
  console.log("setting Current User");
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("currentUser");
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
