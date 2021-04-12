
var Being = require('../src/being');
var Part = require('../src/part');

class Ship {
  constructor(data) {
    this.name = data.name
    this.type = data.type
    this.maxCrew = data.maxCrew
    this.odometer = data.odometer || 0
    this.fuelCapacity = data.fuelCapacity || 10
    this.fuel = 0
    this.captain = data.captain
    this.crew = []
    this.cargo = []
  }
  addCrew(members) {
    for(let i=0; i<members.length; i++) {
      if(this.crew.length < this.maxCrew && members[i] instanceof Being) {
        this.crew.push(members[i])
      }
    }
  }
  loadCargo(cargo) {
    if(cargo instanceof Part)
    this.cargo.push(cargo)
  }
}
module.exports = Ship
