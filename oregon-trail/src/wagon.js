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
    this.settlers = data.settlers || []
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
  canTravel() {
    var checkpoints = [
      this.wheels.length > 3,
      this.axles.length > 1,
      this.oxen.length > 1,
      this.yokes.length > 0,
      this.settlers.length > 0,
      this.wheelsAreValid()
      ]
    return !checkpoints.includes(false)
  }
  wheelsAreValid() {
    for(var i=0; i<this.wheels.length; i++) {
      if(this.wheels[i].broken) {
        return false
      }
    }
    return true
  }
}
module.exports = Wagon
