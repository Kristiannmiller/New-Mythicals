class Settler {
  constructor(data) {
    this.name = data.name
    this.age = data.age
    this.nationality = data.nationality || 'unknown'
    this.status = 'healthy'
    this.ailments = []
  }
  experienceDistress(issue) {
    this.ailments.push(issue)
    if(this.ailments.length === 1) {
      this.status = 'fair'
    }
  }
}
module.exports = Settler
