import React from 'react';
import $ from 'jquery';
// import update from 'react-addons-update'; // ES6
// import './App.css';


var BeerView = React.createClass({
  getInitialState: function() {
    return {beer: []}
  },
  handleClick: function(e){
    console.log(e.target.id);

      $.ajax({
        async: true,
        crossDomain: true,
        url: "http://localhost:3000/beers",
        method: "GET",
        headers: {
          "authorization": "Bearer " + localStorage.getItem('id_token')
        },
        success: function(response){
          // console.log(JSON.stringify(response))
          var beers = this.state.beer;

          for(var i = 0; i < response.length; i++){
            beers.push({id: response[i].id, name: response[i].name, style: response[i].style})
          }

          console.log(beers)

          this.setState({beer: beers})

        }.bind(this),
        error: function(e){console.log(e.responseText)}
      });

  },
  render: function() {
    var beerNodes = this.state.beer.map(function(b){
      return (<li key={b.id}>{b.name}</li>)
    })

    return (
      <div className="BeerView">
      <h3>Beer</h3>
        <input type="text" id="beerName" placeholder="Enter Beer Name"/>
        <button onClick={this.handleClick} id="beer">Beer</button>
        <button id="addBeer">Add Beer</button>
        <button id="updateBeer">Update Beer</button>
        <button id="deleteBeer">Delete Beer</button>
        <ul className="BeerDump">{beerNodes}</ul>
      </div>
    );
  }
})

export default BeerView;
