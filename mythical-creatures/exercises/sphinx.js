class Sphinx {
  constructor() {
    this.name = null
    this.riddles = []
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle)
  }
}
module.exports = Sphinx
