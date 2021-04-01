class Magician {
  constructor(data) {
    this.name = `The Great ${data.name}`
    this.assistant = data.assistant
    this.favoriteAccessory = data.clothing || 'top hat'
  }
}
module.exports = Magician
