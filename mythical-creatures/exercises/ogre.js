class Ogre {
  constructor(data) {
    this.name = data.name
    this.home = data.abode || 'Swamp'
  }
  encounter(human) {
    human.encounterCounter++

  }
}
module.exports = Ogre
