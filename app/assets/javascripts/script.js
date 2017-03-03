let lat = 0.0;
let lng = 0.0;


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
        geocodeLatLng(geocoder, map, infowindow);
    });

    // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function(event) {
        marker.setPosition(event.latLng); // addMarker(event.latLng);
    });


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


    function geocodeLatLng(geocoder, map, infowindow) {
        var latlng = {
            lat: marker.position.lat(),
            lng: marker.position.lng()
        };

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
                        $('#new_checklist').submit();
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
}


function setLatLng(tmpLat, tmpLng) {
    lat = tmpLat;
    lng = tmpLng;
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
        geocodeLatLng(geocoder, map, infowindow);
    });

    // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function(event) {
        marker.setPosition(event.latLng);
    });

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


    function geocodeLatLng(geocoder, map, infowindow) {
        var latlng = {
            lat: marker.position.lat(),
            lng: marker.position.lng()
        };

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
                        $('form').submit();
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
}
