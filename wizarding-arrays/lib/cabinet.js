class Cabinet {
  constructor() {
    this.potions = []
  }
  isEmpty() {
    return this.potions.length === 0
  }
  add(potions) {
    if(Array.isArray(potions)) {
      for(let i=0; i<potions.length; i++) {
        this.potions.push(potions[i])
      }
    } else {
      this.potions.push(potions)
    }
  }
  takeFirstPotion() {
    return this.potions.shift()
  }
}
module.exports = Cabinet
