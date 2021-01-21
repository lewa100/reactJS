import React from 'react';
import {connect} from 'react-redux';

import Message from './Message.jsx';
import '../styles/styles.css';

class MessageField extends React.Component {
    constructor(props) {
        super(props);
    }

    setClassName(name){
        if (name != "Bot"){
            return "message";
        }
        return "message-bot"
    }

    getChat(chat) {
        // const { msgList} = this.state;
        const { msgList} = this.props;
        let chList = [];
        chat.forEach(id => {
            chList.push(msgList[`${id}`]);
        });
        return chList;
    }

    render() {
        const {chats, chatId} = this.props;
        const chat = this.getChat(chats[`${chatId}`].chat);
        return (
            <div class="message-field">
                {chat.map((text) => <Message className={this.setClassName(text.user)} user={text.user} msg={text.msg}/>)}
            </div>
        )
      }
}

const mapStateToProps = reducer => {
    const store = reducer.ChatReducer
    return {
      chats: store.chats,
      chatId: store.chatId,
      msgList: store.msgList
    };
  };

export default connect(mapStateToProps)(MessageField);