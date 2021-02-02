import { colors } from '@material-ui/core';
import {
    ADD_CHAT,
    DELETE_CHAT,
    UPDATE_CHATID,
    UPDATE_CHAT_SELECTED,
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
                        chat: [],
                        selected: false
                    },
                }
            }

        case DELETE_CHAT:
            let { chats, msgList } = state;
            if (chats[action.chatId] != undefined &&
                Object.keys(chats).length > 2) {
                const tmpChats = Object.assign({}, chats);
                const id = action.chatId;
                delete tmpChats[id];

                const tmpMsgList = Object.assign({}, msgList);
                chats[action.chatId].chat.forEach(id => {
                    delete tmpMsgList[id];
                });
                return {
                    ...state,
                    msgList: tmpMsgList,
                    chats: tmpChats
                }
            } else {
                return state;
            }
        case SEND_MESSAGE:
            if (action.user != "") {
                let { chats, chatId, tmpChatId, msgList } = state;
                if (action.user === "Bot") {
                    chatId = tmpChatId;
                }
                const msgId = Object.keys(msgList).length + 1;
                chats[`${chatId}`].chat.push(msgId);

                return {...state,
                    chatId,
                    msgList: {
                        ...state.msgList,
                        [msgId]: { user: action.user, msg: action.msg },
                    },
                    chats
                }
            }
        case UPDATE_CHATID:
            return {...state, chatId: action.chatId }
        case UPDATE_CHATID_TMP:
            return {...state, tmpChatId: action.tmpChatId }
        case UPDATE_CHAT_SELECTED:
            return {...state,
                chats: {
                    ...state.chats,
                    [action.chatId]: {
                        ...state.chats[action.chatId],
                        selected: action.selected
                    },
                }
            }
            /// ///////////////////////////////////
        default:
            return state
    }
}