// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

function Rectangle(){
  Shape.call(this)
}

const square = new Shape()
square.move(3,4)
console.log(square);


var rect = new Rectangle();

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;



const oneToN = n => {
  return [...Array(n)].map((_,i)=>i)
}

console.log(oneToN(10));
