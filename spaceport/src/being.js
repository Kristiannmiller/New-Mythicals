class Being {
  constructor(name, species) {
    this.name = name
    this.isAlive = true
    this.species = species
    this.credits = 0
  }
  addCredits(amount) {
    this.credits += amount
  }
  updateCredits(amount) {
    this.credits += amount
  }
}

module.exports = Being;
