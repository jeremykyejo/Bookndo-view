function init_map() {
        var var_location = new google.maps.LatLng(60.171585, 24.921065);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          panControl:false,
          rotateControl:false,
          streetViewControl: false,
          styles: [
                {
            "featureType": "water",
              "stylers": [
                {
                  "hue": "#008BFF"
                },
                {
                  "saturation": -50
                },
                {
                 "lightness": -37
                },
                {
                  "gamma": 1
                }
              ]
          },
          
          {
            "featureType": "landscape",
              "stylers": [
                {
                  "hue": "#FF0000"
                },
                {
                  "saturation": -100
                },
                {
                 "lightness": 156
                },
                {
                  "gamma": 1
                }
              ]
          }
          ]
        };
 
        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title:"Venice"});
 
        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);
 
        var_marker.setMap(var_map);    
 
      }
 
      google.maps.event.addDomListener(window, 'load', init_map);

