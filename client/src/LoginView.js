import React from 'react';
import $ from 'jquery';
// import './App.css';

var url = 'http://localhost:3000';

var LoginView = React.createClass({
  getInitialState: function() {
    return {
      currentUser: localStorage.getItem('currentUser')
    }
  },
  handleLogIn: function(e){
    console.log(e.target.id);
    console.log("Email: " + document.getElementById('loginEmail').value)
    console.log("Password: " + document.getElementById('loginPassword').value)

     var email = document.getElementById('loginEmail').value,
        password = document.getElementById('loginPassword').value,
        data = JSON.stringify({email: email, password: password});

      $.ajax({async: true,crossDomain: true,
        url: url + "/users/login",method: "POST",
        data: data,
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache"
        },
        success: function(response) {
          console.log((response));
          localStorage.setItem('id_token', response['auth_token'])
          localStorage.setItem('currentUser', email)
          this.setState({currentUser: email});
        }.bind(this),
        error: function(e){console.log(e.responseText)}
      });
  },
  handleLogOut: function(){
    localStorage.removeItem('id_token')
    localStorage.setItem('currentUser', 'No User Logged In')
    this.setState({currentUser: 'No User Logged In'});
  },
  render: function() {
    return (
      <div className="LoginView">
      <h3>Login Here</h3>
      <p>Current User: {this.state.currentUser}</p>
        <input type="text" id="loginEmail" placeholder="Enter Email"/>
        <input type="text" id="loginPassword" placeholder="Enter Pass"/>
        <button onClick={this.handleLogIn} id="login">Log In</button>
        <button onClick={this.handleLogOut} id="login">Log Out</button>
      </div>
    );
  }
})

export default LoginView;
