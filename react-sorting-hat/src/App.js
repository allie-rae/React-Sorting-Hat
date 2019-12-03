import React, { Component } from 'react';
import Routes from './routes/Routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to the Hogwarts Sorting Ceremony! <br />
        <Routes />
      </div>
    );
  }
}

export default App;
