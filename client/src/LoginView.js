import React from 'react';
import $ from 'jquery';
// import './App.css';


var LoginView = React.createClass({
  handleClick: function(e){
    console.log(e.target.id);
    console.log("Email: " + document.getElementById('loginEmail').value)
    console.log("Password: " + document.getElementById('loginPassword').value)

     var email = document.getElementById('loginEmail').value,
        password = document.getElementById('loginPassword').value,
        data = JSON.stringify({email: email, password: password});

      $.ajax({
        async: true,crossDomain: true,
        url: "http://localhost:3000/users/login",method: "POST",
        data: data,
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache"
        },
        success: function(response) {
          console.log((response))
          localStorage.setItem('id_token', response['auth_token'])
        },
        error: function(e){console.log(e.responseText)}
      });
  },
  render: function() {
    return (
      <div className="LoginView">
      <h3>Login Here</h3>
        <input type="text" id="loginEmail" placeholder="Enter Email"/>
        <input type="text" id="loginPassword" placeholder="Enter Pass"/>
        <button onClick={this.handleClick} id="login">Log In</button>
      </div>
    );
  }
})

export default LoginView;
