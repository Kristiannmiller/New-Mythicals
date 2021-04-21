class Snack {
  constructor(name, price) {
    this.name = name
    this.price = price
    this.itemsInStock = 0
  }
  stockItems(amount) {
    this.itemsInStock += amount
  }
  removeItem() {
    this.itemsInStock--
    return `Item taken! There are now ${this.itemsInStock} items left.`
  }
}

module.exports = Snack;
