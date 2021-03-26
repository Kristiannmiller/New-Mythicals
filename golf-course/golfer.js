class Golfer {
  constructor(stats) {
    this.name = stats.name
    this.handicap = stats.handicap
    this.frustration = 0
  }
  calculateAvg(par) {
    return `I usually shoot a ${par + this.handicap} on average.`
  }
  playRound(course) {
    course.difficulty === 'hard' ? this.frustration += 500 : this.frustration += 100
  }


}

module.exports = Golfer;
