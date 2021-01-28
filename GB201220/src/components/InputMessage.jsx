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

const mapDispatchToProps = dispatch => {
    return {
      SendMessage: (user, msg) => dispatch(sendMessage(user, msg)),
    };
  };
  
export default connect(null, mapDispatchToProps)(InputMessage);
