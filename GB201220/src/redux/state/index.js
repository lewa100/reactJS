const state = {
    chats: {
        0: { title: "Профиль", chat: [] },
        1: { title: "Чат 1", chat: [] },
        2: { title: "Чат 2", chat: [] }
    },
    message: { user: '', msg: '' },
    msgList: {},
    chatId: 1,
    flag: false,
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