class Part {
  constructor(type) {
    this.type = type
    this.broken = false
    this.repairsMade = 0
  }
  break() {
    this.broken = true
  }
  repair() {
    if(this.repairsMade < 1) {
      this.repairsMade++
      this.broken = false
    } else {
      return `This ${this.type} has seen better days, we\'ll need a brand new one!`
    }

  }
}

module.exports = Part;
