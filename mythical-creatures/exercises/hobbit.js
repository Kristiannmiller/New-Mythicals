class Hobbit {
  constructor(data) {
    this.name = data.name
    this.age = 0
    this.adult = false
    this.old = false
  }
  celebrateBirthday() {
    this.age++
    if(this.age > 32) {
      this.adult = true
    }
    if(this.age > 100) {
      this.old = true
    }
  }
}
module.exports = Hobbit
