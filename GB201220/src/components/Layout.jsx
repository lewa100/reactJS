import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import MessageField from './MessageField.jsx';
import InputMessage from './InputMessage.jsx';
import Header from './Header.jsx';
import '../styles/styles.css'
import ChatList from './ChatList.jsx';
import Profile from './Profile.jsx';
import {
    updateChatId,
    sendMessage,
    updateChatId_tmp
} from "../redux/actions";

class Layout extends React.Component {
constructor(props) {
    super(props);
}

render() {
    let { chatId , UpdateChatId} = this.props;
    UpdateChatId(chatId);
    return (
        <main>
            <div class="layout">
                <Header />
                <div class="block-chat">
                    <ChatList />
                    {chatId != 0 ? 
                    <MessageField/>:
                    <Profile />
                    }
                </div>
                {chatId != 0 ? 
                <InputMessage/>:
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

const mapStateToProps = reducer => {
    const store = reducer.ChatReducer
    return {
        msgList: store.msgList,
        chats: store.chats, 
        tmpChatId: store.tmpChatId,
        message: store.message,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        UpdateChatId: (chatId) => dispatch(updateChatId(chatId)),
        SendMessage: (user, msg) => dispatch(sendMessage(user, msg)),
        UpdateChatId_tmp: (tmpChatId) => dispatch(updateChatId_tmp(tmpChatId))
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Layout);