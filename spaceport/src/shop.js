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
}
module.exports = Shop
