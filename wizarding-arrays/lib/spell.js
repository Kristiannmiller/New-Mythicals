class Spell {
  constructor(name, description) {
    this.name = name
    this.description = description
    this.executionHistory = []
  }
  execute(target) {
    let phrase = []
    if(Array.isArray(target)) {
      for(let i=0; i<target.length; i++) {
        phrase.push(`Success! You've cast a spell on the ${target[i]}.`)
        this.executionHistory.push(target[i])
      }
    } else {
      this.executionHistory.push(target)
      return `Success! You've cast a spell on the ${target}.`
    }
    return phrase.join(" ")
  }
  clearExecutionHistory() {
    this.executionHistory = []
  }
}
module.exports = Spell
