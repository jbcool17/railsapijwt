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
    this.searchTeamNames=this.searchTeamNames.bind(this);
  };
  searchTeamNames(e) {
    console.log(e.target.value)
    var teamName = e.target.value

    if (!teamName){
      this.setState({data: [{id: 1, team_name: "Empty!"}]})
      return
    }

    fetch(url + "/standings/search/" + teamName, {method: 'GET'}).then( function(response){
        return response.json()
      }).then( function(j){

          var hockeyData = [];

          for (var i = 0; i < j.length; i++){
            hockeyData.push({id: j[i].id,team_name: j[i].team_name})
          }

          if ( hockeyData.length > 0 ){
            console.log("setting hockey data")
            this.setState({data: hockeyData})
          } else {
            this.setState({data: [{id: 1, team_name: "not found"}]})
          }

        }.bind(this)).catch(function(error) {
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
