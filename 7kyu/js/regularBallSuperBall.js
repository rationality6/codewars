class Ball {
  constructor(ballType) {
    this.ballType = ballType || 'regular';
  }
}

console.log(new Ball().ballType);
console.log(new Ball("super").ballType);
