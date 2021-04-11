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
}

module.exports = Lift;
