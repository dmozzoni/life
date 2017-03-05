let lat = 0.0;
let lng = 0.0;


// Set the lat, lng global values
function setLatLng(tmpLat, tmpLng) {
    lat = tmpLat;
    lng = tmpLng;
}

// Find the a value from Google Maps API response object
function findName(results, level, type) {
    for (var key in results) {
        var add = results[key];
        for (var key2 in add.address_components) {
            var add2 = add.address_components[key2];
            for (var key3 in add2.types) {
                if ((add2.types[key3].localeCompare(level)) === 0)
                    return (add2[type]);
            }
        }
    }
}

// Geocoder to get names from marker position
function geocodeLatLng(geocoder, map, latlng, elementStr) {
    geocoder.geocode({
        'location': latlng
    }, function(results, status) {
        if (status === 'OK') {
            if (results[1]) {
                document.getElementById("checklist_country").value = findName(results, 'country', 'long_name');
                document.getElementById("checklist_state").value = findName(results, 'administrative_area_level_1', 'long_name');
                document.getElementById("checklist_county").value = findName(results, 'administrative_area_level_2', 'short_name');
                document.getElementById("checklist_coord").value = String(latlng.lat) + ',' + String(latlng.lng);
                if (document.getElementById("checklist_location").value !== '' && document.getElementById("checklist_date").value !== '') {
                    $(elementStr).submit();
                } else {
                    alert('Form incomplete');
                }
            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });
}


// For the Checklist New Page
function initMap() {
    var myLatLng = {
        lat: lat,
        lng: lng
    };
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        draggable: true
    });

    $('#dumbbutton').on('click', function(e) {
        var latlng = {
          lat: marker.position.lat(),
          lng: marker.position.lng()
        };
        geocodeLatLng(geocoder, map, latlng, '#new_checklist');
    });

    // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function(event) {
        marker.setPosition(event.latLng); // addMarker(event.latLng);
    });
}


// For the Checklist Show Page
function showMap() {
    var init = {
        lat: lat,
        lng: lng
    };
    var map = new google.maps.Map(document.getElementById('map2'), {
        zoom: 11,
        center: init
    });
    var marker = new google.maps.Marker({
        position: init,
        map: map
    });
}


// For the Checklist Edit Page
function initMap2() {
    var myLatLng = {
        lat: lat,
        lng: lng
    };
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;
    var map = new google.maps.Map(document.getElementById('map3'), {
        zoom: 11,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        draggable: true
    });

    $('#dumbbutton').on('click', function(e) {
        var latlng = {
          lat: marker.position.lat(),
          lng: marker.position.lng()
        };
        geocodeLatLng(geocoder, map, latlng, 'form');
    });

    // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function(event) {
        marker.setPosition(event.latLng);
    });
}
