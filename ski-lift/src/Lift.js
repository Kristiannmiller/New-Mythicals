var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true
    this.limit = limit
    this.skiers = []
    this.safetyBar = 'up'
  }
  admitSkier(name, ticket) {
    if(this.skiers.length < this.limit && ticket) {
      let skierToAdd = new Skier(name, ticket)
      this.skiers.push(skierToAdd)
    } else {
      return ticket ? `Sorry, ${name}. Please wait for the next lift!` : `Sorry, ${name}. You need a lift ticket!`
    }
  }
  startLift() {
    if(this.skiers.length === this.limit) {
      this.safetyBar = 'down'
    } else {
      var diff = this.limit - this.skiers.length
      return diff > 1 ? `We still need ${diff} more skiers!` : `We still need ${diff} more skier!`
    }
  }
}

module.exports = Lift;
