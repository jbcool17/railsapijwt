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
            data: []
        };
        this.searchTeamNames = this.searchTeamNames.bind(this);
    };
    searchTeamNames(e) {
        var teamName = e.target.value

        if (!teamName) {
            this.setState({ data: [{ id: 1, team_name: "Type to Search.",
                                      games: 'N/A',
                                      wins: 'N/A',
                                      losses: 'N/A',
                                      losses_ot: 'N/A',
                                      points: 'N/A' }]
                          })
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
                this.setState({ data: hockeyData })
            } else {
                this.setState({ data: [{ id: 1, team_name: "Team Not Found",
                                        games: 'N/A',
                                        wins: 'N/A',
                                        losses: 'N/A',
                                        losses_ot: 'N/A',
                                        points: 'N/A'
                               }] })
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
              <HockeyDataView data={this.state.data}/>
            </div>
        );
    }
}

export default App;
