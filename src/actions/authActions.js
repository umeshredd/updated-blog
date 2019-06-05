import axios from "axios";
import { ENDPOINT } from "../api/api";
import { GET_ERRORS, SET_CURRENT_USER, USER_RELOADED } from "./types";
import { checkLikeService, checkCommentService, getPosts } from "./postActions";
// Login - Get User Token
export const loginUser = userData => dispatch => {
  // console.log(`${ENDPOINT}api/users/login`, userData);

  let headers = { "x-username": "test" };
  if (userData === 0) {
    headers = {
      "x-username": "test"
    };
  } else if (userData === 1) {
    headers = {
      "x-username": "Jhon deo"
    };
  }
  axios
    .get(`${ENDPOINT}api/users/login/${userData}`, { headers: headers })
    .then(res => {
      const token = {
        id: res.data._id,
        name: res.data.name,
        avatar: res.data.avatar,
        email: res.data.email
      };

      // Set token to ls
      dispatch(setCurrentUser(token));

      const saveStorage = async () => {
        await localStorage.removeItem("currentUser");
        await localStorage.setItem("currentUser", JSON.stringify(token));
      };
      saveStorage();

      // Set current user

      dispatch(userReloaded(true));
      dispatch(checkLikeService());
      dispatch(checkCommentService());
      dispatch(getPosts());
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
      dispatch(userReloaded(false));
    });
};

export const userReloaded = decoded => {
  return {
    type: USER_RELOADED,
    payload: decoded
  };
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
