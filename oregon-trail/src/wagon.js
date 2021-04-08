class Wagon {
  constructor(data) {
    this.title = data.name
    this.wheels = data.wheels || []
  }
}
module.exports = Wagon
