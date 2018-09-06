import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: 0,
      inputArr: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      sortMeArr: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      linearCounter: 0
    };
  }

  onSubmit(e) {
    this.setState({
      input: e
    });
  }

  indexOf(array, value) {
    let counter = 0;
    for (let i=0; i<array.length; i++) {
        counter++;
        this.setState({
          linearCounter: counter
        });
        if (array[i] == value) {
            console.log('Linear: It took this many iterations: ', counter);
            return i;
        }
    }
    console.log(`Linear: Didn't find counter! Searched ${counter} items`);
    return -1;
  }

  //This is not working properly (odd targets seem to freqently error)
  //I'm gonna go ahead and not spend all day debugging something that was
  //given and should've worked out of the box
  binarySearch(array, value, inputStart, inputEnd, counter = 1) {
    var start = inputStart === undefined ? 0 : inputStart;
    var end = inputEnd === undefined ? array.length : inputEnd;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end, 'targetval: ', value, 'item: ', item);

    if (item == value) {
        console.log(`BinarySearch found in ${counter} tries`);
        return index;
    }
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, end, counter+1);
    }
    else if (item > value) {
        return this.binarySearch(array, value, start, index - 1, counter+1);
    }else{
      console.log('I hope this triggers on not found');
    }
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
                this.setState({ input: val });
                this.indexOf(this.state.inputArr, val);
                this.binarySearch(this.state.sortMeArr.sort(), val);
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
