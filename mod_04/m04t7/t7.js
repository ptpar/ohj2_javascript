'use strict';
// sources:
// https://digitransit.fi/en/developers/apis/1-routing-api/itinerary-planning/
// route points are in Google polyline encoded format, so you need to add support for Leafletiin:
// https://github.com/jieter/Leaflet.encoded

// show the map
const map = L.map('map').setView([60.1785553, 24.8786212], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let coordinates = [];
const form = document.querySelector('form');
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const startLoc = document.querySelector('#startpoint').value;
  const endLoc = document.querySelector('#endpoint').value;
  const startApiAddress = `https://api.digitransit.fi/geocoding/v1/search?text=${startLoc}&size=1`;
  const endApiAddress = `https://api.digitransit.fi/geocoding/v1/search?text=${endLoc}&size=1`;
  if (startLoc !== '' && endLoc !== '') {
    getCoordinates(startApiAddress);
    getCoordinates(endApiAddress);
  }
})

/* Testausta varten:
const startLoc = 'kamppi';
const endLoc = 'tuomarila';
const startApiAddress = `https://api.digitransit.fi/geocoding/v1/search?text=${startLoc}&size=1`;
const endApiAddress = `https://api.digitransit.fi/geocoding/v1/search?text=${endLoc}&size=1`;
if (startLoc !== '' && endLoc !== '') {
  getCoordinates(startApiAddress);
  getCoordinates(endApiAddress);
}
*/

// Geocoding
function getCoordinates(url) {

  const fetchOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'digitransit-subscription-key': apiKey,
    },
  };

  fetch(url, fetchOptions).then(response => {
    return response.json();
  }).then(result => {
    //console.log(result.features[0].geometry.coordinates);
    console.log(result);
    const lat = result.features[0].geometry.coordinates[1];
    const lon = result.features[0].geometry.coordinates[0];
    coordinates.push([lat, lon]);
    console.log(coordinates);
    if (coordinates.length === 2) {
      getRoute({latitude: coordinates[0][0], longitude: coordinates[0][1]},
    {latitude: coordinates[1][0], longitude: coordinates[1][1]});
      coordinates = [];
    }
    //getRoute({latitude: 60.168842, longitude: 24.931199}, {latitude: lat, longitude: lon});
  }).catch(err => console.error(err.message));

}


/*
getRoute({latitude: coordinates[0][0], longitude: coordinates[0][1]},
    {latitude: coordinates[1][0], longitude: coordinates[1][1]});

 */

// hsl-routing
//cors-virheilmoituksia varten:
/*
const proxy = 'https://users.metropolia.fi/~ilkkamtk/proxy.php?url=';
const url = 'https://api.digitransit.fi/routing/v2/hsl/gtfs/v1';
const apiAddress = proxy + encodeURIComponent(url);
*/

const apiAddress = 'https://api.digitransit.fi/routing/v2/hsl/gtfs/v1';
//tämä ei toimi: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

let polylines = L.layerGroup();
console.log(polylines);
// fetch route with origin and target
function getRoute(origin, target) {

  polylines.clearLayers();

  // GraphQL query
  const GQLQuery = `{
  plan(
    from: {lat: ${origin.latitude}, lon: ${origin.longitude}}
    to: {lat: ${target.latitude}, lon: ${target.longitude}}
    numItineraries: 1
  ) {
    itineraries {
      legs {
        startTime
        endTime
        mode
        duration
        distance
        legGeometry {
          points
        }
      }
    }
  }
}`;

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'digitransit-subscription-key': apiKey,
    },
    body: JSON.stringify({query: GQLQuery}),
  };

  fetch(apiAddress, fetchOptions).then(function(response) {
    return response.json();
  }).then(function(result) {
    console.log(result.data.plan.itineraries[0].legs);
    const googleEncodedRoute = result.data.plan.itineraries[0].legs;
    console.log(googleEncodedRoute[0]);
    console.log(googleEncodedRoute.slice(-1));
    const startDate = new Date(googleEncodedRoute[0].startTime).toTimeString().slice(0,5);
    const endDate = new Date(googleEncodedRoute.slice(-1)[0].endTime).toTimeString().slice(0,5);
    document.querySelector('#startTime').innerText = startDate;
    document.querySelector('#endTime').innerText = endDate;
    for (let i = 0; i < googleEncodedRoute.length; i++) {
      let color = '';
      switch (googleEncodedRoute[i].mode) {
        case 'WALK':
          color = 'green';
          break;
        case 'BUS':
          color = 'red';
          break;
        case 'RAIL':
          color = 'cyan';
          break;
        case 'TRAM':
          color = 'magenta';
          break;
        default:
          color = 'blue';
          break;
      }
      const route = (googleEncodedRoute[i].legGeometry.points);
      console.log(route);
      const pointObjects = L.Polyline.fromEncoded(route).getLatLngs(); // fromEncoded: convert Google encoding to Leaflet polylines
      console.log(pointObjects);
      L.polyline(pointObjects).setStyle({
        color,
      }).addTo(polylines);
      polylines.addTo(map);
      /* ilman layerGroupia:
      L.polyline(pointObjects).setStyle({
        color,
      }).addTo(map);

       */
    }
    map.fitBounds([
      [origin.latitude, origin.longitude],
      [target.latitude, target.longitude]]);
  }).catch(function(e) {
    console.error(e.message);
  });
}

// {latitude: 60.24, longitude: 24.74}, {latitude: 60.16, longitude: 24.92}
//60.1799, 24.9500
//60.1765, 24.6562
// kamppi: "coordinates": [24.931199, 60.168842] -> {latitude: 60.168842, longitude: 24.931199}
// get route from origin to target

/*
const points = {
  start: {latitude: 60.1799, longitude: 24.9500},
  end: {latitude: 60.1765, longitude: 24.6562},
};
L.marker([points.start.latitude, points.start.longitude]).addTo(map);
L.marker([points.end.latitude, points.end.longitude]).addTo(map);

 */

//getRoute(points.start, points.end);
