class Bag {
  constructor() {
    this.empty = true
    this.count = 0
    this.candies = []
  }
  fill(candy) {
    this.candies.push(candy)
  }
}
module.exports = Bag
