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
      return `cannot outfit a ship without a captian`
    }
  }
}
module.exports = Shop
