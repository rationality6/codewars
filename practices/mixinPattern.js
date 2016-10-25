const Circle = () => {};

Circle.prototype = {
  area() {
    return Math.PI * this.radius * this.radius;
  },
  grow() {
    this.radius++;
  },
  shrink() {
    this.radius--;
  }
};

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

var RoundButton = function(radius,label){
  this.radius = radius;
  this.label = label;
}

extend(RoundButton.prototype, circleFns);
extend(RoundButton.prototype, buttonFns);
console.log();
