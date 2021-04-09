class SkatePark {
  constructor(data) {
    this.name = data.name
    this.yearFounded = data.year
    this.style = data.type
    this.features = data.features
    this.isPrivate = data.isPrivate || false
  }
}
module.exports = SkatePark
