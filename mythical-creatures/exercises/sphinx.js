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
  attemptAnswer(answer) {
    for(let i=0; i < this.riddles.length; i++) {
      if(this.riddles[i].answer === answer) {
        this.riddles.splice(i, 1)
      }
    }
  }
}
module.exports = Sphinx
