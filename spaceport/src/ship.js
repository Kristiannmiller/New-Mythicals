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
  }
  addCrew(members) {
    for(let i=0; i<members.length; i++) {
      if(this.crew.length < this.maxCrew) {
        this.crew.push(members[i])
      }
    }
  }
}
module.exports = Ship
