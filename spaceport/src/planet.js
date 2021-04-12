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
}
module.exports = Planet
