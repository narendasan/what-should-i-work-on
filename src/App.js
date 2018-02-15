import React, { Component } from 'react';
import squiggly_left from './squiggly_left.png';
import './App.css';

const QUERY =  "https://api.github.com/search/issues?q=label:HackIllinois2018&sort=comments&order=desc"

class App extends Component {
  render() {
    fetch(QUERY, {method: 'GET',
                  headers: {
                      'Accept': 'application/vnd.github.preview',
                      'Content-Type': 'application/json',
                  }}).then((response) => response.json())
                     .then((responseJson) => {
                      console.log(responseJson);
                  });
    return (
      <div className="App">
          <img src={squiggly_left} className="squirly" alt="logo" />
      </div>
    );
  }
}

export default App;
