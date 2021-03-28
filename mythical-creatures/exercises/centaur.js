class Centaur {
  constructor(stats) {
    this.name = stats.name
    this.breed = stats.type
    this.cranky = false
    this.standing = true
    this.crankyCount = 0
  }
  shootBow() {
    this.adjustCrankyness()
    return this.cranky ? 'NO!' : 'Twang!!!'
  }
  run() {
    this.adjustCrankyness()
    return this.cranky ? 'NO!' : 'Clop clop clop clop!!!'
  }
  adjustCrankyness() {
    this.crankyCount++
    if(this.crankyCount > 2) this.cranky = true
  }
  sleep() {
    if(this.standing) {
      return 'NO!'
    }
  }
}
module.exports = Centaur
