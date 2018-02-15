import React, { Component } from 'react';
import squiggly_left from './squiggly_left.png';
import Issues from './issues.js';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <img src={squiggly_left} className="squirly" alt="logo" />
                <Issues/>
            </div>
        );
    }
}

export default App;
