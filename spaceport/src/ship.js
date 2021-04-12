
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
    this.parts = data.parts || {}
    this.readyToFly = false
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
  updatePart(part) {
    if(!this.parts[part.type]) {
      this.parts[part.type] = part
    } else {
      var diff = this.parts[part.type].value - part.value
      this.parts[part.type] = part
      return diff
    }
  }
  checkReadiness() {
    if(!this.captain) {
      this.readyToFly = false
      return 'Cannot fly without a captain'
    } else if(this.fuel < 1) {
      this.readyToFly = false
      return 'Cannot fly without fuel'
    } else if(Object.keys(this.parts).length === 0) {
      this.readyToFly = false
      return 'Cannot fly without parts'
    } else {
      this.readyToFly = true
      return 'Good to go!'
    }
  }
}
module.exports = Ship
