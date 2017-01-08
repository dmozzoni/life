let lat = 0.0;
let lng = 0.0;

function initMap() {
  var myLatLng = {lat: 41.724, lng: -71.623};
  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
//    title: 'Hello World!',
    draggable: true
  });

  document.getElementById('submit').addEventListener('click', function() {
    geocodeLatLng(geocoder, map, infowindow);
  });


// This event listener will call addMarker() when the map is clicked.
map.addListener('click', function(event) {
  addMarker(event.latLng);
});

// google.maps.event.addListener(marker, 'dragend', function (evt) {
//     document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3) + '</p>';
// });
//
// google.maps.event.addListener(marker, 'dragstart', function (evt) {
//     document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
// });


// Adds a marker to the map and push to the array.
function addMarker(location) {
  marker.setPosition(location);
  // document.getElementById('current').innerHTML = '<p>Marker moved: Current Lat: ' + location + '</p>';
  // document.getElementById('latlng').value = String(location).slice(1,-1);
}

function findName(results, level, type) {
  for (var key in results) {
    var add = results[key];
    for (var key2 in add.address_components) {
      var add2 = add.address_components[key2];
      for (var key3 in add2.types) {
        if ((add2.types[key3].localeCompare(level)) === 0)
          return(add2[type]);
      }
    }
  }
}


function geocodeLatLng(geocoder, map, infowindow) {
  // var input = document.getElementById('latlng').value;
  // var latlngStr = input.split(',', 2);
  var latlng = {lat: marker.position.lat(), lng: marker.position.lng()};

debugger;


  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[1]) {

        document.getElementById("checklist_country").value = findName(results, 'country', 'long_name');
        document.getElementById("checklist_state").value = findName(results,'administrative_area_level_1','long_name');
        document.getElementById("checklist_county").value = findName(results,'administrative_area_level_2','short_name');
        document.getElementById("checklist_coord").value = input;

      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}


}

function setLatLng(tmpLat, tmpLng) {
  lat = tmpLat;
  lng = tmpLng;
}

// For the Checklist Show Page
function showMap() {
  var init = {lat: lat, lng: lng};
  var map = new google.maps.Map(document.getElementById('map2'), {
    zoom:11,
    center: init
  });
  var marker = new google.maps.Marker({
    position: init,
    map: map
  });
}
