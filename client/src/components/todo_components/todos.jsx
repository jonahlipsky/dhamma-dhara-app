import React, { Component } from 'react';
import Todo from './todo'
import TodoEditModal from './todoEditModal';
import { getTodos } from '../../actions/todo_actions'

class Todos extends Component{
  constructor(props){
    super(props)
    this.state = {
      todos: [],
      edit: null
    };
  }

  componentDidMount(){
    this.props.getTodos()
  }

  componentDidUpdate(prevProps){
    if(prevProps.todos !== this.props.todos){
      this.setState({ todos: this.props.todos })
    }
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
