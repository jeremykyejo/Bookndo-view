!function(e){e.fn.storeLocator=function(t){var a=e.extend({mapDiv:"map",listDiv:"loc-list",formContainerDiv:"form-container",formID:"user-location",inputID:"address",zoomLevel:12,pinColor:"fe7569",pinTextColor:"000000",lengthUnit:"m",storeLimit:26,distanceAlert:60,dataType:"xml",dataLocation:"locations.xml",listColor1:"ffffff",listColor2:"eeeeee",originMarker:!1,originpinColor:"blue",bounceMarker:!0,slideMap:!0,modalWindow:!1,overlayDiv:"overlay",modalWindowDiv:"modal-window",modalContentDiv:"modal-content",modalCloseIconDiv:"close-icon",defaultLoc:!1,defaultLat:"",defaultLng:"",autoGeocode:!1,maxDistance:!1,maxDistanceID:"maxdistance",fullMapStart:!1,noForm:!1,loading:!1,loadingDiv:"loading-map",featuredLocations:!1,infowindowTemplatePath:"templates/infowindow-description.html",listTemplatePath:"templates/location-list-description.html",KMLinfowindowTemplatePath:"templates/kml-infowindow-description.html",KMLlistTemplatePath:"templates/kml-location-list-description.html",callbackBeforeSend:null,callbackComplete:null,callbackSuccess:null,callbackModalOpen:null,callbackModalClose:null,jsonpCallback:null,geocodeErrorAlert:"Geocode was not successful for the following reason: ",addressErrorAlert:"Unable to find address",autoGeocodeErrorAlert:"Automatic location detection failed. Please fill in your address or zip code.",distanceErrorAlert:"Unfortunately, our closest location is more than ",mileLang:"mile",milesLang:"miles",kilometerLang:"kilometer",kilometersLang:"kilometers"},t);return this.each(function(){function t(){"kml"===a.dataType?(e.get(a.KMLinfowindowTemplatePath,function(e){var t=e;l=Handlebars.compile(t)}),e.get(a.KMLlistTemplatePath,function(e){var t=e;n=Handlebars.compile(t),o()})):(e.get(a.infowindowTemplatePath,function(e){var t=e;l=Handlebars.compile(t)}),e.get(a.listTemplatePath,function(e){var t=e;n=Handlebars.compile(t),o()}))}function o(){function t(){w=[],L=[],C=[],M=[],e(document).off("click."+y,"#"+a.listDiv+" li")}function o(){if(a.defaultLoc===!0){var e=new s,t=new google.maps.LatLng(a.defaultLat,a.defaultLng);e.geocode(t,function(e){if(null!==e){var t=e.address;f(a.defaultLat,a.defaultLng,t)}else alert(a.addressErrorAlert)})}a.fullMapStart===!0&&f(),a.autoGeocode===!0&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(c,m)}function r(){geocoder=new google.maps.Geocoder,this.geocode=function(e,t){geocoder.geocode({address:e},function(e,o){if(o===google.maps.GeocoderStatus.OK){var i={};i.latitude=e[0].geometry.location.lat(),i.longitude=e[0].geometry.location.lng(),t(i)}else alert(a.geocodeErrorAlert+o),t(null)})}}function s(){geocoder=new google.maps.Geocoder,this.geocode=function(e,t){geocoder.geocode({latLng:e},function(e,o){if(o===google.maps.GeocoderStatus.OK){if(e[0]){var i={};i.address=e[0].formatted_address,t(i)}}else alert(a.geocodeErrorAlert+o),t(null)})}}function d(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}function c(e){var t=new s,o=new google.maps.LatLng(e.coords.latitude,e.coords.longitude);t.geocode(o,function(t){if(null!==t){var o=t.address;f(e.coords.latitude,e.coords.longitude,o)}else alert(a.addressErrorAlert)})}function m(e){alert(a.autoGeocodeErrorAlert)}function u(t){var i=e("#"+a.inputID).val();if(""===i)o();else{var n=new r,l=i;n.geocode(l,function(e){null!==e?(g=e.latitude,v=e.longitude,f(g,v,i,t)):alert(a.addressErrorAlert)})}}function f(o,r,s,c){e(function(){google.maps.visualRefresh=!0;var m;m="kml"===a.dataType?"xml":a.dataType,e.ajax({type:"GET",url:a.dataLocation+("jsonp"===a.dataType?(a.dataLocation.match(/\?/)?"&":"?")+"callback=?":""),dataType:m,jsonpCallback:"jsonp"===a.dataType?a.jsonpCallback:null,beforeSend:function(){a.callbackBeforeSend&&a.callbackBeforeSend.call(this),a.loading===!0&&e("#"+a.formContainerDiv).append('<div id="'+a.loadingDiv+'"></div>')},complete:function(t,o,i){a.callbackComplete&&a.callbackComplete.call(this,t,o,i),a.loading===!0&&e("#"+a.loadingDiv).remove()},success:function(m,u,f){function p(e){e.sort(function(e,t){return e.distance<t.distance?-1:e.distance>t.distance?1:0})}a.callbackSuccess&&a.callbackSuccess.call(this,m,u,f);var g=0,v;a.fullMapStart===!0&&e("#"+a.mapDiv).hasClass("mapOpen")===!1?v=!0:t(),e("#"+a.mapDiv).addClass("mapOpen"),"json"===a.dataType||"jsonp"===a.dataType?e.each(m,function(){var e,t,i={};for(e in this)t=this[e],"web"===e&&t&&(t=t.replace("http://","")),i[e]=t;if(i.distance||(i.distance=b.CalcDistance(o,r,i.lat,i.lng,b.EarthRadius)),a.maxDistance===!0&&v!==!0&&c){if(!(i.distance<c))return;w[g]=i}else w[g]=i;g++}):"kml"===a.dataType?e(m).find("Placemark").each(function(){var t={name:e(this).find("name").text(),lat:e(this).find("coordinates").text().split(",")[1],lng:e(this).find("coordinates").text().split(",")[0],description:e(this).find("description").text()};if(t.distance=b.CalcDistance(o,r,t.lat,t.lng,b.EarthRadius),a.maxDistance===!0&&v!==!0&&c){if(!(t.distance<c))return;w[g]=t}else w[g]=t;g++}):e(m).find("marker").each(function(){var t={name:e(this).attr("name"),lat:e(this).attr("lat"),lng:e(this).attr("lng"),address:e(this).attr("address"),address2:e(this).attr("address2"),city:e(this).attr("city"),state:e(this).attr("state"),postal:e(this).attr("postal"),country:e(this).attr("country"),phone:e(this).attr("phone"),email:e(this).attr("email"),web:e(this).attr("web"),hours1:e(this).attr("hours1"),hours2:e(this).attr("hours2"),hours3:e(this).attr("hours3"),category:e(this).attr("category"),featured:e(this).attr("featured")};if(t.web&&(t.web=t.web.replace("http://","")),t.distance=b.CalcDistance(o,r,t.lat,t.lng,b.EarthRadius),a.maxDistance===!0&&v!==!0&&c){if(!(t.distance<c))return;w[g]=t}else w[g]=t;g++}),p(w),a.featuredLocations===!0&&(L=e.grep(w,function(e,t){return"true"===e.featured}),C=e.grep(w,function(e,t){return"true"!==e.featured}),w=[],w=L.concat(C));var h="km"===a.lengthUnit?a.kilometersLang:a.milesLang;if(a.maxDistance===!0&&v!==!0&&c){if(void 0===w[0]||w[0].distance>c)return void alert(a.distanceErrorAlert+c+" "+h)}else-1!==a.distanceAlert&&w[0].distance>a.distanceAlert&&alert(a.distanceErrorAlert+a.distanceAlert+" "+h);e(function(){function t(e){for(g in w[e])h=w[e][g],"distance"===g&&(h=d(h,2)),k[g]=h}function c(o){t(o.get("id"));var i;i=k.distance<=1?"km"===a.lengthUnit?a.kilometerLang:a.mileLang:"km"===a.lengthUnit?a.kilometersLang:a.milesLang;var n=o.get("id");if(-1===a.storeLimit||a.storeLimit>26)var l=n+1;else var l=String.fromCharCode("A".charCodeAt(0)+n);var r={location:[e.extend(k,{markerid:n,marker:l,length:i,origin:s})]};return r}function m(){a.callbackModalOpen&&a.callbackModalOpen.call(this),e("#"+a.overlayDiv).hide()}function u(t){var o=c(t),i=n(o);e("#"+a.listDiv+" ul").append(i)}function f(e,t,o,i){var n=new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld="+i+"|"+a.pinColor+"|"+a.pinTextColor,new google.maps.Size(21,34),new google.maps.Point(0,0),new google.maps.Point(10,34));if(-1===a.storeLimit||a.storeLimit>26)var l=new google.maps.Marker({position:e,map:b,draggable:!1});else var l=new google.maps.Marker({position:e,map:b,icon:n,draggable:!1});return l}function p(t,o){var i=c(t),n=l(i);"left"===o?(T.setContent(n),T.open(t.get("map"),t)):google.maps.event.addListener(t,"click",function(){T.setContent(n),T.open(t.get("map"),t),e("#"+a.listDiv+" li").removeClass("list-focus"),markerId=t.get("id"),e("#"+a.listDiv+" li[data-markerid="+markerId+"]").addClass("list-focus");var o=e("#"+a.listDiv),i=e("#"+a.listDiv+" li[data-markerid="+markerId+"]");e("#"+a.listDiv).animate({scrollTop:i.offset().top-o.offset().top+o.scrollTop()})})}var g,h,k={};if(a.slideMap===!0&&i.slideDown(),a.modalWindow===!0&&(a.callbackModalOpen&&a.callbackModalOpen.call(this),e("#"+a.overlayDiv).fadeIn(),e(document).on("click."+y,"#"+a.modalCloseIconDiv+", #"+a.overlayDiv,function(){m()}),e(document).on("click."+y,"#"+a.modalWindowDiv,function(e){e.stopPropagation()}),e(document).on("keyup."+y,function(e){27===e.keyCode&&m()})),a.fullMapStart===!0&&v===!0||0===a.zoomLevel)var L={mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,panControl:!1,rotateControl:!1,streetViewControl:!1,styles:[{featureType:"water",stylers:[{hue:"#008BFF"},{saturation:-50},{lightness:-37},{gamma:1}]},{featureType:"landscape",stylers:[{hue:"#FF0000"},{saturation:-100},{lightness:156},{gamma:1}]}]},C=new google.maps.LatLngBounds;else var L={zoom:a.zoomLevel,center:new google.maps.LatLng(o,r),mapTypeId:google.maps.MapTypeId.ROADMAP};var b=new google.maps.Map(document.getElementById(a.mapDiv),L);i.data("map",b);var T=new google.maps.InfoWindow;if(D=-1===a.storeLimit||w.length-1<a.storeLimit-1?w.length-1:a.storeLimit-1,a.originMarker===!0&&a.fullMapStart===!1)var A=new google.maps.LatLng(o,r),x=new google.maps.Marker({position:A,map:b,icon:"http://maps.google.com/mapfiles/ms/icons/"+a.originpinColor+"-dot.png",draggable:!1});for(var I=0;D>=I;I++){var S=String.fromCharCode("A".charCodeAt(0)+I),E=new google.maps.LatLng(w[I].lat,w[I].lng);x=f(E,w[I].name,w[I].address,S),x.set("id",I),M[I]=x,(a.fullMapStart===!0&&v===!0||0===a.zoomLevel)&&C.extend(E),p(x)}(a.fullMapStart===!0&&v===!0||0===a.zoomLevel)&&b.fitBounds(C),e("#"+a.listDiv+" ul").empty(),e(M).each(function(e,t){var a=String.fromCharCode("A".charCodeAt(0)+e),o=M[e];u(o)}),e(document).on("click."+y,"#"+a.listDiv+" li",function(){var t=e(this).data("markerid"),o=M[t];e("#"+a.listDiv+" li").removeClass("list-focus"),e("#"+a.listDiv+" li[data-markerid="+t+"]").addClass("list-focus"),b.panTo(o.getPosition());var i="left";a.bounceMarker===!0?(o.setAnimation(google.maps.Animation.BOUNCE),setTimeout(function(){o.setAnimation(null),p(o,i)},700)):p(o,i)}),e("#"+a.listDiv+" ul li:even").css("background","#"+a.listColor1),e("#"+a.listDiv+" ul li:odd").css("background","#"+a.listColor2)})}})})}var p,g,v,h,k,D,w=[],L=[],C=[],M=[],y="storeLocator";a.modalWindow===!0&&(i.wrap('<div id="'+a.overlayDiv+'"><div id="'+a.modalWindowDiv+'"><div id="'+a.modalContentDiv+'">'),e("#"+a.modalWindowDiv).prepend('<div id="'+a.modalCloseIconDiv+'"></div>'),e("#"+a.overlayDiv).hide()),a.slideMap===!0&&i.hide();var b={};b.EarthRadius="km"===a.lengthUnit?6367:3956,b.ToRadian=function(e){return e*(Math.PI/180)},b.DiffRadian=function(e,t){return b.ToRadian(t)-b.ToRadian(e)},b.CalcDistance=function(e,t,a,o,i){return 2*i*Math.asin(Math.min(1,Math.sqrt(Math.pow(Math.sin(b.DiffRadian(e,a)/2),2)+Math.cos(b.ToRadian(e))*Math.cos(b.ToRadian(a))*Math.pow(Math.sin(b.DiffRadian(t,o)/2),2))))},o(),e(function(){function t(t){if(t.preventDefault(),a.maxDistance===!0){var o=e("#"+a.maxDistanceID).val();u(o)}else u()}a.noForm===!0?(e(document).on("click."+y,"#"+a.formContainerDiv+" #submit",function(e){t(e)}),e(document).on("keyup."+y,function(o){13===o.keyCode&&e("#"+a.inputID).is(":focus")&&t(o)})):e(document).on("submit."+y,"#"+a.formID,function(e){t(e)})})}var i=e(this),n,l;t()})}}(jQuery);