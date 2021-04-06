class Sphinx {
  constructor() {
    this.name = null
    this.riddles = []
    this.heroesEaten = 0
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
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
    }
  }
}
module.exports = Sphinx
