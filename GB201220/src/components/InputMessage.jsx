import React from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../redux/actions';

class InputMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
      let value = this.state.value;
      if (value != ''){
        this.props.SendMessage("User", value);
        this.setState({value: ''});
      }
      event.preventDefault();
    }

  //   sendMessage(user, msg){
  //     // const {tmpChatId} = this.state;
  //     let {chats,chatId, flag,tmpChatId} = this.props;
  //     if(user != "Bot"){
  //         // this.setState({
  //         //     flag: false,
  //         // })
  //     }else {
  //         chatId = tmpChatId;
  //     }
  //     // const msgId = Object.keys(msgList).length + 1;
  //     // chats[`${chatId}`].chat.push(msgId);
  //     UpdateMessage(user, msg);
  //     AddMsgToList(user,msg);
  //     UpdateChats(chats);
  // }

    render() {
      return (
        <form onSubmit={this.handleSubmit} ref="form">
            <label>
            User:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Отправить сообщение" />
        </form>
      )
    }
  }

  const mapStateToProps = reducer => {
    const store = reducer.ChatReducer
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
      SendMessage: (user, msg) => dispatch(sendMessage(user, msg)),
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(InputMessage);
