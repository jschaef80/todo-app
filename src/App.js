import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      items: []
    };
  } 
 
  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      items : [...this.state.items, this.state.input],
      input: ''
    })
  }
  
  deleteTask = index => {
    this.setState({
      tasks: [...this.state.tasks.filter(task => task !== this.state.tasks)]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>To-Do List</h1>
          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.inputUpdate}/>
            <button>Submit</button>
          </form>
          <FirstComponent items={this.state.items} />
          </header>
      </div>
    );
  }
}

export default App;
