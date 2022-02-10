class Centaur {
  constructor(data) {
    this.name = data.name;
    this.breed = data.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.activityCount = 0;
  }
  shootBow() {
    if(this.cranky || this.layingDown) {
      return 'NO!'
    }
    this.activityCount++
    if(this.activityCount > 2) {
      this.cranky = true;
    }
    return 'Twang!!!';
  }
  run() {
    if(this.cranky|| this.layingDown) {
      return 'NO!'
    }
    this.activityCount++
    if(this.activityCount > 2) {
      this.cranky = true;
    }
    return 'Clop clop clop clop!!!'
  }
  sleep() {
    if(this.layingDown) this.reset();
    return this.standing ? 'NO!' : 'ZZZZ';
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if(this.layingDown) {
      return 'Not while I\'m laying down!'
    }
    this.reset();
  }
  reset() {
    this.cranky = false;
    this.activityCount = 0;
  }
}
module.exports = Centaur;
