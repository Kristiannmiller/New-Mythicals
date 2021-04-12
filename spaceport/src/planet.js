class Planet {
  constructor(data) {
    this.name = data.name
    this.shop = data.shop
    this.currentShip = undefined
    this.coordinates = data.coordinates
  }
  landShip(ship) {
    this.currentShip = ship
  }
  calculateDistance(otherPlanet) {
    var xDiff = Math.pow(otherPlanet.coordinates.x - this.coordinates.x, 2)
    var yDiff = Math.pow(otherPlanet.coordinates.y - this.coordinates.y, 2)
    var zDiff = Math.pow(otherPlanet.coordinates.z - this.coordinates.z, 2)
    return Math.sqrt(xDiff + yDiff + zDiff)
  }
  refuel(ship) {
    ship.fuel = ship.fuelCapacity
  }
  giveClearance(otherPlanet) {
    if(this.currentShip.fuel < 1) {
      return "Clearance denied: Cannot fly without fuel"
    } else {
      this.currentShip.fuel = 0
      otherPlanet.landShip(this.currentShip)
      this.currentShip = undefined
      return `Clearance granted: Enjoy your trip to ${otherPlanet.name}`
    }
  }
}
module.exports = Planet
