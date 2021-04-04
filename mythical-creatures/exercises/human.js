class Human {
  constructor(name) {
    this.name = name
    this.encounterCounter = 0
    this.knockedOut = false
  }
  noticesOgre() {
    if(this.encounterCounter > 0) {
      return this.encounterCounter % 3 === 0 ? true : false
    } else {
      return false
    }
  }
}
module.exports = Human
