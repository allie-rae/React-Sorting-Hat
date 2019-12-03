
import React, { Component } from 'react';
import './App.css';
import SortQuiz from './components/SortQuiz';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        Welcome to the Hogwarts Sorting Ceremony! <br />
        <SortQuiz />
      </div>
    );
  }
}

export default App;
