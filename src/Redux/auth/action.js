// action.js
import { BASE_URL } from "../../Config/api";
import { LOGIN, LOGOUT, REGISTER, SEARCH_USER, UPDATE_USER } from "./ActionType";

export const register = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    console.log("register", resData);
    localStorage.setItem("User", JSON.stringify(resData));
    dispatch({ type: REGISTER, payload: resData });
  } catch (err) {
    console.log(err);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/authenticate`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    console.log("login", resData);
    localStorage.setItem("User", JSON.stringify(resData));
    dispatch({ type: LOGIN, payload: resData });
  } catch (err) {
    console.log(err);
  }
};

export const searchUser = (keywords) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("User"))?.token;
  try {
    const res = await fetch(`${BASE_URL}/user/${keywords}`, {
      method: "GET",
      headers: { "Content-type": "application/json", Authorization: `Bearer ${token}` },
    });
    const resData = await res.json();
    console.log("search", resData);
    dispatch({ type: SEARCH_USER, payload: resData });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (data) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("User"))?.token;
  try {
    const res = await fetch(`${BASE_URL}/user/update`, {
      method: "POST",
      headers: { "Content-type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    console.log("update", resData);
    dispatch({ type: UPDATE_USER, payload: resData });
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("User");
  dispatch({ type: LOGOUT, payload: null });
};
