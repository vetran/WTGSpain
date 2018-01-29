
function initMap() {

    var locations = [
        {lat: -31.563910, lng: 147.154312},
        {lat: -33.718234, lng: 150.363181},
        {lat: -33.727111, lng: 150.371124},
        {lat: -33.848588, lng: 151.209834},
        {lat: -33.851702, lng: 151.216968},
        {lat: -34.671264, lng: 150.863657},
        {lat: -35.304724, lng: 148.662905},
        {lat: -36.817685, lng: 175.699196},
        {lat: -36.828611, lng: 175.790222},
        {lat: -37.750000, lng: 145.116667},
        {lat: -37.759859, lng: 145.128708},
        {lat: -37.765015, lng: 145.133858},
        {lat: -37.770104, lng: 145.143299},
        {lat: -37.773700, lng: 145.145187},
        {lat: -37.774785, lng: 145.137978},
        {lat: -37.819616, lng: 144.968119},
        {lat: -38.330766, lng: 144.695692},
        {lat: -39.927193, lng: 175.053218},
        {lat: -41.330162, lng: 174.865694},
        {lat: -42.734358, lng: 147.439506},
        {lat: -42.734358, lng: 147.501315},
        {lat: -42.735258, lng: 147.438000},
        {lat: -43.999792, lng: 170.463352}
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {lat: -28.024, lng: 140.887}
    });

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
(function(){
    var doc = document,clusterScript,mapScript,
        apiKey = 'AIzaSyD2Krnm7V0N0stiDE7aVtQEDVLXRr-Vyuc';

    clusterScript = doc.createElement('script');
    mapScript = doc.createElement('script');

    clusterScript.src = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js';

    mapScript.defer = true;
    mapScript.async = true;
    mapScript.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=initMap';

    doc.body.appendChild(mapScript);
    doc.body.appendChild(clusterScript);
})();


var objects = (function(){
    "use strict";

    var doc = document,
        data = [
            {
                lat: '37.829155',
                lng: '-0.789413',
                title: 'Бунгало в Сан Педро дель Пинатар Мурсия',
                image: 'http://wtgspain.com/image/2028878/400x300.jpg'
            },
            {
                lat: '57.829155',
                lng: '-14.789413',
                title: 'Сан',
                image: 'http://wtgspain.com/image/2028878/400x300.jpg'
            }
        ];

    return {
        center: function(){
            var latitude, longitude;

            var lat_max, lat_min, lng_max, lng_min;


            for(var i = 0, len = data.length; i < len; i++ ){


            }
            (lat_max + lat_min) / 2.0

            (lng_max + lng_min) / 2.0

            return {
                lat: -34,
                lng: 151
            }
        },
        init: function(){
            var center, map, icons, markerCluster, transitLayer, markers = [];

            center = new google.maps.LatLng(this.center());

            icons = {
                object: 'src/img/pin.png',
                cluster: 'src/img/cluster.png'
            };

            map = new google.maps.Map(doc.getElementById('stores__map'), {
                zoom: 18,
                center: center,
                zoomControl: false,
                mapTypeControl: true,
                scaleControl: true,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false
            });

            for (var i = 0; i < data.stores.length; i++) {
                var obj, marker, coordinates;

                obj = data.stores[i];

                coordinates = new google.maps.LatLng(parseFloat(obj.latitude), parseFloat(obj.longitude));
                marker = new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    icon: icons.object,
                    position: coordinates
                });

                markers.push(marker);
            }

            transitLayer = new google.maps.TransitLayer();
            transitLayer.setMap(map);

            markerCluster = new MarkerClusterer(map, markers, {
                styles: [{
                    url: icons.cluster,
                    height: 50,
                    width: 50,
                    anchor: [-25, 0],
                    textColor: '#618bc5',
                    textSize: 25,
                    iconAnchor: [25, 25]
                }],
                gridSize: 80
            });
        }
    }
})();