class Magician {
  constructor(data) {
    this.name = `The Great ${data.name}`
    this.assistant = data.assistant
    this.favoriteAccessory = data.clothing || 'top hat'
    this.confidencePercentage = 10
  }
  performIncantation(phrase) {
    return `${phrase.toUpperCase()}!`
  }
  performTrick() {
    this.confidencePercentage += 10
    if(this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  }
}
module.exports = Magician
