export const ADD_CHAT = 'ADD_CHAT';
export const UPDATE_CHATID = 'UPDATE_CHATID';
export const UPDATE_CHATID_TMP = 'UPDATE_CHATID_TMP';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';

//||||UPDATE ITEM||||
export const updateChatId = (chatId) => ({
    type: UPDATE_CHATID,
    chatId
});

export const updateChatId_tmp = (tmpChatId) => ({
    type: UPDATE_CHATID_TMP,
    tmpChatId
});

export const updateMessage = (user, msg) => ({
    type: UPDATE_MESSAGE,
    user,
    msg
});


//||||ADD TO OBJECT||||
export const addChat = () => ({
    type: ADD_CHAT
});

export const sendMessage = (user, msg) => ({
    type: SEND_MESSAGE,
    user,
    msg
});