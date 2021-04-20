class Roadrace {
  constructor(data) {
    this.name = data.title
    this.location = data.city
    this.distance = 0
    this.participants = []
  }
  setDistance(distance) {
    this.distance = distance
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }
  registerParticipants(runner) {
    this.participants.push(runner)
  }
}

module.exports = Roadrace;
