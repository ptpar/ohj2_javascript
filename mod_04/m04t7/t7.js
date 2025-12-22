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

//cors-virheilmoituksia varten:
/*
const proxy = 'https://users.metropolia.fi/~ilkkamtk/proxy.php?url=';
const url = 'https://api.digitransit.fi/routing/v2/hsl/gtfs/v1';
const apiAddress = proxy + encodeURIComponent(url);
*/

const apiAddress = 'https://api.digitransit.fi/routing/v2/hsl/gtfs/v1';
//tämä ei toimi: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

// fetch route with origin and target
function getRoute(origin, target) {

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
      const pointObjects = L.Polyline.fromEncoded(route).getLatLngs(); // fromEncoded: convert Google encoding to Leaflet polylines
      L.polyline(pointObjects).setStyle({
        color,
      }).addTo(map);
    }
    map.fitBounds([
      [origin.latitude, origin.longitude],
      [target.latitude, target.longitude]]);
  }).catch(function(e) {
    console.error(e.message);
  });
}


// get route from origin to target
const points = {
  start: {latitude: 60.24, longitude: 24.74},
  end: {latitude: 60.16, longitude: 24.92},
};
L.marker([points.start.latitude, points.start.longitude]).addTo(map);
L.marker([points.end.latitude, points.end.longitude]).addTo(map);

getRoute(points.start, points.end);




