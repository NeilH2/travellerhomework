const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(){
  let startLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  })
    return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let endLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  })
    return endLocations

};


Traveller.prototype.getJourneysByTransport = function (transport) {
  let journeys = this.journeys.filter((currentJourney) => {
    return currentJourney.transport == transport;
  })
  return journeys
  
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let journeys = this.journeys.filter((currentJourney) => {
    return currentJourney.distance > minDistance
  },0)
  return journeys
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let journeys = this.journeys.reduce((totalDistance , currentJourney) => {
    return totalDistance += currentJourney.distance
  },0)

  return journeys

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};




module.exports = Traveller;
