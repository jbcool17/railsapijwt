import React from 'react';
import $ from 'jquery';
// import update from 'react-addons-update'; // ES6
import './Beer.css';
import BeerItemView from './BeerItemView';

var url = 'http://localhost:3000/v1';

var BeerView = React.createClass({
  getInitialState: function() {
    return {beer: []}
  },
  getAllBeer: function(e){
    console.log("Getting all beer.");

      fetch(url + "/beers", {
        method: 'GET',
        headers: {"authorization": "Bearer " + localStorage.getItem('id_token')}
      }).then( function(response){
        return response.json()
      }).then( function(j){
          var beers = [];

          for(var i = 0; i < j.length; i++){
            beers.push({id: j[i].id,
                        name: j[i].name,
                        style: j[i].style,
                        alcohol: j[i].alcohol
                      })
          }

          this.setState({beer: beers})
        }.bind(this)).catch(function(error) {
          console.log(error);
      });;
  },
  lookupBeer: function(e){
    var name = document.getElementById('beerName').value
    console.log("Looking Up Beer")

    $.ajax({async: true,crossDomain: true,
        url: url + "/beers/search/" + name,
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
  showBeer: function(e){
    console.log(e.target.parentNode.id)
    var id = e.target.parentNode.id,
        config = {method: "GET",headers: {"authorization": "Bearer " + localStorage.getItem('id_token')}}

    fetch(url + "/beers/" + id, config).then(function(response){
      return response.json();
    }).then(function(j){
      this.setState({beer: [j]})
    }.bind(this)).catch(function(error){
      console.log(error);
    });

  },
  deleteBeer:function(e){
    console.log(e.target.parentNode.id)
    var id = e.target.parentNode.id,
        config = {method: "DELETE",headers: {
            "authorization": "Bearer " + localStorage.getItem('id_token'),
            "content-type": "application/json",
            "cache-control": "no-cache"
          }};

    fetch(url + "/beers/" + id, config).then(function(response){
      return response.json();
    }).then(function(j){
      console.log(j);
      $('#'+ id).remove();
    }).catch(function(error){
      console.log(error);
    });

  },
  updateBeer:function(e){
    console.log("Update Beer: NEED TO BE SET" + e.target.parentNode.id)
  },
  render: function() {
    var deleteBeer = this.deleteBeer,
        updateBeer = this.updateBeer,
        showBeer = this.showBeer;
    var beerNodes = this.state.beer.map(function(b){
      return (<BeerItemView
                key={b.id}
                beerId={b.id}
                beerName={b.name}
                beerStyle={b.style}
                beerAlcohol={b.alcohol}
                deleteBeer={deleteBeer}
                updateBeer={updateBeer}
                showBeer={showBeer}

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
