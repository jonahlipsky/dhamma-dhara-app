import React, { Component } from 'react';

class TodoEditModal extends Component{
  constructor(props){
    super(props)
      this.state = {id: props.id, name: props.name}
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.todo != this.props.todo){
      this.setState({ id: this.props.todo.id, name: this.props.todo.name })
    }
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    let name = this.state.name;

    return(
      <>
        <div className="edit-todo">
          <label htmlFor="todo-edit-input-name">
            <input id="todo-edit-input-name" name="name" type="text" value={name} onChange={value => this.onChange(value)} />
          </label>
        </div>
      </>
    )
  }
}

export default TodoEditModal