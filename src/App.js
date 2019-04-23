import React, { Component } from 'react';
import './App.css';
import Item from './FirstComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      items: [],
     };
  } 
 
  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault();
    let newItems = this.state.items;
    newItems.push(this.state.input);
    console.log(newItems)
    this.setState({
      // items : [...this.state.items, this.state.input],
      input: ''
    })
    // console.log(this.state.items)
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To-Do List</h1>
          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.inputUpdate}/>
            <button>Submit</button>
          </form>
          <Item items={this.state.items} />
          </header>
      </div>
    );
  }
}

export default App;
