class Hobbit {
  constructor(data) {
    this.name = data.name
    this.age = 0
  }
  celebrateBirthday() {
    this.age++
  }
}
module.exports = Hobbit
