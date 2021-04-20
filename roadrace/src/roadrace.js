class Roadrace {
  constructor(data) {
    this.name = data.title
    this.location = data.city
    this.distance = 0
  }
  setDistance(distance) {
    this.distance = distance
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }
}

module.exports = Roadrace;
