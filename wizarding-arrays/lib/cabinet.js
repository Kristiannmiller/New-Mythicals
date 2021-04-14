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
  takePotionWithName(potion) {
    for(let i=0; i<this.potions.length; i++) {
      if(this.potions[i].name === potion) {
        return this.potions.splice(i, 1)[0]
      }
    }
  }
  count(potion) {
    let count = 0
    for(let i=0; i<this.potions.length; i++) {
      if(this.potions[i].name === potion) {
        count++
      }
    }
    return count
  }
}
module.exports = Cabinet
