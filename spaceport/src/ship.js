class Ship {
  constructor(data) {
    this.name = data.name
    this.type = data.type
    this.maxCrew = data.maxCrew
    this.odometer = data.odometer || 0
  }
}
module.exports = Ship
