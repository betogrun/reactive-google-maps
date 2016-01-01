if (Meteor.isClient) {

  Meteor.startup(function(){
    GoogleMaps.load();
  });

  Template.map.helpers({
      mapOptions: function() {
        if (GoogleMaps.loaded()) {
          return {
            center: new google.maps.LatLng(-22.0175,-47.89083),
            zoom : 8
        };
      }
    }
  });
}
