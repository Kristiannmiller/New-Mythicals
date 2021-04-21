class VendingMachine {
  constructor(data) {
    this.id = data.id
    this.isBroken = data.isBroken
    this.snacks = []
  }
}

module.exports = VendingMachine;
