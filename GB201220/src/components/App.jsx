import React from 'react';

import Message from './Message.jsx';

class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        todos: ["Первое сообщение", "Второе сообщение"]
    };
}

click(){
    const todos = this.state.todos;
    todos.push("Нормально");
    this.setState({
        todos
    })
}

  render() {
      const todos = this.state.todos;
    return (
        <main>
            <button onClick={() => this.click()}>
                Add Message 
            </button>
            {todos.map((text) => <Message text={text}/>)}
        </main>
    )
  }
}

export default App;