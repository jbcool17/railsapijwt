import React from 'react';
import $ from 'jquery';
import './Beer.css';
import BeerItemView from './BeerItemView';

var url = window.location.hostname === 'localhost' ? 'http://localhost:3000/v1' : window.location.origin + '/v1'

var BeerView = React.createClass({
    getInitialState: function() {
        return { beer: [], beerCount: 0 }
    },
    componentDidMount: function() {
        document.getElementById("thead").style.visibility = "hidden";
    },
    getAllBeer: function(e) {
        console.log("Getting all beer.");

        fetch(url + "/beers", {
            method: 'GET',
            headers: { "authorization": "Bearer " + localStorage.getItem('id_token') }
        }).then(function(response) {
            return response.json()
        }).then(function(j) {
            var beers = [];

            for (var i = 0; i < j.length; i++) {
                beers.push({
                    id: j[i].id,
                    name: j[i].name,
                    style: j[i].style,
                    alcohol: j[i].alcohol
                })
            }

            this.setState({ beer: beers, beerCount: beers.length })
            document.getElementById("thead").style.visibility = "";
        }.bind(this)).cach(function(error) {
            console.log('ERROR');
            console.log(error);
        });;
    },
    lookupBeer: function(e) {
        var name = document.getElementById('beerName').value
        console.log("Looking Up Beer")

        if (!name) {
            document.getElementById("thead").style.visibility = "hidden";
            this.setState({ beer: [], beerCount: 0 })
            return
        }

        $.ajax({
            async: true,
            crossDomain: true,
            url: url + "/beers/search/" + name,
            method: "GET",
            headers: {
                "authorization": "Bearer " + localStorage.getItem('id_token')
            },
            success: function(j) {
                console.log(j);
                var beers = [];

                for (var i = 0; i < j.length; i++) {
                    beers.push({
                        id: j[i].id,
                        name: j[i].name,
                        style: j[i].style,
                        alcohol: j[i].alcohol
                    })
                }

                this.setState({ beer: beers, beerCount: beers.length })
                document.getElementById("thead").style.visibility = "";
            }.bind(this),
            error: function(e) { console.log(e.responseText) }
        });
    },
    showBeer: function(e) {
        console.log(e.target.parentNode.parentNode.id)
        var id = e.target.parentNode.parentNode.id,
            config = { method: "GET", headers: { "authorization": "Bearer " + localStorage.getItem('id_token') } }

        fetch(url + "/beers/" + id, config).then(function(response) {
            return response.json();
        }).then(function(j) {
            console.log(j)
            this.setState({ beer: [j], beerCount: 1 })
        }.bind(this)).catch(function(error) {
            console.log(error);
        });

    },
    deleteBeer: function(e) {
        console.log(e.target.parentNode.parentNode.id)
        var id = e.target.parentNode.parentNode.id,
            config = {
                method: "DELETE",
                headers: {
                    "authorization": "Bearer " + localStorage.getItem('id_token'),
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                }
            };

        fetch(url + "/beers/" + id, config).then(function(response) {
            return response.json();
        }).then(function(j) {
            console.log(j);
            // $('#'+ id).remove(); - NEEDS TO UPDATE STATE
        }).catch(function(error) {
            console.log('ERROR');
            console.log(error);
        });

    },
    updateBeer: function(e) {
        console.log("Update Beer: NEEDS TO BE SET" + e.target.parentNode.id)
    },
    render: function() {
        var deleteBeer = this.deleteBeer,
            updateBeer = this.updateBeer,
            showBeer = this.showBeer;

        var beerNodes = this.state.beer.map(function(b) {
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
        beerNodes.unshift()

        return (
            <div className="BeerView">
              <h3>Beer</h3>
              <input onKeyUp={this.lookupBeer} type="text" id="beerName" placeholder="Enter Beer Name"/>
              <button onClick={this.lookupBeer} id="lookupBeer">Look Up Beer</button>
              <button onClick={this.getAllBeer} id="beer">Get All Beer</button>
              <h3>List({this.state.beerCount})</h3>
              <table>
                <thead id='thead'>
                  <tr>
                    <th>Name</th>
                    <th>Style</th>
                    <th>Alcohol %</th>
                    <th>Buttons</th>
                  </tr>
                </thead>
                <tbody>
                  {beerNodes}
                </tbody>
              </table>
            </div>
        );
    }
})

export default BeerView;
