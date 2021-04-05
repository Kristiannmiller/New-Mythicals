class Pirate {
  constructor(name, job) {
    this.name = name
    this.job = job || 'scallywag'
    this.cursed = false
    this.booty = 0
  }
  robShip() {
    if(this.booty >= 500) {
      this.cursed = true
      return 'ARG! I\'ve been cursed!'
    } else {
      this.booty += 100
      return 'YAARRR!'
    }
  }
}
module.exports = Pirate
