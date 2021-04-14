class Cabinet {
  constructor() {
    this.potions = []
  }
  isEmpty() {
    return this.potions.length === 0
  }
  add(potion) {
    this.potions.push(potion)
  }
}
module.exports = Cabinet
