import { SEND_MESSAGE, sendMessage, updateChatId_tmp } from "../actions";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.user === 'User') {
                store.dispatch(updateChatId_tmp(store.getState().ChatReducer.chatId));
                setTimeout(() => store.dispatch(
                    sendMessage("Bot", "Не приставай ко мне, я робот!")
                ), 1000);
            }
    }
    return next(action)
}