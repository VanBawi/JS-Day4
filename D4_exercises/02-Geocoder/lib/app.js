// // // TODO: Write your JS code in here
// import mapboxgl from "mapbox-gl";

// mapboxgl.accessToken = 'pk.eyJ1IjoiamFjazAwNyIsImEiOiJjanlmaHRoNXAwMWIxM25xa29rYTVjbm5uIn0.nlRnwPmyOko4V6ymg6Kdpg';
// var map = new mapboxgl.Map({
// container: 'map',
// center: [-122.420679, 37.772537],
// style: 'mapbox://styles/mapbox/streets-v11',
// zoom: 13,
// });



var myAPI ="pk.eyJ1IjoiamFjazAwNyIsImEiOiJjanlmaHRoNXAwMWIxM25xa29rYTVjbm5uIn0.nlRnwPmyOko4V6ymg6Kdpg";

var searchBar = document.querySelector(".searchBox");
searchBar.addEventListener("click", geoMapping);
searchBar.addEventListener("keypress", function(x) {
    var stri = x.which || x.keyCode;
    if (stri === 13){
    geoMapping();
    }
 });


function geoMapping(){
   
    var userInput = document.querySelector(".input");
    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + userInput.value + ".json?access_token=" + myAPI)
    .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        mapboxgl.accessToken = 'pk.eyJ1IjoiamFjazAwNyIsImEiOiJjanlmaHRoNXAwMWIxM25xa29rYTVjbm5uIn0.nlRnwPmyOko4V6ymg6Kdpg';
        var map = new mapboxgl.Map({
        container: 'map',
        center: data.features[0].center,
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 10,
        });
      });
}
   
