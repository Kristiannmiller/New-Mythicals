var Beer = require('./beer');

class Bartender {
  constructor(name, wage) {
    this.name = name
    this.hourlyWage = wage
    this.orders = []
  }
  takeOrder(brewer, name, type, price, volume) {
    let beer = new Beer({brewer, name, type, price, volume})
    this.orders.push(beer)
  }
}

module.exports = Bartender;
