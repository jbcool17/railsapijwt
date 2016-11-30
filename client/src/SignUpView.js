import React from 'react';
import $ from 'jquery';
// import './App.css';

var url = 'http://localhost:3000';

var SignUpView = React.createClass({
  getInitialState: function() {
    return {
            confirmLink: '',
            info:''
          }

  },
  handleSignUpClick: function(e){
    console.log(e.target.id);

    console.log("Email: " + document.getElementById('email').value)
    console.log("Password: " + document.getElementById('password').value)
    console.log("passwordConfirmation: " + document.getElementById('passwordConfirmation').value)

    var email = document.getElementById('email').value,
        password = document.getElementById('password').value,
        passwordConfirmation = document.getElementById('passwordConfirmation').value,
        data = JSON.stringify({user: {email: email, password: password, passwordConfirmation: passwordConfirmation}});

      $.ajax({
        async: true,crossDomain: true,
        url: url + "/users",method: "POST",
        data: data,
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache"
        },
        success: function(response) {
          this.setState({confirmLink: response['confirm_link'],
                          info: "ComfirmLink Set! - Ready to Confirm!"})
        }.bind(this),
        error: function(e){console.log(e.responseText)}
      });

  },
  handleConfirmClick: function(e){
    console.log(e.target.id);

        $.ajax({
          "async": true,
          "crossDomain": true,
          "url": this.state.confirmLink,
          "method": "POST",
          "headers": {
            "cache-control": "no-cache"
          },
          success: function(response) {

            console.log("confirm run: ")
            console.log(response);
            this.setState({info: 'Email Has Been Confirmed!'})

          }.bind(this),
          error: function(e){console.log(e.responseText)}
        });

  },
  render: function() {
    return (
      <div className="SignUpView">
        <h3>SignUp Here & Confirm</h3>
        <p id="info">{this.state.info}</p>
        <input type="text" id="email" placeholder="Enter Email"/>
        <input type="text" id="password" placeholder="Enter Pass"/>
        <input type="text" id="passwordConfirmation" placeholder="Confirm Password"/>

        <button onClick={this.handleSignUpClick} id="signup">SignUp</button>
        <button onClick={this.handleConfirmClick} id="confirm">Confirm</button>
      </div>
    );
  }
})

export default SignUpView;
