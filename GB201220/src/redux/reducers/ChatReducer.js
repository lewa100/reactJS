import {
    ADD_CHAT,
    DELETE_CHAT,
    UPDATE_CHATID,
    UPDATE_CHAT_SELECTED,
    UPDATE_CHATID_TMP,
    SEND_MESSAGE,
    SEND_MESSAGE_FOR_LOADER,
    LOADER_PROFILE
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
        case SEND_MESSAGE_FOR_LOADER:
            if (action.user != "") {
                let { chats, chatId, tmpChatId, msgList } = state;
                if (action.user === "Bot") {
                    chatId = tmpChatId;
                }
                if (chats.hasOwnProperty(`${action.chatId}`)) {
                    chats[`${action.chatId}`].chat.push(action.msgId);
                } else {
                    return {...state,
                        chats: {
                            ...state.chats,
                            [action.chatId]: {
                                title: `Чат ${action.chatId}`,
                                chat: [action.msgId],
                                selected: false
                            },
                        },
                        msgList: {
                            ...state.msgList,
                            [action.msgId]: { user: action.user, msg: action.msg },
                        },
                    }
                }

                return {...state,
                    chatId: action.chatId,
                    msgList: {
                        ...state.msgList,
                        [action.msgId]: { user: action.user, msg: action.msg },
                    },
                    chats
                }
            }
        case UPDATE_CHATID:
            return {...state, chatId: action.chatId }
        case LOADER_PROFILE:
            return {...state, profile: action.profile }
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