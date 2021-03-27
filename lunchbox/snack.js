class Snack {
  constructor(type) {
    this.deliciousLevel = "extra"
    this.type = type
    this.amount = 100
    this.isInLunchBox = false
  }
  getEaten() {
    this.amount -= 10
  }
}

module.exports = Snack;
