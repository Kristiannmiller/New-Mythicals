class Centaur {
  constructor(stats) {
    this.name = stats.name
    this.breed = stats.type
  }
  shootBow() {
    return 'Twang!!!'
  }
}
module.exports = Centaur
