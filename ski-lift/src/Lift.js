var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true
    this.limit = limit
    this.skiers = []
  }
}

module.exports = Lift;
