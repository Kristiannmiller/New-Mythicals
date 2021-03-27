class LunchBox {
  constructor(data) {
    this.owner = data.owner
    this.material = data.madeOf
    this.shape = data.shape
    this.color = data.color
    this.snacks = []
  }
  acquireSnack(snack) {
    this.snacks.push(snack)
    snack.isInLunchBox = true
  }
  findHealthySnacks() {
    let healthySnacks = []
    for(let i = 0; i < this.snacks.length; i++) {
      if(this.snacks[i].checkForHealthy()) {
        healthySnacks.push(this.snacks[i].type)
      }
    }
    return healthySnacks
  }
}

module.exports = LunchBox;
