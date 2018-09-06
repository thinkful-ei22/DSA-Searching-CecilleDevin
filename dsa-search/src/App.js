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
      linearCounter: 0,
      inputArr2: [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5],
      inputArr3: [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5],
      inputArr4: [28, 41, 19, 36, 12, 4, 18, 22, 35, 43, 9]
    };
  }


  swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  partition(array, start, end) {
      const pivot = array[end - 1];
      let j = start;
      for (let i=start; i<end - 1; i++) {
          if (array[i] <= pivot) {
              this.swap(array, i, j);
              j++;
          }
      }
      this.swap(array, end-1, j);
      return j;
  }

  quickSort(array, start=0, end=array.length) {
    if (start >= end) {
        return array;
    }
    const middle = this.partition(array, start, end);
    array = this.quickSort(array, start, middle);
    array = this.quickSort(array, middle + 1, end);
    console.log('Quicksort product');
    console.log(array);
    return array;
  }

  merge(left, right, array) {
      let leftIndex = 0;
      let rightIndex = 0;
      let outputIndex = 0;
      while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) {
              array[outputIndex++] = left[leftIndex++];
          }
          else {
              array[outputIndex++] = right[rightIndex++];
          }
      }

      for (let i=leftIndex; i<left.length; i++) {
          array[outputIndex++] = left[i];
      }

      for (let i=rightIndex; i<right.length; i++) {
          array[outputIndex++] = right[i];
      }
      return array;
  }

  mergeSort(array) {
      if (array.length <= 1) {
          return array;
      }

      const middle = Math.floor(array.length / 2);
      let left = array.slice(0, middle);
      let right = array.slice(middle, array.length);

      left = this.mergeSort(left);
      right = this.mergeSort(right);

      let merge = this.merge(left, right, array);
      console.log(merge);
      return merge;
  }

  // [28, 41, 19, 36, 12, 4, 18, 22, 35, 43, 9]
  //start: 4 - index 5
  //end: 43, 9

  //first loop
  //i starts at 4 + 14 + ...

  bucketSort(array, s, e) {
    let start = s;
    let end = e;
    let bucketArray = [];

    for(let i = 0; i*10 + start <= end; i++) {
      console.log('heyo');
      bucketArray[i] = [];
    }
    console.log(bucketArray);
    for(let i = 0; i < array.length; i++) {
      let val = array[i];
      let bucketIndex = Math.floor((val - start) / 10);
      // console.log(val);
      // console.log(bucketArray[bucketIndex]);
      bucketArray[bucketIndex].push(val);
    }
    let mommaArray = [];
    for(let i = 0; i < bucketArray.length; i++) {
      bucketArray[i].sort((a,b)=>a-b);
      bucketArray[i].forEach(item => mommaArray.push(item));
    }
    console.log(mommaArray);
    return mommaArray;
  }

  randomizeArray(array){
    for(let i = 0; i < array.length; i++){
      let idx1 = Math.floor(Math.random()*array.length);
      let idx2 = Math.floor(Math.random()*array.length);
      this.swap(array, idx1, idx2);
    }
    return array;
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
                // this.setState({ input: val });
                // this.indexOf(this.state.inputArr, val);
                // this.binarySearch(this.state.sortMeArr.sort(), val);
                // this.quickSort(this.state.inputArr2);
                // this.mergeSort(this.state.inputArr3);
                this.bucketSort(this.state.inputArr4, 4, 43);
                console.log(this.randomizeArray(this.state.inputArr4));
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
