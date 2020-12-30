import React from 'react';

import MessageField from './MessageField.jsx';
import InputMessage from './InputMessage.jsx';
import Header from './Header.jsx';
import '../styles/styles.css'
import ChatList from './ChatList.jsx';

class Layout extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        chat: [],
        message: '',
        flag: false
    };
    this.sendMessage = this.sendMessage.bind(this);
}

sendMessage(user, msg){
    this.state.chat.push({user, msg});
    this.setState({
        message: {user, msg},
    })
    if(user != "Bot"){
        this.setState({
            flag: false,
        })
    }
}

componentDidUpdate() {
    if(this.state.flag != true&& 
        this.state.message.msg != ""){
        this.timer = setTimeout(() => {
            this.sendMessage("Bot", "I don't understand!");
          }, 500);
        this.setState({
            flag:true
        })
    }
}

render() {
      const chat = this.state.chat;
    return (
        <main>
            <div class="layout">
                <Header />
                <div class="block-chat">
                    <ChatList />
                    <MessageField chat = {chat} />
                </div>
                <InputMessage sendMessage={this.sendMessage}/>
            </div>
        </main>
    )
  }
}

export default Layout;