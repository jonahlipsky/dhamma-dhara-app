import React from 'react';
import Todos from './components/todo_components/todos_container'
import Map from './components/map_components/map'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todos: []
    };
  }

  componentDidMount(){
    fetch('/todos')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        console.log('hello world')
      })
  }
  
  render(){
    return (
      <div id="app">
        <Map />
      </div>
    );
  }
}

export default App;
