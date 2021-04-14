class Robe {
  constructor() {
    this.pockets = [[],[],[],[],[],[],[],[],[],[]]
  }
  addToPocket(object) {
    for(let i=0; i<this.pockets.length; i++) {
      if(this.pockets[i].length === 0) {
        this.pockets[i].push(object)
        return
      }
    }
  }
}
module.exports = Robe
