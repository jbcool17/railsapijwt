import React from 'react';
// import './Beer.css';


var BeerItemView = React.createClass({
  render: function() {
    return (
      <li id={this.props.beerId}>
        {this.props.beerName}, {this.props.beerStyle}, {this.props.beerAlcohol} |
        <button onClick={this.props.deleteBeer}>DeleteBeer</button>
        <button onClick={this.props.updateBeer}>UpdateBeer</button>
        <button onClick={this.props.showBeer}>ShowBeer</button>
      </li>
    );
  }
})

export default BeerItemView;
