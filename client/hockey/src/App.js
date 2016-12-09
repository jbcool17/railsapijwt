import React, { Component } from 'react';
import logo from './logo.svg';
import HockeySearchView from './HockeySearchView';
import HockeyDataView from './HockeyDataView';
import './App.css';

var url = window.location.hostname === 'localhost' ? 'http://localhost:3000/v1' : window.location.origin + '/v1'

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: [],
            info: ''
        };
        this.searchTeamNames = this.searchTeamNames.bind(this);
    };
    searchTeamNames(e) {
        this.setState({info: 'Looking up teams...'})
        var teamName = e.target.value

        if (!teamName) {
            this.setState({ info: '' });
            document.getElementById("data").style.visibility = "hidden";
            return
        }

        fetch(url + "/standings/search/" + teamName, { method: 'GET' }).then(function(response) {
            return response.json()
        }).then(function(j) {

            var hockeyData = [];

            for (var i = 0; i < j.length; i++) {
                hockeyData.push({ id: j[i].id, team_name: j[i].team_name,
                                  games: j[i].games,
                                  wins: j[i].wins,
                                  losses: j[i].losses,
                                  losses_ot: j[i].losses_ot,
                                  points: j[i].points
                               })
            }

            if (hockeyData.length > 0) {
                console.log('Setting Hockey Data: ')
                console.log(hockeyData);
                this.setState({ data: hockeyData, info: "Team(s) Loaded..." })
                document.getElementById("data").style.visibility = "";

            } else {
                document.getElementById("data").style.visibility = "hidden";
                this.setState({info: 'Not Found.'})
            }

        }.bind(this)).catch(function(error) {
            console.log('ERROR')
            console.log(error);
        });;
    }
    render() {
        return (
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hockey API</h1>

              </div>
              <HockeySearchView onKeyUp={this.searchTeamNames}/>
              <p id="info">{this.state.info}</p>
              <HockeyDataView data={this.state.data}/>
            </div>
        );
    }
}

export default App;
