class Centaur {
  constructor(stats) {
    this.name = stats.name
    this.breed = stats.type
    this.cranky = false
    this.standing = true
    this.layingDown = false
    this.crankyCount = 0
  }
  shootBow() {
    this.adjustCrankyness()
    return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!'
  }
  run() {
    this.adjustCrankyness()
    return this.cranky || this.layingDown ? 'NO!' : 'Clop clop clop clop!!!'
  }
  adjustCrankyness() {
    this.crankyCount++
    if(this.crankyCount > 2) this.cranky = true
  }
  sleep() {
    if(this.standing) {
      return 'NO!'
    } else {
      this.cranky = false
      this.crankyCount = 0
      return 'ZZZZ'
    }
  }
  layDown() {
    this.standing = false
    this.layingDown = true
  }
  standUp() {
    this.standing = true
    this.layingDown = false
  }
  drinkPotion() {
    this.cranky = false
    this.crankyCount = 0
  }
}
module.exports = Centaur
