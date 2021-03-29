class Direwolf {
  constructor(name, home, size) {
    this.name = name
    this.home = home || 'Beyond the Wall'
    this.size = size || 'Massive'
    this.starksToProtect = []
    this.huntsWhiteWalkers = true
  }
  protect(stark) {
    if(stark.location === this.home && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark)
      stark.safe = true
      this.huntsWhiteWalkers = false
    }
  }
}
module.exports = Direwolf
