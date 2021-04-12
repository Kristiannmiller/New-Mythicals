class Part {
  constructor(data) {
    this.name = data.name
    this.type = data.type
    this.value = data.value
    this.broken = false
    this.isValid = null
    this.checkForValidity = this.checkForValidity()
  }
  checkForValidity() {
    if(this.name) {
      this.isValid = true
    } else {
      this.isValid = false
      return 'This part needs a name!'
    }
  }
}
module.exports = Part
