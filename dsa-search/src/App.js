import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: 0
    }
  }

  onSubmit(e) {
    this.setState({
      input: e
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
          }}>
            <label>
              Input:
              <input type="text" onChange={(e) => {
                const val = e.target.value;
                console.log(val);
                this.setState({ input: val });
                console.log(this.state);
              }}name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
