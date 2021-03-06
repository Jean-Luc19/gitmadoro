import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MegaClock from './components/mega-clock';
import YellowPom from './components/yellow-pom';
import TimerControls from './components/timer-controls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
            <TimerControls />
        </div>

      </div>
    );
  }
}

export default App;
