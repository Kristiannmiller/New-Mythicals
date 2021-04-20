class Runner {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.milesRun = 0
    this.fitness = 25
  }
  runSomeMiles(miles) {
    this.milesRun += miles
    this.fitness += miles
  }
}

module.exports = Runner;
