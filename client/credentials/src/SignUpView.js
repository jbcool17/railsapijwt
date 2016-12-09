import React from 'react';

var url = window.location.hostname === 'localhost' ? 'http://localhost:3000' : window.location.origin

var SignUpView = React.createClass({
    getInitialState: function() {
        return {
            confirmLink: '',
            info: ''
        }

    },
    handleSignUpClick: function(e) {
        this.setState({ info: "Signing Up..." })
        var email = document.getElementById('email').value,
            password = document.getElementById('password').value,
            passwordConfirmation = document.getElementById('passwordConfirmation').value,
            data = JSON.stringify({ user: { email: email, password: password, password_confirmation: passwordConfirmation } }),
            config = {
                method: "POST",
                body: data,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                }
            };

        fetch(url + "/users", config).then(function(response) {
            return response.json();
        }).then(function(j) {
            console.log((j));

            if (j.errors) {
                this.setState({ info: "Error Occured - Check Console!" })
            } else {
                this.setState({
                    confirmLink: j['confirm_link'],
                    info: "ComfirmLink Set! - Ready to Confirm!"
                })
            }
        }.bind(this)).catch(function(error) {
            console.log("ERROR!")
            console.log(error);
            this.setState({ info: "Error Occured - Check Console!" })
        }.bind(this));

    },
    handleConfirmClick: function(e) {
        this.setState({ info: "Confirming please wait..." })
        var config = { method: "POST", headers: { "cache-control": "no-cache" } };

        fetch(this.state.confirmLink, config).then(function(response) {
            return response.json();
        }).then(function(j) {
            console.log(j);

            if (j.errors){
              this.setState({ info: 'An Error Has Occurs - Check Console!' });
            } else {
              this.setState({ info: 'Email Has Been Confirmed!' });
            }

        }.bind(this)).catch(function(error) {
            console.log(error);
            this.setState({ info: "Error Occured - Check Console!" })
        }.bind(this));

    },
    render: function() {
        return (
          <div className="SignUpView">
            <h3>Sign Up Here & Confirm</h3>
            <p id="info">{this.state.info}</p>
            <input type="text" id="email" placeholder="Enter Email"/>
            <input type="text" id="password" placeholder="Enter Pass"/>
            <input type="text" id="passwordConfirmation" placeholder="Confirm Password"/>

            <button onClick={this.handleSignUpClick} id="signup">Sign Up</button>
            <button onClick={this.handleConfirmClick} id="confirm">Confirm</button>
          </div>
        );
    }
})

export default SignUpView;
