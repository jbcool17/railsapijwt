import React, { Component } from 'react';
// import './HockeySearchView.css';

class HockeySearchView extends Component {

  render() {
    return (
      <div className="HockeySearchView">
          <h2>Hockey Search</h2>
          <input onKeyUp={this.props.onKeyUp} type="text" id="teamNames" placeholder="Enter Team Name"/>
      </div>
    );
  }
}

export default HockeySearchView;
