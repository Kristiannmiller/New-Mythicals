class LunchBox {
  constructor(data) {
    this.owner = data.owner
    this.material = data.madeOf
    this.shape = data.shape
    this.color = data.color
    this.snacks = []
  }
}

module.exports = LunchBox;
