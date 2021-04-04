class Ogre {
  constructor(data) {
    this.name = data.name
    this.home = data.abode || 'Swamp'
    this.swings = 0
  }
  encounter(human) {
    human.encounterCounter++
    if(human.noticesOgre()) {
      this.swingAt(human)
    }
  }
  swingAt(human) {
    this.swings++
  }
}
module.exports = Ogre
