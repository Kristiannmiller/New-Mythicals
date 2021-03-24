class Material {
  constructor(type, price, amount, unit) {
    this.name = type
    this.price = price
    this.amount = amount
    this.units = unit
  }
  useMaterial(amount) {
    if(amount > this.amount) {
      return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    }
    this.amount -= amount
    return `You now have ${this.amount} ${this.units} of ${this.name} left.`
  }
  calculateMaterialCost() {
    return this.amount * this.price
  }
}

module.exports = Material;
