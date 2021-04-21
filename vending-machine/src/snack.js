class Snack {
  constructor(name, price) {
    this.name = name
    this.price = price
    this.itemsInStock = 0
  }
  stockItems(amount) {
    this.itemsInStock += amount
  }
}

module.exports = Snack;
