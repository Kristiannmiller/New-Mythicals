class Skier {
  constructor(name, ticket) {
    this.name = name
    this.hasLiftTicket = ticket
    this.skillLevel = 1
    this.nextSlope = 'green circle'
  }
  takeLesson() {
    this.skillLevel++
    if(this.skillLevel > 2) {
      this.nextSlope = 'blue square'
    }
  }
}

module.exports = Skier;
