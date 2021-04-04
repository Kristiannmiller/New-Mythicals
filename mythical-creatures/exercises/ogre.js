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
      this.swings % 2 === 0 ? human.knockedOut = true : human.knockedOut = false
    }
  }
  swingAt(human) {
    this.swings++
  }
}
module.exports = Ogre
