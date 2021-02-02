const state = {
    chats: {
        0: { title: "Профиль", chat: [], selected: false },
        1: { title: "Чат 1", chat: [], selected: false },
        2: { title: "Чат 2", chat: [], selected: false }
    },
    msgList: {},
    chatId: 1,
    tmpChatId: 0,
    profile: {
        nickname: "User",
        sex: "Мужской",
        last_vizit: "Сейчас онлайн",
        countAllMsg: "51 482",
        connectToChat: "547"
    }
}
export default state;