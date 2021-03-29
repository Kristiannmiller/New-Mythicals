const Direwolf = require('./direwolf');

class Stark {
  constructor(data = {name: 'Larry', area: 'Winterfell'}) {
    this.name = data.name
    this.location = data.area || 'Winterfell'
    this.safe = false
  }
  sayHouseWords() {
    return this.safe ? 'The North Remembers' : 'Winter is Coming'
  }
  callDirewolf(name, area) {
    const direwolf = new Direwolf(name, this.location)
    direwolf.protect(this)
    return direwolf
  }
}
module.exports = Stark
