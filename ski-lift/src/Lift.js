var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true
    this.limit = limit
    this.skiers = []
    this.safetyBar = 'up'
  }
  admitSkier(name, ticket) {
    if(this.skiers.length < this.limit) {
      let skierToAdd = new Skier(name, ticket)
      this.skiers.push(skierToAdd)
    } else {
      return `Sorry, ${name}. Please wait for the next lift!`
    }
  }
}

module.exports = Lift;
