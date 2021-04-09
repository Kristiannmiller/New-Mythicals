class SkatePark {
  constructor(data) {
    this.name = data.name
    this.yearFounded = data.year
    this.style = data.type
    this.features = data.features
    this.isPrivate = data.isPrivate || false
    this.cost = data.price || 0
  }
}
module.exports = SkatePark
