// // // TODO: Write your JS code in here
// import mapboxgl from "mapbox-gl";

// mapboxgl.accessToken = "pk.eyJ1IjoiamFjazAwNyIsImEiOiJjanlmaHRoNXAwMWIxM25xa29rYTVjbm5uIn0.nlRnwPmyOko4V6ymg6Kdpg";

// var map = new mapboxgl.Map({
//   container: "map",
//   center: [-122.420679, 37.772537],
//   zoom: 1,
//   style: "mapbox://styles/mapbox/streets-v11",
//   hash: true,
//   transformRequest: (url, resourceType)=> {
//     if(resourceType === "Source" && url.startsWith("http://myHost")) {
//       return {
//         url: url.replace("http", "https"),
//         headers: { "my-custom-header": true},
//         credentials: "include"  // Include cookies for cross-origin requests
//       }
//     }
//   }
// });

// // new mapboxgl.Marker()
// //   .setLngLat([ -0.077, 51.533 ])
// //   .addTo(map);
// var latEl = document.querySelector( '.latitude' );
// var longEl = document.querySelector( '.longitude' );
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


