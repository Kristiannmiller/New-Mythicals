class Craft {
  constructor(data) {
    this.name = data.type
    this.materials = data.materials
    this.completed = false
  }
  completeCraft() {
    this.completed = true
    return 'All done! It looks great!'
  }
}

module.exports = Craft;
