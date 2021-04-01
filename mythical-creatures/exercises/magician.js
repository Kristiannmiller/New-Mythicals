class Magician {
  constructor(data) {
    this.name = `The Great ${data.name}`
    this.assistant = data.assistant
    this.favoriteAccessory = data.clothing || 'top hat'
  }
  performIncantation(phrase) {
    return `${phrase.toUpperCase()}!`
  }
  performTrick() {
    if(this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  }
}
module.exports = Magician
