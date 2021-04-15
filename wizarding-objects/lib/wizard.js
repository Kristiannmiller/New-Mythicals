class Wizard {
  constructor(data) {
    this.name = data.name
    this.petsCount = 0
    this.pets = []
    this.wand = {}
  }
  adoptPet(pet) {
    this.petsCount++
    this.pets.push(pet)
  }
  petList() {
    let phrase = []
    for(var i=0; i<this.pets.length; i++) {
      let aOrAn = this.determineVowel(this.pets[i].type[0]) ? 'An' : 'A'
      if(i === this.pets.length - 1) {
        phrase.push(`${aOrAn} ${this.pets[i].type} named ${this.pets[i].name}.`)
      } else {
        phrase.push(`${aOrAn} ${this.pets[i].type} named ${this.pets[i].name};`)
      }
    }
    return phrase.join(" ")
  }
  determineVowel(x) {
    if(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
      return true
    }
    return false
  }
  getWand(wand) {
    this.wand = wand
  }
}
module.exports = Wizard
