class Fairy {
  constructor(name) {
    this.name = name
    this.dust = 10
    this.clothes = {dresses: ['Iris']}
    this.disposition = 'Good natured'
    this.humanWards = []
  }
  receiveBelief() {
    this.dust++
  }
  believe() {
    this.dust += 10
  }
  makeDresses(flowers) {
    for(let i=0; i<flowers.length; i++) {
      this.clothes.dresses.push(flowers[i])
    }
  }
  becomeProvoked() {
    this.disposition = 'Vengeful'
  }
  replaceInfant(infant) {
    if(this.disposition === 'Vengeful') {
      this.humanWards.push(infant)
      infant.disposition = 'Malicious'
    }
    return infant
  }
}
module.exports = Fairy
