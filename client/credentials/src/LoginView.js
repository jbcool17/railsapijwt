import React from 'react';

var url = window.location.hostname === 'localhost' ? 'http://localhost:3000' : window.location.origin

var LoginView = React.createClass({
    getInitialState: function() {
        return {
            currentUser: localStorage.getItem('currentUser')
        }
    },
    handleLogIn: function(e) {
        console.log(e.target.id);
        console.log("Email: " + document.getElementById('loginEmail').value)
        console.log("Password: " + document.getElementById('loginPassword').value)

        var email = document.getElementById('loginEmail').value,
            password = document.getElementById('loginPassword').value,
            data = JSON.stringify({
                email: email,
                password: password
            }),
            config = {
                method: "POST",
                body: data,
                headers: {
                    "content-type": "application/json"
                }
            };

        fetch(url + "/users/login", config).then(function(response) {
            return response.json();
        }).then(function(j) {
            console.log((j));
            localStorage.setItem('id_token', j['auth_token'])
            localStorage.setItem('currentUser', email)

            if (j.error) {
                this.setState({
                    currentUser: 'Log In Error - Check Console!'
                });
            } else {
                this.setState({
                    currentUser: email
                });
            }

        }.bind(this)).catch(function(error) {
            console.log(error);
        });
    },
    handleLogOut: function() {
        localStorage.removeItem('id_token')
        localStorage.setItem('currentUser', 'No User Logged In')
        this.setState({
            currentUser: 'No User Logged In'
        });
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
