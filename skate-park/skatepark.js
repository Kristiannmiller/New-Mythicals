class SkatePark {
  constructor(data) {
    this.name = data.name
    this.yearFounded = data.year
    this.style = data.type
    this.features = data.features
    this.isPrivate = data.isPrivate || false
    this.cost = data.price || 0
    this.occupants = []
  }
  admit(skater) {
    if(skater.money > this.cost) {
      skater.money -= this.cost
      this.occupants.push(skater)
      return this.isPrivate ? `Welcome to ${this.name}, the cost will be $${this.cost}.00.` : `Welcome to the free ${this.name} Skatepark!`
    }
    return `Sorry, you don't have enough money.`
  }
}
module.exports = SkatePark
