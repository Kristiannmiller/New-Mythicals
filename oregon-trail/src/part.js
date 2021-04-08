class Part {
  constructor(type) {
    this.type = type
    this.broken = false
  }
  break() {
    this.broken = true
  }
  repair() {
    this.broken = false
  }
}

module.exports = Part;
