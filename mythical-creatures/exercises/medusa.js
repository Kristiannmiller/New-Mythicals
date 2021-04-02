var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name
    this.statues = []
  }
  gazeAtVictim(victim) {
    let newStatue = new Statue(victim.name)
    let freedPerson
    if(this.statues.length > 2) {
      let personToFree = this.statues.shift()
      freedPerson = new Person(personToFree.name, 'relieved')
    }
    this.statues.push(newStatue)
    return freedPerson
  }
}
module.exports = Medusa
