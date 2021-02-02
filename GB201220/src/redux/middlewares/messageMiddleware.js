import {
    SEND_MESSAGE,
    sendMessage,
    updateChatId_tmp,
    updateChatSelected,
    UPDATE_CHAT_SELECTED,
    DELETE_CHAT
} from "../actions";
import { push } from 'connected-react-router';

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.user === 'User') {
                store.dispatch(updateChatId_tmp(store.getState().ChatReducer.chatId));
                setTimeout(() => store.dispatch(
                    sendMessage("Bot", "Не приставай ко мне, я робот!")
                ), 1000);
            } else {
                store.dispatch(updateChatSelected(store.getState().ChatReducer.tmpChatId, true))
            }
            return next(action)
        case UPDATE_CHAT_SELECTED:
            if (action.selected === true) {
                setTimeout(() => store.dispatch(
                    store.dispatch(updateChatSelected(store.getState().ChatReducer.tmpChatId, false))
                ), 2000);
            }
            return next(action)

        case DELETE_CHAT:
            let { chatId, chats } = store.getState().ChatReducer;
            if (action.chatId == chatId &&
                Object.keys(chats).length > 2) {
                const tmpChats = Object.assign({}, chats);
                const id = action.chatId;
                delete tmpChats[id];
                const lastId = Object.keys(tmpChats)[Object.keys(tmpChats).length - 1];
                const link = `/chat/${lastId}`;
                store.dispatch(push(link));
            }
            return next(action)
    }
    return next(action)
}