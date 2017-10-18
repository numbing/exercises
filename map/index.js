function initMap(){

     var options = {
        zoom:2,
        center:{lat:52.520645,lng:13.409779}
      }

      var map = new google.maps.Map(document.getElementById('mapContainer'), options);

      google.maps.event.addListener(map, 'click', function(event){

      addMarker({coords:event.latLng});
      });


var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://restcountries.eu/rest/v2/all", false); //keep it always false, read more here: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
xhttp.send();
var response = JSON.parse(xhttp.responseText);



response.forEach(function(element) {
var icon = {
    url: element.flag, // url
    scaledSize: new google.maps.Size(20, 20), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};

  addMarker({
          coords:{lat:element.latlng[0],lng:element.latlng[1]},
          content:'<h1>'+element.name+'</h1><img src="'+element.flag+'" height="100" />',
          icon: icon
        });


});

      var markers = [
        {
          coords:{lat:42.4668,lng:-70.9495},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h1>Lynn MA</h1>'
        },
        {
          coords:{lat:42.8584,lng:-70.9300},
          content:'<h1>Amesbury MA</h1>'
        },
        {
          coords:{lat:42.7762,lng:-71.0773}
        }
      ];

      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
       // addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          icon:props.icon
          //icon:props.iconImage
        });

        // Check for custom icon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
    }

