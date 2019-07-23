// // TODO: Write your JS code in here
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiamFjazAwNyIsImEiOiJjanlmaHRoNXAwMWIxM25xa29rYTVjbm5uIn0.nlRnwPmyOko4V6ymg6Kdpg";

var map = new mapboxgl.Map({
  container: "map",
  center: [-122.420679, 37.772537],
  zoom: 13,
  style: "mapbox://styles/mapbox/streets-v11",
  hash: true,
  transformRequest: (url, resourceType)=> {
    if(resourceType === "Source" && url.startsWith("http://myHost")) {
      return {
        url: url.replace("http", "https"),
        headers: { "my-custom-header": true},
        credentials: "include"  // Include cookies for cross-origin requests
      }
    }
  }
});

// new mapboxgl.Marker()
//   .setLngLat([ -0.077, 51.533 ])
//   .addTo(map);

// var api = "pk.eyJ1IjoiamFjazAwNyIsImEiOiJjanlmaHRoNXAwMWIxM25xa29rYTVjbm5uIn0.nlRnwPmyOko4V6ymg6Kdpg";

// var userInput = document.querySelector("#input");
// userInput.addEventListener("click", function() {
//   const url =`https://api.mapbox.com/geocoding/v5/mapbox.places/Kuala%20Lumpur.json?access_token=${api}`;

//   fetch(url, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);

//     //   for(const i in data.words)
//     //     var x = document.createElement("LI"); 
//     //   var textnode = document.createTextNode("");                       
//     //   textnode.appendChild(x).innerHTML = i;                              
//     });
// });

// var https = require('https');

// function geocode(mapboxAccessToken, query, callback) {
//     https.get('https://api.tiles.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(query) + '.json?access_token=' + mapboxAccessToken,
//         function(response) {
//             var body = '';
//             response.on('data', function(d) {
//                 body += d;
//             });
//             response.on('error', function(e) {
//                 callback(e);
//             });
//             response.on('end', function() {
//                 callback(null, JSON.parse(body));
//             });
//         });
// }

// if (require.main === module) {
//     if (!process.env.MapboxAccessToken) {
//         console.log('environment variable MapboxAccessToken must be set');
//         process.exit(1);
//     }
//     geocode(process.env.MapboxAccessToken, process.argv[2], function(err, result) {
//         if (err) return console.log('Error: ' + err);
//         console.log(JSON.stringify(result, null, 2));
//     });
// }

// module.exports = geocode;

