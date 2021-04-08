class Part {
  constructor(type) {
    this.type = type
    this.broken = false
  }
  break() {
    this.broken = true
  }
}

module.exports = Part;
