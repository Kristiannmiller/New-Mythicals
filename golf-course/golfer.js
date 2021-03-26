class Golfer {
  constructor(stats) {
    this.name = stats.name
    this.handicap = stats.handicap
    this.frustration = 0
  }
  calculateAvg(par) {
    return `I usually shoot a ${par + this.handicap} on average.`
  }


}

module.exports = Golfer;
