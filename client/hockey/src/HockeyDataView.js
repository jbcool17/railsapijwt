import React, { Component } from 'react';
import './HockeyDataView.css';

class HockeyDataView extends Component {

  render() {
    var teamNodes = this.props.data.map(function(r){
      return <li key={r.id}>{r.team_name}</li>;
    })
    return (
      <div className="HockeyDataView">
          <h2>Hockey Data</h2>
          <ul id="data">{teamNodes}</ul>
      </div>
    );
  }
}

export default HockeyDataView;
