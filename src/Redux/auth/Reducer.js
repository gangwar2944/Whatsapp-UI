import { LOGIN, LOGOUT, REGISTER, REQ_USER, SEARCH_USER, UPDATE_USER } from "./ActionType";

const initialValue = {
  signup: null,
  signin: null,
  reqUser: null,
  searchUser: null,
  updatedUser: null,
  isAuthenticated: false,
};

export const authReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case REGISTER:
          return { ...state, signup: payload };
        case LOGIN:
          return { ...state, signin: payload ,isAuthenticated: true };
        case SEARCH_USER:
          return { ...state, searchUser: payload };
        case REQ_USER:
          return { ...state, reqUser: payload };
        case UPDATE_USER:
          return { ...state, updatedUser: payload };
        case LOGOUT:
            return { ...state, isAuthenticated: false };
        default:
          return state;
      }
};
