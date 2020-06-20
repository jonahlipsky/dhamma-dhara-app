import React from 'react';
import Todos from './components/todos'
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
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
