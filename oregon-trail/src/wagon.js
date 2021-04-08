class Wagon {
  constructor(data) {
    this.title = data.name
    this.wheels = data.wheels || []
    this.axles = data.axles || []
    this.oxen = data.oxen || []
    this.yokes = data.yokes || []
    this.food = data.food
    this.ammunition = data.ammunition
    this.clothes = data.clothes
  }
  addPart(part) {
    if(part.type === 'wheel') {
      this.wheels.push(part)
    }
  }
}
module.exports = Wagon
