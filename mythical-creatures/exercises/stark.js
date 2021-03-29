class Stark {
  constructor(data = {name: 'Larry', area: 'Winterfell'}) {
    this.name = data.name
    this.location = data.area || 'Winterfell'
  }
}
module.exports = Stark
