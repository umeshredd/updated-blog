import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  POST_LOADING,
  CHECK_COMMENT_SERVICE,
  CHECK_LIKE_SERVICE
} from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  CommentService: false,
  LikeService: false,
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case CHECK_COMMENT_SERVICE:
      return {
        ...state,
        CommentService: action.payload,
        loading: false
      };
    case CHECK_LIKE_SERVICE:
      return {
        ...state,
        LikeService: action.payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    default:
      return state;
  }
}
