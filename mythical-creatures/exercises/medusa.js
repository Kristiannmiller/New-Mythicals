var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name
    this.statues = []
  }
  gazeAtVictim(victim) {
    let newStatue = new Statue(victim.name)
    this.statues.push(newStatue)
  }
}
module.exports = Medusa
