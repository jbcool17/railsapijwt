import React, { Component } from 'react';
import './HockeyDataView.css';

class HockeyDataView extends Component {

    render() {
        var teamNodes = this.props.data.map(function(r) {
            return <li key={r.id}>{r.team_name} |
                            Games Played: {r.games} |
                            Wins: {r.wins} |
                            Losses: {r.losses} |
                            Overtime Losses: {r.losses_ot} |
                            Points: {r.points}
                    </li>;
        })
        return (
            <div className="HockeyDataView">
              <h2>Hockey Data <span className="info">{this.props.info}</span></h2>
              <ol id="data">{teamNodes}</ol>
            </div>
        );
    }
}

export default HockeyDataView;
