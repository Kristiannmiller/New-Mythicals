class Wagon {
  constructor(data) {
    this.title = data.name
    this.wheels = data.wheels || []
    this.axles = data.axles || []
    this.oxen = data.oxen || []
    this.yokes = data.yokes || []
  }
}
module.exports = Wagon
