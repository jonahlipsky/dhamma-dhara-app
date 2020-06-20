import React, { Component } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa'

class TodoEditModal extends Component{
  constructor(props){
    super(props)
      this.state = {id: props.id, name: props.name}
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.todo != this.props.todo && this.props.todo){
      this.setState({ id: this.props.todo.id, name: this.props.todo.name })
    }
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  saveChange(){
    
  }

  closeModal(){
    this.props.closeModal()
  }

  render(){
    let name = this.state.name;

    return(
      <>
        <div className={this.props.modalClass}>
          <label htmlFor="todo-edit-input-name">
            <input id="todo-edit-input-name" name="name" type="text" value={name} onChange={value => this.onChange(value)} />
          </label>
          <FaCheck className="fa"/>
          <FaTimes onClick={() => this.closeModal()} className="fa"/>
        </div>
      </>
    )
  }
}

export default TodoEditModal