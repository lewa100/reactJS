import {
    ADD_CHAT,
    UPDATE_CHATID,
    UPDATE_MESSAGE,
    UPDATE_CHATID_TMP,
    SEND_MESSAGE
} from '../actions';
import initState from "../state";

export default function reducer(state = initState, action) {
    switch (action.type) {
        case ADD_CHAT:
            let idList = Object.keys(state.chats).map((y) => y);
            let chId = Math.max.apply(null, idList) + 1;
            return {...state,
                chats: {
                    ...state.chats,
                    [chId]: {
                        title: `Чат ${chId}`,
                        chat: []
                    },
                }
            }
        case SEND_MESSAGE:
            let { chats, chatId, tmpChatId, msgList } = state;
            if (action.user === "Bot") {
                chatId = tmpChatId;
            }
            const msgId = Object.keys(msgList).length + 1;
            chats[`${chatId}`].chat.push(msgId);

            return {...state,
                message: { user: action.user, msg: action.msg },
                chatId,
                msgList: {
                    ...state.msgList,
                    [msgId]: { user: action.user, msg: action.msg },
                },
                chats
            }
        case UPDATE_CHATID:
            return {...state, chatId: action.chatId }
        case UPDATE_CHATID_TMP:
            return {...state, tmpChatId: action.tmpChatId }
        case UPDATE_MESSAGE:
            return {...state, message: { user: action.user, msg: action.msg } }
            /// ///////////////////////////////////
        default:
            return state
    }
}