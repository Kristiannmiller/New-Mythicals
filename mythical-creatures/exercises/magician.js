class Magician {
  constructor(data) {
    this.name = `The Great ${data.name}`
    this.assistant = data.assistant
  }
}
module.exports = Magician
