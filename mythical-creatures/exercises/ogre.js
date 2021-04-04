class Ogre {
  constructor(data) {
    this.name = data.name
    this.home = data.abode || 'Swamp'
  }
}
module.exports = Ogre
