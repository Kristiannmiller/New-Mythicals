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
    if(this.name && this.type && this.value) {
      this.isValid = true
    } else if(!this.name) {
      this.isValid = false
      return 'This part needs a name!'
    } else if(!this.type) {
      this.isValid = false
      return 'This part needs a type!'
    } else if(!this.value) {
      this.isValid = false
      return 'This part needs a value!'
    }
  }
}
module.exports = Part
