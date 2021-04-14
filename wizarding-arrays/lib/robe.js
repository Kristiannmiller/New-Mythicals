class Robe {
  constructor() {
    this.pockets = [[],[],[],[],[],[],[],[],[],[]]
  }
  addToPocket(item) {
    for(let i=0; i<this.pockets.length; i++) {
      if(this.pockets[i].length === 0) {
        this.pockets[i].push(item)
        return
      }
    }
  }
  retrieve(item) {
    for(let i=0; i<this.pockets.length; i++) {
      if(this.pockets[i].includes(item)) {
        this.pockets[i] = []
        return item
      }
    }
  }
}
module.exports = Robe
