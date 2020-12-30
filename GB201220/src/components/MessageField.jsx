import React from 'react';

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

    render() {
        return (
            <div class="message-field">
                {this.props.chat.map((text) => <Message className={this.setClassName(text.user)} user={text.user} msg={text.msg}/>)}
            </div>
        )
      }
}

export default MessageField;