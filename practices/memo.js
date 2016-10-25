const sum = (a, b) => a + b
Array.prototype.last = function (n = 1) { return this.slice(this.length - n) }

function fibonacci(n) {
  if (n == 1) return [1]
  if (n == 2) return [1, 1]

  const fib = fibonacci(n-1)
  return fib.concat(fib.last(2).reduce(sum))
}



var A = function () {
    this.x = function () {
         console.log('hello');
    };
};
A.x=function() {
    console.log('world');
};
A.prototype.x=function() {
    console.log('world');
};
var B = new A();
var C = new A();
B.x();

C.x();
A.x()


var A= function() {this.x='hello'};
var B = new A();
A.prototype.x='hello';
console.log(B);
