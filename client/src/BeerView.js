import React from 'react';
import $ from 'jquery';
// import update from 'react-addons-update'; // ES6
import './Beer.css';
import BeerItemView from './BeerItemView';


var BeerView = React.createClass({
  getInitialState: function() {
    return {beer: []}
  },
  getAllBeer: function(e){
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
  deleteBeer:function(e){
    console.log(e.target.parentNode.id)
    var id = e.target.parentNode.id;
        $.ajax({
          async: true,
          crossDomain: true,
          url: "http://localhost:3000/beers/" + id,
          method: "DELETE",
          headers: {
            "authorization": "Bearer " + localStorage.getItem('id_token'),
            "content-type": "application/json",
            "cache-control": "no-cache"
          },
          success: function(response){
            console.log(response);
            $('#'+ id).remove();
          },
          error: function(e){console.log(e.responseText)}
      });
  },
  updateBeer:function(e){
    console.log(e.target.parentNode.id)
  },
  render: function() {
    var deleteBeer = this.deleteBeer,
        updateBeer = this.updateBeer;
    var beerNodes = this.state.beer.map(function(b){
      return (<BeerItemView
                key={b.id}
                beerId={b.id}
                beerName={b.name}
                deleteBeer={deleteBeer}
                updateBeer={updateBeer}
        />)
    })

    return (
      <div className="BeerView">
      <h3>Beer</h3>
        <input type="text" id="beerName" placeholder="Enter Beer Name"/>
        <button onClick={this.getAllBeer} id="beer">Get All Beer</button>
        <button onClick={this.lookupBeer} id="lookupBeer">Look Up Beer</button>
        <button id="addBeer">Add Beer</button>
        <h3>List</h3>
        <ul className="BeerDump">{beerNodes}</ul>
      </div>
    );
  }
})

export default BeerView;
