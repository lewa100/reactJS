export const ADD_CHAT = 'ADD_CHAT';
export const DELETE_CHAT = 'DELETE_CHAT';
export const UPDATE_CHATID = 'UPDATE_CHATID';
export const UPDATE_CHATID_TMP = 'UPDATE_CHATID_TMP';
export const UPDATE_CHAT_SELECTED = 'UPDATE_CHAT_SELECTED';
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

export const updateChatSelected = (chatId, selected) => ({
    type: UPDATE_CHAT_SELECTED,
    chatId,
    selected
});


//||||ADD TO OBJECT||||
export const addChat = () => ({
    type: ADD_CHAT
});

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    chatId
});

export const sendMessage = (user, msg) => ({
    type: SEND_MESSAGE,
    user,
    msg
});