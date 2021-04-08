class Settler {
  constructor(data) {
    this.name = data.name
    this.age = data.age
    this.nationality = data.nationality || 'unknown'
    this.status = 'healthy'
    this.ailments = []
  }
  experienceDistress(issue) {
    if(this.status !== 'dead') {
      this.ailments.push(issue)
    }
    if(this.status === 'healthy') {
      this.status = 'fair'
    } else if(this.status === 'fair') {
      this.status = 'poor'
    } else {
      this.status = 'dead'
    }
  }
  heal() {
    this.ailments = []
    this.status = 'healthy'
  }
}
module.exports = Settler
