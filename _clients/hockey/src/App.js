import React, { Component } from 'react';
import HockeySearchView from './HockeySearchView';
import HockeyDataView from './HockeyDataView';
import sortBy from './sortHelpers';

var url = window.location.hostname === 'localhost' ? 'http://localhost:3000/v1' : window.location.origin + '/v1'

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: [],
            info: ''
        };

        this.searchTeamNames = this.searchTeamNames.bind(this);
        this.hockeySort = this.hockeySort.bind(this);
    };
    searchTeamNames(e) {
        this.setState({info: '- Looking up teams...'})
        var teamName = e.target.value.trim();

        if (!teamName) {
            this.setState({ info: '' });
            document.getElementById("hockey-table").style.visibility = "hidden";

            var tableHeaders = document.getElementsByTagName('th');
            for (var i = 0; i < tableHeaders.length; i++){
              tableHeaders[i].style.background = '';
            }

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
                this.setState({ data: hockeyData, info: "- Team(s) Loaded..." })
                document.getElementById("hockey-table").style.visibility = "";

            } else {
                document.getElementById("hockey-table").style.visibility = "hidden";
                var tableHeaders = document.getElementsByTagName('th');
                for (var k = 0; k < tableHeaders.length; k++){
                  tableHeaders[k].style.background = '';
                }
                this.setState({info: '- Not Found.'})
            }

        }.bind(this)).catch(function(error) {
            console.log('ERROR')
            console.log(error);
        });;
    }
    hockeySort(e){
      var id = e.target.id,
          tableHeaders = document.getElementsByTagName('th'),
          d = sortBy[e.target.id](this.state.data);
      this.setState({data: d});
      console.log("Sorting: " + id)

      for (var l = 0; l < tableHeaders.length; l++){
        tableHeaders[l].style.background = '';
      }
      document.getElementById(id).style.background = "darkblue";
    }
    componentDidMount() {
      document.getElementById("hockey-table").style.visibility = "hidden";
    }
    render() {

        return (
            <div className="App">
              <div className='title'>
                <h2>Hockey API</h2>
              </div>
              <HockeySearchView onKeyUp={this.searchTeamNames}/>
              <HockeyDataView data={this.state.data} info={this.state.info} hockeySort={this.hockeySort}/>
            </div>
        );
    }
}

export default App;
