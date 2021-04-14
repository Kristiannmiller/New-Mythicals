class Spell {
  constructor(name, description) {
    this.name = name
    this.description = description
  }
  execute(target) {
    let phrase = []
    if(Array.isArray(target)) {
      for(let i=0; i<target.length; i++) {
        phrase.push(`Success! You've cast a spell on the ${target[i]}.`)
      }
    } else {
      return `Success! You've cast a spell on the ${target}.`
    }
    return phrase.join(" ")
  }
}
module.exports = Spell
