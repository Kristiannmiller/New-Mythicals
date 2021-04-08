class Settler {
  constructor(data) {
    this.name = data.name
    this.age = data.age
    this.nationality = data.nationality || 'unknown'
    this.status = 'healthy'
  }
}
module.exports = Settler
