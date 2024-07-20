import { CREATE_CHAT, CREATE_GROUP, GET_USERS_CHAT} from "./ActionType";

const initialValue = {
  chats: null,
  createdGroup: null,
  createdChat: null,
};

export const chatReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case CREATE_CHAT:
          return { ...state, createdChat: payload };
        case CREATE_GROUP:
          return { ...state, createdGroup: payload};
        case GET_USERS_CHAT:
          return { ...state, chats: payload };
        default:
          return state;
      }
};
