class Planet {
  constructor(data) {
    this.name = data.name
    this.shop = data.shop
    this.currentShip = undefined
  }
  landShip(ship) {
    this.currentShip = ship
  }
}
module.exports = Planet
