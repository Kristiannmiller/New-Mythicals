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
    if(this.status !== 'dead') {
      this.ailments = []
      this.status = 'healthy'
    } else {
      return `Sorry, we can\'t heal a corpse. Will needs a proper burial!`
    }
  }
}
module.exports = Settler
