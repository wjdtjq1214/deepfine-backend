var map;

function initTmap(){
  map = new Tmapv2.Map("map_div", {
    center : new Tmapv2.LatLng(37.56520450, 126.98702028), // 지도 초기 좌표
    zoom : 17
  });

  addMarkersTooMuch()
}

var markers = [];

function addMarkersTooMuch() {
  removeMarkers();

  var pois = JSON.parse(JSON.stringify(<%- JSON.stringify(poiArray) %>));
  
  for (const poiObj of pois) {
    console.log(poiObj)
    var marker = new Tmapv2.Marker({
      position: new Tmapv2.LatLng(poiObj.lat, poiObj.lng),
      label: poiObj.title,
      icon: '/images/pin-location.svg'
    });
    marker.setMap(map);
    markers.push(marker);
  }
}

function removeMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}