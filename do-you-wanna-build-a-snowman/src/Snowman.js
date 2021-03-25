class Snowman {
  constructor(materials) {
    this.carrots = materials.carrots
    this.coal = materials.coal
    this.buttons = materials.buttons
    this.snowballs = materials.snowballs
    this.magicHat = false
  }
  canWearMagicHat() {
    if(this.coal > 1) {
      this.magicHat = true
    }
  }
}

module.exports = Snowman;
