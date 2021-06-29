var Beer = require('./beer');

class Bartender {
  constructor(name, wage) {
    this.name = name
    this.hourlyWage = wage
    this.orders = []
  }
  takeOrder(brewer, name, type, price, volume) {
    let beer = new Beer({brewer, name, type, price, volume})
    if(this.orders.length < 5) this.orders.push(beer)
  }
  serveOrder() {
    if(this.orders.length > 4) {
      this.orders = []
      return 'Here Are your drinks!'
    }
    return 'Cannot serve until my tray is full!'
  }
}

module.exports = Bartender;
