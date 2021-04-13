class Bag {
  constructor() {
    this.empty = true
    this.count = 0
    this.candies = []
  }
  fill(candy) {
    this.count++
    this.candies.push(candy)
  }
}
module.exports = Bag
