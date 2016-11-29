import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpView from './SignUpView';
import LoginView from './LoginView';
import BeerView from './BeerView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Testing API</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <hr/>
        <SignUpView />
        <hr/>
        <LoginView />
        <hr/>
        <BeerView />
      </div>
    );
  }
}

export default App;
