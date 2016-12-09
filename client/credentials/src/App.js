import React from 'react';
import './App.css';
import SignUpView from './SignUpView';
import LoginView from './LoginView';
import BeerView from './BeerView';

var App = React.createClass({
    render: function() {
        return (
            <div className="App">
              <div className="App-header">
                <h1 className='title'>Testing API</h1>
              </div>
              <SignUpView/>
              <hr/>
              <LoginView/>
              <hr/>
              <BeerView/>
            </div>
        );
    }
})

export default App;
