import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: null
    };
  }

  componentDidMount(){
    this.pingBackend()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  pingBackend = async () => {
    const response = await fetch('/todos');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  }
  
  render(){
    return (
      <div className="App">
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default App;
