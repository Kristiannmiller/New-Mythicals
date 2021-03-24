class Material {
  constructor(type, price, amount, unit) {
    this.name = type
    this.price = price
    this.amount = amount
    this.units = unit
  }
  useMaterial(amount) {
    this.amount -= amount
    return `You now have ${this.amount} ${this.units} of ${this.name} left.`
  }
}

module.exports = Material;
