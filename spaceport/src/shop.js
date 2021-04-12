var Part = require('../src/part');

class Shop {
  constructor(data) {
    this.name = data.name
    this.inventory = {}
  }
  addInventory(part) {
    if(part instanceof Part) {
      this.inventory[part.type] = part
    }
  }
  outfitShip(ship, part) {
    if(!ship.captain) {
      return `cannot outfit a ship without a captain`
    } else if(ship.captain.credits < this.inventory[part].value) {
      var diff = this.inventory[part].value - ship.captain.credits
      return `you require ${diff} more credits to make this purchase`
    }
  }
}
module.exports = Shop
