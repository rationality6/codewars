(function(proto){
  proto.add = function(n) {return this + n};
  proto.subtract = function(n) {return this - n};
  proto.multiply = function(n) {return this * n};
  proto.divide = function(n) {return this / n};
  proto.square = function() {return this * this};
})(Number.prototype)




console.log((0).add(2));
 // === 2, 'Adds to a number');

console.log((5).subtract(1));
 // === 4, 'Subtracts from a number');

console.log((3).multiply(2));
 // === 6, 'Multiplies a number');

console.log((10).divide(5));
 // === 2, 'Divides by a number');

console.log((5).square());
 // === 25, 'Squares a number');
