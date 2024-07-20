// action.js
import { BASE_URL } from "../../Config/api";
import { CREATE_CHAT, CREATE_GROUP, GET_USERS_CHAT } from "./ActionType";

const user = JSON.parse(localStorage.getItem("User"));
console.log("user",user)
const token = JSON.parse(localStorage.getItem("User"))?.token;

export const createChat = (chatData) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/chats/single?reqUserID=${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(chatData.data),
    });

    const data = await res.json();
    console.log("create chat", data);

    dispatch({ type: CREATE_CHAT, payload: data });
  } catch (error) {
    console.log("catch error", error);
  }
};

export const createGrpChat = (chatData) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/chats/group`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(chatData.data),
    });

    const data = await res.json();
    console.log("create chat", data);

    dispatch({ type:CREATE_GROUP, payload: data });
  } catch (error) {
    console.log("catch error", error);
  }
};
export const getUsersChat = () => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/chats/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log("create chat", data);

    dispatch({ type:GET_USERS_CHAT, payload: data });
  } catch (error) {
    console.log("catch error", error);
  }
};


