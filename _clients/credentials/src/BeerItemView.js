import React from 'react';

var BeerItemView = React.createClass({
    render: function() {
        return (
            <tr id={this.props.beerId}>
              <td>{this.props.beerName}</td>
              <td>{this.props.beerStyle}</td>
              <td>{this.props.beerAlcohol}</td>
              <td>
                <button onClick={this.props.showBeer}>ShowBeer</button>
              </td>
            </tr>
        );
    }
})

export default BeerItemView;
