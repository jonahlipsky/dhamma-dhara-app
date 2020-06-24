import React from 'react';
import Todos from './components/todos_container'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todos: []
    };
  }
  
  render(){
    return (
      <div id="app">
        <Todos />
      </div>
    );
  }
}

export default App;
