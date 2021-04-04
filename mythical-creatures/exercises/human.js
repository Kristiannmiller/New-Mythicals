class Human {
  constructor(name) {
    this.name = name
    this.encounterCounter = 0
  }
  noticesOgre() {
    return this.encounterCounter % 3 === 0 ? true : false
  }
}
module.exports = Human
