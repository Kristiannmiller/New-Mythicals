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
      var error = this.checkForSnackError(this.snacks[i], paidAmount)
      if(this.snacks[i].name === snackName && !error) {
        this.snacks[i].removeItem()
        return `Success! Here is $${paidAmount-this.snacks[i].price} back!`
      }
    }
    return error
  }
  checkForSnackError(snack, pricePaid) {
    if(snack.itemsInStock > 0 && snack.price <= pricePaid) {
      return
    } else {
      return snack.itemsInStock > 0 ? `Sorry, not enough payment. Please add more money.` : `Sorry, no items in stock. Try another item.`
    }
  }
}

module.exports = VendingMachine;
