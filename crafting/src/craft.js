class Craft {
  constructor(data) {
    this.name = data.type
    this.materials = data.materials
    this.completed = false
  }
  calculateProjectTotal() {
    let total = 0
    for(let i = 0; i < this.materials.length; i++) {
      total += this.materials[i].calculateMaterialCost()
    }
    return total
  }
  completeCraft() {
    this.completed = true
    return 'All done! It looks great!'
  }
}

module.exports = Craft;
