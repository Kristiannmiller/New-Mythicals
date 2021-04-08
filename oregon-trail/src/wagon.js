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
    this.settlers = []
  }
  addPart(part) {
    if(part.type === 'wheel') {
      this.wheels.push(part)
    } else if(part.type === 'axle') {
      this.axles.push(part)
    } else if(part.type === 'ox') {
      this.oxen.push(part)
    } else if(part.type === 'yoke') {
      this.yokes.push(part)
    }
  }
}
module.exports = Wagon
