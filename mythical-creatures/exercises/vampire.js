class Vampire {
  constructor(name, pet) {
    this.name = name
    this.pet = pet || 'bat'
    this.thirsty = true
    this.ouncesDrank = 0
  }
  drink(){
    this.thirsty = false
  }
}
module.exports = Vampire
