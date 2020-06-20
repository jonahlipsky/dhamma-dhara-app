import React, { Component } from 'react';
import Todo from './todo'

class Todos extends Component{
  constructor(props){
    super(props)
    this.state = {
      todos: []
    };
  }

  componentDidMount(){
    this.getTodos()
      .then(res => this.setState({ todos: res }))
      .catch(err => console.log(err));
  }

  getTodos = async () => {
    const response = await fetch('/todos');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  }

  render(){
    console.log(this.state.todos)
    let todos = this.state.todos.map(todo => {
      return <li className="list-item" key={todo.id}><Todo id={todo.id} name={todo.name}/></li>
    })
    return (
      <div className="todos">
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default Todos;
