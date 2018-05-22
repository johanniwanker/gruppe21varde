var modal = document.getElementById('modalProg');

var div = document.getElementById("event");

var span = document.getElementsByClassName("luk")[0];

div.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/*Kortet*/
//Laver global variable
var map;
//Laver funktion
function initMap() {
  //Nyt stylearray
  var vardeStyle = [{
      "featureType": "transit.station.bus",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "on"
        }]
    },{
      "elementType": "geometry",
      "stylers": [{
        "color": "#242f3e"
        }]
    },{
      "elementType": "geometry.fill",
      "stylers": [{
          "color": "#010736"
    },{
          "visibility": "on"
        }]
    },{
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#746855"
        }]
    },{
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#242f3e"
        }]
    },{
      "featureType": "administrative.land_parcel",
      "stylers": [{
        "visibility": "off"
        }]
    },{
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
        }]
    },{
      "featureType": "poi.business",
      "stylers": [{
        "visibility": "off"
        }]
    },{
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
        }]
    },{
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#14500c"
        }]
    },{
      "featureType": "poi.park",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "on"
        }]
    },{
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#6b9a76"
        }]
    },{
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#38414e"
        }]
    },{
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#212a37"
        }]
    },{
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9ca5b3"
        }]
    },{
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#746855"
        }]
    },{
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#1f2835"
        }]
    },{
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#f3d19c"
        }]
    },{
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#cd9508"
        }]
    },{
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#17263c"
        }]
    },{
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#2615bf"
        }]
    },{
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#515c6d"
        }]
    },{
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers":[{
        "color": "#17263c"
        }]
    },{
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
          "color": "#2f3948"
        },{
          "visibility": "on"
    },{
          "weight": 0.5
      }]
    }
  ];

  //Laver nyt StyledMap og link til stylearray
  var vardeStyledMap = new google.maps.StyledMapType(vardeStyle, {
    name: ""
  });

  //Sarter startpunkt for kortet
  var mapOptions = {
    center: new google.maps.LatLng(55.619487, 8.479085),
    zoom: 15,
    disableDefaultUI: true
  };

  //Henter DOM element til kortet
  var mapElement = document.getElementById("mapDiv");

  //Laver kort med DOM elementet
  map = new google.maps.Map(mapElement, mapOptions);

  //Link nyt kort-id til styled kortobjektet
  map.mapTypes.set('new_varde_style', vardeStyledMap);

  //Sætter nyt kort-id til at blive vist
  map.setMapTypeId('new_varde_style');

  //Sætter en marker på kortet
  var marker = new google.maps.Marker({
    position: {lat: 55.620111, lng: 8.479482},
    map: map,
    title: 'Toilet ved Rådhuset',
    icon: 'img/toilet.png'
  });

  //Sætter en marker på kortet
  var marker = new google.maps.Marker({
    position: {lat: 55.619471, lng: 8.479967},
    map: map,
    title: 'Toilet ved bibliotek',
    icon: 'img/toilet.png'
  });

  //Sætter en marker på kortet
  var marker = new google.maps.Marker({
    position: {lat: 55.621625, lng: 8.480162},
    map: map,
    title: 'Toilet ved bibliotek',
    icon: 'img/toilet.png'
  });
}
