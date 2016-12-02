import React from 'react';
// import './Beer.css';


var BeerItemView = React.createClass({
  render: function() {
    return (
      <tr id={this.props.beerId}>
        <td>{this.props.beerName}</td>
        <td>Style: {this.props.beerStyle}</td>
        <td>Alcohol: {this.props.beerAlcohol}</td>
        <td>
          <button onClick={this.props.deleteBeer}>DeleteBeer</button>
          <button onClick={this.props.updateBeer}>UpdateBeer</button>
          <button onClick={this.props.showBeer}>ShowBeer</button>
        </td>
      </tr>
    );
  }
})

export default BeerItemView;
