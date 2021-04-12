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
}
module.exports = Ship
