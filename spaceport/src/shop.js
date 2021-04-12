class Shop {
  constructor(data) {
    this.name = data.name
    this.inventory = {}
  }
  addInventory(part) {
    this.inventory[part.type] = part
  }
}
module.exports = Shop
