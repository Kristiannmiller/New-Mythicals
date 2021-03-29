class Stark {
  constructor(data = {name: 'Larry', area: 'Winterfell'}) {
    this.name = data.name
    this.location = data.area || 'Winterfell'
    this.safe = false
  }
  sayHouseWords() {
    return 'Winter is Coming'
  }
}
module.exports = Stark
