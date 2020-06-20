import React, { Component } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';


class Todo extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
        <FaPencilAlt />
        <FaTrash />
        <div className="list-item-details">Id: {this.props.id} name: {this.props.name}</div>
      </>
    )
  }
}

export default Todo;