import React, { Component } from 'react';
import './HockeyDataView.css';

class HockeyDataView extends Component {
    render() {
        var teamNodes = this.props.data.map(function(r) {
            return (<tr key={r.id}id={r.id}>
                      <td>{r.team_name}</td>
                      <td>{r.games}</td>
                      <td>{r.wins}</td>
                      <td>{r.losses}</td>
                      <td>{r.losses_ot}</td>
                      <td>{r.points}</td>
                    </tr>
                );
        })
        return (
            <div className="HockeyDataView">
              <h2>Hockey Data <span className="info">{this.props.info}</span></h2>
               <table id='hockey-table'>
                <thead id='hockey-table-header' >
                  <tr>
                    <th id='team'>Team</th>
                    <th id='games' onClick={this.props.hockeySort}>Games Played</th>
                    <th id='wins' onClick={this.props.hockeySort}>Wins</th>
                    <th id='losses' onClick={this.props.hockeySort}>Losses</th>
                    <th id='losses_ot' onClick={this.props.hockeySort}>OverTime Losses</th>
                    <th id='points' onClick={this.props.hockeySort}>Points</th>
                  </tr>
                </thead>
                <tbody id='hockey-table-body'>
                  {teamNodes}
                </tbody>
              </table>
            </div>
        );
    }
}

export default HockeyDataView;
