class Bag {
  constructor() {
    this.empty = true
    this.count = 0
    this.candies = []
  }
  fill(candy) {
    this.empty = false
    this.count++
    this.candies.push(candy)
  }
  contains(candy) {
    for(let i = 0; i < this.candies.length; i++) {
      if(this.candies[i].type === candy) {
        return true
      }
    }
    return false
  }
}
module.exports = Bag
