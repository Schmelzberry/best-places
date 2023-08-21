// PlacesGone Logic

function PlacesGone() {
  this.locations = {};
  this.currentId = 0;
}

PlacesGone.prototype.addLocations = function(location) {
  location.id = this.assignId();
  this.locations[location.id] = location;

}

PlacesGone.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlacesGone.prototype.findLocations = function(id) {
  if (this.locations[id] !== undefined) {
    return this.locations[id];
  }
  return false;
}


// Locations Logic
function Locations(name, landmark, season, restaurants) {
  this.name = name;
  this.landmark = landmark;
  this.season = season;
  this.restaurants = restaurants;
  }

// Restaurants Logic

function Restaurants(name, plate) {
  this.name = name;
  this.plate = plate;
}


