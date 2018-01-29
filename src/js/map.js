
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
        data = {
            "stores":[
                {"id":"0","type":"main","latitude":"50.3994251","longitude":"30.5110194"},
                {"id":"13","type":"store","latitude":"49.553106","longitude":" 25.570317"},
                {"id":"12","type":"store","latitude":"49.543134468779385","longitude":" 25.602032435"},
                {"id":"10","type":"store","latitude":"46.44964484226243","longitude":" 30.6636856030"}
            ],
            "cities":[
                {"id":"3500","latitude":"","longitude":""},{"id":"3495","latitude":"","longitude":""}
            ]
        };

    return {
        tabsAction: function(){
            var doc = document, tab = doc.querySelector('.stores__tab'),
                tabMap = tab.querySelector('.stores__tab-item--map'),
                tabList = tab.querySelector('.stores__tab-item--list'),
                contentMap = doc.querySelector('.stores__container'),
                contentList = doc.querySelector('.stores__list');

            tabMap.addEventListener('click', function(){
                if(!this.classList.contains('active')){
                    tabMap.classList.toggle('active');
                    tabList.classList.toggle('active');
                    contentMap.classList.toggle('active');
                    contentList.classList.toggle('active');
                }
            });
            tabList.addEventListener('click', function(){
                if(!this.classList.contains('active')){
                    tabList.classList.toggle('active');
                    tabMap.classList.toggle('active');
                    contentList.classList.toggle('active');
                    contentMap.classList.toggle('active');
                }
            });
        },
        moveToStore: function(map){
            var storeItems = doc.querySelectorAll('.stores__item'),
                mainStore = doc.querySelector('.stores__main'),
                _this = this;

            mainStore.addEventListener('click', function(){
                var id = parseInt(this.dataset.storeId);

                for (var r = 0; r < storeItems.length; r++ ){
                    if(storeItems[r].classList.contains('active')){
                        storeItems[r].classList.remove('active');
                        break
                    }
                }
                mainStore.classList.add('active');

                map.setCenter(new google.maps.LatLng(parseFloat(data.stores[0].latitude), parseFloat(data.stores[0].longitude)));
                map.setZoom(18);
            });

            for (var s = storeItems.length - 1; s >= 0; s--){
                storeItems[s].addEventListener('click', function(){
                    var id = parseInt(this.dataset.storeId);

                    for(var d = 0, len = data.stores.length; d < len; d++){
                        var dataStores = data.stores[d];
                        if(parseInt(dataStores.id) === id){
                            mainStore.classList.remove('active');
                            for (var r = 0; r < storeItems.length; r++ ){
                                if(storeItems[r].classList.contains('active')){
                                    storeItems[r].classList.remove('active');
                                    break;
                                }
                            }
                            this.classList.add('active');
                            _this.scrollToMap();
                            map.setCenter(new google.maps.LatLng(parseFloat(dataStores.latitude), parseFloat(dataStores.longitude)));
                            map.setZoom(18);
                        }
                    }
                });
            }
        },
        moveToCity: function(map){
            var select = doc.querySelector('.stores__select');

            select.addEventListener('change', function(){
                var storeItems = doc.querySelectorAll('.stores__item'),
                    mainStore = doc.querySelector('.stores__main'),
                    id = parseInt(this.value);

                for(var d = 0, len = data.cities.length; d < len; d++) {
                    var dataCities = data.cities[d];

                    if (parseInt(dataCities.id) === id) {
                        mainStore.classList.remove('active');
                        for (var r = 0; r < storeItems.length; r++ ){
                            if(storeItems[r].classList.contains('active')){
                                storeItems[r].classList.remove('active');
                                break
                            }
                        }
                        map.setCenter(new google.maps.LatLng(parseFloat(dataCities.latitude), parseFloat(dataCities.longitude)));
                        map.setZoom(10);
                    }
                }
            });
        },
        showStoreInCity: function(){
            var stores = doc.querySelectorAll('.stores__item'),
                select = doc.querySelector('.stores__select'),
                text = doc.querySelector('.stores__text');

            select.addEventListener('change', function(){
                if(parseInt(this.value) === 0){
                    text.classList.remove('hide');
                }
                else{
                    text.classList.add('hide');
                }

                for (var i = stores.length - 1; i >= 0; i--){
                    if(parseInt(stores[i].dataset.cityId) == parseInt(this.value)){
                        stores[i].classList.add('show');
                    }
                    else{
                        stores[i].classList.remove('show');
                    }
                }
            });
        },
        init: function(){
            var center, map, icons, markerCluster, mainStore, transitLayer;

            var path = 'image/map/', markers = [];

            mainStore = data.stores[0];

            center = new google.maps.LatLng(mainStore.latitude, mainStore.longitude);

            icons = {
                main: path + 'main.png',
                store: path + 'store.png',
                cluster: path + 'pin.png'
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
                var store, marker, coordinates;

                store = data.stores[i];

                coordinates = new google.maps.LatLng(parseFloat(store.latitude), parseFloat(store.longitude));
                marker = new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    icon: icons[store.type],
                    position: coordinates
                });

                markers.push(marker);
            }

            transitLayer = new google.maps.TransitLayer();
            transitLayer.setMap(map);

            markerCluster = new MarkerClusterer(map, markers, {
                styles: [{
                    url: icons.cluster,
                    height: 72,
                    width: 45,
                    anchor: [-25, 0],
                    textColor: '#ffffff',
                    textSize: 25,
                    iconAnchor: [22, 72]
                }],
                gridSize: 80
            });

            this.moveToStore(map);
            this.moveToCity(map);
            this.tabsAction();
            this.showStoreInCity();
        }
    }
})();