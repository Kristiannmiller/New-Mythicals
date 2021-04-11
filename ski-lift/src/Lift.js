var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true
    this.limit = limit
    this.skiers = []
    this.safetyBar = 'up'
  }
  admitSkier(name, ticket) {
    let skierToAdd = new Skier(name, ticket)
    this.skiers.push(skierToAdd)
  }
}

module.exports = Lift;
