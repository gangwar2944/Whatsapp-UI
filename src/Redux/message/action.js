// action.js
import { BASE_URL } from "../../Config/api";
import { GET_USERS_CHAT } from "../chat/ActionType";
import { CREATE_NEW_MESSAGE, GET_ALL_MESSAGE } from "./ActionType";

const token = JSON.parse(localStorage.getItem("User"))?.token;

export const createMessages = (messageData) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/message/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(messageData.data),
    });

    const data = await res.json();
    console.log("create chat", data);

    dispatch({ type: CREATE_NEW_MESSAGE, payload: data });
  } catch (error) {
    console.log("catch error", error);
  }
};


export const getAllMessage = (chatId) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/message/chat/${chatId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log("create chat", data);

    dispatch({ type:GET_ALL_MESSAGE, payload: data });
  } catch (error) {
    console.log("catch error", error);
  }
};


