import { privateRequest } from "../requestMethods";


export async function sendMessage(req, reqUserID) {
    try {
        const response = await privateRequest.post('/message/create', req, {
            params: { reqUserID }
        });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
}

export async function getChatsMessages(chatId, reqUserID) {
    try {
        const response = await privateRequest.get(`/message/chat/${chatId}`, {
            params: { reqUserID }
        });
        return response.data;
    } catch (error) {
        console.error('Error getting chat messages:', error);
        throw error;
    }
}

export async function deleteMessage(messageId, reqUserID) {
    try {
        const response = await privateRequest.delete(`/message/${messageId}`, {
            params: { reqUserID }
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting message:', error);
        throw error;
    }
}

// Example usage
const sendMessageRequest = { /* ... */ };
const chatId = 123;
const messageId = 456;
const reqUserID = 789;

sendMessage(sendMessageRequest, reqUserID)
    .then(message => console.log('Sent message:', message))
    .catch(error => console.error('Error sending message:', error));

getChatsMessages(chatId, reqUserID)
    .then(messages => console.log('Chat messages:', messages))
    .catch(error => console.error('Error getting chat messages:', error));

deleteMessage(messageId, reqUserID)
    .then(response => console.log('Deleted message:', response))
    .catch(error => console.error('Error deleting message:', error));
