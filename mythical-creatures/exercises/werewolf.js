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
    if(this.form === 'wolf') {
      victim.alive = false
      this.form = 'human'
      this.hungry = false
      return `Yum, ${victim.name} was delicious.`
    }
    return `No way am I eating ${victim.name}, I'd like a burger!`
  }
}
module.exports = Werewolf
