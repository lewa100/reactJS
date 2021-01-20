import {
    ADD_CHAT
} from '../actions';
import initState from "../state";

export default function reducer(state = initState, action) {
    switch (action.type) {
        case ADD_CHAT:
            let idList = Object.keys(state.chats).map((y) => y);
            let chId = Math.max.apply(null, idList) + 1;
            return {...state,
                chats: {
                    ...chats,
                    [chId]: {
                        title: `Чат ${chId}`,
                        chat: []
                    },
                }
            }
            /// ///////////////////////////////////
        default:
            return state
    }
}