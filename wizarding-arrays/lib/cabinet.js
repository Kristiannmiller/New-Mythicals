class Cabinet {
  constructor() {
    this.potions = []
  }
  isEmpty() {
    return this.potions.length === 0
  }
}
module.exports = Cabinet
