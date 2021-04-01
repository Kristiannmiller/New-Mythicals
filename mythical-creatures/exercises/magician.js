class Magician {
  constructor(data) {
    this.name = `The Great ${data.name}`
    this.assistant = data.assistant
    this.favoriteAccessory = data.clothing || 'top hat'
  }
  performIncantation(phrase) {
    return `${phrase.toUpperCase()}!`
  }
}
module.exports = Magician
