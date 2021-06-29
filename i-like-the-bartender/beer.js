class Beer {
  constructor(data) {
    this.brewer = data.brewer
    this.name = data.name
    this.type = data.type
    this.price = data.price
    this.volume = data.volume
    this.isFlat = false
  }
}

module.exports = Beer;
