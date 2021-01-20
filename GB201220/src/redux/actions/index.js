export const ADD_CHAT = 'ADD_CHAT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const addChat = () => ({
    type: ADD_CHAT
});

export const sendMessage = (messageId, text, sender, chatId) => ({
    type: SEND_MESSAGE,
    messageId,
    text,
    sender,
    chatId,
});