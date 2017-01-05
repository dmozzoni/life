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
    title: 'Hello World!',
    draggable: true
  });

  document.getElementById('submit').addEventListener('click', function() {
    geocodeLatLng(geocoder, map, infowindow);
  });


// This event listener will call addMarker() when the map is clicked.
map.addListener('click', function(event) {
  addMarker(event.latLng);
});

google.maps.event.addListener(marker, 'dragend', function (evt) {
    document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3) + '</p>';
});

google.maps.event.addListener(marker, 'dragstart', function (evt) {
    document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
});



// initMap();

// Adds a marker to the map and push to the array.
function addMarker(location) {
  marker.setPosition(location);
  document.getElementById('current').innerHTML = '<p>Marker moved: Current Lat: ' + location + '</p>';
  // debugger;
  document.getElementById('latlng').value = String(location).slice(1,-1);
}

function findCountry(results, status) {
  for (var key in results) {
    var add = results[key];
    for (var key2 in add.address_components) {
      var add2 = add.address_components[key2];
      for (var key3 in add2.types) {
        if ((add2.types[key3].localeCompare('country')) === 0)
          return(add2['long_name']);
      }
    }
  }
};

function findState(results, status) {
  for (var key in results) {
    var add = results[key];
    for (var key2 in add.address_components) {
      var add2 = add.address_components[key2];
      for (var key3 in add2.types) {
        if ((add2.types[key3].localeCompare('administrative_area_level_1')) === 0)
          return(add2['long_name']);
      }
    }
  }
};

function findCounty(results, status) {
  for (var key in results) {
    var add = results[key];
    for (var key2 in add.address_components) {
      var add2 = add.address_components[key2];
      for (var key3 in add2.types) {
        if ((add2.types[key3].localeCompare('administrative_area_level_2')) === 0)
          return(add2['short_name']);
      }
    }
  }
};



function geocodeLatLng(geocoder, map, infowindow) {
  var input = document.getElementById('latlng').value;
  var latlngStr = input.split(',', 2);
  var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[1]) {

      document.getElementById("checklist_country").value = findCountry(results,status)
      document.getElementById("checklist_state").value = findState(results,status)
      document.getElementById("checklist_county").value = findCounty(results,status)
      document.getElementById("checklist_coord").value = input

        // map.setZoom(11);
        // var marker = new google.maps.Marker({
        //   position: latlng,
        //   map: map
        // });
        // infowindow.setContent(findCountry(results, status) + ' - ' + findState(results, status) + ' - ' + findCounty(results, status));
        // infowindow.open(map, marker);



      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}


}
