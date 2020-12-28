import React from 'react';

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
          this.props.sendMessage("User", value);
          this.state.value = '';
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
  
export default InputMessage;
