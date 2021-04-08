class Gear {
  constructor(type, quantity) {
    this.originalType = type
    this.type = type
    this.quantity = quantity
  }
  checkForValidity() {
    var validTypes = ['food', 'clothes',
  'ammunition']
    for(var i = 0; i < validTypes.length; i++) {
      if(this.originalType === validTypes[i]) {
        return `Great, we\'ll need lots of ${this.type}!`
      }
    }
    this.type = null
    return `I don\`t think a ${this.originalType} will help us.`
  }
}

module.exports = Gear;
