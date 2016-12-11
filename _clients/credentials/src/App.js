import React from 'react';
import SignUpView from './SignUpView';
import LoginView from './LoginView';
import BeerView from './BeerView';

var App = React.createClass({
    render: function() {
        return (
            <div className="App">
              <div className='title'>
                <h2>Testing API</h2>
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
