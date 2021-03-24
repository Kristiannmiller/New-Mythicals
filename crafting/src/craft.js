class Craft {
  constructor(data) {
    this.name = data.type
    this.materials = data.materials
    this.completed = false
  }
}

module.exports = Craft;
