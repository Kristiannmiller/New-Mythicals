class Spell {
  constructor(name, description) {
    this.name = name
    this.description = description
  }
  execute(target) {
    return `Success! You've cast a spell on the ${target}.`
  }
}
module.exports = Spell
