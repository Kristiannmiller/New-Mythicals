class Wagon {
  constructor(data) {
    this.title = data.name
    this.wheels = data.wheels || []
    this.axles = []
  }
}
module.exports = Wagon
