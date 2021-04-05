class Pirate {
  constructor(name, job) {
    this.name = name
    this.job = job || 'scallywag'
    this.cursed = false
    this.booty = 0
  }
  robShip() {
    return 'YAARRR!'
  }
}
module.exports = Pirate
