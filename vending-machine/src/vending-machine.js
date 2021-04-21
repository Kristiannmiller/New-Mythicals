class VendingMachine {
  constructor(data) {
    this.id = data.id
    this.isBroken = data.isBroken
    this.snacks = []
  }
  addSnacks(snack) {
    for(var i=0; i<this.snacks.length; i++) {
      if(this.snacks[i].name === snack.name) {
        return `Sorry, that snack is already stocked! Try adding a different snack.`
      }
    }
    this.snacks.push(snack)
  }
  purchaseSnack(snackName, paidAmount) {
    for(var i=0; i<this.snacks.length; i++) {
      if(this.snacks[i].name === snackName) {
        this.snacks[i].removeItem()
      }
    }
  }
}

module.exports = VendingMachine;
