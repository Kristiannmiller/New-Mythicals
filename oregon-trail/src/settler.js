class Settler {
  constructor(data) {
    this.name = data.name
    this.age = data.age
    this.nationality = data.nationality || 'unknown'
  }
}
module.exports = Settler
