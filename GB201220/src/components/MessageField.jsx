import React from 'react';
import {connect} from 'react-redux';

import Message from './Message.jsx';
import '../styles/styles.css';
import {sendMessage, sendMessageForLoader} from '../redux/actions';

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

    componentDidMount() {
        fetch('/api/messages.json'
        ).then(body => body.json()).
        then(json => {
            json.forEach(item => {
                this.props.SendMessageForLoader(item.chatId,item.msgId,item.user,item.msg);
                // console.log(item.msgId, item.chatId,item.user,item.msg);
            })
        })
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

  const mapDispatchToProps = dispatch => {
    return {
      SendMessage: (user, msg) => dispatch(sendMessage(user, msg)),
      SendMessageForLoader: (chatId,msgId,user,msg) => dispatch(sendMessageForLoader(chatId,msgId,user,msg))
    };
  };

export default connect(mapStateToProps,mapDispatchToProps )(MessageField);