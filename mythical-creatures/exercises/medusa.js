var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name
    this.statues = []
  }
  gazeAtVictim(victim) {
    let newStatue = new Statue(victim.name)
    if(this.statues.length > 2) {
      this.statues.shift()
    }
    this.statues.push(newStatue)
  }
}
module.exports = Medusa
