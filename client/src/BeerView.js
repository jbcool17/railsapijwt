import React from 'react';
import $ from 'jquery';
// import update from 'react-addons-update'; // ES6
import './Beer.css';


var BeerView = React.createClass({
  getInitialState: function() {
    return {beer: []}
  },
  getAllClick: function(e){
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
          var beers = [];
          for(var i = 0; i < response.length; i++){
            beers.push({id: response[i].id, name: response[i].name, style: response[i].style})
          }
          this.setState({beer: beers})
        }.bind(this),
        error: function(e){console.log(e.responseText)}
      });

  },
  lookupBeer: function(e){
    var name = document.getElementById('beerName').value
    console.log(name)

    $.ajax({
        async: true,crossDomain: true,
        url: "http://localhost:3000/beers/search/" + name,
        method: "GET",
        headers: {
          "authorization": "Bearer " + localStorage.getItem('id_token')
        },
        success: function(response){
          console.log(response);
          this.setState({beer: [response]})

        }.bind(this),
        error: function(e){console.log(e.responseText)}
      });
  },
  render: function() {
    var beerNodes = this.state.beer.map(function(b){
      return (<li key={b.id} id={b.id}>{b.name} | {b.style}</li>)
    })

    return (
      <div className="BeerView">
      <h3>Beer</h3>
        <input type="text" id="beerName" placeholder="Enter Beer Name"/>
        <button onClick={this.getAllClick} id="beer">Get All Beer</button>
        <button onClick={this.lookupBeer} id="lookupBeer">Look Up Beer</button>
        <button id="addBeer">Add Beer</button>
        <button id="updateBeer">Update Beer</button>
        <button id="deleteBeer">Delete Beer</button>
        <ul className="BeerDump" onClick={this.lookupBeer}>{beerNodes}</ul>
      </div>
    );
  }
})

export default BeerView;
