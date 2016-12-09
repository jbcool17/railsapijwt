
function dateNumber(text){
  return text.split('T').shift().split('-').reverse().join('') 
}
function dateString(text){
  return text.split('T').shift().split('-').reverse().join('/') 
}
function reverse(s){
    return s.split("").reverse().join("");
}


var gitGet = function(){

  $.ajax( {
      url: 'https://api.github.com/users/jbcool17/repos',
      type: 'GET',
      dataType: 'json',
      complete: function (response) {
        
        var searchData = JSON.parse(response.responseText);
        console.log(searchData);
        $("#loading").hide();
        $("#results").hide();
        for (var i = 0; i < searchData.length; i++ ) {
          
          var lastUpdate = dateString(searchData[i].updated_at)
          var dateNum = dateNumber(searchData[i].updated_at)

          // if ( parseInt(reverse(dateNum)) >  51021010 ) {
            
            $("#results ul").append('<li class="box"><a href=" '+ searchData[i].html_url + ' " target="_blank">' + searchData[i].name + '</a><p>Language: ' + searchData[i].language + '</p> <p> Last Update:' + lastUpdate + '</p> <p> Description: ' + searchData[i].description + '</p> </li>');  
            $("#results").fadeIn(1000);
          // }

        }
      
      },
      error: function (jqXHR,  textStatus,  errorThrown) {
        console.log(textStatus);
      }});
}


$(document).ready(function () {

  $("#button").on('click', function(){
    console.log("HELLO")
  });

  setTimeout(gitGet(), 1000);

});


