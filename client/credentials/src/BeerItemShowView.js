import React from 'react';
// import './Beer.css';


var BeerItemShowView = React.createClass({
  render: function() {
    return (
      <li id={this.props.beerId}>
        {this.props.beerName} |
        <button onClick={this.props.deleteBeer}>DeleteBeer</button>
        <button onClick={this.props.updateBeer}>UpdateBeer</button>
        <button onClick={this.props.ShowBeer}>ShowBeer</button>
      </li>
    );
  }
})

export default BeerItemShowView;
