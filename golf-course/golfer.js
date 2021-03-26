class Golfer {
  constructor(stats) {
    this.name = stats.name
    this.handicap = stats.handicap
    this.frustration = 0
    this.confidence = 0
  }
  calculateAvg(par) {
    return `I usually shoot a ${par + this.handicap} on average.`
  }
  playRound(course) {
    course.difficulty === 'hard' ? this.frustration += 500 : this.frustration += 100
  }
  hitTheRange() {
    this.confidence += 10
  }
  marvel(course) {
    return `I love the ${course.features[0]} and ${course.features[1]} on this course!`
  }
}

module.exports = Golfer;
