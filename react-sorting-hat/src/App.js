import React, { Component } from 'react';
import SortQuiz from './components/SortQuiz'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to the Hogwarts Sorting Ceremony! <br />
        <SortQuiz />
        <button>Get Sorted</button>
      </div>
    );
  }
}

export default App;
