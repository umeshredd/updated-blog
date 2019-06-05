import isEmpty from "../validation/is-empty";

import { SET_CURRENT_USER, USER_RELOADED } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  reloaded:false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        reloaded:true,
      };
      case USER_RELOADED:
        return {
          ...state,
          reloaded:action.payload
        }
    default:
      return state;
  }
}
