import React from 'react';
import PropTypes from 'prop-types';
import MessageField from './MessageField.jsx';
import InputMessage from './InputMessage.jsx';
import Header from './Header.jsx';
import '../styles/styles.css'
import ChatList from './ChatList.jsx';
import Profile from './Profile.jsx';

class Layout extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        chats: {    
                    0:{ title: "Профиль", chat:[]},
                    1:{ title: "Чат 1", chat:[]},
                    2:{ title: "Чат 2", chat:[]}
                },
        message: {user:'', msg:''},
        msgList: {
        },
        flag: false,
        tmpChatId: 0
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.addChat = this.addChat.bind(this);
}

addChat(){
    const {chats} = this.state;
    let idList = Object.keys(chats).map((y) => y);
    let chId = Math.max.apply(null, idList) + 1;
    this.setState({
        chats: {...chats, [chId]: {title:`Чат ${chId}`,chat:[]}},
    })
}

sendMessage(user, msg){
    const { msgList,chats, tmpChatId} = this.state;
    let {chatId} = this.props;
    if(user != "Bot"){
        this.setState({
            flag: false,
        })
    }else {
        chatId = tmpChatId;
    }
    const msgId = Object.keys(msgList).length + 1;
    chats[`${chatId}`].chat.push(msgId);
    this.setState({
        message: {user, msg},
        msgList: {...msgList, [msgId]: {user,msg}},
        chats
    })
}

getChat(chat) {
    const { msgList} = this.state;
    let chList = [];
    chat.forEach(id => {
        chList.push(msgList[`${id}`]);
    });
    return chList;
}

componentDidUpdate() {
    if(this.state.flag != true && 
        this.state.message.msg != ""){
        this.setState({
            tmpChatId: this.props.chatId
        })
        this.timer = setTimeout(() => {
            this.sendMessage("Bot", "I don't understand!");
          }, 500);
        this.setState({
            flag:true
        })
    }
}

render() {
    const { chats} = this.state;
    const { chatId } = this.props;
    return (
        <main>
            <div class="layout">
                <Header chatTitle={ chats[`${chatId}`].title } addChat={this.addChat} />
                <div class="block-chat">
                    <ChatList list={chats} />
                    {chatId != 0 ? <MessageField chat = {this.getChat(chats[`${chatId}`].chat)} />:
                    <Profile />
                    }
                </div>
                {chatId != 0 ? <InputMessage sendMessage={this.sendMessage}/>:
                <div></div>
                }
                
            </div>
        </main>
    )
  }
}

Layout.propTypes = {
    chatId: PropTypes.number,
};

Layout.defaultProps = {
    chatId: 1,
};

export default Layout;