Describe: PlacesGone()
Test #1: "it will create an empty object to store individual locations"
Code: 
let placesGone = new PlacesGone();
placesGone;
Expected Outcome: PlacesGone {}


Describe: Locations(name, landmark, season)
Test #2: "it will create a new instance of the location object."
Code:
let location = new Locations("pdx", "rose garden", "fall")
location;
ExpectedOutput: Locations {name: "pdx", landmark: "rose garden", season: "fall"}

Describe: PlacesGone.prototype.addLocations
Test #3: "It will add an instance of the location object to an instance of the placesgone object. 
Code: placesGone.addLocations(locations);
Expected Outcome: placesGone {locations}

