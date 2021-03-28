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
    return 'Twang!!!'
  }
  run() {
    this.adjustCrankyness()
    return 'Clop clop clop clop!!!'
  }
  adjustCrankyness() {
    this.crankyCount++
    if(this.crankyCount > 2) this.cranky = true
  }
}
module.exports = Centaur
