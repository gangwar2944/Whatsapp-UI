import { privateRequest } from "../requestMethods";

// Example usage in a function or component
export async function createSingleChat(singleChatRequest, reqUserID) {
    try {
        const response = await privateRequest.post('/chats/single', singleChatRequest, {
            params: { reqUserID }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating single chat:', error);
        throw error;
    }
}

export async function createGroupChat(groupChatRequest, reqUserID) {
    try {
        const response = await privateRequest.post('/chats/group', groupChatRequest, {
            params: { reqUserID }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating group chat:', error);
        throw error;
    }
}

export async function getChatById(chatId, reqUserID) {
    try {
        const response = await privateRequest.get(`/chats/${chatId}`, {
            params: { reqUserID }
        });
        return response.data;
    } catch (error) {
        console.error('Error getting chat by ID:', error);
        throw error;
    }
}

export async function findAllChatsByUserId(reqUserID) {
    try {
        const response = await privateRequest.get('/chats/user', {
            params: { reqUserID }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching chats by user ID:', error);
        throw error;
    }
}

// Example usage
const singleChatRequest = { /* ... */ };
const groupChatRequest = { /* ... */ };
const reqUserID = 123;

// createSingleChat(singleChatRequest, reqUserID)
//     .then(chat => console.log('Created Single Chat:', chat))
//     .catch(error => console.error('Error creating single chat:', error));

createGroupChat(groupChatRequest, reqUserID)
    .then(chat => console.log('Created Group Chat:', chat))
    .catch(error => console.error('Error creating group chat:', error));

// Continue with other API calls as needed
