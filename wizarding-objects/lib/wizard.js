class Wizard {
  constructor(data) {
    this.name = data.name
    this.petsCount = 0
    this.pets = []
  }
  adoptPet(pet) {
    this.petsCount++
    this.pets.push(pet)
  }

}
module.exports = Wizard
