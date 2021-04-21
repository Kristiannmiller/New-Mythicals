class VendingMachine {
  constructor(data) {
    this.id = data.id
    this.isBroken = data.isBroken
    this.snacks = []
  }
  addSnacks(snack) {
    this.snacks.push(snack)
  }
}

module.exports = VendingMachine;
