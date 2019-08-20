
// assumes window.markers = [];

function centerAndZoom(map, markers) {
    var bounds = new google.maps.LatLngBounds();
    for(var i = 0; i < markers.length; i++) {
    bounds.extend(markers[i].getPosition());
    }

    //center the map to the geometric center of all markers
    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds);

    // Maximum zoom level of 15
    map.setZoom(Math.min(map.getZoom() - 1, 15));
}

