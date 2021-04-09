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
    skater.money -= this.cost
    this.occupants.push(skater)
    return this.isPrivate ? `Welcome to ${this.name}, the cost will be $${this.cost}.00.` : `Welcome to the free ${this.name} Skatepark!`
  }
}
module.exports = SkatePark
