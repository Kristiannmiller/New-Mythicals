class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style
    this.bag = bag
    this.hasCandy = false
    this.countCandies = 0
  }
  putCandyInBag(candy) {
    this.hasCandy = true
    this.countCandies++
    this.bag.fill(candy)
  }
  eat() {
    this.countCandies--
    this.bag.candies.pop()
    this.bag.count--
  }
}
module.exports = TrickOrTreater
