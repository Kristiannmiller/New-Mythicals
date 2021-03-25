class Snowman {
  constructor(materials) {
    this.carrots = materials.carrots
    this.coal = materials.coal
    this.buttons = materials.buttons
    this.snowballs = materials.snowballs
    this.magicHat = false
  }
  canWearMagicHat() {
    this.magicHat = true
  }
}

module.exports = Snowman;
