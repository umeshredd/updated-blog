import axios from "axios";
import { ENDPOINT, LIKEEND, COMMENTEND } from "../api/api";
import {
  ADD_POST,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST,
  CHECK_LIKE_SERVICE,
  CHECK_COMMENT_SERVICE
} from "./types";

// Check server comment

export const checkLikeService = DATA => dispatch => {
  axios
    .get(`${LIKEEND}`)
    .then(res => {
      console.log(
        "-------------------check service like----------------------"
      );
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: CHECK_LIKE_SERVICE,
          payload: true
        });
      } else if (res === undefined) {
        dispatch({
          type: CHECK_LIKE_SERVICE,
          payload: null
        });
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};

// Check server comment

export const checkCommentService = () => dispatch => {
  console.log("comment Serice------");
  axios
    .get(`${COMMENTEND}`)
    .then(res => {
      console.log(
        "-------------------check service comment----------------------"
      );
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: CHECK_COMMENT_SERVICE,
          payload: true
        });
      }
      if (res === undefined) {
        dispatch({
          type: CHECK_COMMENT_SERVICE,
          payload: null
        });
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};

// Add Post
export const addPost = postData => dispatch => {
  dispatch(clearErrors());

  console.log(postData);
  console.log(`${ENDPOINT}api/posts/add`);
  axios
    .post(`${ENDPOINT}api/posts/add`, postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      })
    );
};

// Get Posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  console.log(`${ENDPOINT}api/posts`);
  axios
    .get(`${ENDPOINT}api/posts`)
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

// Get Post
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`${ENDPOINT}/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};

// Delete Post
export const deletePost = id => dispatch => {
  axios
    .delete(`${ENDPOINT}/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Like
export const addLike = (id, LikeData) => dispatch => {
  console.log(`${ENDPOINT}api/posts/like/${String(id)}`);
  console.log(LikeData);
  axios
    .post(`${ENDPOINT}api/posts/like/${String(id)}`, LikeData)
    .then(res => dispatch(getPosts()))
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

// Remove Like
export const removeLike = (id, LikeData) => dispatch => {
  console.log(LikeData);
  axios
    .post(`${ENDPOINT}api/posts/unlike/${id}`, LikeData)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
  // console.log("adding comment");
  // console.log(postId, commentData);
  // return false;
  dispatch(clearErrors());
  axios
    .post(`${ENDPOINT}api/posts/comment/${String(postId)}`, commentData)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`${ENDPOINT}api/posts/comment/${postId}/${commentId}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
