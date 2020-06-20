import React, { Component } from 'react';
import Todo from './todo'
import TodoEditModal from './todoEditModal';

class Todos extends Component{
  constructor(props){
    super(props)
    this.state = {
      todos: [],
      edit: null
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

  showModal = todo => {
    this.setState({ edit: todo })
  }

  closeModal = () => {
    this.setState({ edit: null })
  }

  render(){
    let todos = this.state.todos.map(todo => {
      return <li className="list-item" key={todo.id}><Todo  todo={todo} id={todo.id} name={todo.name} showModal={this.showModal}/></li>
    })

    let modalClass="edit-todo modal-closed";
    if(this.state.edit != null){
      modalClass = "edit-todo modal-open"
    }
    let modal = <TodoEditModal modalClass={modalClass} todo={this.state.edit} closeModal={this.closeModal}/>

    return (
      <div className="todos">
        <ul>
          {todos}
        </ul>
        {modal}
      </div>
    );
  }
}

export default Todos;
