class Werewolf {
  constructor(name) {
    this.name = name
    this.form = 'human'
    this.hungry = false
  }
  completeTransformation() {
    this.hungry = !this.hungry
    if(this.form === 'wolf') {
      this.form = 'human'
      return 'Where are I?'
    } else {
      this.form = 'wolf'
      return 'Aaa-Woooo!'
    }
  }
  eatVictim(victim) {
    victim.alive = false
    return `Yum, ${victim.name} was delicious.`
  }
}
module.exports = Werewolf
