// PlacesGone Logic

function PlacesGone() {
  this.locations = {};
}

PlacesGone.prototype.addLocations = function(location) {
  this.locations = location;
}

// Locations Logic
function Locations(name, landmark, season) {
  this.name = name;
  this.landmark = landmark;
  this.season = season;
}

