class Centaur {
  constructor(stats) {
    this.name = stats.name
    this.breed = stats.type
  }
  shootBow() {
    return 'Twang!!!'
  }
  run() {
    return 'Clop clop clop clop!!!'
  }
}
module.exports = Centaur
