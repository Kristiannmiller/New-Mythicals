class Runner {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.milesRun = 0
  }
  runSomeMiles(miles) {
    this.milesRun += miles
  }
}

module.exports = Runner;
