class Sphinx {
  constructor() {
    this.name = null
    this.riddles = []
  }
  collectRiddle(riddle) {
    if(this.riddles.length > 2) {
      this.riddles.shift()
    }
    this.riddles.push(riddle)
  }
}
module.exports = Sphinx
