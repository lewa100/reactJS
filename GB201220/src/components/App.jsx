import React from 'react';

import MessageField from './MessageField.jsx';
import InputMessage from './InputMessage.jsx';

class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        chat: [{user:"Bob", msg:"HI"},{user:"Olga",msg:"Hello"}],
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

componentDidUpdate(prevProps, prevState) {
    console.log(prevState.message , this.state.message, this.state.flag);
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
            <MessageField chat = {chat} />
            <InputMessage sendMessage={this.sendMessage}/>
        </main>
    )
  }
}

export default App;